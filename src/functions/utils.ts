import IUsers from '../models/IUsers';
import { userTypeAdd } from '../models/types'

// get max id from the array
export const getNextId: (users: Array<IUsers>) => number = (users: Array<IUsers>): number => {
    const MaxId = Math.max(...users.map(u => u.id));
    return MaxId + 1;
};

export const getUpdated: (users: Array<IUsers>, id: number, updatedUser: IUsers) => Array<IUsers>
    = (users: Array<IUsers>, id: number, updatedUser: IUsers): Array<IUsers> => {
        return users.map(user => (user.id === id ? updatedUser : user));
    };

export const addUser: userTypeAdd = (newUser: IUsers, nextId: number, users: Array<IUsers>, setUsers: Function): void => {
    newUser.id = nextId;
    setUsers([...users, newUser]);
};
