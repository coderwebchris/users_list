import React, { useState } from 'react'
import IEditUsersProps from '../models/IEditUsersProps';

const EditUserForm: React.FC<IEditUsersProps> = (props: IEditUsersProps) => {
  const {currentUser, users} = props.usersProps; 
  const {setEditing, setUsers} = props.setStates; 
  // local state
  const [user, setUser] = useState(currentUser);

  const {updateUser, getUpdated} = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        updateUser(user.id, user, users, setUsers, getUpdated);
        setEditing(false);
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
};

export default EditUserForm;
