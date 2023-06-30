import { ExtractPropTypes } from "vue";
export declare const CheckboxGroupProps: {
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CheckboxGroupProps = ExtractPropTypes<typeof CheckboxGroupProps>;
