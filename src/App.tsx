import React from 'react';
import UserTable from './tables/UserTable';
import IUsers from './models/IUsers';
import 'normalize.css';
import './App.css';

function App() {
	// List of users
	const usersData: Array<IUsers> = [
		{ id: 1, name: 'Jane', username: 'Doe' },
		{ id: 2, name: 'John', username: 'Smith' },
		{ id: 3, name: 'Nomen', username: 'Nescio' },
	];

	return (
		<div className="container">
			<h1>List of users</h1>
			<div className="flex-row">
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={usersData} />
				</div>
			</div>
		</div>
	);
}

export default App;
