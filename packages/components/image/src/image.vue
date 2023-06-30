<template>
  <div ref="container" class="z-image">
    <!-- 正常展示图片 -->
    <img v-if="imageSrc !== '' && !hasLoadError && !lazy" :src="imageSrc" v-bind="$attrs" :style="imageStyle"
      @click="clickHandler" @load="handleLoad" @error="handleError" class="main-img" />

    <!-- 懒加载 -->
    <div class="lazy-imgs" v-if="lazy" ref="scrollContainer">
      <div class="content">
        <div v-for="(url, index) in lazyList" :key="index" class="lazyImg">
          <img :data-src="url" alt="加载中..." :src="altImg" :style="imageStyle" />
        </div>
      </div>
    </div>

    <!-- 无法正常展示：处于加载中或者加载错误，懒加载时无效 -->
    <div class="wrapper" v-if="(isLoading || hasLoadError) && !lazy">
      <slot name="placeholder" v-if="isLoading">
        <div class="placeholder">Loading..</div>
      </slot>
      <slot v-else-if="hasLoadError" name="error">
        <div class="error">Fail</div>
      </slot>
    </div>

    <!-- 图片预览 -->
    <template v-if="preview">
      <z-image-viewer v-if="showViewer" :visable="showViewer" :initial-index="imageIndex" :infinite="infinite"
        :zoom-rate="zoomRate" :url-list="previewSrcList" @closePreview="updateVisable" @switch="switchImg">
        <div v-if="$slots.viewer">
          <slot name="viewer"></slot>
        </div>
      </z-image-viewer>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, ref } from "vue";
import type { CSSProperties } from "vue";
import { ImageProps } from "./image";
import ZImageViewer from "./image-viewer.vue";
import { throttle } from "lodash-es"

const props = defineProps(ImageProps);
const emits = defineEmits(["load", "error", "switch", "close"]);

const imageSrc = ref<string>("");
const hasLoadError = ref(false);
const isLoading = ref(true);

// 是否展示预览图片的大图
const showViewer = ref<boolean>(false);
// 获取 h-image 容器结点
const container = ref<any>(null);
// 开启懒加载功能后，监听 scroll 事件的容器
const scrollContainer = ref<any>(null);

// 动态加载图片的fit样式
const imageStyle = computed(() => {
  const { fit, width, height } = props;
  const style: CSSProperties = {
    width,
    height,
    objectFit: fit
  }
  return style
});

// 预览图片
const preview = computed(() => {
  const { previewSrcList } = props;
  return Array.isArray(previewSrcList) && previewSrcList.length > 0;
});

// 默认展示图片的预览位置，如果传入的 initialIndex 大于等于 previewSrcList 数组长度，默认展示第一张
const imageIndex = computed(() => {
  const { previewSrcList, initialIndex } = props;
  let previewIndex = initialIndex;
  if (initialIndex >= previewSrcList.length) {
    previewIndex = 0;
  }
  return previewIndex;
});

// 图片加载成功后状态更新
const handleLoad = (event: Event) => {
  isLoading.value = false;
  hasLoadError.value = false;
  emits("load", event);
};
// 图片加载失败后状态更新
const handleError = (event: Event) => {
  isLoading.value = false;
  hasLoadError.value = true;
  emits("error", event);
};
// 图片点击事件
const clickHandler = () => {
  //如果 preview 为false，不预览图片
  if (!preview.value) return;

  //阻止 body 滚动
  document.body.style.overflow = "hidden";
  //打开预览界面
  showViewer.value = !showViewer.value;
};

//获取所有懒加载图片的结点
const query = (selector: any) => {
  return Array.from(document.querySelectorAll(selector));
};
const throttleFn = throttle(lazyHandleFn, 200)
function lazyHandleFn() {
  const innerHeight = props.scrollContainer?.offsetHeight ?? window.innerHeight
  const lazyImgs = query(".z-image .lazyImg img[data-src]")
  const father = props.scrollContainer?.getBoundingClientRect().top ?? 0

  if (lazyImgs.length === 0) {
    (props.scrollContainer ?? window).removeEventListener("scroll", throttleFn);
    return
  }
  lazyImgs.forEach((img) => {
    const rect = img.getBoundingClientRect();

    if (rect.top - father < innerHeight) {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    }
  });
}

const lazyLoad = (elRef: HTMLElement | Window) => {
  // 监听滚动事件，做节流处理
  elRef.addEventListener("scroll", throttleFn);
};

watch(
  () => props.scrollContainer,
  () => {
    const containerDom: HTMLElement | Window = props.scrollContainer ?? window
    lazyLoad(containerDom);
  },
  {
    immediate: true
  }
);

// 关闭 image-viewer 触发事件
const updateVisable = () => {
  showViewer.value = false;
  document.body.style.overflow = "auto";
  emits("close");
};
// 切换 image-viewer 展示图片事件
const switchImg = () => {
  emits("switch");
};

onMounted(() => {
  isLoading.value = true;
  hasLoadError.value = false;
  imageSrc.value = props.src;
  if (preview.value) {
    imageSrc.value = props.previewSrcList[imageIndex.value];
  }
  lazyHandleFn()
});
</script>

<script lang="ts">
export default {
  name: "ZImage",
};
</script>
