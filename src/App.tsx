import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm'
import IUsers from './models/IUsers';
import { userType, updateUserType } from './models/types';
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

	// Setting state
	const [users, setUsers] = useState(usersData); // add users to list
	const [currentUser, setCurrentUser] = useState(initialFormState);
	const [editing, setEditing] = useState(false);

	// CRUD operation
	const addUser: userType = (newUser: IUsers): void => {
		newUser.id = users.length + 1;
		setUsers([...users, newUser]);
	};
	const updateUser: updateUserType = (id: number, updatedUser: IUsers): void => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	};

	const editRow: userType = (user: IUsers): void => {
		setEditing(true);
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setCurrentUser({ ...currentUser, [name]: value });
	};
	
	return (
		<div className="container">
			<h1>List of users</h1>
			<div className="flex-row">
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} />
				</div>
			</div>
			<div className="add">
				{editing ? (<div>
					<h2>Edit user</h2>
					<form
						onSubmit={event => {
							event.preventDefault();
							updateUser(currentUser.id, currentUser);
						}}
					>
						<label>Name</label>
						<input type="text" name="name" value={currentUser.name} onChange={handleInputChange} />
						<label>Username</label>
						<input type="text" name="username" value={currentUser.username} onChange={handleInputChange} />
						<button>Update user</button>
						<button onClick={() => setEditing(false)} className="button muted-button">
							Cancel
							</button>
					</form>
				</div>
				) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addProps={{ addUser }} />
						</div>
					)}
			</div>
		</div>
	);
}

export default App;
