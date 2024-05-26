import type { User } from '~/types/global'

export default defineEventHandler(async () => {
  try {
    const users: User[] = await $fetch(
      'https://jsonplaceholder.typicode.com/users',
      {
        method: 'GET',
      }
    )

    return users
  } catch (e) {
    console.log(e, 'error')
  }
})
