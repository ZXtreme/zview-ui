<template>
  <div class="z-result">
    <div>
      <slot name="icon">
        <z-icon :name="props.icon" :class="iconClass" style="font-size: 64px"></z-icon>
      </slot>
    </div>
    <div v-if="title || $slots.title" class="z-result-title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots['sub-title']" class="z-result-sub-title">
      <slot name="sub-title">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" class="z-result-extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { ResultProps } from "./result";
import ZIcon from "../../icon"

const props = defineProps(ResultProps);
const iconClass = computed(() => {
  return {
    [`z-result--${props.icon}`]: props.icon,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZResult",
};
</script>
