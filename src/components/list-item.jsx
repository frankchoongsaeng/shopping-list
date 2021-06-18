import useContextGetter from '../hooks/useContextGetter';

function ListItem({ item }) {
	const context = useContextGetter();

	// remove an item from the list
	const removeHandler = () => {
		context.dispatch({ type: 'DELETE', payload: item });
	};

	// edit an item
	const editHandler = () => {
		// TODO implement the edit action
		context.dispatch({ type: 'EDIT', payload: item });
	};

	return (
		<li>
			<h2 className='title'>{item.title}</h2>
			<p className='description'>{item.description}</p>
			<button className='btn' onClick={editHandler}>
				Edit
			</button>
			<button className='btn remove' onClick={removeHandler}>
				Remove
			</button>
		</li>
	);
}

export default ListItem;
