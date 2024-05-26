import type { Album } from '~/types/global'

export const useCard = async () => {
  const users = await useFetch('/api/users')
  const albums = await useFetch('/api/albums')

  const albumPhoto = computed<Album['album']>(() => {
    if (!albums.data.value) return []
    return albums.data.value.map((album, index) => {
      return {
        title: album.title,
        userId: album.userId,
        photo: `https://picsum.photos/id/${index + index}/600/600`,
      }
    })
  })

  const albumUsers = computed<Album[]>(() => {
    if (!users.data.value || !albumPhoto.value) return []

    return users.data.value.map(user => {
      return {
        user: user,
        album: albumPhoto.value.filter(album => album.userId === user.id),
      }
    })
  })

  const cards = computed(() => mapAlbums(albumUsers.value))

  // const allPostOfUser= ()=>{

  // }

  const userInfo = async (userID: string) => {
    return await useFetch(`/api/user/${userID}`)
  }

  const postUser = async (userID: string) => {
    return await useFetch(`/api/userPost/${userID}`)
  }
  return { albumUsers, cards, userInfo, postUser }
}
