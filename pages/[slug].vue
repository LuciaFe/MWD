<script setup lang="ts">
// chiamare la server api
const route = useRoute()
const { data } = await useFetch(`/api/pages/${route.params.slug}`)
</script>

<template>
  <pre>{{ data }}</pre>
  <div class="flex flex-col gap-y-5">
    <component
      v-for="content in data?.Page[0]?.Content"
      :key="content?.id"
      :is="`Cms${content?.item?.__typename}`"
      v-bind="content?.item"
    ></component>
  </div>
</template>
