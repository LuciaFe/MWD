import type { Album } from '~/types/global'
export default defineEventHandler(async () => {
  try {
    const albums: Album[] = await $fetch(
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
