import { ExtractPropTypes } from "vue";
export declare const PopoverType: string[];
export declare const popoverProps: {
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    placement: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: StringConstructor;
    };
    popperClass: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: StringConstructor;
        value: string[];
        default: string;
    };
};
export declare type PopoverProps = ExtractPropTypes<typeof popoverProps>;
