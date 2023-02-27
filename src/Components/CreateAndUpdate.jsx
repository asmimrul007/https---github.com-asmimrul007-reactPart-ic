import React from 'react'

const CreateAndUpdate = (props) => {

  const notesCreateHandler = (event) => {
    event.preventDefault();
    if (props.noteTitle) {
      const newNote = {
        id: Date.now(),
        title: props.noteTitle,
        isComplete: false,
      };

      props.setNotes([newNote, ...props.notes]);
      props.setNoteTitle("");
    } else {
      alert("Please Enter a Valid title");
    }
  };

  const updateHandler = (event) => {
    event.preventDefault();
    props.setNotes(
      props.notes.map((item) => {
        if (item.id === props.editableNote.id) {
          item.title = props.noteTitle;
        }

        return item;
      })
    );
    props.setEditMode(false);
    props.setEditableNote(null);
    props.setNoteTitle("");
  };



  return (
    <div>
      <form
        onSubmit={(event) => {
          props.editMode ? updateHandler(event) : notesCreateHandler(event);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Please enter a valid note"
          value={props.noteTitle}
          onChange={(e) => props.setNoteTitle(e.target.value)}
        />

        <button type="submit">{props.editMode ? "Update note" : "Add Note"}</button>
      </form>
      
    </div>
  )
}

export default CreateAndUpdate
