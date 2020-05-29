
const fs = require('fs');

const getNotes = () => "Your notes...";

const addNotes = function(title, body){
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
        console.log("New note added!");
    } else{
        console.log("Note title already taken!");
    }
 
};

const saveNotes = function(notes){
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
};

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
};


// const removeNotes = function(title, body){
//     const notes = loadNotes();
//     const checkEqual = notes.filter(function(note){
//         return note.title === title;
//     });

//     if(checkEqual.length === 1){
//         notes.pop({
//             title: title,
//             body: body
//         });
//         saveNotes(notes);
//         console.log('Deleting mentioned note!');
//     } else{
//         console.log('No such note available to be deleted!')
//     }


// };

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
    // removeNotes: removeNotes
};