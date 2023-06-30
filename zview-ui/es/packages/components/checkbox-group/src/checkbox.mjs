const e = {
  modelValue: {
    // 是否选中
    type: Boolean,
    default: !1
  },
  label: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  indeterminate: {
    // 全选 和 非全选 的中间态样式
    type: Boolean,
    default: !1
  },
  border: {
    // 带有边框
    type: Boolean,
    default: !1
  }
};
export {
  e as CheckBoxProps
};
