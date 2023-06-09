<template>
  <!-- 将 teleport 标签里面的内容全部挂载到 body上面 -->
  <Teleport to="body">
    <transition name="fade">
      <div :class="['z-dialog-default', customClass]" v-if="modelValue">
        <div class="z-dialog-contentbox" :style="contentStyle" :class="[centerClass, draggableClass]" ref="dragEl">
          <!-- header -->
          <div class="z-dialog-header" v-if="$slot['header'] || title">
            <p class="z-dialog-title" :class="styleClass">
              <slot name="header" v-if="$slot['header']"></slot>
              <span v-else>{{ title }}</span>
            </p>
            <z-icon class="z-dialog-close" name="close1" @click="close" v-if="showClose"></z-icon>
          </div>

          <!-- content -->
          <div class="z-dialog-content">
            <slot name="content"></slot>
          </div>

          <!-- footer -->
          <div class="z-dialog-footer" :class="styleClass" v-if="$slot['footer']">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useSlots, ref, watch, watchEffect, onMounted, computed, nextTick } from "vue";
import { dialogProps } from "./dialog";
import { onClickOutside } from "@vueuse/core";
import ZIcon from "../../icon"

const props = defineProps(dialogProps);
// open 和 close 为 "打开 Dialog 触发" 和 "关闭 Dialog 触发" 的钩子函数
// <z-dialog @open="xxx" @close="xxx"></z-dialog>
const emit = defineEmits(["update:modelValue", "open", "close"]);
const dragEl = ref<null | HTMLDivElement>(null);
const styleClass = computed(() => {  // header 和 footer 是否居中布局
  return {
    [`z-dialog-text--${props.align}`]: props.align,
  };
});
const centerClass = computed(() => {  // 整个模态框是否水平居中和垂直居中
  return {
    "z-dialog-contentbox-center": props.alignCenter,
  };
});
const contentStyle = computed(() => {
  // 设置了 align 属性就不能更改top了
  if (props.alignCenter) {
    return {
      width: props.width,
      backgroundColor: props.bgColor,
    };
  }
  return {
    width: props.width,
    top: props.top,
    backgroundColor: props.bgColor,
  };
});
const draggableClass = computed(() => {  // 是否可拖拽
  return {
    "z-dialog-contentbox-draggable": props.draggable,
  };
});
const $slot = useSlots();
const close = () => {
  emit("close");
  emit("update:modelValue", false);
};
onMounted(() => {
  watchEffect(() => {
    if (props.modelValue) {
      if (props.scrollLock) {
        if (typeof document !== "undefined") {
          document.body.style["overflow"] = "hidden";
        }
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.style["overflow"] = "initial";
      }
    }
  });
});

// @ts-ignore
onClickOutside(dragEl, (event) => {
  if (props.closeOnModal) {
    // modelValue 通过 v-model 传入，同时接收抛出的 update:modelValue 事件
    // 第二个参数为 modelValue 的新值
    emit("update:modelValue", false);
    emit("close");
  }
});

watch(
  () => props.modelValue,
  (val) => {
    if (!val) return;
    nextTick(() => {
      if (dragEl.value) {
        draggable(dragEl.value);
      }
    });
    emit("open");
  },
);

const draggable = (el: HTMLElement) => {
  if (!props.draggable) return;

  let moveEl = el.firstElementChild as HTMLElement;
  const mouseDown = (e: MouseEvent) => {
    //mouseDown定义在这里
    //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
    let X = e.clientX - el.offsetLeft;
    let Y = e.clientY - el.offsetTop;
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX - X + "px";
      el.style.top = e.clientY - Y + "px";
    };
    document.addEventListener("mousemove", move); //鼠标按下
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move); //鼠标抬起就清除掉mousemove事件
    });
  };
  //当我们对着header区域按下鼠标准备移动，绑定事件进行调用
  moveEl.addEventListener("mousedown", mouseDown);
};
</script>
<script lang="ts">
export default {
  name: "ZDialog",
};
</script>
