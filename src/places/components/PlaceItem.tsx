import React from 'react'
import { Place, Location } from '../placesInterfaces'
import Card from '../../shared/components/UIElements/Card'

import styles from './PlaceItem.module.scss'

interface Props extends Place {
  creatorId: string | number | undefined
  coordinates: Location | undefined
}

const PlaceItem: React.FC<Props> = ({
  imageUrl, title, address, description, 
}) => (
  <li className={styles.placeItem}>
    <Card classNameProp={styles.content}>
      <div className={styles.image}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <h3>{address}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.actions}>
        <button>VIEW ON MAP</button>
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </Card>
  </li>
)

export default PlaceItem
