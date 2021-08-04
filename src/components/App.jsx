import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {
	const [notes, setNotes] = useState([]);

	const addNote = (note) => {
		setNotes((prevValue) => {
			return [...prevValue, note];
		});
	};

	const deleteNote = (note) => {
		setNotes((prevNotes) => {
			return prevNotes.filter((item, index) => {
				return index !== note;
			});
		});
	};
	return (
		<div>
			<Header />
			<CreateArea addItem={addNote} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					deleteNote={deleteNote}
					content={note.content}
				/>
			))}

			<Footer />
		</div>
	);
};

export default App;
