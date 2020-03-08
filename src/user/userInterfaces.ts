import { Place } from '../places/placesInterfaces'

export interface User {
  id: string
  image?: string
  name: string
  places: Place[] | []
  email?: string
}