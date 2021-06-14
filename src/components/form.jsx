import '../styles/form.css';

function Form() {
	return (
		<div>
			<form action=''>
				<input
					type='text'
					name='title'
					id='title'
					placeholder='Title'
				/>
				<textarea
					type='text'
					name='desc'
					id='desc'
					placeholder='Description'
				/>
				<button class='btn' type='submit'>
					Add Item
				</button>
			</form>
		</div>
	);
}

export default Form;
