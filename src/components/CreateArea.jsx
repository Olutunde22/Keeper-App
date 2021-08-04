import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
	const [clicked, setClicked] = useState(false);

	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const handleInput = (event) => {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	};

	const hover = () => {
		setClicked(true);
	};

	return (
		<div>
			<form className="create-note">
				{clicked && (
					<input name="title" placeholder="Title" value={note.title} onChange={handleInput} />
				)}

				<textarea
					name="content"
					placeholder="Take a note..."
					rows={clicked ? '3' : '1'}
					value={note.content}
					onChange={handleInput}
					onClick={hover}
				/>
				<Zoom in={clicked}>
					<Fab
						onClick={(event) => {
							event.preventDefault();
							props.addItem(note);
							setNote({
								title: '',
								content: '',
							});
						}}
					>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
