import { createClient, cacheExchange, fetchExchange } from '@urql/core'

export const getUrqlClient = (url: string, token: string) =>
  createClient({
    url,
    fetchOptions: {
      headers: {
        Authorization: `${token}`,
      },
    },
    //array di mididdleware per processare richieste e risposte
    exchanges: [fetchExchange, cacheExchange],
  })
