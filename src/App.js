import "./App.css";
import { useState } from "react";
import CreateAndUpdate from "./Components/CreateAndUpdate";
import EditAndRemove from "./Components/EditAndRemove";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // const notesCreateHandler = (event) => {
  //   event.preventDefault();
  //   if (noteTitle) {
  //     const newNote = {
  //       id: Date.now(),
  //       title: noteTitle,
  //       isComplete: false,
  //     };

  //     setNotes([newNote, ...notes]);
  //     setNoteTitle("");
  //   } else {
  //     alert("Please Enter a Valid title");
  //   }
  // };

  // const notesRemoveHandler = (noteId) => {
  //   const newNotes = notes.filter((item) => item.id !== noteId);
  //   setNotes(newNotes);
  // };

  // const editHandler = (noteId) => {
  //   const toBeEditedNote = notes.find((item) => item.id === noteId);
  //   setEditMode(true);
  //   setEditableNote(toBeEditedNote);
  //   setNoteTitle(toBeEditedNote.title);
  // };

  // const updateHandler = (event) => {
  //   event.preventDefault();
  //   setNotes(
  //     notes.map((item) => {
  //       if (item.id === editableNote.id) {
  //         item.title = noteTitle;
  //       }

  //       return item;
  //     })
  //   );
  //   setEditMode(false);
  //   setEditableNote(null);
  //   setNoteTitle("");
  // };

  return (
    <div className="App">

      <CreateAndUpdate
      noteTitle ={noteTitle}
      setNoteTitle ={setNoteTitle}
      notes ={notes}
      setNotes ={setNotes}
      editableNote ={editableNote}
      setEditableNote ={setEditableNote}
      editMode ={editMode}
      setEditMode ={setEditMode}
      


      />

      <EditAndRemove
      noteTitle ={noteTitle}
      setNoteTitle ={setNoteTitle}
      notes ={notes}
      setNotes ={setNotes}
      // editableNote ={editableNote}
      setEditableNote ={setEditableNote}
      editMode ={editMode}
      setEditMode ={setEditMode}
      />
      {/* <form
        onSubmit={(event) => {
          editMode ? updateHandler(event) : notesCreateHandler(event);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Please enter a valid note"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <button type="submit">{editMode ? "Update note" : "Add Note"}</button>
      </form> */}
      {/* <ul>
        {notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>Edit</button>
            <button onClick={() => notesRemoveHandler(note.id)}>Remove</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
