<template>
  <z-input placeholder="请输入内容" v-model="input" type="text" clearable></z-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
