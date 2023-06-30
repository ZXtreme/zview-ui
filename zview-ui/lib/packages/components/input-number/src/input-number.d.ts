import { ExtractPropTypes } from "vue";
export declare const InputNumberProps: {
    step: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    stepStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    controlsPosition: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    name: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    precision: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type InputNumberProps = ExtractPropTypes<typeof InputNumberProps>;
