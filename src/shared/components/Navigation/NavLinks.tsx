import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/auth-context'

import styles from './NavLinks.module.scss'

const NavLinks = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <ul className={styles.navLinks}>
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
          </li>
          <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
          </li>
        </>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  )
}

export default NavLinks