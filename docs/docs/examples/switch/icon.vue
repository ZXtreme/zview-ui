<template>
  <z-switch v-model="switchVal1" inline-prompt size="large" active-icon="close1" inactive-icon="success1"
    style="display: block; margin-top: 10px">
  </z-switch>
  <z-switch v-model="switchVal2" active-icon="close1" inactive-icon="success1" style="display: block; margin-top: 10px">
  </z-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal1 = ref(true);
const switchVal2 = ref(true);
</script>
