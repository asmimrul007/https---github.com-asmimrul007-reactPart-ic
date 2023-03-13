import { useState, createContext} from "react";

export const CreateNoteCtx = createContext();

const NoteProvider = ({ children }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

 


  const notesCreateHandler = (event) => {
    event.preventDefault();
    if (noteTitle) {
      const newNote = {
        id: Date.now(),
        title: noteTitle,
        isComplete: false,
      };

      setNotes([...notes,newNote]);
      setNoteTitle("");
    } else {
      alert("Please Enter a Valid title");
    }
  };

  const updateHandler = (event) => {
    
    
    event.preventDefault();
    setNotes(
      notes.map((item) => {
        if (item.id === editableNote.id) {
          item.title = noteTitle;
        }

        return item;
      })
    );
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  
  const notesRemoveHandler = (noteId) => {
    const newNotes = notes.filter((item) => item.id !== noteId);
    setNotes(newNotes);
  };

  const editHandler = (noteId) => {
    const toBeEditedNote = notes.find((item) => item.id === noteId);
    setEditMode(true);
    setEditableNote(toBeEditedNote);
    setNoteTitle(toBeEditedNote.title);
  };

  const noteCtx = {
    noteTitle,
    setNoteTitle,
    notes,
    setNotes,
    editableNote,
    setEditableNote,
    editMode,
    setEditMode,
    notesCreateHandler,
    notesRemoveHandler,
    updateHandler,
    editHandler

  };

  

  

  return (
    <CreateNoteCtx.Provider value={noteCtx}>{children}</CreateNoteCtx.Provider>
  );
};

export default NoteProvider;
