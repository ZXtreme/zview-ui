<template>
  <div class="z-icon">
    <i :class="`z-icon-${props.name}`" :style="iconColor"></i>
    <div v-if="dot" class="z-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { iconProps } from "./icon";
const props = defineProps(iconProps);

//展示图标右上方小红点
const styleDot = computed(() => {
  return { [`z-dot`]: props.dot && !props.badge };
});
// 消息徽标
const badge = computed(() => {
  return props.badge;
});
// 图标颜色
const iconColor = computed(() => {
  return {
    color: props.color,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZIcon",
};
</script>
