<template>
  <header class="z-header" :style="style">
    <slot />
  </header>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { HeaderProps } from "./container";

const props = defineProps(HeaderProps);
const style = computed(() => {
  return {
    height: props.height,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZHeader",
};
</script>
