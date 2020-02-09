import React, { useState } from 'react'
import PlaceList from '../components/PlaceList'

const FAKE_PLACES = [
  {
    id: 'p1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/P1150202_Paris_IX_place_Pigalle_rwk.jpg/521px-P1150202_Paris_IX_place_Pigalle_rwk.jpg',
    title: 'Paris',
    description: 'Place Pigalle in Paris',
    address: '15 Boulevard de Clichy, 75009 Paris, Francja',
    creatorId: 'u3',
    coordinates: {
      lat: 23,
      long: 34,
    },
  },
  {
    id: 'p3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/P1150202_Paris_IX_place_Pigalle_rwk.jpg/521px-P1150202_Paris_IX_place_Pigalle_rwk.jpg',
    title: 'Paris',
    description: 'Place Pigalle in Paris',
    address: '15 Boulevard de Clichy, 75009 Paris, Francja',
    creatorId: 'u2',
    coordinates: {
      lat: 23,
      long: 34,
    },
  },
]

const UserPlaces: React.FC = () => {
  const [places] = useState(FAKE_PLACES)
  return (
    <PlaceList places={places} />
  )
}

export default UserPlaces
