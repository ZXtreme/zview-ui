import { ExtractPropTypes } from "vue";
export declare type ProgressColor = {
    color: string;
    percentage: number;
};
export declare type ProgressFn = (percentage: number) => string;
export declare const progressProps: {
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    status: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: import("vue").PropType<"round" | "square" | "inherit" | "butt">;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<string | ProgressFn | ProgressColor[]>;
        default: string;
    };
    format: {
        type: import("vue").PropType<ProgressFn>;
        default: (percentage: number) => string;
    };
};
export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;
