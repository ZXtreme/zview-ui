import { definePropType as e } from "../../../utils/vue/definePropType.mjs";
const t = Array, l = {
  modelValue: {
    type: e([Number, Array]),
    default: 0
  },
  step: {
    // slider 的 步长
    type: Number,
    default: 1
  },
  showStops: {
    // slider 展示关键点
    type: Boolean
  },
  marks: {
    // 关键点 的 label
    type: e(Object)
  },
  disabled: {
    // 禁用
    type: Boolean,
    default: !1
  },
  range: {
    // 是否 范围选择
    type: Boolean,
    default: !1
  },
  vertical: {
    // 是否 垂直模式
    type: Boolean,
    default: !1
  },
  height: {
    // 垂直模式时的滑块高度     水平模式宽度为100%
    type: Number,
    default: 6
  },
  width: {
    type: Number
  },
  // tooltip 的 props
  showTooltip: {
    // 展示文字提示
    type: Boolean,
    default: !0
  },
  formatTooltip: {
    // 格式化文字
    type: e(Function),
    default: void 0
  },
  placement: {
    // tooltip 位置
    type: String,
    values: t,
    default: "top"
  },
  // input-number 的 props
  showInput: {
    // 是否使用 input-number
    type: Boolean,
    default: !1
  },
  inputSize: {
    // input-number 的大小
    type: String,
    default: "default"
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  showInputControls: {
    // 是否展示 input-number 的加减控件
    type: Boolean,
    default: !0
  }
};
export {
  l as SliderProps
};
