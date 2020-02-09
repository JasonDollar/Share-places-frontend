import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'

import Backdrop from '../UIElements/Backdrop'

import styles from './MainNavigation.module.scss'

const MainNavigation: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClickHandler={closeDrawerHandler}>
        <nav className={styles.drawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className={styles.menuBtn} type="button" onClick={openDrawerHandler}>
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
    </>
  )
}

export default MainNavigation
