import React from 'react'

import Modal from './Modal'
import Button from '../FormElements/Button'

interface Props {
  onClear: () => void,
  error?: string
}

const ErrorModal: React.FC<Props> = ({ onClear, error }) => (
  <Modal
    onCancel={onClear}
    header="An Error Occurred!"
    show={!!error}
    footer={<Button onClick={onClear}>Okay</Button>}
  >
    <p>{error}</p>
  </Modal>
)

export default ErrorModal
