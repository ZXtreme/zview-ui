<template>
  <div class="z-checkbox-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { CheckboxGroupProps } from "./checkbox-group"
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps(CheckboxGroupProps);

const modelValue = computed(() => props.modelValue);
const disabled = computed(() => props.disabled);

const changeEvent = (value: any) => {
  emit("update:modelValue", value);
  emit("change", value);
};

provide("checkboxGroup", {
  modelValue,
  disabled,
  changeEvent,
});
</script>

<script lang="ts">
export default {
  name: "ZCheckboxGroup",
};
</script>
