<template>
  <span class="z-tag" :class="tagClasses" :style="{ backgroundColor: color }" @click="handleClick">
    <span class="z-tag-content">
      <slot />
    </span>
    <z-icon v-if="closable" name="close" class="z-tag-close" @click.stop="handleClose"></z-icon>
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { tagEmits, tagProps } from "./tag";
import ZIcon from "../../icon"

const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);

const tagClasses = computed(() => {
  const { type, theme, round, size } = props;
  return {
    [`z-tag-round`]: round,
    [`z-tag--${type}`]: type,
    [`z-tag--${size}`]: size,
    [`is-${theme}`]: theme,
  };
});

// methods
const handleClose = (event: MouseEvent) => {
  emit("close", event);
};

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<script lang="ts">
export default {
  name: "ZTag",
};
</script>
