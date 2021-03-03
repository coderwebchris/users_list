import React, { useState, Fragment } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import IUsers from './models/IUsers';
import { getNextId, editRow, getUpdated, addUser, updateUser, deleteUser } from './functions/utils';
import 'normalize.css';
import './App.css';
import GitHubIcon from './svgicon';

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

	return (
		<div className="container">
			<div className="table-wrapper">
				<div className="flex-wrapper">
					<h1>List of users</h1>
					<GitHubIcon />
				</div>
				<UserTable
					users={users}
					editRow={editRow}
					deleteUser={deleteUser}
					setStates={{ setEditing, setUsers, setCurrentUser }}
				/>
				<div className="add">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setStates={{ setEditing, setUsers }}
								usersProps={{ currentUser, users }}
								updateUser={updateUser}
								getUpdated={getUpdated}
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
