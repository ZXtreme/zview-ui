<template>
  <div class="demo-modal">
    <z-button @click="openModal">open modal</z-button>
    <z-modal v-model:show="visible" :title="false" :footer="false">
      <template #body>
        <span>Only modal body</span>
      </template>
    </z-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref<boolean>(false);
const openModal = () => {
  visible.value = !visible.value;
};
</script>
