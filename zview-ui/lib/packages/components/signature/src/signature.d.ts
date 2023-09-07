import { ExtractPropTypes } from "vue";
export declare const SignatureProps: {
    backgroundColor: {
        type: StringConstructor;
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
    reserveBackgroundColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    pictureFormat: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    clear: {
        type: StringConstructor;
        default: string;
    };
    confirm: {
        type: StringConstructor;
        default: string;
    };
};
export declare type SignatureProps = ExtractPropTypes<typeof SignatureProps>;
