<script setup lang="ts">
import type { CMSCardProps } from './CmsComponentCard.props'
import type { CardProps } from '../molecules/MoleculesCard.props'
const props = defineProps<CMSCardProps>()

const card = computed(
  (): CardProps => ({
    image: `https://picsum.photos/id/33/700/700`,
    id: props.id.toString(),
    name: props.name,
    title: props.title,
    username: props.username,
  })
)
</script>

<template>
  <div class="grid grid-cols-6">
    <MoleculesCard v-bind="card" class="col-span-2"></MoleculesCard>
  </div>
</template>
