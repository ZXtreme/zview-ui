<template>
  <a class="z-link" v-bind="attrs" :class="styleClass">
    <slot />
  </a>
</template>
<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { LinkProps } from "./link";
const props = defineProps(LinkProps);
const attrs = useAttrs();
const styleClass = computed(() => {
  return {
    [`z-link--${props.type}`]: props.type,
    "is-disabled": props.disabled,
    "is-underline": props.underline,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZLink",
};
</script>
