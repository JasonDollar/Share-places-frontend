import React from 'react'

import styles from './LoadingSpinner.module.scss'

interface Props {
  asOverlay?: boolean
}

const LoadingSpinner: React.FC<Props> = ({ asOverlay }) => (
  <div className={`${asOverlay && styles.overlay}`}>
    <div className={styles.spinnerDualRing} />
  </div>
)

export default LoadingSpinner
