import { getNextId, getUpdated, addUser } from './utils';
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

describe("Functions testing ", () => {
    test('getNextId', () => {
        const id: number = getNextId(usersData);
        expect(id).toStrictEqual(4);
    });

    test('getUpdated', () => {
        const updated: Array<IUsers> = getUpdated(usersData, 2, updatedUser);
        expect(updated).toContainEqual(updatedUser);
        expect(updated).toStrictEqual(afterUpdate);
        expect(updated).toHaveLength(3);
    });
});

describe("CRUD operations ", () => {
    const newUser: IUsers = { id: 0, name: 'Max', username: 'Mustermann' };
    const added: Array<IUsers> = [
        { id: 1, name: 'Jane', username: 'Doe' },
        { id: 2, name: 'John', username: 'Smith' },
        { id: 3, name: 'Nomen', username: 'Nescio' },
        { id: 4, name: 'Max', username: 'Mustermann' }];
    // Mock 'setUsers'    
    const mockSetState = jest.fn();
    jest.mock('react', () => ({
        useState: (usersData: Array<IUsers>) => [usersData, mockSetState]
    }));

    test('addUser', () => {
        addUser(newUser, 4, usersData, mockSetState);
        expect(mockSetState).toHaveBeenCalledWith(added);
        // No mutation
        expect(usersData).toStrictEqual([
            { id: 1, name: 'Jane', username: 'Doe' },
            { id: 2, name: 'John', username: 'Smith' },
            { id: 3, name: 'Nomen', username: 'Nescio' }]);
    });
});
