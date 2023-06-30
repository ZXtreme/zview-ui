import { ExtractPropTypes } from "vue";
export declare const DrawboardProps: {
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
        validators: (val: number) => boolean;
    };
    eraserWidth: {
        type: NumberConstructor;
        default: number;
        validators: (val: number) => boolean;
    };
    isSave: {
        type: BooleanConstructor;
        default: boolean;
    };
    reserveBackgroundColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    pictureName: {
        type: StringConstructor;
        default: string;
    };
    pictureFormat: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type DrawboardProps = ExtractPropTypes<typeof DrawboardProps>;
