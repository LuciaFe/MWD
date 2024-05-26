export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const addPost = await $fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    return addPost
  } catch (e) {
    console.log(e, 'error')
  }
})
