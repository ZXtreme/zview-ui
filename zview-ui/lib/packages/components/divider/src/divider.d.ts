import { ExtractPropTypes } from "vue";
export declare const DividerProps: {
    direction: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    contentPosition: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    borderStyle: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type DividerProps = ExtractPropTypes<typeof DividerProps>;
