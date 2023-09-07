<template>
  <div class="demo-container">
    <z-slider v-model="value" show-input @input="val => value = val" :min="1" :max="32" />
    <div class="demo-signature">
      <z-signature lineColor="#D082E0" :lineWidth="value" @submit="submit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(3);

const submit = (data) => {
  console.log(data);
}
</script>

<style lang="less" scoped>
.demo-container {
  .demo-signature {
    margin-top: 10px;
    height: 200px;
  }
}
</style>
