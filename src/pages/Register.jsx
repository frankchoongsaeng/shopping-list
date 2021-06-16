import { useForm } from 'react-hook-form';

function Register() {
	const { register, handleSubmit } = useForm();

	const handleRegister = ({ email, password, confirmPassword }) => {
		// check if the password and confirmPassword match
		if (password !== confirmPassword) {
			return alert(`passwords don't match`);
		}

		// send a request to register a
		// new user
		let newuser = {
			email: email,
			password: password,
		};

		fetch(
			`https://user-manager-three.vercel.app/api/user/register`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newuser), //always stringify objects
			}
		)
			.then(res => res.json())
			.then(result => {
				console.log(result);
			})
			.catch(err => {
				console.log('this error occurred', err);
				alert('an error occurred. Please try again later');
			});
	};

	return (
		<form onSubmit={handleSubmit(handleRegister)}>
			<div>
				<h2>Register</h2>
				<span>Complete to start adding shopping items</span>
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
				<label htmlFor='confirm-password'>
					Confirm Password
				</label>
				<br />
				<input
					type='password'
					name='confirm-password'
					id='confirm-password'
					required
					{...register('confirmPassword')}
				/>
			</div>
			<br />
			<div>
				<button type='submit' className='btn '>
					Register
				</button>
			</div>
		</form>
	);
}

export default Register;
