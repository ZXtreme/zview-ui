<template>
  <z-alert title="success alert" type="success" center show-icon />
  <z-alert title="info alert" type="info" center show-icon />
  <z-alert title="warning alert" type="warning" center show-icon />
  <z-alert title="error alert" type="error" center show-icon />
</template>
<style scoped>
.z-alert {
  margin: 20px 0 0;
}

.z-alert:first-child {
  margin: 0;
}
</style>
