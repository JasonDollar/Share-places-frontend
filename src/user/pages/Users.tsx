import React from 'react'
import UsersList from '../components/UsersList'

const Users: React.FC = () => {
  const USERS = [
    {
      id: 1,
      image: 'https://www.w3schools.com/w3images/avatar2.png',
      name: 'user 1',
      placeCount: 12,
    }, {
      id: 2,
      image: 'https://www.w3schools.com/w3images/avatar2.png',
      name: 'user 2',
      placeCount: 12,
    }, {
      id: 3,
      image: 'https://www.w3schools.com/w3images/avatar2.png',
      name: 'user 3',
      placeCount: 12,
    }, 
  ]

  return (
    <UsersList items={USERS} />
  )
}

export default Users
