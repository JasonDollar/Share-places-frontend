import React, { useState, useContext } from 'react'
import { Place, Location } from '../placesInterfaces'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'

import { AuthContext } from '../../shared/context/auth-context'

import styles from './PlaceItem.module.scss'

interface Props extends Place {
  creatorId: string | number | undefined
  coordinates: Location | undefined
}

const PlaceItem: React.FC<Props> = ({
  imageUrl, title, address, description, id, coordinates = { lat: 0, lng: 0 },
}) => {
  const [showMap, setShowMap] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const { isLoggedIn } = useContext(AuthContext)

  const openMapHandler = () => setShowMap(true)

  const closeMapHandler = () => setShowMap(false)

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeletehandler = () => setShowConfirmModal(false)

  const confirmDeleteHandler = () => console.log('DELETING...')

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
          <Map zoom={16} center={coordinates} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeletehandler}
        header="Are you sure?"
        footerClass={styles.modalActions}
        footer={(
          <>
            <Button inverse onClick={cancelDeletehandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </>
        )}
      >
        <p>Do you want to proceed and delete this place? Please note that it can't be undone therafter.</p>
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
            {isLoggedIn && (
              <>
                <Button to={`/places/${id}`}>EDIT</Button>
                <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
