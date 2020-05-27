
//Importing different files within same directory
const add = require('./utils.js');  //'utils.js' imported 

const sum = add(4, 5);
console.log(sum);

//Fetching 'chalk' package
const chalk = require("chalk");
console.log(chalk.red("Caution!"));

//Fetching 'validator' package
const validator = require("validator");
console.log(validator.isEmail('ashish@gmail.com'));
console.log(validator.isURL('https://www.oyo.in'));