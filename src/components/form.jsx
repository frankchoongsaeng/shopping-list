import useContextGetter from '../hooks/useContextGetter';
import '../styles/form.css';

function Form() {
	const context = useContextGetter();

	const handleSubmit = e => {
		e.preventDefault();

		if (!context.state.title || !context.state.description) {
			return false;
		}

		const newItem = {
			title: context.state.title,
			description: context.state.description,
			id: Date.now(),
		};

		context.dispatch({
			type: 'ADD_ITEM',
			payload: newItem,
		});

		// reset the values of the input boxes
		context.dispatch({ type: 'RESET_INPUTS' });
	};

	const setTitle = e => {
		context.dispatch({
			type: 'UPDATE_TITLE',
			payload: e.target.value,
		});
	};

	const setDescription = e => {
		context.dispatch({
			type: 'UPDATE_DESCRIPTION',
			payload: e.target.value,
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={context.state.title}
					onChange={setTitle}
					type='text'
					name='title'
					id='title'
					placeholder='Title'
				/>
				<textarea
					type='text'
					value={context.state.description}
					onChange={setDescription}
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
