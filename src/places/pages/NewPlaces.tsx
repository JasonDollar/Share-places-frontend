import React, { FormEvent, useCallback, useReducer } from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_REQUIRE, VALIDATOR_FILE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH, VALIDATOR_MIN, VALIDATOR_MAX, VALIDATOR_EMAIL,
} from '../../shared/util/validators'

import styles from './NewPlaces.module.scss'

interface InputDetail {
  value: string,
  isValid: boolean
}

interface InputKey {
  [key: string]: InputDetail
}

interface State {
  inputs: InputKey
  isValid: boolean
}

interface Action {
  type: 'INPUT_CHANGE'
  inputId: string
  value: string
  isValid: boolean
}

const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INPUT_CHANGE': 
      let formIsValid = true
      Object.keys(state.inputs).map(inputId => {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      })
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      }
    default:
      return state
  }
}

const NewPlaces: React.FC = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
  }

  const inputHandler = useCallback((id: string, value: any, isValid: boolean) => {
    dispatch({ 
      type: 'INPUT_CHANGE', inputId: id, value, isValid, 
    })
  }, [])

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
