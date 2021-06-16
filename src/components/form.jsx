import { useState, useRef, useContext } from 'react';
import { AppContext } from './appstate';
import '../styles/form.css';

function Form() {
	const [title, setTitle] = useState('');
	const descRef = useRef();
	const context = useContext(AppContext);

	const handleSubmit = e => {
		e.preventDefault();

		if (!title || !descRef.current.value) {
			return false;
		}

		const newItem = {
			title: title,
			description: descRef.current.value,
			id: Date.now(),
		};

		context.dispatch({
			type: 'ADD_ITEM',
			payload: newItem,
		});

		// reset the values of the input boxes
		setTitle('');
		descRef.current.value = '';
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					name='title'
					id='title'
					placeholder='Title'
				/>
				<textarea
					type='text'
					ref={descRef}
					name='desc'
					id='desc'
					placeholder='Description'
				/>
				<button class='btn' type='submit'>
					Add Item
				</button>
			</form>
		</div>
	);
}

export default Form;
