import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'

import styles from './MainNavigation.module.scss'

const MainNavigation: React.FC = () => (
  <MainHeader>
    <button className={styles.menuBtn} type="button">
      <span /> 
      <span />
      <span />
    </button>
    <h1 className={styles.title}>
      <Link to="/">Your Places</Link>
    </h1>
    <nav className={styles.headerNav}>
      <NavLinks />
    </nav>
  </MainHeader>
)

export default MainNavigation
