


//Importing different files within same directory
// const add = require('./utils.js');  //'utils.js' imported 
// const sum = add(4, 5);
// console.log(sum);

const notes = require('./notes.js');
// const note = getNotes();
// console.log(note);

//Fetching 'chalk' package
const chalk = require("chalk");
// console.log(chalk.red("Caution!"));

//Fetching 'yargs' package
const yargs = require("yargs");

//Fetching 'validator' package
// const validator = require("validator");
// console.log(validator.isEmail('ashish@gmail.com'));
// console.log(validator.isURL('https://www.oyo.in'));

//argv(argument vector): It's an array that contains all of the arguments provided 
// console.log(process.argv);
// console.log(process.argv[2]);

// const command = process.argv[2];
// if (command === 'add'){
//     console.log("Adding note!");
// } else if(command === 'remove'){
//     console.log("Removing note!");
// }

//Customizing yargs version
yargs.version('1.1.0');



//add, remove, list, read

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log('Adding a new note', argv);
        //    console.log('Title:' + argv.title);
        //    console.log('Body:' + argv.body);
        notes.addNotes(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title);
    }
});

//Listing notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log("Listing available notes");
    }
});

//Reading a note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () =>{
        console.log("Reading a note");
    }
});

yargs.parse();
// console.log(yargs.argv);