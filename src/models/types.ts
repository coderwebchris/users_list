import IUsers from './IUsers';

export type userType = (user: IUsers) => void;
export type userTypeAdd = (user: IUsers, id: number, users: Array<IUsers>, setUsers: Function) => void;
export type updateUserType = (id: number, updatedUser: IUsers) => void;

