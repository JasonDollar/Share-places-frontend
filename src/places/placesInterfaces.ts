export interface Place {
  id: string 
  title: string
  imageUrl: string
  description: string 
  address: string
  creator?: string | number
  location?: Location 
}

export interface Location {
  lat: number
  long: number
}