import React, { useState, Fragment } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import IUsers from './models/IUsers';
import { getNextId, getUpdated, addUser } from './functions/utils';
import { userType, updateUserType } from './models/types';
import 'normalize.css';
import './App.css';

function App() {
	// Initial list of users
	const usersData: Array<IUsers> = [
		{ id: 1, name: 'Jane', username: 'Doe' },
		{ id: 2, name: 'John', username: 'Smith' },
		{ id: 3, name: 'Nomen', username: 'Nescio' }
	];
	const initialFormState: IUsers = { id: 0, name: '', username: '' };

	// Setting state
	const [users, setUsers] = useState(usersData); // add users to list
	const [currentUser, setCurrentUser] = useState(initialFormState);
	const [editing, setEditing] = useState(false);

	const nextId: number = getNextId(users);

	// CRUD operations
	const updateUser: updateUserType = (id: number, updatedUser: IUsers): void => {
		setEditing(false);
		const updated: Array<IUsers> = getUpdated(users, id, updatedUser);
		setUsers(updated);
	};
	const deleteUser = (id: number): void => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const editRow: userType = (user: IUsers): void => {
		setEditing(true);
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<div className="table-wrapper">
				<h1>List of users</h1>
				<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				<div className="add">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2>Add user</h2>
								<AddUserForm addProps={{ addUser, nextId, users, setUsers }} />
							</Fragment>
						)}
				</div>
			</div>
		</div>
	);
}

export default App;
