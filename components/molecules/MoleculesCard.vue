<script setup lang="ts">
import type { CardProps } from './MoleculesCard.props'
defineProps<CardProps>()
</script>

<template>
  <div class="bg-gray-300 rounded-lg p-3 flex flex-col gap-2 h-full">
    <div class="w-full flex justify-center">
      <NuxtImg :src="image" class="rounded-lg"></NuxtImg>
    </div>
    <h3>{{ title }}</h3>
    <NuxtLink :to="`/${id}`"
      ><h5>{{ name }}</h5></NuxtLink
    >
    <h3>Username: {{ username }}</h3>
  </div>
</template>
