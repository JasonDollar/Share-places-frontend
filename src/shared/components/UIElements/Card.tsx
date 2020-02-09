import React from 'react'

import styles from './Card.module.scss'

interface Props {
  children: React.ReactNode
  classNameProp?: string
}

const Card: React.FC<Props> = ({ children, classNameProp }) => (
  <div className={`${styles.card} ${classNameProp}`}>
    {children}
  </div>
)

export default Card
