<template>
  <div class="z-backtop" :style="backtopStyle" v-if="visible" @click="handleClick">
    <slot>
      <z-icon name="xiangshang1"></z-icon>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import ZIcon from "../../icon";
import { computed } from "vue";
import { BacktopProps, BacktopEmits } from "./backtop";
import { useBacktop } from "./use-backtop";
const props = defineProps(BacktopProps);
const emit = defineEmits(BacktopEmits);
const { handleClick, visible } = useBacktop(props, emit);
const backtopStyle = computed(() => {
  return {
    right: `${props.right}px`,
    bottom: `${props.bottom}px`,
  };
});
</script>

<script lang="ts">
export default {
  name: "ZBacktop",
};
</script>
