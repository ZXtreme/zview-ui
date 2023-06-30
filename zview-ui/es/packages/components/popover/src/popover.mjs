const t = [
  "left-start",
  "left",
  "left-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end"
], e = {
  width: {
    type: [String, Number]
  },
  placement: {
    //popover展示出的位置,可选值
    type: String,
    values: t,
    default: "top"
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  content: {
    type: String
  },
  popperClass: {
    //自定义类，给弹出框添加自定义样式
    type: String
  },
  title: {
    type: String
  },
  // 是否禁用popover
  disabled: {
    type: Boolean,
    default: !1
  },
  //触发方式
  trigger: {
    type: String,
    // manual 为 手动激活
    value: ["click", "hover", "manual", "focus"],
    default: "click"
  }
};
export {
  t as PopoverType,
  e as popoverProps
};
