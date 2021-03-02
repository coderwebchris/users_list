import { updateUserType } from './types';
import IUsers from '../models/IUsers';

interface ISetStates {
	setEditing: Function;
	setUsers: Function;
}
interface IUpdateUser {
	currentUser: IUsers;
	users: Array<IUsers>;
}
interface IEditUsersProps {
	editing:boolean;
	setStates: ISetStates;
	usersProps: IUpdateUser;
	updateUser: Function;
	getUpdated: Function;
}

export default IEditUsersProps;
