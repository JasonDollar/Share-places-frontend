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

interface InputChangeAction {
  type: 'INPUT_CHANGE'
  inputId: string
  value: string
  isValid: boolean
}

interface SetDataAction {
  type: 'SET_DATA'
  inputs: InputKey
  isValid: boolean
}

type Action = InputChangeAction | SetDataAction

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
    case 'SET_DATA': 
      return {
        inputs: action.inputs,
        isValid: action.isValid,
      }
    default:
      return state
  }
}

export const useForm = (initialInputs: InputKey, initialFormValidity: boolean): [State, (id: string, value: any, isValid: boolean) => void, (inputData: InputKey, formValidity: boolean) => void] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  })
  
  const inputHandler = useCallback((id: string, value: any, isValid: boolean) => {
    dispatch({ 
      type: 'INPUT_CHANGE', inputId: id, value, isValid, 
    })
  }, [])

  const setFormData = useCallback((inputData: InputKey, formValidity: boolean) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      isValid: formValidity,
    })
  }, [])

  return [formState, inputHandler, setFormData]
}