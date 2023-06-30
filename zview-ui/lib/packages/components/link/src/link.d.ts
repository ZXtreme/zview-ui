import { ExtractPropTypes } from "vue";
export declare const LinkType: string[];
export declare const LinkProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    disabled: BooleanConstructor;
    underline: BooleanConstructor;
};
export declare type LinkProps = ExtractPropTypes<typeof LinkProps>;
