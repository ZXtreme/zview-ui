import { ExtractPropTypes, PropType } from "vue";
export interface OptionsItem {
    label: string;
    id: number;
    disabled?: boolean;
}
export declare const RadioProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    options: {
        type: PropType<OptionsItem[]>;
        default: () => never[];
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type RadioProps = ExtractPropTypes<typeof RadioProps>;
