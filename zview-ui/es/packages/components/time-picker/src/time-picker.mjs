const e = {
  modelValue: [String, Array],
  // 输入样例：["00:11:22", "23:44:55"]、"00:11:22"
  placeholder: {
    type: String,
    default: ""
  },
  // 类型，单时间 和 时间范围 选择
  type: {
    type: String,
    values: ["time", "timerange"],
    default: "time"
  },
  // 展示的时间格式
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  // 是否有 确认 和 清空 按钮
  confirm: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 选择范围时的分隔符
  separator: {
    type: String,
    default: " - "
  },
  readonly: {
    type: Boolean,
    default: !1
  }
};
export {
  e as TimePickerProps
};
