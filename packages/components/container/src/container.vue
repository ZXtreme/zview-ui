<template>
  <section class="z-container" :class="styleClass">
    <slot />
  </section>
</template>
<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { ContainerProps } from "./container";
import type { Component, VNode } from "vue";

const props = defineProps(ContainerProps);
const styleClass = computed(() => {
  return {
    "z-container-horizontal": isVertical.value,
  };
});
const slots = useSlots();
const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  }
  if (props.direction === "horizontal") {
    return false;
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default();
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "ZHeader" || tag === "ZFooter";
    });
  } else {
    return false;
  }
});
</script>

<script lang="ts">
export default {
  name: "ZContainer",
};
</script>
