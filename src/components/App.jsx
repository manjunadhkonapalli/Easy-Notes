import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//IMPORTANT POINTS
//1.Use states to create an arrya or object or variable

//2.to add an object use the props that are being passed from app,js to
//component and then trigger a function call from component to app.js

//3.Must add controlled compnenets --> "single source of truth" --> for input elements and state to be consistent

//4.to delete a particular elment, we must have an id, key that is being passed from
//app.js to component, and then trigger delete function back to app.js through props.

//5. After submitting the form it refreshes the browsers --> this is by default behaviour of form.
// to prevent so ---> event.preventDefault()

//6.if we want to clear the form right after submitting the form, later on adding above point,
//use setNote({title: "",content: ""}); to reset the things && must be controlled components inorder to make this thing work

//7. 5 and 6 has diff --> 5 means refeshes the whole browser && 6 means just clearing the state
//values and then clearing the input field areas through --> controlled components(value={note.title})

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
