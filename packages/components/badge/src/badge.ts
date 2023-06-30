import { ExtractPropTypes } from "vue";

export const badgeProps = {
  //徽标的值
  value: {
    type: [String, Number],
    default: "",
  },
  //最大显示数值
  max: {
    type: Number,
    default: 99,
  },
  //是否显示小红点，会覆盖 type 的样式
  isDot: Boolean,
  //是否隐藏徽标
  hidden: Boolean,
  //徽标的类型
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger",
  },
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
