import type { ExtractPropTypes, PropType } from "vue";

export const carouselProps = {
  data: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  // 初始下标
  initialIndex: {
    type: Number,
    default: 0,
  },
  // 高度
  height: {
    type: String,
    default: "",
  },
  // 指示器（底部小圆点）的触发方式
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover",
  },
  // 自动切换
  autoplay: {
    type: Boolean,
    default: true,
  },
  // 切换间隔，单位 ms
  interval: {
    type: Number,
    default: 3000,
  },
  // 指示器位置
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],  // 内部，无指示器，外部
    default: "",
  },
  // 指示器形状
  indicatorType: {
    type: String,
    values: ["circle", "rect"],
    default: "circle",
  },
  // 箭头显示方法
  arrow: {
    type: String,
    values: ["always", "hover", "never"],  // 一直显示，hover 显示，不显示
    default: "hover",
  },
  // 是否无限循环切换
  loop: {
    type: Boolean,
    default: true,
  },
  // 走马灯切换方向
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  // 鼠标悬浮时是否停止自动切换
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
};

export const carouselEmits = {
  change: (current: number, prev: number) =>
    [current, prev].every((i) => {
      return Number.isInteger(i);
    }),
};

export type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export type CarouselEmits = typeof carouselEmits;
