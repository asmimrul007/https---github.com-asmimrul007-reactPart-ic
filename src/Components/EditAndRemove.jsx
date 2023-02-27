import React from "react";

const EditAndRemove = (props) => {
  const notesRemoveHandler = (noteId) => {
    const newNotes = props.notes.filter((item) => item.id !== noteId);
    props.setNotes(newNotes);
  };

  const editHandler = (noteId) => {
    const toBeEditedNote = props.notes.find((item) => item.id === noteId);
    props.setEditMode(true);
    props.setEditableNote(toBeEditedNote);
    props.setNoteTitle(toBeEditedNote.title);
  };

  return (
    <div>
      <ul>
        {props.notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>Edit</button>
            <button onClick={() => notesRemoveHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditAndRemove;
