import type { ExtractPropTypes } from "vue";
export declare const BacktopProps: {
    visibilityHeight: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type BacktopProps = ExtractPropTypes<typeof BacktopProps>;
export declare const BacktopEmits: {
    click: (event: MouseEvent) => boolean;
};
export declare type BacktopEmits = typeof BacktopEmits;
