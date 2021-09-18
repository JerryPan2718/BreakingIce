var port = process.env.PORT || 4000; //sets local server port to 4000. 
var express = require('express'); // Express web server framework

const admin = require('firebase-admin');
let serviceAccount = require('./credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

var app = express();
var bodyParser = require('body-parser');
const { v4: uuidv4, stringify } = require('uuid');
var util = require('./util');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log("Starting up server...");

// addGame endpoint
app.post('/addGame', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let game = req.body.game;
  let UUID = uuidv4();
  game.UUID = UUID;
  util.writeDocument(db, "games", UUID, game, (writeResult) => {
    if (writeResult.err) {
      res.send(writeResult);
    }

    // Add tags to global tag list
    game.tags.forEach(tag => util.writeDocument(db, "tags", tag, { tagValue: tag }, (_) => _));

    // Add game to user's profile
    util.addToDocumentField(db, admin, "users", game.creatorName, "ownedGames", UUID);

    res.send(game);
  });
});


// getTags endpoint
app.post('/getTags', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  util.readCollection(db, 'tags', docs => {
    let tags = docs.map(doc => doc.data().tagValue);
    res.send(tags);
  });
});

// getUserProfile endpoint
app.post('/getUserProfile', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  let username = req.body.username;
  util.readDocument(db, 'users', username, userProfile => {
    res.send(userProfile);
  });
});

// likeGame endpoint
app.post('/likeGame', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  let username = req.body.username;
  let UUID = req.body.UUID;

  util.readDocument(db, 'users', username, userProfile => {
    // Already liked, so remove it
    if (userProfile.likedGames && userProfile.likedGames.includes(UUID)) {
      util.removeFromDocumentField(db, admin, "users", username, "likedGames", UUID);

      // Remove 1 like from the game object
      util.readDocument(db, "games", UUID, doc => {
        util.updateDocument(db, "games", UUID, { likes: doc.likes - 1 }, (_) => {
          res.send({ status: false });
        });
      });

    } else {
      util.addToDocumentField(db, admin, "users", username, "likedGames", UUID);

      // Add 1 like to the game object
      util.readDocument(db, "games", UUID, doc => {
        util.updateDocument(db, "games", UUID, { likes: doc.likes + 1 }, (_) => {
          res.send({ status: true });
        });
      });
    }
  });
});

// queryGames endpoint
app.post('/queryGames', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  let tags = req.body.tags;

  util.readCollection(db, 'games', games => {
    let filteredGames = games.filter(game => {
      let gameTags = game.data().tags;

      for (let i = 0; i < tags.length; i++) {
        if (!gameTags.includes(tags[i])) {
          return false;
        }
      }
      return true;
    });
    filteredGames = filteredGames.map(game => game.data());
    filteredGames = filteredGames.sort((x, y) => {
      return x.likes - y.likes;
    });

    res.send(filteredGames);
  });
});

app.listen(port, function () { }); //starts the server