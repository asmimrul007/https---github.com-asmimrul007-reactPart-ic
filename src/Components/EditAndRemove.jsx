import React from "react";
import { useContext } from "react"; 
import { CreateNoteCtx } from "../context/Note";

const EditAndRemove = () => {
  const obj = useContext(CreateNoteCtx)

 

  return (
    <div>
      <ul>
        {obj.notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => obj.editHandler(note.id)}>Edit</button>
            <button onClick={() => obj.notesRemoveHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditAndRemove;
