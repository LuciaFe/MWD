<script setup lang="ts">
const { cards } = await useCard()
</script>

<template>
  <div class="py-6 px-4">
    <OrganismsGridCard :list="cards" />
  </div>
</template>
