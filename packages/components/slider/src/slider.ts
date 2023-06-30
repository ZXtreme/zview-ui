import { definePropType } from "@zview-plus/utils";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

type BasePlacement = "top" | "bottom" | "right" | "left";
type AutoPlacement = "auto" | "auto-start" | "auto-end";
type VariationPlacement =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end";
type Arrayable<T> = T | T[];

type useSizeProp = "large" | "default" | "small";

export type Placement = AutoPlacement | BasePlacement | VariationPlacement;

const placements = Array<Placement>;

export type SliderMarkerClass = {
  style: CSSProperties;
  label: any;
}
type SliderMarks = Record<number, string | SliderMarkerClass>;

export const SliderProps = {
  modelValue: {
    type: definePropType<Arrayable<number>>([Number, Array]),
    default: 0,
  },
  step: {  // slider 的 步长
    type: Number,
    default: 1,
  },
  showStops: { // slider 展示关键点
    type: Boolean,
  },
  marks: { // 关键点 的 label
    type: definePropType<SliderMarks>(Object),
  },
  disabled: { // 禁用
    type: Boolean,
    default: false,
  },
  range: { // 是否 范围选择
    type: Boolean,
    default: false,
  },
  vertical: { // 是否 垂直模式
    type: Boolean,
    default: false,
  },
  height: { // 垂直模式时的滑块高度     水平模式宽度为100%
    type: Number,
    default: 6,
  },
  width: {
    type: Number
  },

  // tooltip 的 props
  showTooltip: { // 展示文字提示
    type: Boolean,
    default: true,
  },
  formatTooltip: { // 格式化文字
    type: definePropType<(val: number) => number | string>(Function),
    default: undefined,
  },
  placement: { // tooltip 位置
    type: String,
    values: placements,
    default: "top",
  },

  // input-number 的 props
  showInput: { // 是否使用 input-number
    type: Boolean,
    default: false,
  },
  inputSize: {  // input-number 的大小
    type: String as PropType<useSizeProp>,
    default: "default",
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  showInputControls: { // 是否展示 input-number 的加减控件
    type: Boolean,
    default: true,
  },
};

export type SliderProps = ExtractPropTypes<typeof SliderProps>;
