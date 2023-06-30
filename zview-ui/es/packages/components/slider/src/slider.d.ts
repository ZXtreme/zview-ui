import { CSSProperties, ExtractPropTypes, PropType } from "vue";
declare type BasePlacement = "top" | "bottom" | "right" | "left";
declare type AutoPlacement = "auto" | "auto-start" | "auto-end";
declare type VariationPlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
declare type Arrayable<T> = T | T[];
declare type useSizeProp = "large" | "default" | "small";
export declare type Placement = AutoPlacement | BasePlacement | VariationPlacement;
export declare type SliderMarkerClass = {
    style: CSSProperties;
    label: any;
};
declare type SliderMarks = Record<number, string | SliderMarkerClass>;
export declare const SliderProps: {
    modelValue: {
        type: PropType<Arrayable<number>>;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showStops: {
        type: BooleanConstructor;
    };
    marks: {
        type: PropType<SliderMarks>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: PropType<(val: number) => number | string>;
        default: undefined;
    };
    placement: {
        type: StringConstructor;
        values: Placement[];
        default: string;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: PropType<useSizeProp>;
        default: string;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type SliderProps = ExtractPropTypes<typeof SliderProps>;
export {};
