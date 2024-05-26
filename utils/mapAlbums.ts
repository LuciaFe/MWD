import type { Album } from '~/types/global'
import type { CardProps } from '~/components/molecules/MoleculesCard.props'

export const mapAlbums = (albumsUsers: Album[]): CardProps[] => {
  return albumsUsers.flatMap((el: Album) => {
    return el.album.map(album => ({
      name: el.user.name,
      image: album.photo,
      title: album.title,
      id: album.userId.toString(),
      username: el.user.username,
    }))
  })
}
