<template>
  <div class="scrollbar-container">
    <z-scrollbar ref="scrollbarRef" :height="height" always @scroll="scroll">
      <div ref="innerRef">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </z-scrollbar>

    <z-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const height = ref(400);
const max = ref(0);
const value = ref(0)
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref();

onMounted(() => {
  max.value = innerRef.value!.clientHeight - height.value;
});

const inputSlider = (value: number) => {
  let val = (value * height.value) / (max.value + height.value);
  scrollbarRef.value!.setScrollTop(val);
};

const scroll = ({ scrollTop }) => {
  value.value = scrollTop;
};
const formatTooltip = (value: number) => {
  return `${value} px`;
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}

.scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}

.scrollbar-container .z-slider {
  margin-top: 20px;
}
</style>
