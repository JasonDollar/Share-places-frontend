import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'
import { Place } from '../placesInterfaces'

const FAKE_PLACES: Place[] = [
  {
    id: 'p1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/P1150202_Paris_IX_place_Pigalle_rwk.jpg/521px-P1150202_Paris_IX_place_Pigalle_rwk.jpg',
    title: 'Paris',
    description: 'Place Pigalle in Paris',
    address: '15 Boulevard de Clichy, 75009 Paris, Francja',
    creatorId: 'u1',
    location: {
      lat: 48.866667,
      lng: 2.333333,
    },
  },
  {
    id: 'p3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/P1150202_Paris_IX_place_Pigalle_rwk.jpg/521px-P1150202_Paris_IX_place_Pigalle_rwk.jpg',
    title: 'Paris p3',
    description: 'Place Pigalle in Paris',
    address: '15 Boulevard de Clichy, 75009 Paris, Francja',
    creatorId: 'u2',
    location: {
      lat: 48.866667,
      lng: 2.333333,
    },
  },
  {
    id: 'p4',
    imageUrl: 'https://polskazachwyca.pl/wp-content/uploads/2018/02/p%C5%82ock-przysta%C5%84-fot.-Artur-Bociarski-shutterstock_721093561-696x464.jpg',
    title: 'Płock',
    description: 'Centrum?',
    address: 'Grodzka 3',
    creatorId: 'u3',
    location: {
      lat: 52.545,
      lng: 19.686,
    },
  },
]

const UserPlaces: React.FC = () => {
  const { userId } = useParams()
  const [places] = useState(() => FAKE_PLACES.filter(item => item.creatorId === userId))
  return (
    <PlaceList places={places} />
  )
}

export default UserPlaces
