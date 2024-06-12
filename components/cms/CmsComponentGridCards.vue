<script setup lang="ts">
import type { GridCardsProps } from '../organisms/OrganismsGridCard.props'
import type { CMSGridCardsProps } from './CmsComponentGridCards.props'
import type { CardProps } from '../molecules/MoleculesCard.props'
const props = defineProps<CMSGridCardsProps>()

const gridCard = computed(
  (): GridCardsProps => ({
    list: props.cards.map((card, index) => ({
      image: `https://picsum.photos/id/${index + 11}/700/700`,
      id: card.ComponentCard_id.id.toString(),
      name: card.ComponentCard_id.name,
      title: card.ComponentCard_id.title,
      username: card.ComponentCard_id.username,
    })),
  })
)
</script>

<template>
  <OrganismsGridCard v-bind="gridCard"></OrganismsGridCard>
</template>
