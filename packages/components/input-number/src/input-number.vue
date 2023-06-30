<template>
  <div :class="[
    'z-input-number',
    { 'is-disabled': isDisabled },
    { small: size === 'small' },
    { large: size === 'large' },
    { right: controlsPosition === 'right' },
    { controls: !controls }
  ]">
    <!-- 控件按钮在两侧时 -->
    <template v-if="!props.controlsPosition">
      <span :class="[
        'z-input-number__decrease',
        { 'is-disabled': disabledClass === 'decrease' },
      ]" @click="decrease(step)">
        <z-icon name="jian"></z-icon>
      </span>
      <z-input v-model="numberValue" type="number" :readonly="readonly" :name="name" :label="label"
        :placeholder="placeholder" :disabled="isDisabled" ref="input" @focus="focusInput" @blur="blurInput"></z-input>
      <span :class="[
        'z-input-number__increase',
        { 'is-disabled': disabledClass === 'increase' },
      ]" @click="increase(step)">
        <z-icon name="jia"></z-icon>
      </span>
    </template>
    <!-- 控件按钮在右侧时 -->
    <template v-else>
      <z-input v-model="numberValue" type="number" :readonly="readonly" :name="name" :label="label"
        :placeholder="placeholder" :disabled="isDisabled" ref="input" @focus="focusInput" @blur="blurInput"></z-input>
      <div class="crease_container">
        <span :class="[
          'z-input-number__increase',
          { 'is-disabled': disabledClass === 'increase' },
        ]" @click="increase(step)">
          <z-icon name="xiangshang2"></z-icon>
        </span>
        <span :class="[
          'z-input-number__decrease',
          { 'is-disabled': disabledClass === 'decrease' },
        ]" @click="decrease(step)">
          <z-icon name="xiangxia1"></z-icon>
        </span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import ZInput from "../../input";
import ZIcon from "../../icon";
import { InputNumberProps } from "./input-number";
import { nextTick, onMounted, ref, watch } from "vue";

const props = defineProps(InputNumberProps);
const emits = defineEmits(["change", "blur", "focus"]);

const disabledClass = ref<string>("");  // 达到最大或最小限制时需要加入对应的class样式
const isDisabled = ref<boolean>(props.disabled);
const min = ref<number>(props.min);
const max = ref<number>(props.max);
const step = ref<number>(props.step);
const stepStrictly = ref<boolean>(props.stepStrictly);
const precision = ref<number>(props.precision);
const readonly = ref<boolean>(props.readonly);
const numberValue = ref<number | string>(props.modelValue);
const oldVal = ref<number | string>("");  // 修改前的值
const input = ref<any>(null);  // input 输入框的 ref

// 判断左右
const judgeLocation = (val: number, start: number, end: number): "start" | "end" => {
  return end - val < val - start ? "end" : "start";
};

// 获取左右值 
const getSideValue = (val: number, step: number): [number, number] => {
  const multiple = Math.floor(val / step)
  return [multiple * step, multiple * step + step];
};

// 减少
const decrease = (num: number) => {
  if (isDisabled.value || readonly.value) return;
  if (!isTriggerLimit(Number(numberValue.value) - num)) {
    numberValue.value = Number(numberValue.value) - num;
    update();
  }
};

// 增加
const increase = (num: number) => {
  if (isDisabled.value || readonly.value) return;
  if (!isTriggerLimit(Number(numberValue.value) + num)) {
    numberValue.value = Number(numberValue.value) + num;
    update();
  }
};

// input 失去焦点
const blurInput = (e: FocusEvent, val: string | number) => {
  numberValue.value = Number(val);
  nextTick(() => {
    if (stepStrictly.value) {
      const res = getSideValue(Number(numberValue.value), step.value);
      const location = judgeLocation(Number(numberValue.value), res[0], res[1]);
      location === "start"
        ? (numberValue.value = res[0])
        : (numberValue.value = res[1]);
    }
    emits("blur", e);
    update();
  });
};

// input 获得焦点
const focusInput = (e: FocusEvent) => {
  emits("focus", e);
};

// 判断是否超出最大或最小范围
const isTriggerLimit = (num: number) => {
  if (num < min.value) return true;
  else if (num > max.value) return true;
  disabledClass.value = "";
  return false;
};

// 更新 value，判断是否越界，精度等问题
const update = () => {
  nextTick(() => {
    if (isDisabled.value || readonly.value) return;

    if (Number(numberValue.value) <= min.value) {
      disabledClass.value = "decrease";
      numberValue.value = min.value
    } else if (Number(numberValue.value) >= max.value) {
      disabledClass.value = "increase";
      numberValue.value = max.value
    } else if (disabledClass.value !== "") {
      disabledClass.value = "";
    }
    emits("change", numberValue.value, oldVal.value);

    if (precision.value >= 1) {
      numberValue.value = Number(numberValue.value).toFixed(precision.value);
    } else { // 防止出现 2.0000000001 现象
      numberValue.value = Number(Number(numberValue.value).toFixed(6));
    }
  });
};

// input 获取焦点
const inputGetFocus = () => {
  input.value?.inputGetFocus();
};

// input 失去焦点
const inputGetBlur = () => {
  input.value?.inputGetBlur();
};

// 热更新
watch(
  [
    () => props.disabled,
    () => props.min,
    () => props.max,
    () => props.step,
    () => props.stepStrictly,
    () => props.precision,
    () => props.readonly,
  ],
  () => {
    isDisabled.value = props.disabled;
    min.value = props.min;
    max.value = props.max;
    step.value = props.step;
    stepStrictly.value = props.stepStrictly;
    precision.value = props.precision;
    readonly.value = props.readonly;
  }
);

watch(
  () => numberValue.value,
  (_, oldValue) => {
    oldVal.value = oldValue;
  },
);

watch(
  () => props.modelValue,
  (newVal) => {
    numberValue.value = newVal;
    update();
  },
);

onMounted(() => {
  update();
});

defineExpose({
  inputGetFocus,
  inputGetBlur,
});
</script>

<script lang="ts">
export default {
  name: "ZInputNumber",
};
</script>
