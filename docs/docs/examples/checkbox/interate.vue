<template>
  <z-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
    全选
  </z-checkbox>
  <div style="margin: 10px 0"></div>
  <z-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <z-checkbox v-for="city in cities" :label="city" :key="city">
      {{ city }}
    </z-checkbox>
  </z-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cities = ["北京", "上海", "广州", "深圳"];
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["上海", "北京"]);

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: any) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
