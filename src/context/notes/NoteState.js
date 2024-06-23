import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

    const notesIntial = [
        {
            "_id": "66751c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66753c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        },
        {
            "_id": "66752c455310d1c749a1f8e0",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        }
    ]

    
    const [notes,setNotes] = useState(notesIntial);

    //Add Note
    const addNote = ( title,description,tag) => { 
        note ={
            "_id": "66752c455310d1c749a1f8e0s",
            "user": "66751c215310d1c749a1f8de",
            "title": "THe Most hilarous Talk in the world [ADDED]",
            "description": "Samay Raina and Suhani Shand Got to be married",
            "tag": "hilarous",
            "date": "2024-06-21T06:23:01.777Z",
            "__v": 0
        };
        setNotes(notes.push(note));
    }
    //Delete Note
    const deleteNote = () => {


    }
    //Update Note
    const updateNote = () => {

    }
    return (
        <NoteContext.Provider value={{ notes,addNote,deleteNote,updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;