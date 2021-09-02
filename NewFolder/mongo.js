// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'PutABirdOnIt';
// const art = (connection) => connection.insertMany({name: 'Charles'}, {name: 'Samantha'});

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('ArtWithBirdsOnIt');
//   const insertBirds = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  
//   console.log('Inserted documents =>', insertBirds);
// const filteredDocs = await collection.find({ a: 3 }).toArray();
// console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
//   const results = await insertBirds(collection);
  
//   const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);
// console.log('error is ', insertBirds);
// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log('Deleted documents =>', deleteResult);
// const indexName = await collection.createIndex({ a: 1 });
// console.log('index name =', indexName);
  
// console.log('we inserted ', results)
//   // the following code examples can be pasted here...

//   return 'done.';
// }

//  main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

 

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myProject';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

const { MongoClient } = require('mongodb');
const express = require('express')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 


// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => app.listen(3000));