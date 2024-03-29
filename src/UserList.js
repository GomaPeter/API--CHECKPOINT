//UserList
import React, {useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    //Stating the list of all users
    const [listofUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListOfUsers(response.data);
          }  catch (error) {
            console.error('Error fetching data;', error);
          }
        };

        fetchData();
    }, []); 

    return (
        <div className = "user-list-container">
            <h1>User List </h1>
            <ul>
                {listofUsers.map(user => (
                    <li key= {user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );

};

export default UserList;