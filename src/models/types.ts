import IUsers from './IUsers';

export type userType = (user: IUsers) => void;
export type updateUserType = (id: number, updatedUser: IUsers) => void;

