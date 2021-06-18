import { useForm } from 'react-hook-form';
import useContextGetter from '../hooks/useContextGetter';
import useLoggedIn from '../hooks/useLoggedIn';
import '../styles/form.css';

function Login() {
	// redirect the user to the
	// shopping list page if they are
	// already signed in
	useLoggedIn();

	const context = useContextGetter();

	const { register, handleSubmit } = useForm();

	const loginHandler = ({ email, password }) => {
		// create data to be sent to the api for validation
		let userdata = {
			email: email,
			password: password,
		};

		fetch(
			'https://user-manager-three.vercel.app/api/user/login',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(userdata),
			}
		)
			.then(res => res.json())
			.then(result => {
				if (result.error) {
					return alert(result.message);
				}

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

				// history.push('/shopping-list');
			})
			.catch(err => {
				alert(
					'Unable to complete request. Please try again after some time'
				);
				console.log({ err });
			});
	};

	return (
		<form onSubmit={handleSubmit(loginHandler)}>
			<div>
				<h2>Login</h2>
				<span>Login to view your shopping list</span>
			</div>
			<br />
			<div>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='password'>Password</label>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<br />
			<div>
				<button className='btn' type='submit'>
					Login
				</button>
			</div>
		</form>
	);
}

export default Login;
