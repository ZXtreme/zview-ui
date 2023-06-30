import type { ExtractPropTypes } from "vue";
export declare const AlertProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    showIcon: BooleanConstructor;
    effect: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type AlertProps = ExtractPropTypes<typeof AlertProps>;
export declare const AlertEmits: {
    close: (event: MouseEvent) => boolean;
};
export declare type AlertEmits = typeof AlertEmits;
