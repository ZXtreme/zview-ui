<template>
  <z-button @click="openModal">open dialog</z-button>
  <z-dialog v-model="dialogShow" title="Show Empty">
    <template #content>
      <z-empty description="description" />
    </template>
  </z-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dialogShow = ref(false);
const openModal = () => {
  dialogShow.value = true;
};
</script>
<style scoped></style>
