<template>
  <z-checkbox v-model="checked1" disabled>备选项</z-checkbox>
  <z-checkbox v-model="checked2" disabled>备选项</z-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
</script>
