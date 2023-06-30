import { ExtractPropTypes } from "vue";

export const InputNumberProps = {
  step: {  // 步长
    type: Number,
    default: 1,
    validator: (val: number) => val > 0, // 必须是大于0的整数
  },
  stepStrictly: { // 只能输入step的倍数
    type: Boolean,
    default: false,
  },
  max: {  // 最大值
    type: Number,
    default: Number.POSITIVE_INFINITY,
  },
  min: {  // 最小值
    type: Number,
    default: Number.NEGATIVE_INFINITY,
  },
  modelValue: {  // v-model 值
    type: [Number, String],
    default: ""
  },
  readonly: {  // 是否只读，input 原生属性，与 disabled 类似
    type: Boolean,
    default: false
  },
  disabled: {  // 是否禁用
    type: Boolean,
    default: false,
  },
  size: {  // 计数器大小
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  controlsPosition: {  // 控件按钮位置，默认左减右加，为right则加减按钮都靠右
    type: String,
    default: "",
    values: ["", "right"],
  },
  name: {  // input原生属性，配合label使用
    type: String
  },
  label: {  // 点击 label 相当于点击 计数器
    type: String
  },
  placeholder: {
    type: String
  },
  precision: {  // 精度
    type: Number,
    default: 0,
    validator: (val: number) => Number.isInteger(val) && val >= 0, // 必须是大于等于0的整数
  },
  controls: {  // 是否展示加减控件
    type: Boolean,
    default: true,
  },
};

export type InputNumberProps = ExtractPropTypes<typeof InputNumberProps>;
