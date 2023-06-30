import { ExtractPropTypes } from "vue";
export declare const InputProps: {
    type: {
        type: StringConstructor;
        values: string[];
    };
    iconBefore: {
        type: StringConstructor;
    };
    iconAfter: {
        type: StringConstructor;
    };
    maxlength: {
        type: NumberConstructor;
    };
    size: {
        type: StringConstructor;
        values: string[];
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
};
export declare type InputProps = ExtractPropTypes<typeof InputProps>;
