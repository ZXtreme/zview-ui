const e = [
  "default",
  "primary",
  "success",
  "warning",
  "danger"
], t = ["large", "normal", "small", "mini"], n = {
  type: {
    type: String,
    values: e
  },
  size: {
    type: String,
    values: t
  },
  plain: Boolean,
  round: Boolean,
  disabled: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  }
};
export {
  n as ButtonProps,
  t as ButtonSize,
  e as ButtonType
};
