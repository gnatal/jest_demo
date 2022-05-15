import axios from 'axios';

const users = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
}

const createUser = async (user) => { 
    return await axios.post('https://jsonplaceholder.typicode.com/users', user);
}

const deleteUser = async (id) => {
    return await axios.delete('https://jsonplaceholder.typicode.com/users', {id});
}

const updateUser = async (id, user) => {
    return await axios.put('https://jsonplaceholder.typicode.com/users/' + id, {user});
}

export {users, createUser, deleteUser, updateUser};