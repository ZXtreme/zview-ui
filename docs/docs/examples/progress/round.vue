<template>
  <div class="demo-progress">
    <z-progress type="circle" :percentage="0" />
    <z-progress type="circle" :percentage="50" />
    <z-progress type="circle" :percentage="100" status="success" />
  </div>
</template>

<script></script>

<style scoped>
.demo-progress .z-progress--circle {
  margin-right: 15px;
}
</style>
