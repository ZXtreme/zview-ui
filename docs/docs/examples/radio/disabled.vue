<template>
  <div>
    <z-radio v-model="value" :options="options"></z-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface OptionsItem {
  label: string;
  id: number;
  disabled?: boolean;
}

const value = ref("2");

const options = ref<OptionsItem[]>([
  {
    label: "Option A",
    id: 1,
  },
  {
    label: "Option B",
    id: 2,
    disabled: true,
  },
]);
</script>

<style>
.radio-container>div {
  margin-bottom: 24px;
}

.radio-container>div:last-of-type {
  margin-bottom: 0;
}
</style>
