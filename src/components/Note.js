import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

function Note() {
    const context = useContext(noteContext);
    const { notes, addNote, updateNote, deleteNote } = context;
    return (
        <div className="container my-5">

            <div className='row my-3'>
                <h2>Your notes</h2>

                {notes.map((note) => {

                    return (<NoteItem key={note._id} note={note} />)

                })}
            </div>
        </div>

    )
}

export default Note
