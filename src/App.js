import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from "./components/Header"
import Notes from "./components/Notes"

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
		localStorage.setItem(
			'notes-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const newNote = {
			id: nanoid(),
			text: text,
		};
		setNotes([...notes, newNote]);
	};

	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};

  return(
      <div className="container">
        <Header/>
        <Notes 
          notes={notes}
          addNoteHandle={addNote}
					deleteNoteHandle={deleteNote}
        />
      </div>
    )
};

export default App;
