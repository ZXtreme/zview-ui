<template>
  <z-slider v-model="size" show-input @input="val => size = val" :min="6" :max="100" placement="right" />
  <z-space :size="gap">
    <z-button v-for="i in 3" :key="i">按钮</z-button>
  </z-space>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const size = ref(20)
const gap = computed(() => {
  return [size.value]
})
</script>
