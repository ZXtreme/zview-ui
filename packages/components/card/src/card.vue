<template>
  <div class="z-card" :class="styleClass">
    <div v-if="$slots.header || header" class="z-card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="z-card-body" :style="bodyStyle">
      <slot />
    </div>
    <div v-if="$slots.handle || handle" class="z-card-handle">
      <slot name="handle">{{ handle }}</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { cardProps } from "./card";
const props = defineProps(cardProps);
const styleClass = computed(() => {
  return {
    [`z-card-shadow--${props.shadow}`]: props.shadow,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZCard",
};
</script>
