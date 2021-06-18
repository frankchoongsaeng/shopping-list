import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import Form from './form';
import ShoppingList from './shopping-list';
import useContextGetter from '../hooks/useContextGetter';

function Shopper() {
	const history = useHistory();
	const context = useContextGetter();

	useLayoutEffect(() => {
		if (!context.state.isUserLoggedIn) {
			history.push('/login');
		}
	}, [context.state, history]);

	return (
		<div class='shopper'>
			<Form />
			<ShoppingList />
		</div>
	);
}

export default Shopper;
