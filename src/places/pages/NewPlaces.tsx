import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'

import styles from './PlaceForm.module.scss'

const NewPlaces: React.FC = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
    address: {
      value: '',
      isValid: false,
    },
  }, false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className={styles.placeForm} onSubmit={handleSubmit}>
      <Input element="input" type="text" id="title" label="Title" errorText="Please enter a valid title." validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} />
      <Input id="description" label="Description" errorText="Please enter a valid description." validators={[VALIDATOR_MINLENGTH(5)]} onInput={inputHandler} />
      <Input element="input" type="text" id="address" label="Address" errorText="Please enter a valid address." validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} />
      <Button type="submit" disabled={!formState.isValid}>SUBMIT</Button>
    </form>
  )
}

export default NewPlaces
