import IUsers from './IUsers';
import { userTypeAdd } from './types';

interface IProps {
	addUser: userTypeAdd;
	nextId: number;
	users: Array<IUsers>;
	setUsers: Function;
}

interface IUsersProps {
	addProps: IProps;
}

export default IUsersProps;
