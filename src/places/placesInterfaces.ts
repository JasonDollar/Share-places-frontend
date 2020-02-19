export interface Place {
  id: string 
  title: string
  imageUrl: string
  description: string 
  address: string
  creatorId?: string | number
  location?: Location 
}

export interface Location {
  lat: number
  lng: number
}