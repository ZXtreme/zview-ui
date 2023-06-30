import { ExtractPropTypes } from "vue";

export const CheckboxGroupProps = {
  modelValue: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  }
}

export type CheckboxGroupProps = ExtractPropTypes<typeof CheckboxGroupProps>;