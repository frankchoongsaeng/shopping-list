import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppState, { AppContext } from './components/appstate';
import Shopper from './components/shopper';
import { useContext, useEffect } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/navbar';

// REACT HOOKS

function App() {
	const context = useContext(AppContext);
	console.log(context);

	useEffect(() => {}, []);

	return (
		<BrowserRouter>
			<AppState>
				<Navbar />

				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/shopping-list'>
						<Shopper />
					</Route>
					<Route>
						<Login />
					</Route>
				</Switch>
			</AppState>
		</BrowserRouter>
	);
}

export default App;
