<template>
  <z-alert title="success alert" type="success" description="more text description" show-icon />
  <z-alert title="info alert" type="info" description="more text description" show-icon />
  <z-alert title="warning alert" type="warning" description="more text description" show-icon />
  <z-alert title="error alert" type="error" description="more text description" show-icon />
</template>
<style scoped>
.z-alert {
  margin: 20px 0 0;
}

.z-alert:first-child {
  margin: 0;
}
</style>
