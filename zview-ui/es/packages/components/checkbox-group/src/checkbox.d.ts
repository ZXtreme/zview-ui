import { ExtractPropTypes } from "vue";
export declare const CheckBoxProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CheckBoxProps = ExtractPropTypes<typeof CheckBoxProps>;
