import { ExtractPropTypes, SVGAttributes } from "vue";
import { definePropType } from "@zview-plus/utils";
// import type Progress from "./progress.vue";

export type ProgressColor = { color: string; percentage: number };
export type ProgressFn = (percentage: number) => string;

export const progressProps = {
  type: {
    type: String,
    // 直线、圆形、仪表盘形
    values: ["line", "circle", "dashboard"],
    default: "line"
  },
  // 百分比
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100,
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "warning", "error"],
  },
  // 动画进度条，仅 type 为 'line' 时可用
  indeterminate: {
    type: Boolean,
    default: false,
  },
  // 动画持续时间，单位：秒
  duration: {
    type: Number,
    default: 3,
  },
  // 进度条高度，单位 px
  strokeWidth: {
    type: Number,
    default: 6,
  },
  // 边框终点的形状
  strokeLinecap: {
    type: definePropType<NonNullable<SVGAttributes["stroke-linecap"]>>(String),
    default: "round"
  },
  // 是否展示进度条文本
  showText: {
    type: Boolean,
    default: true,
  },
  // 进度条文本（进度条对应百分比数字的显示）是否在内部，仅 type 为 'line' 时可用
  textInside: {
    type: Boolean,
    default: false,
  },
  // type 为 circle 或 dashboard 时的宽度，单位 px
  width: {
    type: Number,
    default: 126,
  },
  // 进度条背景色
  color: {
    type: definePropType<string | ProgressColor[] | ProgressFn>([
      String,
      Array,
      Function,
    ]),
    default: "",
  },
  // 进度条文字内容格式化
  format: {
    type: definePropType<ProgressFn>(Function),
    default: (percentage: number): string => `${percentage}%`,
  },
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
// export type ProgressInstance = InstanceType<typeof Progress>;
