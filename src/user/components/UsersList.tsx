import React from 'react'
import UserItem from './UserItem'
import { User } from '../userInterfaces'
import styles from './UsersList.module.scss'


interface Props {
  items: User[]
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
    <ul className={styles.usersList}>
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
