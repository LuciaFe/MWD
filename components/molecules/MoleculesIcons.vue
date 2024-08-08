<script setup lang="ts">
import type { IconsProps } from './MoleculesIcons.props'
import { iconsMap } from './MoleculesIcons.iconmapping'
defineProps<IconsProps>()
</script>

<template>
  <div class="flex gap-6">
    <component :is="iconsMap[type]" class="h-6 w-6 text-black"></component>
  </div>
</template>
