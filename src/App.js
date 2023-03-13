import "./App.css";
import NoteCreatingForm from "./Components/NoteCreatingForm";
import NoteLists from "./Components/NoteLists";

function App() {
  
  return (
    <div className="App">

      <NoteCreatingForm />

      <NoteLists/>
      
    </div>
  );
}

export default App;
