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

const inquirer = require('inquirer');
const mysql = require('mysql');
const db = 

const inquirerQuestions = (fillInQuestions) => 
Object.keys(fillInQuestions).reduce(acc, key) =>{ `${acc}${key}: ${fillInQuestions[key]};`,
''};

const app = (inquirer) => async function ({inquirer.prompt({
  type : 'userQuestion',
  name:`${[key]}`,
  message: `${fillInQuestions}`
})
inquirerQuestions.add(fillInQuestions);