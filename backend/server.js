var port = process.env.PORT || 4000; //sets local server port to 4000. 
var express = require('express'); // Express web server framework

const admin = require('firebase-admin');
let serviceAccount = require('./credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

var app = express();

var util = require('./util');

console.log("Starting up server...");

// Test read to db
util.readData(db, "games", "test", (z) => { console.log(z) });
util.writeData(db, "games", "test2", { field2: "field2 value" }, (z) => { console.log(z) });


app.get('/getTags', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  util.readData(db, 'tags', 'tag', (data) => {
    if (data) {
      res.send(data);
    } else {
      res.send({ status: false });
    }
  }, req, res);
});

app.listen(port, function () { }); //starts the server