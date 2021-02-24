import IUsers from '../models/IUsers';

export const getNextId: (users: Array<IUsers>) => number = (users: Array<IUsers>): number => {
    return users.length + 1;
};

export const getUpdated: (users: Array<IUsers>, id: number, updatedUser: IUsers) => Array<IUsers>
    = (users: Array<IUsers>, id: number, updatedUser: IUsers): Array<IUsers> => {
        return users.map(user => (user.id === id ? updatedUser : user));
    };
