<template>
  <span class="z-avatar" :class="styleClass" :style="sizeStyle">
    <img v-if="(src || srcSet) && !hasLoadError" :src="src" :alt="alt" :srcset="srcSet" :style="fitStyle"
      @error="handleError" />
    <!-- 此 error 事件为原生事件，加载失败时触发 -->
    <z-icon v-else-if="icon" :name="icon"> </z-icon>
    <slot v-else />
  </span>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { avatarEmits, avatarProps } from "./avatar";
import type { CSSProperties } from "vue";
import ZIcon from "../../icon";

const props = defineProps(avatarProps);
const emit = defineEmits(avatarEmits);

const hasLoadError = ref(false);

const styleClass = computed(() => {
  return {
    [`z-avatar-size--${props.size}`]: typeof props.size !== "number",
    [`z-avatar--${props.shape}`]: props.shape,
    [`z-avatar-border--${props.border}`]: props.border,
  };
});

const sizeStyle = computed<CSSProperties>(() => {
  const { size } = props;
  return typeof size === "number"
    ? { width: size + "px", height: size + "px" }
    : {};
});

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}));

watch(
  () => props.src,
  () => (hasLoadError.value = false),
);

function handleError(e: Event) {
  hasLoadError.value = true;
  emit("error", e);
}
</script>

<script lang="ts">
export default {
  name: "ZAvatar",
};
</script>
