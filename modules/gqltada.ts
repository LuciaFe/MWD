import { defineNuxtModule, createResolver } from 'nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)
    const gqlEnv = resolver.resolve('../graphql-env.d.ts')
    const directus = nuxt.options.runtimeConfig.directus
    if (!directus.url || !directus.token) {
      throw new Error('directus envs missing')
    }
    // installing gql tada graphql lsp
    nuxt.hook('prepare:types', async ctx => {
      ctx.tsConfig.compilerOptions ??= {}

      ctx.tsConfig.compilerOptions.plugins ??= []

      ctx.tsConfig.compilerOptions.plugins.push({
        name: '@0no-co/graphqlsp',
        schema: {
          url: directus.url,
          headers: {
            Authorization: `${directus.token}`,
          },
        },
        tadaOutputLocation: gqlEnv,
      })
      ctx.references.push({
        path: resolver.resolve('../graphql-env.d.ts'),
      })
    })
  },
})
