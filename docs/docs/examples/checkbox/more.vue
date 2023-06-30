<template>
  <z-checkbox-group v-model="checkList1" @change="checkChange">
    <z-checkbox label="复选框 A"></z-checkbox>
    <z-checkbox label="复选框 B"></z-checkbox>
    <z-checkbox label="复选框 C"></z-checkbox>
    <z-checkbox label="复选框 D" disabled></z-checkbox>
    <z-checkbox label="复选框 E" disabled></z-checkbox>
  </z-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList1 = ref(["复选框 A", "复选框 E"]);

const checkChange = (e: boolean) => {
  console.log(e);
};
</script>
