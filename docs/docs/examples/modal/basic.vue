<template>
  <div class="demo-modal">
    <z-button @click="openModal">open modal</z-button>
    <z-modal v-model:show="visible"></z-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref<boolean>(false);
const openModal = () => {
  visible.value = !visible.value;
};
</script>
