import React from 'react'
import { useContext } from 'react';
import { CreateNoteCtx } from '../context/Note';


const NoteCreatingForm = () => {

  const obj = useContext(CreateNoteCtx)

  
  return (
    <div>
      <form
        onSubmit={(event) => {
          obj.editMode ? obj.updateHandler(event) : obj.notesCreateHandler(event);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Please enter a valid note"
          value={obj.noteTitle}
          onChange={(e) => obj.setNoteTitle(e.target.value)}
        />

        <button type="submit">{obj.editMode ? "Update note" : "Add Note"}</button>
      </form>
      
    </div>
  )
}

export default NoteCreatingForm;
