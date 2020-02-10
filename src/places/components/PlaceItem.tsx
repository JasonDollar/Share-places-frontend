import React, { useState } from 'react'
import { Place, Location } from '../placesInterfaces'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'

import styles from './PlaceItem.module.scss'

interface Props extends Place {
  creatorId: string | number | undefined
  coordinates: Location | undefined
}

const PlaceItem: React.FC<Props> = ({
  imageUrl, title, address, description, id,
}) => {
  const [showMap, setShowMap] = useState(false)

  const openMapHandler = () => setShowMap(true)

  const closeMapHandler = () => setShowMap(false)

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass={styles.modalContent}
        footerClass={styles.modalActions}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className={styles.mapContainer}>
          <h2>THE MAP</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
