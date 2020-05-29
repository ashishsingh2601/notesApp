//jshint esversion:6

const notes = require('./notes.js');
//Fetching 'chalk' package
const chalk = require("chalk");
//Fetching 'yargs' package
const yargs = require("yargs");
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
        notes.listNotes();
    }
});

//Reading a note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.readNotes(argv.title);
    }
});

yargs.parse();
