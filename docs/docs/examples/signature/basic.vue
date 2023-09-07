<template>
  <div class="demo-signature">
    <z-signature @submit="submit" />
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
