<template>
  <div class="z-divider" :class="dividerClass" :style="dividerStyle">
    <!-- 分割线上自定义文本内容，只有水平方向才有 -->
    <!-- 仅支持单行文本内容，不支持多行 -->
    <div v-if="$slots.default && direction !== 'vertical'" class="z-divider-content" :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { DividerProps } from "./divider";

const props = defineProps(DividerProps);
// 分割线显示方向
const dividerClass = computed(() => {
  return {
    [`direction--${props.direction}`]: props.direction,
  };
});
// 分割线样式
const dividerStyle = computed(() => {
  return {
    "--border-style": props.borderStyle,
  }
});
// 插槽内容位置
const contentClass = computed(() => {
  return {
    [`content-position--${props.contentPosition}`]: props.contentPosition,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZDivider",
};
</script>
