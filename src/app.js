import React, { useState } from "react";
import Header from "./components/header.jsx";
import Note from "./components/note.jsx";
import Footer from "./components/footer.jsx";
import Create from "./create.jsx";


function App() {

const [notes, setNotes] = useState([]);


   function addNote(newNote){
setNotes(prevNotes => {
   return [...prevNotes, newNote];});
   }

   function deleteNote (id) {
setNotes(prevNotes => {

   return prevNotes.filter((noteItem, index) => {
      return index !== id;
   })
})
   }
  return (
    <div>
      <Header />
      <Create onAdd={addNote}/>
      {notes.map((noteItem, index) => {
         return <Note
         key={index}
         id= {index}
          content={noteItem.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}
export default App;
