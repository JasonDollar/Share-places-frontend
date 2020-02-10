import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

interface Props {
  children: React.ReactNode
  href?: string
  to?: string
  size?: string
  inverse?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  disabled?: boolean
  danger?: boolean
  exact?: boolean
}


const Button: React.FC<Props> = ({ 
  href, to, size, inverse, type = 'button', onClick, disabled, children, danger, 
}) => {
  if (href) {
    return (
      <a
        className={`${styles.button} ${size && styles[size]} ${inverse
          && styles.inverse} ${danger && styles.danger}`}
        href={href}
      >
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link
        to={to}
        className={`${styles.button} ${size && styles[size]} ${inverse
          && styles.inverse} ${danger && styles.danger}`}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      className={`${styles.button} ${size && styles[size]} ${inverse
      && styles.inverse} ${danger && styles.danger}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
