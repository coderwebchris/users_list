import React from 'react';
import IUsers from '../models/IUsers';

interface IProps {
  users: Array<IUsers>;
  editRow: any;
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
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
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
