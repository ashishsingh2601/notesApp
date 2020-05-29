
const fs = require('fs');
const chalk = require("chalk");

const getNotes = () => "Your notes...";

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title; 
    });

    if(duplicateNotes.length === 0){
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
    const checkEqual = notes.filter((note) => note.title === title)
   

    if(checkEqual.length === 1){
        notes.pop({
            title: title
            
        });
        saveNotes(notes);
        console.log(chalk.red.inverse('Note Deleted!'));
    } else{
        console.log(chalk.yellow.inverse('No such note available to be deleted!'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse("Your Notes!"));
    notes.forEach((note)=>{
        console.log(note.title);
    });
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
};