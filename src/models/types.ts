import IUsers from './IUsers';

export type userType = (user: IUsers, setStates: { setEditing: Function, setCurrentUser: Function }) => void;
export type userTypeAdd = (user: IUsers, id: number, users: Array<IUsers>, setUsers: Function) => void;
export type updateUserType = (id: number, updatedUser: IUsers, users: Array<IUsers>, setUsers: Function, getUpdated: Function) => void;

