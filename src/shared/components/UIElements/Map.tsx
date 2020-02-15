import React, { useEffect, useRef } from 'react'
import { Loader } from 'google-maps'
import { Location } from '../../../places/placesInterfaces'
import { GOOGLE_MAPS_PLACES_KEY } from '../../../lib/apiKeys'

import styles from './Map.module.scss'

interface Props {
  classNameProp?: string
  style?: React.CSSProperties,
  zoom: number,
  center: Location
}

const Map: React.FC<Props> = ({
  classNameProp, style, zoom, center, 
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const loader = new Loader(GOOGLE_MAPS_PLACES_KEY)
  let map

  const loadMap = async () => {
    const google = await loader.load()
    map = new google.maps.Map(mapRef.current as Element, {
      center,
      zoom,
    })

    new window.google.maps.Marker({ position: center, map })
  }
  useEffect(() => {
    loadMap()
  }, [])
 


  return (
    <div ref={mapRef} className={`${styles.map} ${classNameProp} ${style}`} />
  )
}

export default Map
