<template>
  <div class="demo-progress">
    <z-progress :percentage="percentage" :color="customColor" />

    <z-progress :percentage="percentage" :color="customColorMethod" />

    <z-progress :percentage="percentage2" :color="customColors" />
    <div>
      <z-button @click="decrease">-</z-button>
      <z-button @click="increase">+</z-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const percentage = ref(10);
const percentage2 = ref(0);
const customColor = ref("#84adea");

const customColors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];

const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return "#909399";
  }
  if (percentage < 70) {
    return "#e6a23c";
  }
  return "#67c23a";
};
const increase = () => {
  percentage.value += 20;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};
const decrease = () => {
  percentage.value -= 20;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 1;
  }, 100);
});
</script>
<style scoped>
.demo-progress .z-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
