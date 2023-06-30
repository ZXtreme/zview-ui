const e = {
  type: {
    type: String,
    values: ["text", "password", "textarea"]
  },
  iconBefore: {
    type: String
  },
  iconAfter: {
    type: String
  },
  maxlength: {
    type: Number
  },
  size: {
    type: String,
    values: ["large", "small"]
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: [String, Number],
    default: ""
  }
};
export {
  e as InputProps
};
