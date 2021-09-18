/*
  Collection: Collection of Key/Value pairs 
  Document: Key - How you will access this data later. Usually username
  Data: Value - JSON object of data you want to store
*/
function writeDocument(db, collection, document, data, cb) {
  try {
    db.collection(collection).doc(document).set(data).then((writeResult) =>
      cb(data));
  } catch (err) {
    cb({ error: "Write Error" });
  }
}

/*
  Collection: Collection of Key/Value pairs
  Document: Key - How you plan to access this data
  cb: callback function since reading data is asynchronous
*/
function readDocument(db, collection, document, cb) {
  db.collection(collection).doc(document).get().then((doc) =>
    cb(doc.data())
  ).catch(err => {
    cb({ error: "Read Document Error" })
  });
}

function readCollection(db, collection, cb) {
  db.collection(collection).get().then((col) =>
    cb(col.docs)
  ).catch(err => {
    cb({ error: "Read Collection Error" })
  });
}

module.exports = {
  writeDocument,
  readDocument,
  readCollection
};