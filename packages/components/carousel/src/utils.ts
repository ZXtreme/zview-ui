import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  unref,
  watch,
} from "vue";
import type { SetupContext } from "vue";
import type { CarouselEmits, CarouselProps } from "./carousel";
import { throttle } from "lodash-es";


// 防抖间隔
const THROTTLE_TIME = 350;

export const useCarousel = (
  props: CarouselProps,
  emit: SetupContext<CarouselEmits>["emit"]
) => {

  const activeIndex = ref(props.initialIndex);
  const timer = ref<ReturnType<typeof setInterval> | null>(null);
  const root = ref<HTMLDivElement>();
  const transitionItem = ref<HTMLDivElement>();
  // 图片src数组
  const { data } = props
  const hover = ref<boolean>(false);
  const animating = ref<boolean>(true);

  // computed
  const isVertical = computed(() => props.direction === "vertical");
  const arrowDisplay = computed(
    () => props.arrow !== "never" && !unref(isVertical),
  );

  // methods
  const throttledArrowClick = throttle(
    (index: number) => {
      setActiveItem(index);
    }, THROTTLE_TIME);

  const throttledIndicatorHover = throttle((index: number) => {
    handleIndicatorHover(index);
  }, THROTTLE_TIME);

  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }

  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value) return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }

  const playSlides = () => {
    const length = data.length
    if (activeIndex.value < length - 1 || (props.loop && activeIndex.value < length)) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0
    }
  };

  function setActiveItem(index: number) {
    const length = data.length;
    if (!props.loop && (index < 0 || index >= length)) return
    if (props.loop && (index < -1 || index > length)) index = (index % length + length) % length;
    activeIndex.value = index
    resetTimer();
  }

  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }

  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }

  function handleIndicatorClick(index: number) {
    activeIndex.value = index;
  }

  function handleIndicatorHover(index: number) {
    if (props.trigger === "hover" && index !== activeIndex.value) {
      activeIndex.value = index;
    }
  }

  function prev() {
    setActiveItem(activeIndex.value - 1);
  }

  function next() {
    setActiveItem(activeIndex.value + 1);
  }

  function resetTimer() {
    pauseTimer();
    startTimer();
  }

  // watch
  watch(
    () => activeIndex.value,
    (current, prev) => {
      const length = data.length;
      if (current === -1 || current === length) return

      if (current === 0 && prev === length) {
        emit("change", current, length - 1);
      }
      else if (current === length - 1 && prev === -1) {
        emit("change", current, 0);
      }
      else {
        emit("change", current, prev);
      }
    },
  );
  watch(
    () => props.autoplay,
    (autoplay) => {
      autoplay ? startTimer() : pauseTimer();
    },
  );
  watch(
    () => props.loop,
    () => {
      setActiveItem(activeIndex.value);
    },
  );

  watch(
    () => props.interval,
    () => {
      resetTimer();
    },
  );

  watch(
    () => props.data,
    () => {
      if (props.data.length > 0) setActiveItem(props.initialIndex);
    },
  );

  const transitionendFn = () => {
    console.log(111);

    if (activeIndex.value === data.length) {
      animating.value = false;
      activeIndex.value = 0;
      setTimeout(() => animating.value = true, 10)
    } else if (activeIndex.value === -1) {
      animating.value = false;
      activeIndex.value = data.length - 1;
      setTimeout(() => animating.value = true, 10)
    }
  }

  onMounted(() => {
    startTimer();
    transitionItem.value?.addEventListener('transitionend', transitionendFn)
  });

  onBeforeUnmount(() => {
    pauseTimer();
    transitionItem.value?.removeEventListener('transitionend', transitionendFn)
  });

  return {
    root,
    transitionItem,
    activeIndex,
    arrowDisplay,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    throttledArrowClick,
    throttledIndicatorHover,
    hover,
    animating
  }
};
