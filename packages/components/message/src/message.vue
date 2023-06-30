<template>
  <transition name="z-message-fade" @before-leave="onClose && onClose()" @after-leave="$emit('destroy')">
    <div :class="[
      'z-message',
      type ? `z-message--${type}` : ''
    ]" v-show="visible">
      <i :class="`z-message__icon z-icon-${type}`"></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="z-message__content">{{
          message
        }}</p>
        <p v-else v-html="message" class="z-message__content"></p>
      </slot>
      <i v-if="showClose" class="z-message__closeBtn z-icon-close1" @click="close"></i>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { MessageProps } from "./message";
import { onMounted, ref, onUnmounted } from "vue";
const props = defineProps(MessageProps);

const visible = ref(false);
let timer: any = null;

const startTimer = () => {
  visible.value = true;
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
};

const close = () => {
  visible.value = false;
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>
<script lang="ts">
export default {
  name: "ZMessage",
};
</script>