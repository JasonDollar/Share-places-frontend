import React, { FormEvent, useCallback } from 'react'
import Input from '../../shared/components/FormElements/Input'
import {
  VALIDATOR_REQUIRE, VALIDATOR_FILE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH, VALIDATOR_MIN, VALIDATOR_MAX, VALIDATOR_EMAIL,
} from '../../shared/util/validators'

import styles from './NewPlaces.module.scss'

const NewPlaces: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const titleInputHandler = useCallback((id: string, value: any, isValid: boolean) => {

  }, [])
  const descriptionInputHandler = useCallback((id: string, value: any, isValid: boolean) => {

  }, [])
  return (
    <form className={styles.placeForm} onSubmit={handleSubmit}>
      <Input element="input" type="text" id="title" label="Title" errorText="Please enter a valid title." validators={[VALIDATOR_REQUIRE()]} onInput={titleInputHandler} />
      <Input id="description" label="Description" errorText="Please enter a valid description." validators={[VALIDATOR_MINLENGTH(5)]} onInput={descriptionInputHandler} />
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewPlaces
