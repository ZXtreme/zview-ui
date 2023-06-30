<template>
  <span>
    <slot></slot>
  </span>
</template>
<script setup lang="ts">
import {
  getCurrentInstance,  // 获取当前组件的实例
  onUnmounted,
  onMounted,
  toRefs,
  ref,
  watchEffect,
  nextTick,
} from "vue";
import { TooltipProps } from "./tooltip";
const props = defineProps(TooltipProps);
const instance = getCurrentInstance();  // 获取当前组件的实例
const { placement, content, width } = toRefs(props);
const isShow = ref(false);
let tip: any = null; // 提示框的实例对象

// 隐藏tooltip
function hide(tip: any) {
  tip && tip.classList.remove("z-tooltip-show");
}

// 显示tooltip
function show(tip: any) {
  tip && tip.classList.add("z-tooltip-show");
}

// getBoundingClientRect 提示框的实例对象 文字提示的位置
// 用于计算 文本提示框 距离浏览器边界的x、y距离
function calcStyle(Rect: any, tip: any, key: string): { x: number; y: number } {
  let y = document.documentElement.scrollTop;
  let x = 0;
  const placements: any = {
    "top-start": () => {
      x += Rect.x;
      y += Rect.y - tip.offsetHeight;
    },
    top: () => {
      x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5;
      y += Rect.y - tip.offsetHeight;
    },
    "top-end": () => {
      x += Rect.x + Rect.width - tip.offsetWidth;
      y += Rect.y - tip.offsetHeight;
    },
    "left-start": () => {
      x += Rect.x - tip.offsetWidth;
      y += Rect.y;
    },
    left: () => {
      x += Rect.x - tip.offsetWidth;
      y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5;
    },
    "left-end": () => {
      x += Rect.x - tip.offsetWidth;
      y += Rect.y + Rect.height - tip.offsetHeight;
    },
    "right-start": () => {
      x += Rect.x + Rect.width;
      y += Rect.y;
    },
    right: () => {
      x += Rect.x + Rect.width;
      y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5;
    },
    "right-end": () => {
      x += Rect.x + Rect.width;
      y += Rect.y + Rect.height - tip.offsetHeight;
    },
    "bottom-start": () => {
      x += Rect.x;
      y += Rect.y + Rect.height;
    },
    bottom: () => {
      x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5;
      y += Rect.y + Rect.height;
    },
    "bottom-end": () => {
      x += Rect.x + Rect.width - tip.offsetWidth;
      y += Rect.y + Rect.height;
    },
  };
  placements[key]();
  return { x, y };
}

onMounted(() => {
  const el = instance?.proxy?.$el;
  // 构建 内容提示框 的DOM元素
  tip = document.createElement("div");
  tip.className = `z-tooltip z-tooltip-${placement!.value}`;
  width?.value && (tip.style.width = width.value);
  document.body.appendChild(tip);

  // 监听isShow变化，监听有无 hover 组件
  watchEffect(() => {
    tip.innerHTML = `<span>${content?.value}</span>` || "";
    // 下个宏循环才能获取，加上nextTick
    nextTick(() => {
      // 默认取得插件内第一个元素，并获取它的坐标
      const Rect = instance?.proxy?.$el.firstElementChild.getBoundingClientRect();
      const { x, y } = calcStyle(Rect, tip, placement.value);
      tip.style.top = y + "px";
      tip.style.left = x + "px";
    });
    tip.className = `z-tooltip z-tooltip-${placement!.value}`;
    width?.value && (tip.style.width = width.value);

    if (isShow.value) show(tip)
    else hide(tip);
  });

  // 退出页面后删除全部的结点
  onUnmounted(() => {
    tip && document.body.removeChild(tip);
  });

  const timer = ref<null | NodeJS.Timeout>(null);
  // 监听有无接触组件，接触了为true，离开为 false
  el &&
    el.addEventListener("mouseenter", () => {
      clearTimeout(timer.value!);
      isShow.value = true;
    });

  el &&
    el.addEventListener("mouseleave", () => {
      timer.value = setTimeout(() => {
        isShow.value = false;
      }, 500);
    });
});
</script>

<script lang="ts">
export default {
  name: "ZTooltip",
};
</script>
