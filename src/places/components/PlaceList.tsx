import React from 'react'
import { Place } from '../placesInterfaces'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

import styles from './PlaceList.module.scss'

interface Props {
  places: Place[]
}

const PlaceList: React.FC<Props> = ({ places }) => {
  if (places.length === 0) {
    return (
      <div className={`${styles.placeList} center`}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          {/* change to link later */}
          <button>Share place</button> 
        </Card>
      </div>
    )
  }

  return (
    <ul className={styles.placeList}>
      {places.map(item => (
        <PlaceItem
          key={item.id} 
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          address={item.address}
          creatorId={item.creator}
          coordinates={item.location}
        />
      ))}
    </ul>
  )
}

export default PlaceList
