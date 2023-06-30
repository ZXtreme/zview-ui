<template>
  <div ref="root" class="z-carousel" :class="carouselClasses" @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div class="z-carousel-container" :style="{ height }">
      <!-- 左箭头 -->
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button v-show="(arrow === 'always' || hover) && (props.loop || activeIndex > 0)" type="button"
          class="z-carousel-arrow z-carousel-arrow-left" @click.stop="throttledArrowClick(activeIndex - 1)">
          <z-icon name="arrow-left2"></z-icon>
        </button>
      </transition>
      <!-- 右箭头 -->
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button v-show="(arrow === 'always' || hover) && (props.loop || activeIndex < data.length - 1)" type="button"
          class="z-carousel-arrow z-carousel-arrow-right" @click.stop="throttledArrowClick(activeIndex + 1)">
          <z-icon name="arrow-right2"></z-icon>
        </button>
      </transition>

      <!-- 走马灯 -->
      <div class="z-carousel-item">
        <div ref="transitionItem" class="z-carousel-item-container" :style="carouselItemContainerStyle" :class="{
          [`z-carousel-item--animating`]: animating,
          [`z-carousel-item-container-vertical`]: direction === 'vertical'
        }">
          <img class="z-carousel-item-img" :src="data[data.length - 1]">
          <img class="z-carousel-item-img" v-for="(src, index) in data" :key="index" :src="src">
          <img class="z-carousel-item-img" :src="data[0]">
        </div>
      </div>
    </div>

    <!-- 指示器 -->
    <ul v-if="indicatorPosition !== 'none'" class="z-carousel-indicators" :class="indicatorsClasses">
      <li v-for="(_, index) in data" :key="index" class="z-carousel-indicator" :class="{
        'z-carousel-indicator-active': index === activeIndex,
        [`z-carousel-indicator--${props.direction}`]: props.direction,
      }" @mouseenter="throttledIndicatorHover(index)" @click.stop="handleIndicatorClick(index)">
        <button class="z-carousel-indicator-button" :class="indicatorClasses"></button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { carouselEmits, carouselProps } from "./carousel";
import { useCarousel } from "./utils";
import ZIcon from "../../icon";

const props = defineProps(carouselProps);
const emit = defineEmits(carouselEmits);
const {
  root,
  transitionItem,
  activeIndex,
  arrowDisplay,
  hover,
  animating,
  handleIndicatorClick,
  handleMouseEnter,
  handleMouseLeave,
  setActiveItem,
  prev,
  next,
  throttledArrowClick,
  throttledIndicatorHover,
} = useCarousel(props, emit);

const carouselClasses = computed(() => {
  return {
    [`z-carousel--${props.direction}`]: props.direction,
  };
});

const indicatorsClasses = computed(() => {
  return {
    [`z-carousel-indicators--${props.direction}`]: props.direction,
    [`z-carousel-indicators-outside`]: props.indicatorPosition === "outside",
  };
});
const indicatorClasses = computed(() => {
  return {
    [`z-carousel-indicator-button--${props.indicatorType}`]: props.indicatorType,
  };
});

const carouselItemContainerStyle = computed(() => {
  if (props.direction === "horizontal") {
    return {
      left: `${-100 * (activeIndex.value + 1)}%`
    }
  } else {
    return {
      top: `${-100 * (activeIndex.value + 1)}%`
    }
  }
})

defineExpose({
  setActiveItem,
  prev,
  next,
});
</script>

<script lang="ts">
export default {
  name: "ZCarousel",
};
</script>
