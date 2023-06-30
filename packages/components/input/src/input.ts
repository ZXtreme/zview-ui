import { ExtractPropTypes } from "vue";

export const InputProps = {
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
    type: Number,
  },
  size: {
    type: String,
    values: ["large", "small"]
  },
  clearable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
};

export type InputProps = ExtractPropTypes<typeof InputProps>;
