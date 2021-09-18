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

// parse application/json
app.use(bodyParser.json())

console.log("Starting up server...");

// Test read to db
//util.readDocument(db, "games", "test", (z) => { console.log(z) });
//util.writeDocument(db, "games", "test2", { field2: "field2 value" }, (z) => { console.log(z) });

/*
  (data) => {
    if (data) {
      res.send(data);
    } else {
      res.send({ status: false });
    }
  }*/

// getTags endpoint
app.post('/getTags', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  util.readCollection(db, 'tags', docs => {
    let tags = docs.map(doc => doc.data().tagValue);
    res.send(tags);
  });
});

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
    game.tags.forEach(tag => util.writeDocument(db, "tags", tag, {tagValue: tag}, (_) => _));
    res.send(game);
  });
});


app.listen(port, function () { }); //starts the server