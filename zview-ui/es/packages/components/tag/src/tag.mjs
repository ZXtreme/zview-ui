const t = {
  // 是否可关闭
  closable: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", "primary"],
    default: "primary"
  },
  // 背景色
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ["medium", "small", "large"],
    default: "medium"
  },
  theme: {
    type: String,
    values: ["dark", "plain"],
    default: "plain"
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: !1
  }
}, a = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
};
export {
  a as tagEmits,
  t as tagProps
};
