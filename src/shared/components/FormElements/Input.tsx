import React, { useReducer, useEffect } from 'react'
import { validate } from '../../util/validators'
import styles from './Input.module.scss'

interface Props {
  id: string
  label: string
  element?: string
  type?: string
  placeholder?: string
  initialValue?: string
  errorText?: string
  rows?: number
  validators?: {type: string, value?: any}[]
  onInput: (id: string, value: any, isValid: boolean) => void
}

interface State {
  value: string | undefined
  isTouched: boolean
  isValid: boolean
}

interface Action {
  type: 'CHANGE' | 'TOUCH'
  val?: string
  validators?: any
}

const inputReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      }
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      }
    }
    default:
      return state
  }
}

const Input: React.FC<Props> = ({
  id, label, element, type, placeholder, rows, initialValue, errorText, validators, onInput,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isTouched: false,
    isValid: true,
  })
  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid)
  }, [id, inputState.value, inputState.isValid, onInput])
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target
    dispatch({
      type: 'CHANGE',
      val: value,
      validators,
    })
  }

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    })
  }

  const inputElement = element === 'input' ? (
    <input
      id={id}
      type={type}
      placeholder={placeholder} 
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
  ) : (
    <textarea
      id={id}
      placeholder={placeholder}
      rows={rows || 3}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
  )

  return (
    <div className={`${styles.formControl} ${!inputState.isValid && inputState.isTouched
      && styles.formControlInvalid}`}
    >
      <label htmlFor={id}>{label}</label>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  )
}

export default Input
