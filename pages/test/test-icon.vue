<script setup lang="ts">
import type { IconsProps } from '../../components/molecules/MoleculesIcons.props'
const a: IconsProps = {
  type: 'approve',
}
const b: IconsProps = {
  type: 'location',
}
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <div class="flex flex-col gap-2">
      <p>Una sola iconsMap</p>
      <MoleculesIcons v-bind="a"></MoleculesIcons>
    </div>
  </div>
</template>
