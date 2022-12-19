import React from "react";
import { useState } from "react";

function Create(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
        content: ""
    })
event.preventDefault();
  }
  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Drop a text"
          rows="3"
        />
        <button className="add-button" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default Create;