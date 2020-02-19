import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import {
  VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH,
} from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'

import styles from './PlaceForm.module.scss'

const FAKE_PLACES = [
  {
    id: 'p1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/P1150202_Paris_IX_place_Pigalle_rwk.jpg/521px-P1150202_Paris_IX_place_Pigalle_rwk.jpg',
    title: 'Paris',
    description: 'Place Pigalle in Paris',
    address: '15 Boulevard de Clichy, 75009 Paris, Francja',
    creatorId: 'u3',
    location: {
      lat: 48.866667,
      lng: 2.333333,
    },
  },
  {
    id: 'p3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/P1150202_Paris_IX_place_Pigalle_rwk.jpg/521px-P1150202_Paris_IX_place_Pigalle_rwk.jpg',
    title: 'Paris',
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

const UpdatePlace: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { placeId } = useParams()

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: true,
    },
    description: {
      value: '',
      isValid: true,
    },
  }, true)
  const identifiedPlace = FAKE_PLACES.find(item => item.id === placeId)
    
  useEffect(() => {
    if (identifiedPlace) {

      setFormData({
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      }, true)
    }
    setLoading(false)
  }, [setFormData, identifiedPlace])

  const placeUpdateSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
  }

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find the place!</h2>
        </Card>
      </div>
    )
  }
  
  // TEMPORARY = it is only here until backend is connected 
  if (loading) {
    return <div className="center"><h2>Loading</h2></div>
  }

  return (
    <form className={styles.placeForm} onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title" 
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid title."
        initialValue={formState.inputs.title.value}
        valid={true}
      />
      <Input
        id="description" 
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        errorText="Please enter a valid description."
        initialValue={formState.inputs.description.value}
        valid={true}
      />
      <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
  )
}

export default UpdatePlace
