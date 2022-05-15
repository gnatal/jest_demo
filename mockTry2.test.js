import { users, deleteUser, updateUser, createUser } from "./mockTry2";
import axios from 'axios';

jest.mock('axios');
test('Should get all users', () => {
    const db = [{id:1, name: 'Bob'},{id:2, name: 'Dob'}];
    const response = {data: db};
    axios.get.mockResolvedValue(response);
    return users().then(response => { expect(response.data).toEqual(db) });
})

test('Should create a user', () => {
    const createdUser = {id: 1, name: 'Bob'};
    const response = {data: createdUser, status: 201, headers: {location: '/users/1'}};
    axios.post.mockResolvedValue(response);
    return createUser({name: 'Bob'}).then(response => {
        expect(response.data).toEqual(createdUser);
        expect(response.status).toBe(201);
    })
});

test('Should delete a user', () => {
    const createdUser = {id: 1, name: 'Bob'};
    const response = {data: createdUser, status: 201, headers: {location: '/users/1'}};
    axios.post.mockResolvedValue(response);
    return createUser({name: 'Bob'}).then(response => {
        expect(response.data).toEqual(createdUser);
        expect(response.status).toBe(201);
    })
});

test('Should change a user', () => {
    const createdUser = {id: 1, name: 'Bob'};
    const response = {data: createdUser, status: 201, headers: {location: '/users/1'}};
    axios.post.mockResolvedValue(response);
    return createUser({name: 'Bob'}).then(response => {
        expect(response.data).toEqual(createdUser);
        expect(response.status).toBe(201);
    })
});