<template>
  <div class="z-empty">
    <div class="z-empty-image" :style="imageStyle">
      <!-- ondragstart 不允许拖动 -->
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <empty-img />
      </slot>
    </div>
    <div class="z-empty-description">
      <slot v-if="$slots.description" name="description" />
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="z-empty-bottom">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import EmptyImg from "./empty-img.vue";
import { EmptyProps } from "./empty";

const props = defineProps(EmptyProps);

const emptyDescription = computed(() => props.description || "description");
const imageStyle = computed(() => {
  return {
    width: props.imageSize ? `${props.imageSize}px` : ""
  }
});
</script>

<script lang="ts">
export default {
  name: "ZEmpty",
};
</script>
