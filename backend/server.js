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
const { v4: uuidv4 } = require('uuid');
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
      res.send({ status: false });
    } else {
      util.addToDocumentField(db, admin, "users", username, "likedGames", UUID);
      res.send({ status: true });
    }
  });
});



app.listen(port, function () { }); //starts the server