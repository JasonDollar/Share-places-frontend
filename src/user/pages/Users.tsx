import React, { useState } from 'react'
import { User } from '../userInterfaces'
import UsersList from '../components/UsersList'

const FAKE_USERS = [
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

const Users: React.FC = () => {
  const [users] = useState<User[]>(FAKE_USERS)

  return (
    <UsersList items={users} />
  )
}

export default Users
