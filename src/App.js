import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from "./components/Header"
import Notes from "./components/Notes"

import axios from 'axios';

const App = () => {
	const [notes, setNotes] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(`https://number-generator-76j5.onrender.com/random`);
		const parsed = response.data;
		console.log({parsed});
		const newNote = {
			id: nanoid(),
			text: parsed.number,
		};
		setNotes((oldNotes) => [...oldNotes, newNote]);
	};

	useEffect(() => {
		localStorage.setItem(
			'notes-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		fetchData();
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
