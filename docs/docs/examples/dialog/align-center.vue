<template>
  <z-button @click="openModal">Open Dialog</z-button>
  <z-dialog v-model="dialogShow" title="dialog title" alignCenter>
    <template #content>This is content area!</template>
    <template #footer>
      <z-button size="small" style="margin-right: 15px" @click="dialogShow = false">cancel</z-button>
      <z-button type="primary" size="small" @click="dialogShow = false">comfire</z-button>
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
