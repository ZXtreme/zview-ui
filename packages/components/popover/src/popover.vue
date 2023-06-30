<template>
  <!-- hoverTriggerEnterHandler / hoverTriggerLeaveHandler 控制 hover 触发 -->
  <div ref="target" class="popover-box" @mouseenter="hoverTriggerEnterHandler" @mouseleave="hoverTriggerLeaveHandler">
    <!-- popover 内部元素 -->
    <transition name="slide-fade">
      <div v-show="!disabled && showPopover" :class="['popover-outbox', placement, popperClass]"
        :aria-hidden="disabled || !showPopover ? 'true' : 'false'">
        <div class="popover-arrow" ref="popoverArrow"></div>
        <div :class="['popover-box-content']" :style="popoverStyles">
          <div v-if="title" v-text="title" class="popover-title"></div>
          <slot>{{ content }}</slot>
        </div>
      </div>
    </transition>

    <!-- focusTriggerHandler / blurTriggerHandler 控制 focus 触发 -->
    <!-- clickTriggerHandler 控制 click 触发 -->
    <!-- 传入的 modelValue 控制 manual 触发 -->
    <div ref="reference" class="reference-content" @click="clickTriggerHandler" @mousedown="focusTriggerHandler"
      @mouseup="blurTriggerHandler">
      <slot name="reference"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, CSSProperties } from "vue";
import { onClickOutside } from "@vueuse/core";
import { popoverProps } from "./popover";
const props = defineProps(popoverProps);
const target = ref<null | HTMLDivElement>(null);
const visible = ref(false);

const showPopover = computed(() => {
  if (props.trigger !== "manual") {
    return visible.value;
  } else {
    //自定义触发
    return props.modelValue;
  }
});
const popoverStyles = computed(() => {
  let style: CSSProperties = {};
  if (props.width ?? null) {
    style.width = props.width + "px";
  }
  return style;
});

//计算arrow的位置
const reference = ref<null | HTMLDivElement>(null);
const popoverArrow = ref<null | HTMLDivElement>(null);

onMounted(() => {
  if (props.placement.includes("top") || props.placement.includes("bottom")) {
    let clientWidth = reference.value!.clientWidth;
    // 设置箭头的位置为触发popover元素的中间
    popoverArrow.value!.style.setProperty(
      "--geticonsite",
      clientWidth / 2 + "px",
    );
  } else if (props.placement.includes("left") || props.placement.includes("right")) {
    let clientHeight = reference.value!.clientHeight;
    popoverArrow.value!.style.setProperty(
      "--geticonsite",
      clientHeight / 2 + "px",
    );
  }
});

const timer = ref<null | NodeJS.Timeout>(null);
//点击触发
function clickTriggerHandler() {
  if (props.trigger.toLowerCase() === "click") {
    if (!props.disabled) {
      visible.value = !visible.value;
    }
  }
}
//点击外部区域，关闭tip
// @ts-ignore
onClickOutside(target, (event) => {
  visible.value = false;
});
//聚焦触发
function focusTriggerHandler() {
  if (props.trigger.toLowerCase() === "focus") {
    if (!props.disabled) {
      visible.value = true;
    }
  }
}
//失焦消失
function blurTriggerHandler() {
  if (props.trigger.toLowerCase() === "focus") {
    if (!props.disabled) {
      visible.value = false;
    }
  }
}
//hover——鼠标移入触发
function hoverTriggerEnterHandler() {
  if (props.trigger.toLowerCase() === "hover") {
    if (!props.disabled) {
      clearTimeout(timer.value!);
      visible.value = true;
    }
  }
}
//hover——鼠标移出,关闭popover 
// tips:当鼠标移出时，有个300ms的延时，如果在期间再次移入，则清空定时器，并当再次移出时，重新计时
function hoverTriggerLeaveHandler() {
  if (props.trigger.toLowerCase() === "hover") {
    if (!props.disabled) {
      timer.value = setTimeout(() => {
        visible.value = false;
      }, 300);
    }
  }
}
</script>
<script lang="ts">
export default {
  name: "ZPopover",
};
</script>
