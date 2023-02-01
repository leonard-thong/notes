const Note = ({ id, text, deleteNoteHandle }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<button 
					onClick={() => deleteNoteHandle(id)}
					className='delete'
                >
                    Delete
                </button>
			</div>
		</div>
	);
};

 export default Note;