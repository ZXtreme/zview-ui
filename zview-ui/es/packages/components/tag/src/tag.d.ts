import type { ExtractPropTypes } from "vue";
export declare const tagProps: {
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TagProps = ExtractPropTypes<typeof tagProps>;
export declare const tagEmits: {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
};
export declare type TagEmits = typeof tagEmits;
