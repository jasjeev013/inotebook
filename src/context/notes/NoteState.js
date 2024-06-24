import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const host = "http://localhost:5000"

    const notesIntial = []

    
    const [notes,setNotes] = useState(notesIntial);

    //Get Notes
    const getNotes = async () => { 

        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjhlODEwZmUyYjdkNzMyNDI3NTQzIn0sImlhdCI6MTcxODg2NjkzN30.0bEvCSTvYWl2eggA_jyXYuFiG3Lh9i800AouQz-hD-c'
            }
        });

        const json = await response.json();
        console.log(json);
        setNotes(json)
    }
    
    //Add Note
    const addNote = async (title , description,tag) => { 

        const response = await fetch(`${host}/api/notes/addnote`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjhlODEwZmUyYjdkNzMyNDI3NTQzIn0sImlhdCI6MTcxODg2NjkzN30.0bEvCSTvYWl2eggA_jyXYuFiG3Lh9i800AouQz-hD-c'
            },
            body: JSON.stringify({title,description,tag})
        });
        
        const json = await response.json();
        console.log(json);
        const note = {
            "_id": "66752c455310d1c749a1f8e0s",
            "user": "66751c215310d1c749a1f8de",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
        console.log("Added Note");
    }


    //Delete Note
    const deleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deletenode/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjhlODEwZmUyYjdkNzMyNDI3NTQzIn0sImlhdCI6MTcxODg2NjkzN30.0bEvCSTvYWl2eggA_jyXYuFiG3Lh9i800AouQz-hD-c"
            }
        });

        const json = await response.json();
        console.log(json);
        const newNotes = notes.filter((note)=>{return note._id!==id});
        
        setNotes(newNotes);
    }


    //Update Note
    const editNote = async (id,title,description,tag) => {

        
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjhlODEwZmUyYjdkNzMyNDI3NTQzIn0sImlhdCI6MTcxODg2NjkzN30.0bEvCSTvYWl2eggA_jyXYuFiG3Lh9i800AouQz-hD-c"
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = await  response.json();

        let newNotes =JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            if (newNotes[index]._id===id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);

    }
    return (
        <NoteContext.Provider value={{ notes,addNote,deleteNote,editNote ,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;