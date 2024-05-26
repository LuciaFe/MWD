export type Album = {
  user: User
  album: {
    title: string
    userId: number
    photo: string
  }[]
}
export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type Post = {
  id?: string
  userId: string
  title: string
  body: string
}
