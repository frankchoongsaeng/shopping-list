import ListItem from './list-item';
import '../styles/shopping-list.css';

const listitems = [
	{
		id: 1,
		title: 'Item 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
	},
	{
		id: 2,
		title: 'Item 2',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
	},
	{
		id: 3,
		title: 'Item 3',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
	},
	{
		id: 3,
		title: 'Item 4',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
	},
	{
		id: 4,
		title: 'Item 5',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
	},
];

function ShoppingList() {
	return (
		<ul>
			{listitems.map(function (shoppingItem) {
				return (
					<ListItem
						key={shoppingItem.id}
						item={shoppingItem}
					/>
				);
			})}
		</ul>
	);
}

export default ShoppingList;
