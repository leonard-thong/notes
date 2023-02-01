import { useState } from 'react';

const NewNote = ({ addNoteHandle }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const saveHandle = () => {
		addNoteHandle(noteText);
		setNoteText('');
	};

	return (
		<div className='note new' onClick={saveHandle}>
			Click to Get Random Number
		</div>
	);
};

export default NewNote;