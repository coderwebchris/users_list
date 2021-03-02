import { getNextId, getUpdated, editRow, addUser, updateUser, deleteUser } from './utils';
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
    const currUser: IUsers = { id: 2, name: 'John', username: 'Smith' };
    const added: Array<IUsers> = [
        { id: 1, name: 'Jane', username: 'Doe' },
        { id: 2, name: 'John', username: 'Smith' },
        { id: 3, name: 'Nomen', username: 'Nescio' },
        { id: 4, name: 'Max', username: 'Mustermann' }];
    // Mock 'setUsers'    
    const mockSetUsers = jest.fn();
    jest.mock('react', () => ({
        useState: (usersData: Array<IUsers>) => [usersData, mockSetUsers]
    }));
    const mockSetCurrentUser = jest.fn();
    jest.mock('react', () => ({
        useState: (user: IUsers) => [{ id: 0, name: '', username: '' }, mockSetCurrentUser]
    }));
    const mockSetEditing = jest.fn();
    jest.mock('react', () => ({
        useState: (edit: boolean) => [false, mockSetEditing]
    }));

    test('addUser', () => {
        addUser(newUser, 4, usersData, mockSetUsers);
        expect(mockSetUsers).toHaveBeenCalledWith(added);
        // No mutation
        expect(usersData).toStrictEqual([
            { id: 1, name: 'Jane', username: 'Doe' },
            { id: 2, name: 'John', username: 'Smith' },
            { id: 3, name: 'Nomen', username: 'Nescio' }]);
    });
    test('editRow', () => {
        const setStates = { setCurrentUser: mockSetCurrentUser, setEditing: mockSetEditing };
        editRow(currUser, setStates);
        expect(mockSetCurrentUser).toHaveBeenCalledWith(currUser);
        expect(mockSetEditing).toHaveBeenCalledWith(true);
    });
    test('updateUser', () => {
        updateUser(2, updatedUser, usersData, mockSetUsers, getUpdated);
        expect(mockSetUsers).toHaveBeenCalledWith(afterUpdate);
    });
    test('deleteUser', () => {
        const setStates = { setUsers: mockSetUsers, setEditing: mockSetEditing };
        const afterDelete1: Array<IUsers> = [
            { id: 2, name: 'John', username: 'Smith' },
            { id: 3, name: 'Nomen', username: 'Nescio' }
        ];
        const afterDelete2: Array<IUsers> = [
            { id: 1, name: 'Jane', username: 'Doe' },
            { id: 3, name: 'Nomen', username: 'Nescio' }
        ];
        deleteUser(1, usersData, setStates);
        expect(mockSetEditing).toHaveBeenCalledWith(false);
        expect(mockSetUsers).toHaveBeenCalledWith(afterDelete1);
        deleteUser(2, usersData, setStates);
        expect(mockSetEditing).toHaveBeenCalledWith(false);
        expect(mockSetUsers).toHaveBeenCalledWith(afterDelete2);
    });
});
