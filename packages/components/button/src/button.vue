<template>
  <button class="z-button" :disabled="props.disabled" :class="styleClass" @click="handleClick">
    <span>
      <i v-if="icon !== ''" :class="`z-icon-${icon}`"></i>
    </span>
    <slot />
  </button>
</template>
<script setup lang="ts">
import { computed, toRefs } from "vue";
import { ButtonProps } from "./button";
const props = defineProps(ButtonProps);
const emits = defineEmits(["click"]);

const handleClick = () => {
  emits("click");
};

const { icon } = toRefs(props);
const styleClass = computed(() => {
  return {
    [`z-button--${props.type}`]: props.type,
    [`z-button--${props.size}`]: props.size,
    "is-plain": props.plain,
    "is-round": props.round,
    "is-disabled": props.disabled,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZButton",
};
</script>
