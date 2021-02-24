import { getNextId, getUpdated } from './utils';
import IUsers from '../models/IUsers';

const usersData: Array<IUsers> = [
    { id: 1, name: 'Jane', username: 'Doe' },
    { id: 2, name: 'John', username: 'Smith' },
    { id: 3, name: 'Nomen', username: 'Nescio' }
];
const updatedUser: IUsers = { id: 2, name: 'Johnny', username: 'Smitt' };
const afterUpdate: Array<IUsers> = [
    { id: 1, name: 'Jane', username: 'Doe' },
    { id: 2, name: 'Johnny', username: 'Smitt' },
    { id: 3, name: 'Nomen', username: 'Nescio' }
];

test('getNextId', () => {
    const id: number = getNextId(usersData);
    expect(id).toStrictEqual(4);
    const id1: number = getNextId([]);
    expect(id1).toStrictEqual(1);
});

test('getUpdated', () => {
    const updated: Array<IUsers> = getUpdated(usersData, 2, updatedUser);
    expect(updated).toContainEqual(updatedUser);
    expect(updated).toStrictEqual(afterUpdate);
    expect(updated).toHaveLength(3);
});
