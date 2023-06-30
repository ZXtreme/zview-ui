<template>
  <div ref="slider" :class="[
    'z-slider',
    { 'is-vertical': vertical },
    { 'is-disabled': disabled }
  ]">
    <div class="z-slider__runway_wraper" ref="runway_wraper">
      <!-- 轨道 -->
      <ZSliderRunway ref="runway" :modelValue="modelValue" :min="min" :max="max" :step="step" :showTooltip="showTooltip"
        :showStops="showStops" :disabled="disabled" :formatTooltip="formatTooltip" @change="change" @input="input"
        :range="range" :vertical="vertical" :width="runway_wraper_width" :height="height" :placement="placement"
        :marks="marks" :runway_wraper="runway_wraper"></ZSliderRunway>
    </div>
    <ZInputNumber v-if="showInput" v-model="numberValue" :max="max" :min="min" :size="inputSize"
      :controls="showInputControls" @change="changeNumberValue"></ZInputNumber>
  </div>
</template>

<!-- input-number 发生变化 -> change 事件 修改 modelValue -->
<!-- modelValue 发生变化 -> input事件 修改 numberValue -->
<!-- 监听 props.modelValue 变化 -> updateState 更新 numberValue -->
<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import ZInputNumber from "../../input-number";
import { SliderProps } from "./slider";
import ZSliderRunway from "./runway.vue";
import { isOutBounds } from "./utils";
import { isArray } from "@vue/shared";
import { throttle } from "lodash-es";
const numberValue = ref<string | number>(1);

const props = defineProps(SliderProps);
const emits = defineEmits(["input", "change"]);

const modelValue = ref<number | number[]>(props.modelValue);
const runway = ref<any>(null);
const slider = ref<any>(null);
const runway_wraper = ref<any>(null);
const runway_wraper_width = ref<number>(0);

const change = (val: number | string, val2: number | string) => {
  emits("change", val, val2);
};

const input = (val: number | string, val2: number | string) => {
  numberValue.value = val;
  emits("input", val, val2);
};

// 数值输入框值变化
const changeNumberValue = (val: number) => {
  modelValue.value = val;
};

const updateState = () => {
  nextTick(() => {
    // 垂直模式为props.height，水平模式为100%宽度
    runway_wraper_width.value = props.vertical ? props.height : runway_wraper.value.offsetWidth;

    modelValue.value = props.modelValue;
    numberValue.value = isArray(props.modelValue)
      ? props.modelValue[0]
      : props.modelValue;
  });
};

watch(
  () => props.modelValue,
  throttle(() => {
    nextTick(() => {
      // 验证传入的modelValue是否合法，通过验证后 updateState 更新参数
      isArray(modelValue.value)
        ? modelValue.value.forEach((i) => { isOutBounds(i, props.min, props.max); })
        : isOutBounds(modelValue.value, props.min, props.max);
      if (props.range && (!isArray(modelValue.value) || modelValue.value.length !== 2)) {
        throw new Error("有 range 字段则必须传入 modelValue 一个数组参数");
      }
      updateState();
    });
  }, 20),
  {
    immediate: true,
  }
);

watch(() => props.range, () => {
  runway.value!.update();
});

watch([() => props.vertical, () => props.height], () => {
  updateState();
});
</script>

<script lang="ts">
export default {
  name: "ZSlider",
};
</script>
