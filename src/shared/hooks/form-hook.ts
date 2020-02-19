import { useCallback, useReducer } from 'react'

interface InputDetail {
  value?: string,
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

export const useForm = (initialInputs: InputKey, initialFormValidity: boolean): [State, (id: string, value: any, isValid: boolean) => void] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  })
  
  const inputHandler = useCallback((id: string, value: any, isValid: boolean) => {
    dispatch({ 
      type: 'INPUT_CHANGE', inputId: id, value, isValid, 
    })
  }, [])

  return [formState, inputHandler]
}