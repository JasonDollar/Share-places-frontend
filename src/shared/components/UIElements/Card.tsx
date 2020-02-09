import React from 'react'
import { PropsChildren } from '../../interfaces'
import styles from './Card.module.scss'

interface Props extends PropsChildren {
  classNameProp?: string
}

const Card: React.FC<Props> = ({ children, classNameProp }) => (
  <div className={`${styles.card} ${classNameProp}`}>
    {children}
  </div>
)

export default Card
