<template>
  <div class="z-badge">
    <slot />
    <sup v-show="!hidden && (content || isDot)" :class="styleClass" v-text="content" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { badgeProps } from "./badge";
const props = defineProps(badgeProps);
const styleClass = computed(() => {
  //动态添加type的样式
  if (props.type && props.value && !props.isDot) {
    return {
      [`z-badge-type--${props.type}`]: props.type,
    };
  }
  //动态添加is-dot的样式
  return {
    "is-dot": props.isDot,
  };
});
const content = computed<string>(() => {
  if (props.isDot) return "";
  // string 类型正常显示，number 类型如果设置了max，最大展示值为 max+
  if (typeof props.value === "number" && typeof props.max === "number") {
    return props.max < props.value ? `${props.max}+` : `${props.value}`;
  }
  return `${props.value}`;
});
defineExpose({
  /** 向外暴露 badge content */
  content
});
</script>

<script lang="ts">
export default {
  name: "ZBadge",
};
</script>

