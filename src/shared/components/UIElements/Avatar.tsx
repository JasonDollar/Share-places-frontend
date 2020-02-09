import React from 'react'

import styles from './Avatar.module.scss'

interface Props {
  image?: string
  alt: string
  style?: any
  width?: number
  height?: number
}

const Avatar: React.FC<Props> = ({ 
  image, alt, height, width, style, 
}) => (
  <div className={styles.avatar} style={style}>
    <img
      src={image}
      alt={alt}
      style={{ width, height }}
    />
  </div>
)

export default Avatar
