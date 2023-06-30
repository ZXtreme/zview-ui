import { ExtractPropTypes, PropType } from "vue";

export interface TimeAxisItem {
  time: number | string,
  title: string,
  content: string,
  src: string
}

export const TimeAxisProps = {
  timeAxisItems: {
    type: Array as PropType<TimeAxisItem[]>,
    default: []
  },
  single: { // 是否单列排布，默认双列
    type: Boolean,
    default: false
  }
}

export type TimeAxisProps = ExtractPropTypes<typeof TimeAxisProps>