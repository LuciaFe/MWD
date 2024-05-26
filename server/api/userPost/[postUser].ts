import type { Post } from '~/types/global'

export default defineEventHandler(async event => {
  assertMethod(event, 'GET')
  try {
    const postUser = getRouterParam(event, 'postUser')
    const post: Post[] = await $fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${postUser}`,
      {
        method: 'GET',
      }
    )
    return post
  } catch (e) {
    console.log(e, 'error')
  }
})
