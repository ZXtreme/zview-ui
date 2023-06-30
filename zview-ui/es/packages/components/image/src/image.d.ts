import type { ExtractPropTypes } from "vue";
import { PropType } from "vue";
declare type FitProperty = "contain" | "cover" | "fill" | "none" | "scale-down";
export declare const ImageProps: {
    src: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    fit: {
        type: PropType<FitProperty>;
        default: string;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    altImg: {
        type: StringConstructor;
        default: string;
    };
    scrollContainer: {
        type: PropType<HTMLElement>;
    };
    lazyList: {
        type: PropType<string[]>;
        default: never[];
    };
    previewSrcList: {
        type: PropType<string[]>;
        default: never[];
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomRate: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type ImageProps = ExtractPropTypes<typeof ImageProps>;
export {};
