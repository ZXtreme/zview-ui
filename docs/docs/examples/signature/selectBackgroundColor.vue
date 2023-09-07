<template>
  <div class="demo-signature">
    <z-signature backgroundColor="rgb(220, 183, 236)" @submit="submit" />
  </div>
</template>

<script lang="ts" setup>
const submit = (data) => {
  console.log(data);
}
</script>

<style lang="less" scoped>
.demo-signature {
  height: 200px;
}
</style>
