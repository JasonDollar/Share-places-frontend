import React from 'react'
import UserItem from './UserItem'
import { Item } from '../userInterfaces'


interface Props {
  items: Item[]
}

const UsersList: React.FC<Props> = ({ items }): JSX.Element => {
  if (items.length === 0) {
    return (
      <div>
        <h2>No users found</h2>
      </div>
    )
  }

  return (
    <ul>
      {items.map(item => (
        <UserItem 
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          placeCount={item.placeCount}
        />
      ))}
    </ul>
  )
}

export default UsersList
