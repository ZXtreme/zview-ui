<template>
  <z-input v-model="input" disabled placeholder="请输入内容"></z-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
