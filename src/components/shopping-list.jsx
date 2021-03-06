import useContextGetter from '../hooks/useContextGetter';
import ListItem from './list-item';

// scoped styling
import '../styles/shopping-list.css';

function ShoppingList() {
	const context = useContextGetter();
	console.log(context);

	return (
		<ul>
			{context.state.shoppingList.map(function (shoppingItem) {
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
