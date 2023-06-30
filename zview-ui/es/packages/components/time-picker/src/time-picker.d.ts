import { ExtractPropTypes } from "vue";
export declare const TimePickerProps: {
    modelValue: (StringConstructor | ArrayConstructor)[];
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirm: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TimePickerProps = ExtractPropTypes<typeof TimePickerProps>;
