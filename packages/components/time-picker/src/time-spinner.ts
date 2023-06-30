import { ExtractPropTypes } from "vue";

export const TimeSpinnerProps = {
  hours: {
    type: Number
  },
  minutes: {
    type: Number
  },
  seconds: {
    type: Number
  },
  title: {
    type: String,
    default: ""
  },
}

export type TimeSpinnerProps = ExtractPropTypes<typeof TimeSpinnerProps>