import type { AlbumUser } from '~/types/global'
import type { CardProps } from '~/components/molecules/MoleculesCard.props'

export const mapAlbums = (albumsUsers: AlbumUser[]): CardProps[] => {
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
