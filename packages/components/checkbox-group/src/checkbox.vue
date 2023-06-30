<template>
  <label class="z-checkbox" :class="[
    { 'is-checked': isChecked },
    { 'is-disabled': isDisabled },
    { 'is-bordered': border },
  ]">
    <span class="z-checkbox__input" :class="{
      'is-checked': isChecked,
      'is-disabled': isDisabled,
      'is-indeterminate': indeterminate,
    }">
      <span class="z-checkbox__inner"></span>
      <!-- 如果是 checkbox-group，传入的是一个 label 数组，表示被选中的 label -->
      <!-- 如果是单个 checkbox，传入的是布尔值 -->
      <input class="z-checkbox__original" type="checkbox" v-model="model" :disabled="isDisabled" :value="label"
        @change="handleChange" />
    </span>
    <span class="z-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { CheckBoxProps } from "./checkbox";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps(CheckBoxProps);

const checkboxGroup = inject<any>("checkboxGroup", {});

// 可以单独使用 checkbox 也可以使用 checkbox-group 因此需要判断属于哪个情况
const isGroup = computed(() => {
  return checkboxGroup.modelValue && checkboxGroup.modelValue.value.length > 0;
});

const model = computed({
  get() {
    return isGroup.value
      ? checkboxGroup.modelValue && checkboxGroup.modelValue.value
      : props.modelValue;
  },
  set(val) {
    if (isGroup.value) {
      checkboxGroup.changeEvent && checkboxGroup.changeEvent(val);
    } else {
      emit("update:modelValue", val);
    }
  },
});

// 是否选中
const isChecked = computed(() => {
  if (isGroup.value) {
    return model.value.includes(props.label);
  } else {
    return model.value;
  }
});

// 是否禁用
const isDisabled = computed(() => {
  return isGroup.value
    ? (checkboxGroup.disabled && checkboxGroup.disabled.value) || props.disabled
    : props.disabled;
});

const handleChange = () => {
  emit("change", model.value)
};
</script>

<script lang="ts">
export default {
  name: "ZCheckbox",
};
</script>
