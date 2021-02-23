import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm'
import IUsers from './models/IUsers';
import { addUserType } from './models/types';
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

	// Setting state
	const [users, setUsers] = useState(usersData); // add users to list

	// CRUD operation
	const addUser: addUserType  = (newUser: IUsers): void => {
		newUser.id = users.length + 1;
		setUsers([...users, newUser]);
	};

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
				<AddUserForm addProps={{addUser}} />
			</div>
		</div>
	);
}

export default App;
