<template>
  <z-switch v-model="switchVal"></z-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal = ref(true);
</script>
