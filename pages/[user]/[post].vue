<script setup lang="ts">
const { postUser, userInfo } = await useCard()
const route = useRoute()
const posts = await postUser(route.params.user as string)
const infos = await userInfo(route.params.user as string)
const titleValue = ref('')
const postValue = ref('')
const answer = ref()

const submitPost = async () => {
  const submit = await useFetch('/api/addPost', {
    method: 'POST',
    body: {
      title: titleValue.value,
      body: postValue.value,
      userId: Number(route.params.user),
    },
  })
  if (submit.data.value) answer.value = submit.data.value
  else answer.value = submit.error.value
}
</script>

<template>
  <div class="py-10 px-6">
    <div class="flex flex-col gap-3 pb-5">
      <h2>Crea un post</h2>
      <input
        v-model="titleValue"
        type="text"
        label="title"
        placeholder="titolo"
        aria-label="titolo"
        class="border border-black"
      />
      <input
        v-model="postValue"
        type="text"
        label="body"
        placeholder="post"
        aria-label="post"
        class="border border-black"
      />
      {{ postValue }}
      <button
        type="submit"
        class="p-3 w-fit bg-slate-400"
        @click="submitPost()"
      >
        invia
      </button>
      <p>Risposta: {{ answer }}</p>
    </div>
    <div class="flex flex-col gap-5 pt-5">
      <div v-for="post in posts.data.value">
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
  </div>
</template>
