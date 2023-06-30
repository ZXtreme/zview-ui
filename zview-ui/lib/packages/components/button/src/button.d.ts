import { ExtractPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const ButtonProps: {
    type: {
        type: StringConstructor;
        values: string[];
    };
    size: {
        type: StringConstructor;
        values: string[];
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof ButtonProps>;
