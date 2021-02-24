import { updateUserType } from './types';
import IUsers from '../models/IUsers';

interface IEditUsersProps {
	editing:boolean;
	setEditing: Function;
	currentUser: IUsers;
	updateUser: updateUserType;
}

export default IEditUsersProps;
