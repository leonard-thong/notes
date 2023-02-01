import NewNote from './NewNote'
import Note from './Note'

const Notes = ({
	notes,
	addNoteHandle,
	deleteNoteHandle,
}) => {
    return(
        <div className="notes">
            {
                notes.map((note) => (
                    <Note 
                        id={note.id}
                        text={note.text}
                        deleteNoteHandle={deleteNoteHandle}
                    />
                ))
            }
            <NewNote addNoteHandle={addNoteHandle} />
        </div>
    )
};

export default Notes;