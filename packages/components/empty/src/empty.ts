import type { ExtractPropTypes } from "vue";

export const EmptyProps = {
  image: {
    type: String,
    default: "",
  },
  imageSize: Number,  // 图片宽度，Number类型，单位为px
  description: {
    type: String,
    default: "",
  },
};

export type EmptyProps = ExtractPropTypes<typeof EmptyProps>;
