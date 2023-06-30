import { ExtractPropTypes } from "vue";
export declare const SwitchProps: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    activeIcon: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    inactiveIcon: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    inlinePrompt: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type SwitchProps = ExtractPropTypes<typeof SwitchProps>;
