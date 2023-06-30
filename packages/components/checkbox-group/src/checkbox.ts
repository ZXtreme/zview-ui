import { ExtractPropTypes } from "vue";

export const CheckBoxProps = {
  modelValue: { // 是否选中
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  indeterminate: { // 全选 和 非全选 的中间态样式
    type: Boolean,
    default: false,
  },
  border: {  // 带有边框
    type: Boolean,
    default: false,
  },
};

export type CheckBoxProps = ExtractPropTypes<typeof CheckBoxProps>;
