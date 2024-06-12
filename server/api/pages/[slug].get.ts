import { graphql } from 'gql.tada'

export default defineEventHandler(async event => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Error slug' })
  // chiamata graphql
  // client
  const config = useRuntimeConfig()
  const client = getUrqlClient(config.directus.url, config.directus.token)
  // prepare la query
  const query = graphql(`
    query getPage($slug: String!) {
      Page(filter: { slug: { _eq: $slug } }) {
        Content {
          __typename
          item {
            ... on ComponentGridCards {
              __typename
              id
              cards {
                __typename
                ComponentCard_id {
                  Image
                  id
                  name
                  title
                  username
                }
              }
            }
            ... on ComponentCard {
              __typename

              id
              name
              Image
              title
              username
            }
          }
        }
      }
    }
  `)

  const response = await client
    .query(query, {
      slug,
    })
    .toPromise()

  // fare la query
  // connettore
  if (!response)
    throw createError({ statusCode: 500, statusMessage: 'Error response' })
  return response.data
})
