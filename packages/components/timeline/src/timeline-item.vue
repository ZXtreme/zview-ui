<template>
  <li class="z-timeline-item" :class="{ [`z-timeline-item-center`]: center }">
    <div class="z-timeline-item-tail"> </div>

    <div v-if="$slots.dot" class="z-timeline-item-dot">
      <slot name="dot" />
    </div>
    <!-- 优先级：icon > color > type > hollow -->
    <div v-else class="z-timeline-item-node" :style="{ backgroundColor: color }" :class="timelineClasses">
      <z-icon v-if="icon" class="z-timeline-item-icon" :name="icon"></z-icon>
    </div>

    <div class="z-timeline-item-wrapper">
      <div v-if="!hideTimestamp && placement === 'top'" class="z-timeline-item-timestamp z-timeline-item-top">
        {{ timestamp }}
      </div>

      <div class="z-timeline-item-content">
        <slot />
      </div>

      <div v-if="!hideTimestamp && placement === 'bottom'" class="z-timeline-item-timestamp z-timeline-item-bottom">
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { timelineItemProps } from "./timeline-item";
import ZIcon from "../../icon"

const props = defineProps(timelineItemProps);

const timelineClasses = computed(() => {
  const { size, type, hollow } = props;
  return {
    [`z-timeline-item-node--${size}`]: size,
    [`z-timeline-item-node--${type}`]: type,
    [`z-timeline-item-node-hollow`]: hollow,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZTimelineItem",
};
</script>
