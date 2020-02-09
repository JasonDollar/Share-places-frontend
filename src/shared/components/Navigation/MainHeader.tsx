import React from 'react'
import { PropsChildren } from '../../interfaces'

import styles from './MainHeader.module.scss'

const MainHeader: React.FC<PropsChildren> = ({ children }) => (
  <header className={styles.mainHeader}>
    {children}
  </header>
)

export default MainHeader
