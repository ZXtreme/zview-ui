import { ExtractPropTypes } from "vue";
export declare const dialogProps: {
    title: {
        type: StringConstructor;
    };
    modelValue: BooleanConstructor;
    align: {
        type: StringConstructor;
        values: string[];
    };
    bgColor: {
        type: StringConstructor;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollLock: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type DialogProps = ExtractPropTypes<typeof dialogProps>;
