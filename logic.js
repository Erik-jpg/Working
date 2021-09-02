// const makeHEl = (elType) => (text, { color }) =>
//   `<{${elType} style="color: ${color}">${text}</${elType}>;`

// const app = () => {
//   const rootEl = document.getElementById('root');
//   const h1 = makeHEl('h1');
//   const p = makeHEl('p');
//   const h4 = makeHEl('h4');
//   rootEl.innerHTMl += h1('Hello World', {color: 'red'});

//   rootEl.innerHTML += h1('HelloWorldH1', { color: 'red'});
// }

// app();

//object.keys() is a method that we can use to take each key and place them into their locations
// then take the values and insert them into the corresponding locations
//by using Object.keys, .map, .join(';')

// write out a .reduce, function reduce(sourceArray, reducer, initialAcc);
//reduce([1,2,3], (acc, val) => acc + val, 0);

// const array = [1,2,3];

// function reduce(sourceArray, reducer, initialAcc){
//   initialAcc + sourceArray
// }

// reduce([1,2,3], (acc, val) => acc + val, 0);

// function reduce(sourceArray, reducer, initialAcc) {
//   let accumulator = initialAcc;
//   for (let i = 0; i < sourceArray.length; i++) {
//     const el = sourceArray[i];
//     if(i ===0 && initalAcc === undefined){
//     accumulator = reducer(accumulator, el);
    
//   }
//   return accumulator;
// }

//watch javascript the weird part, closures

// const inquirer = require('inquirer');
// const mysql = require('mysql');
// const db = 

// const inquirerQuestions = (fillInQuestions) => 
// Object.keys(fillInQuestions).reduce(acc, key) =>{ `${acc}${key}: ${fillInQuestions[key]};`,
// ''};

// const app = (inquirer) => async function ({inquirer.prompt({
//   type : 'userQuestion',
//   name:`${[key]}`,
//   message: `${fillInQuestions}`
// })
// inquirerQuestions.add(fillInQuestions);



// function countDown(n) {
//   console.log(n);
//   let  n = 0;
//   return -1;
//   if (n > 0) {
//     countDown(n);
//   }
// }
// countDown(10) 
// function countUp(y){
//   console.log(y);
//   let oneMoreNumber = y +1;
//   if(oneMoreNumber < 11) {
//     countUp(oneMoreNumber);
//   }
// }countUp(0);

// const countUp = (n) => {
//   if(n >= 11) return;
//   console.log(n);
//   return n >= 11;
// }
// countUp(0);

// const factoral = function(n) {

// }

// function notMultiply(x, y) {
//   if(y > 0)
//   return (x + notMultiply(x, y-1));
// }
// console.log(notMultiply(5, 3));

// a=(b, c) =>Math.round(b/(1/c))
// return a;

// const a = 5;
// const b = 5;
// console.log("c".repeat(a).repeat(b).length)

// const notMultiply = (num1, num2) => {
//   if(num1 > 100)
//   return "Gone too far!";
//   num1 + num2 

// }

//Online found solution
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']
//[1,2,3,4,5,6,7]

// const linearSearch = (list, item) => {
//   for (const [i, element] of list.entries()) {
//     if (element === item) {
//       return i
//     }
//   }
// }; 
// console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'g'));

//solution for class exercise 
// const linearSearch = (arr, match) => {
//   if (!arr.length) return -1;
//   const lastItem = arr.pop();
//   return lastItem === match ? arr.length : linearSearch(arr, match);
// };

// console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'g'));

//increase by one challenge


// const {MongoClient} = require('mongodb');

// async function main(){

// }

// const uri = "mongodb+srv://Person-shared-with:share_with_someone42@cluster0.6o6fe.mongodb.net/put_a_bird_on_it?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'PutABirdOnIt';
// const iAmGoingToPutABirdOnIt(connection) => connection.insertMany({name: 'Charles'} , {name: 'Samantha'});

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('ArtWithBirdsOnIt');
//   const results = await insertBirds(collection);
// console.log('we inserted ', results)
//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// console.log('Inserted documents =>', insertResult);