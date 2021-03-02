import React from 'react';
import IUsers from '../models/IUsers';
import { userType } from '../models/types';

interface ISetStates {
	setEditing: Function;
	setUsers: Function;
  setCurrentUser: Function;
}
interface IProps {
  users: Array<IUsers>;
  editRow: userType;
  deleteUser: (id: number, users: Array<IUsers>, setStates: ISetStates) => void;
  setStates: ISetStates;
}

const UserTable = (props: IProps) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user, props.setStates);
                  }}
                  className="button muted-button"
                >
                  Edit
              </button>
                <button
                  onClick={() => props.deleteUser(user.id, props.users, props.setStates)}
                  className="button muted-button"
                >
                  Delete
              </button>
              </td>
            </tr>
          ))
        ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
      </tbody>
    </table>
);

export default UserTable;
