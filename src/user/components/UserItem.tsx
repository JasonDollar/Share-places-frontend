import React from 'react'
import { Item } from '../userInterfaces'

type Props = Item 
  

const UserItem: React.FC<Props> = ({ 
  id, name, placeCount, image, 
}) => {
  console.log(id, name, placeCount, image)

  return (
    <div />
  )
}

export default UserItem
