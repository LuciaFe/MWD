<script setup lang="ts">
import type { GridCardsProps } from './OrganismsGridCard.props'
defineProps<GridCardsProps>()
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="card in list" class="col-span-1">
      <MoleculesCard v-bind="card"></MoleculesCard>
    </div>
  </div>
</template>
