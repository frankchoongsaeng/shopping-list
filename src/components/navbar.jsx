import useContextGetter from '../hooks/useContext';
import { Link } from 'react-router-dom';

function Navbar() {
	const context = useContextGetter();

	const logout = () => {
		context.dispatch({
			type: 'LOGOUT',
		});
	};

	return (
		<nav>
			{context.state.isUserLoggedIn ? (
				<>
					<Link to='/shopping-list'>My List</Link>
					<br />
					<span onClick={logout}>Logout</span>
				</>
			) : (
				<>
					<Link to='/login'>Login</Link>
					<br />
					<Link to='/register'>Register</Link>
					<br />
				</>
			)}
		</nav>
	);
}

export default Navbar;
