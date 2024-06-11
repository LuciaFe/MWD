import type { Album, AlbumUser } from '~/types/global'
import type { CardProps } from '~/components/molecules/MoleculesCard.props'

export const useCard = async () => {
  const users = await useFetch('/api/users')
  const albums = await useFetch('/api/albums')

  const albumPhoto = computed<Album[]>(() => {
    if (!albums.data.value) return []
    return albums.data.value.map((album, index) => {
      return {
        title: album.title,
        userId: album.userId,
        photo: `https://picsum.photos/id/${index + index}/600/600`,
      }
    })
  })

  const albumUsers = computed<AlbumUser[]>(() => {
    if (!users.data.value || !albumPhoto.value) return []

    return users.data.value.map(user => {
      return {
        user: user,
        album: albumPhoto.value.filter(album => album.userId === user.id),
      }
    })
  })

  const mapAlbums = (albumsUsers: AlbumUser[]): CardProps[] => {
    return albumsUsers.flatMap((el: AlbumUser) => {
      return el.album.map(album => ({
        name: el.user.name,
        image: album.photo,
        title: album.title,
        id: album.userId.toString(),
        username: el.user.username,
      }))
    })
  }
  const cards = computed(() => mapAlbums(albumUsers.value))

  const userInfo = async (userID: string) => {
    return await useFetch(`/api/user/${userID}`)
  }

  const postUser = async (userID: string) => {
    return await useFetch(`/api/userPost/${userID}`)
  }
  return { albumUsers, cards, userInfo, postUser }
}
