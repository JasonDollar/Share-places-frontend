import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../userInterfaces'
import styles from './UserItem.module.scss'
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'


type Props = Item 
  

const UserItem: React.FC<Props> = ({ 
  id, name, placeCount, image, 
}) => (
  <li className={styles.userItem}>
    
    <Card classNameProp={styles.content}>

      <Link to={`/${id}/places`}>
        <div className={styles.image}>
          <Avatar image={image} alt={name} />
        </div>
        <div className={styles.info}>
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
          </h3>
        </div>
      </Link>
    </Card>
    
  </li>
)

export default UserItem
