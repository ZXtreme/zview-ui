import { ExtractPropTypes } from "vue";
import type { StyleValue, PropType } from "vue";
export declare const ScrollBarProps: {
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    native: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapStyle: {
        type: PropType<StyleValue>;
        default: string;
    };
    wrapClass: {
        type: StringConstructor;
        default: string;
    };
    viewStyle: {
        type: PropType<StyleValue>;
        default: string;
    };
    viewClass: {
        type: StringConstructor;
        default: string;
    };
    noresize: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
    minSize: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type ScrollBarProps = ExtractPropTypes<typeof ScrollBarProps>;
