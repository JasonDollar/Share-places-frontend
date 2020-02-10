import React from 'react'

import styles from './MainHeader.module.scss'

type Props = {
  children: React.ReactNode
}

const MainHeader: React.FC<Props> = ({ children }) => (
  <header className={styles.mainHeader}>
    {children}
  </header>
)

export default MainHeader
