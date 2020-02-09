import React from 'react'
import { Item } from '../userInterfaces'
import styles from './UserItem.module.scss'

type Props = Item 
  

const UserItem: React.FC<Props> = ({ 
  id, name, placeCount, image, 
}) => (
  <li className={styles.listItem}>
    <div className={styles.image}>
      <img src={image} alt={name} />
    </div>
    <div className={styles.info}>
      <h2>{name}</h2>
      <h3>
        {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
      </h3>
    </div>
  </li>
)

export default UserItem
