<template>
  <z-button type="default" @click="handerClick">Show Close</z-button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const handerClick = () => {
  $message({
    type: "success",
    message: "This is closed the message",
    showClose: true,
  });
};
</script>
