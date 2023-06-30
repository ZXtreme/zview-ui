const e = {
  modelValue: {
    type: [String, Number],
    default: -1
  },
  options: {
    type: Array,
    default: () => []
  },
  inline: {
    type: Boolean,
    default: !0
  }
};
export {
  e as RadioProps
};
