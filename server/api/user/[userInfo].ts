import type { User } from '~/types/global'

export default defineEventHandler(async event => {
  assertMethod(event, 'GET')
  try {
    const userInfo = getRouterParam(event, 'userInfo')
    const user: User = await $fetch(
      `https://jsonplaceholder.typicode.com/users/${userInfo}`,
      {
        method: 'GET',
      }
    )

    return user
  } catch (e) {
    console.log(e, 'error')
  }
})
