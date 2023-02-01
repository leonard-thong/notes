import { useState } from 'react';

const NewNote = ({ addNoteHandle }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const change = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const saveHandle = () => {
		if (noteText.trim().length > 0) {
			addNoteHandle(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='10'
				cols='12'
				placeholder='Type here...'
				value={noteText}
				onChange={change}
			></textarea>
			<div className='note-footer'>
				<button className='save' onClick={saveHandle}>
					Save
				</button>
			</div>
		</div>
	);
};

export default NewNote;