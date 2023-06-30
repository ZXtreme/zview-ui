<template>
  <div class="z-radio">
    <div class="z-item-radio" v-for="item in options" :key="item.id" :style="inlineStyle" @click="change(item, item.id)"
      :class="[
        { active: radioId === String(item.id) },
        { 'z-item-disabled-radio': item.disabled },
      ]">
      <span class="z-radio-item-button"></span>
      <span class="z-radio-item-label">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { RadioProps, OptionsItem } from "./radio";

const props = defineProps(RadioProps);
const emit = defineEmits(["change"]);

const radioId = ref(props.modelValue);
const isInline = ref("inline-flex");

const inlineStyle = computed(() => {
  props.inline ? isInline.value : (isInline.value = "flex");
  return { display: `${isInline.value}` };
})

const change = (item: OptionsItem, id: number): void => {
  if (!item.disabled) {
    radioId.value = String(id);
    emit("change", item);
  }
};
</script>

<script lang="ts">
export default {
  name: "ZRadio",
};
</script>
