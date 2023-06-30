const t = {
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: ["success", "warning", "info", "error"],
    default: "info"
  },
  // 描述性文本
  description: {
    type: String,
    default: ""
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: !0
  },
  // 文字是否居中
  center: Boolean,
  // 自定义关闭按钮文本
  closeText: {
    type: String,
    default: ""
  },
  // 是否显示类型图标
  showIcon: Boolean,
  // 主题样式
  effect: {
    type: String,
    values: ["light", "dark"],
    default: "light"
  }
}, o = {
  close: (e) => e instanceof MouseEvent
};
export {
  o as AlertEmits,
  t as AlertProps
};
