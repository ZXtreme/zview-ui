<template>
  <div style="display: flex; margin-bottom: 12px">
    <z-button @click="add" style="margin-right: 12px">Add Item</z-button>
    <z-button @click="onDelete">Delete Item</z-button>
  </div>
  <z-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </z-scrollbar>
</template>

<script setup>
import { ref } from "vue";
const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}

.scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}
</style>
