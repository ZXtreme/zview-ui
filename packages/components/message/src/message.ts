import { ExtractPropTypes } from "vue";

export const MessageType = ["success", "info", "warning", "error"];

export const MessageProps = {
  message: String,
  type: {
    type: String,
    values: ["success", "info", "warning", "error"],
    default: "info",
  },
  duration: {
    type: Number,
    validator(value: number) {
      return value > 0
    },
    default: 3000,
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function
  },
};

export type MessageProps = ExtractPropTypes<typeof MessageProps>;
