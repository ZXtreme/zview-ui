<template>
  <div class="demo-progress">
    <z-progress type="dashboard" :percentage="percentage" :color="colors" />
    <z-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <z-button @click="decrease"> - </z-button>
      <z-button @click="increase"> + </z-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const percentage = ref(10);
const percentage2 = ref(0);

const colors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];

const increase = () => {
  percentage.value += 10;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};
const decrease = () => {
  percentage.value -= 10;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10;
  }, 500);
});
</script>
<style scoped>
.demo-progress .z-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .z-progress--circle {
  margin-right: 15px;
}
</style>
