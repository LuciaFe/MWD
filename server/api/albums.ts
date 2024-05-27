import type { AlbumResponse } from '~/types/global'
export default defineEventHandler(async () => {
  try {
    const albums: AlbumResponse[] = await $fetch(
      'https://jsonplaceholder.typicode.com/albums',
      {
        method: 'GET',
      }
    )

    return albums
  } catch (e) {
    console.log(e, 'error')
  }
})
