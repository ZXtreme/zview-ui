<template>
  <div>
    <z-badge :value="number">
      <z-button type="default">message</z-button>
    </z-badge>
    <z-badge :value="number" :max="200">
      <z-button type="default">message</z-button>
    </z-badge>
    <z-badge :value="string">
      <z-button type="default">message</z-button>
    </z-badge>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const number = ref<number>(100);
const string = ref<string>("666");
</script>
