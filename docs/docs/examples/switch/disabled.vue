<template>
  <z-switch v-model="switchVal1" disabled></z-switch>
  <br />
  <z-switch v-model="switchVal2" disabled></z-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal1 = ref(true);
const switchVal2 = ref(false);
</script>
