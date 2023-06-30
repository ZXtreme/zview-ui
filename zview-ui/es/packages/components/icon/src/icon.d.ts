import { ExtractPropTypes } from "vue";
export declare const iconProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
    };
    badge: {
        type: (StringConstructor | NumberConstructor)[];
    };
    color: {
        type: StringConstructor;
    };
};
export declare type IconProps = ExtractPropTypes<typeof iconProps>;
