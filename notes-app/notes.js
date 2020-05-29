//jshint esversion:6
const fs = require('fs');
const chalk = require("chalk");

const getNotes = () => "Your notes...";

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) =>   note.title === title);
     
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else{
        console.log(chalk.yellow.inverse("Note title already taken!"));
    }
 
};

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
};


const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
   
     if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.red.inverse('Note Deleted!'));
    } else{
        console.log(chalk.yellow.inverse("No such note found!"));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse("Your Notes!"));
    notes.forEach((note)=>{
        console.log(note.title);
    });
};

const readNotes = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title);

    if(foundNote){
        console.log(chalk.green.inverse(foundNote.title));
        console.log(foundNote.body);
    } else{
        console.log(chalk.red.inverse("Note not found!"));
    }
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};