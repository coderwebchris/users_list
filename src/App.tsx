import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import IUsers from './models/IUsers';
import 'normalize.css';
import './App.css';

function App() {
	// Initial list of users
	const usersData: Array<IUsers> = [
		{ id: 1, name: 'Jane', username: 'Doe' },
		{ id: 2, name: 'John', username: 'Smith' },
		{ id: 3, name: 'Nomen', username: 'Nescio' },
		{ id: 4, name: 'Max', username: 'Mustermann' },
		{ id: 5, name: 'Mario', username: 'Rossi' },
	];
	const initialFormState: IUsers = { id: 0, name: '', username: '' };

	// Setting states
	const [user, setUser] = useState(initialFormState); // set new user
	const [users, setUsers] = useState(usersData); // add user to list

	// Add new user
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('handleInputChange: ', event.target);
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	}

	// CRUD operation
	const addUser = (newUser: IUsers) => {
		newUser.id = users.length + 1;
		setUsers([...users, newUser]);
	}

	return (
		<div className="container">
			<h1>List of users</h1>
			<div className="flex-row">
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} />
				</div>
			</div>
			<div className="add">
				<h2>Add user</h2>
				<form
					onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						if (!user.name || !user.username) return;

						addUser(user);
						setUser(initialFormState); // // reinitialize form field
						console.log('initialFormState: ', initialFormState);
						console.log('on submit user: ', user);
					}}
				>
					<label>Name</label>
					<input type="text" name="name" value={user.name} onChange={handleInputChange} />
					<label>Username</label>
					<input type="text" name="username" value={user.username} onChange={handleInputChange} />
					<button>Add new user</button>
				</form>
			</div>
		</div>
	);
}

export default App;
