import React, { useState, useContext } from 'react'
import axios from '../../shared/axios'
import Card from '../../shared/components/UIElements/Card'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

import { useForm } from '../../shared/hooks/form-hook' 
import { AuthContext } from '../../shared/context/auth-context'
import styles from './Auth.module.scss'

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const { login } = useContext(AuthContext)

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  }, false)

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: true,
        },
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false,

        },
      }, false)
    }

    setIsLoginMode(state => !state)
  }

  const authSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let res
    setIsLoading(true)
    try {
      if (isLoginMode) {
        res = await axios.post('/api/users/login', {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        })
      } else {
        res = await axios.post('/api/users/signup', {
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        })
      }
      
      setIsLoading(false)
      if (res.status > 201) {
        setError(res.data.message)
        return
      } 
      login()
    } catch (err) {
      setIsLoading(false)
      setError(err.message || 'Something went wrong')
    }
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Card classNameProp={styles.authentication}>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && <LoadingSpinner />}
      <h2>Login required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input 
            element="input"
            id="name"
            type="text"
            label="Your name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP' }
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
    </Card>

  )
}

export default AuthForm
