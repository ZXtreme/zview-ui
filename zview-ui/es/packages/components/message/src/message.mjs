const t = {
  message: String,
  type: {
    type: String,
    values: ["success", "info", "warning", "error"],
    default: "info"
  },
  duration: {
    type: Number,
    validator(e) {
      return e > 0;
    },
    default: 3e3
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  showClose: {
    type: Boolean,
    default: !1
  },
  onClose: {
    type: Function
  }
};
export {
  t as MessageProps
};
