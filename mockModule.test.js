import Users from './users';
import axios from 'axios';

jest.mock('axios');

// I'm mocking the axios.get method
// Here I set the result of the fetch as an array of users
// this mock implementation is usefull because I can test the calls to api
// withou actually hitting the api
// this makes testing more realiable and robust

test('Should fetch users', () => {
    const users = [{name: 'Bob'}];
    const response = {data: users}; 
    axios.get.mockResolvedValue(response);
    return Users.all().then(data => { expect(data).toEqual(users) });
})