import { ExtractPropTypes } from "vue";
export declare const ScrollThumbProps: {
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
    maxHeight: {
        type: NumberConstructor;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    viewHeight: {
        type: NumberConstructor;
    };
    viewWidth: {
        type: NumberConstructor;
    };
    thumbHeight: {
        type: NumberConstructor;
    };
    thumbWidth: {
        type: NumberConstructor;
    };
    native: {
        type: BooleanConstructor;
    };
    always: {
        type: BooleanConstructor;
    };
    noresize: {
        type: BooleanConstructor;
    };
    retio: {
        type: NumberConstructor;
    };
    move: {
        type: StringConstructor;
        values: string[];
    };
};
export declare type ScrollThumbProps = ExtractPropTypes<typeof ScrollThumbProps>;
