<template>
  <div class="demo-progress">
    <z-progress :percentage="50" />
    <z-progress :percentage="100" :format="format" />
    <z-progress :percentage="100" status="success" />
    <z-progress :percentage="100" status="warning" />
    <z-progress :percentage="50" status="error" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage: number) =>
  percentage === 100 ? "√" : `${percentage}%`;
</script>

<style scoped>
.demo-progress .z-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
