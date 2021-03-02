import IUsers from '../models/IUsers';
import { userType, userTypeAdd, updateUserType } from '../models/types'

// get max id from the array
export const getNextId: (users: Array<IUsers>) => number = (users: Array<IUsers>): number => {
    const MaxId = Math.max(...users.map(u => u.id));
    return MaxId + 1;
};

export const getUpdated: (users: Array<IUsers>, id: number, updatedUser: IUsers) => Array<IUsers>
    = (users: Array<IUsers>, id: number, updatedUser: IUsers): Array<IUsers> => {
        return users.map(user => (user.id === id ? updatedUser : user));
    };
// CRUD
export const editRow: userType = (user: IUsers, setStates: { setEditing: Function, setCurrentUser: Function }): void => {
    setStates.setEditing(true);
    setStates.setCurrentUser({ id: user.id, name: user.name, username: user.username });
};
export const addUser: userTypeAdd = (newUser: IUsers, nextId: number, users: Array<IUsers>, setUsers: Function): void => {
    newUser.id = nextId;
    setUsers([...users, newUser]);
};
export const updateUser: updateUserType = (id: number, updatedUser: IUsers, users: Array<IUsers>, setUsers: Function, getUpdated: Function): void => {
    const updated: Array<IUsers> = getUpdated(users, id, updatedUser);
    setUsers(updated);
};
export const deleteUser = (id: number, users: Array<IUsers>, setStates: { setUsers: Function, setEditing: Function }): void => {
    setStates.setEditing(false);
    setStates.setUsers(users.filter(user => user.id !== id));
};
