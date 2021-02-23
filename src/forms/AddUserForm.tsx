import React, { useState } from 'react'
import IUsers from '../models/IUsers';
import IUsersProps from '../models/IUsersProps';

const AddUserForm: React.FC<IUsersProps> = (props: IUsersProps) => {
	const initialFormState: IUsers = { id: 0, name: '', username: '' };
	const [user, setUser] = useState(initialFormState); // set new user

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<form
			onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault();
				if (!user.name || !user.username) return;

				props.addProps.addUser(user);
				setUser(initialFormState); // // reinitialize form field
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	);
}

export default AddUserForm;
