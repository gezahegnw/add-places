import React from 'react';
import UserList from '../componenets/UserList';
const Users = () => {
    const USERS = [
        {
            id: 1,
            name: 'Gezahegn Worku',
            image: '/images/image1.jpg',
            places: 1
        },
        {
            id: 2,
            name: 'John Smith',
            image: '/images/image2.jpg',
            places: 2
        },
        {
            id: 3,
            name: 'Rose Gezahegn',
            image: '/images/image3.jpg',
            places: 3
        }
        
    ]
    return (
        <div>
            <UserList items={USERS} />
        </div>
    );
}

export default Users;