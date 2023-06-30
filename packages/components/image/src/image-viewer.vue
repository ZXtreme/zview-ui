<template>
  <div class="z-image">
    <Dialog v-model="visable" bgColor="transparent" width="100%" top="0">
      <template #content>
        <!-- 关闭按钮 -->
        <button type="button" class="btn-close" @click="closeModal" aria-label="Close modal">
          <z-icon name="close1"></z-icon>
        </button>

        <div class="z-image-viewer" style="height: calc(100vh - 40px)">
          <div class="content">
            <!-- 左右箭头 -->
            <div class="arrow">
              <span @click="prev" class="arrowLeft">
                <z-icon name="xiangshang2"></z-icon>
              </span>
              <span @click="next" class="arrowRight">
                <z-icon name="xiangxia1"></z-icon>
              </span>
            </div>
            <!-- 对图片的操作 -->
            <div class="actions">
              <z-icon @click="handleActions('zoomOut')" name="zoomOut"></z-icon>
              <z-icon @click="handleActions('zoomIn')" name="zoomIn"> </z-icon>
              <z-icon @click="handleActions('reset')" name="fullScreen"></z-icon>
              <z-icon @click="handleActions('anticlockwise')" name="refreshLeft"></z-icon>
              <z-icon @click="handleActions('clockwise')" name="refreshRight"></z-icon>
            </div>
            <!-- 图片的展示 -->
            <div class="canvs" ref="canvs">
              <img v-for="(url, i) in urlList" v-show="i === activeIndex"
                :ref="(el) => (imgRefs[i] = el as HTMLImageElement)" :key="url" :src="url" />
            </div>
          </div>
          <slot></slot>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { imageViewerProps } from "./image-viewer";
import ZIcon from "../../icon";
import Dialog from "../../dialog";
import { throttle } from "lodash-es";

const props = defineProps(imageViewerProps);
const emits = defineEmits(["closePreview", "switch"]);

// 正在展示的图片下标
const activeIndex = ref(props.initialIndex);
const transform = ref({
  scale: 1.2,  // 放大倍数
  deg: 0,   // 旋转角度
});
const canvs = ref<HTMLElement | null>(null);
const imgRefs = ref<HTMLElement[]>([]);

const closeModal = () => {
  emits("closePreview");
};

// 第一张预览照片
const isFirst = computed(() => {
  return activeIndex.value === 0;
});
// 最后一张预览照片
const isLast = computed(() => {
  return activeIndex.value === props.urlList.length - 1;
});

const setActiveItem = (index: number) => {
  const len = props.urlList.length;
  activeIndex.value = (index % len + len) % len;
};

// 预览图片的五个操作处理
function handleActions(action: string) {
  const zoomRate = props.zoomRate
  const rotateDeg = 90

  switch (action) {
    case "zoomOut":
      // 放大不能超过原来的7倍
      if (transform.value.scale < 7) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale * zoomRate).toFixed(3),
        );
        if (!canvs.value) break;
        canvs.value.style.setProperty(
          "--scale",
          transform.value.scale.toString(),
        );
      }
      break;
    case "zoomIn":
      // 缩小不能低于原来的1/5
      if (transform.value.scale > 0.2) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale / zoomRate).toFixed(3),
        );
        if (!canvs.value) break;
        canvs.value.style.setProperty(
          "--scale",
          transform.value.scale.toString(),
        );
      }
      break;
    case "clockwise":
      transform.value.deg += rotateDeg;
      canvs.value!.style.setProperty("--deg", transform.value.deg + "deg");
      break;
    case "anticlockwise":
      transform.value.deg -= rotateDeg;
      canvs.value!.style.setProperty("--deg", transform.value.deg + "deg");
      break;
    case "reset":
      resetImg();
      break;
  }
}

// 重置图片的尺寸和角度
const resetImg = () => {
  canvs.value!.style.setProperty("--deg", 0 + "deg");
  canvs.value!.style.setProperty("--scale", "1.2");
  transform.value.scale = 1.2
  transform.value.deg = 0
};

// 上一张图片
const prev = () => {
  if (isFirst.value && !props.infinite) return;
  setActiveItem(activeIndex.value - 1);
  resetImg();
  emits("switch");
};
// 下一张图片
const next = () => {
  if (isLast.value && !props.infinite) return;
  setActiveItem(activeIndex.value + 1);
  resetImg();
  emits("switch");
};

const mousewheelHandler = throttle((e: WheelEvent) => {
  // deltaX：表示用户在水平方向上滚动的像素数。如果用户向右滚动滚轮，则 deltaX 是正值，否则是负值。
  // deltaY：表示用户在垂直方向上滚动的像素数。如果用户向下滚动滚轮，则 deltaY 是正值，否则是负值。
  const delta = e.deltaY || e.deltaX;
  handleActions(delta > 0 ? "zoomOut" : "zoomIn");
}, 30);

onMounted(() => {
  //监听鼠标滚动事件
  window.addEventListener("mousewheel", mousewheelHandler);
});

onUnmounted(() => {
  window.removeEventListener("mousewheel", mousewheelHandler);
})

</script>
<script lang="ts">
export default {
  name: "ZImageViewer",
};
</script>