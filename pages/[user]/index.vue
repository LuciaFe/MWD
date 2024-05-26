<script lang="ts" setup>
const { userInfo, postUser } = await useCard()
const route = useRoute()
const infos = await userInfo(route.params.user as string)
const posts = await postUser(route.params.user as string)
</script>

<template>
  <div class="page-user py-10 px-6">
    <div class="flex gap-20 pb-5">
      <NuxtImg
        :src="`https://picsum.photos/id/${Number(route.params.user) + 13}/400/400`"
      ></NuxtImg>
      <div class="flex flex-col justify-center">
        <h2>{{ infos.data.value?.name }}</h2>
        <p>{{ infos.data.value?.email }}</p>
        <p>{{ infos.data.value?.website }}</p>
      </div>
    </div>

    <h3>Migliori Post</h3>
    <div class="flex flex-col gap-5 pt-5">
      <div v-for="post in posts.data.value?.slice(0, 3)">
        <div class="bg-gray-300 rounded-lg p-3 flex flex-col gap-2 h-full">
          <div class="flex gap-2">
            <h5 class="font-bold">userID: {{ post.userId }}</h5>
            <h5 class="font-bold">{{ infos.data.value?.name }}</h5>
          </div>
          <h3 class="font-medium">{{ post.title }}</h3>

          <h5>{{ post.body }}</h5>
        </div>
      </div>
    </div>
    <div class="pt-4">
      <NuxtLink
        :to="`${route.params.user}/post`"
        class="hover:underline hover:underline-offset-1"
        >Tutti i post</NuxtLink
      >
    </div>
  </div>
</template>
