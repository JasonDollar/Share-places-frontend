import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Backdrop.module.scss'

interface Props {
  onClick: () => void
}

const Backdrop: React.FC<Props> = ({ onClick }) => ReactDOM.createPortal(
  <div className={styles.backdrop} onClick={onClick} />,
  document.getElementById('backdrop-hook') as Element,
)

export default Backdrop
