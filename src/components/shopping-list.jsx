import '../styles/shopping-list.css';

function ShoppingList() {
	return (
		<ul>
			<li>
				<h2 className='title'>Title</h2>
				<p className='description'>
					Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Est, mollitia.
				</p>
				<button className='btn'>Edit</button>
				<button className='btn remove'>Remove</button>
			</li>
		</ul>
	);
}

export default ShoppingList;
