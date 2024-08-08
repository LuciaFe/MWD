<script setup lang="ts">
const name = ref('')
const toggle = ref()
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <div>
      <FormKit type="text" label="Your username" v-model="name" />
      {{ name }}
    </div>
    <div>
      <FormKit
        v-model="toggle"
        type="checkbox"
        :name="name"
        label="Toggle"
        :classes="{
          wrapper: 'flex items-center gap-x-2',
          inner: {
            'relative rounded-full transition-background-color duration-300 cursor-pointer w-8 h-5 border border-cyan-600': true,
            'bg-grey-500': !toggle,
            'bg-green': toggle,
          },
          label: 'label text-black',
          input: 'opacity-0 h-0 w-0',
        }"
      >
        <template #decorator>
          <span
            class="absolute block rounded-full bg-cyan-600 drop-shadow-xs transition-transform duration-300 top-0 left-0 h-[1.125rem] w-[1.125rem]"
            :class="{
              'translate-x-3': toggle,
            }"
          />
        </template>
      </FormKit>
    </div>
    {{ toggle }}
  </div>
</template>
