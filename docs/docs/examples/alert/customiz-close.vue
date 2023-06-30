<template>
  <z-alert title="unclosable alert" type="success" :closable="false" />
  <z-alert title="customized close-text" type="info" close-text="Gotcha" />
  <z-alert title="alert with callback" type="warning" @close="hello" />
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert("Hello World!");
};
</script>
<style scoped>
.z-alert {
  margin: 20px 0 0;
}

.z-alert:first-child {
  margin: 0;
}
</style>
