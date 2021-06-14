function ListItem({ item }) {
	return (
		<li>
			<h2 className='title'>{item.title}</h2>
			<p className='description'>{item.description}</p>
			<button className='btn'>Edit</button>
			<button className='btn remove'>Remove</button>
		</li>
	);
}

export default ListItem;
