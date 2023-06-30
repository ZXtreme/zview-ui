<template>
  <z-button type="default" @click="handerClick">Show Message</z-button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const handerClick = () => {
  $message("Hello,This is a message");
};
</script>
