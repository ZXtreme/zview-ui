<template>
  <transition>
    <div v-show="visible" :class="alertClass" :style="effectStyle">
      <z-icon v-if="showIcon" :name="type" :class="iconClass"></z-icon>
      <div class="content">
        <span v-if="title || $slots.title" :class="titleClass">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" class="description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div v-if="closeText" class="close-btn is-customed" @click="close">
            {{ closeText }}
          </div>
          <z-icon v-else name="close1" class="close-btn" @click="close">
          </z-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import ZIcon from "../../icon";
import { computed, ref, useSlots } from "vue";
import { AlertProps, AlertEmits } from "./alert";

const props = defineProps(AlertProps);
const emit = defineEmits(AlertEmits);
const slots = useSlots();
const visible = ref(true);

// 容器
const alertClass = computed(() => {
  return {
    "z-alert": true,
    [`z-alert--${props.type}`]: props.type,
    "is-center": props.center,
    [`is-${props.effect}`]: props.effect,
  };
});
// 主题样式
const effectStyle = computed(() => {
  return {
    opacity: visible.value ? 1 : 0,
    "background-color":
      props.effect === "light"
        ? `var(--hv-color-${props.type}-light-9)`
        : `var(--hv-color-${props.type})`,
    color: props.effect === "light" ? `var(--hv-color-${props.type})` : "white",
  };
});

// 标题前面的图标，有 description 或 slot 时 icon 会稍大一点
const iconClass = computed(() => {
  return {
    icon: props.description || slots.default,
  };
});

// 标题
const titleClass = computed(() => {
  return {
    title: true,
    "is-bold": props.description || slots.default,
  };
});

// 关闭alert提示
const close = (event: MouseEvent) => {
  visible.value = false;
  emit("close", event);
};
</script>

<script lang="ts">
export default {
  name: "ZAlert",
};
</script>
