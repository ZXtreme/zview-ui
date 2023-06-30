import { ExtractPropTypes } from "vue";
export declare const badgeProps: {
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    isDot: BooleanConstructor;
    hidden: BooleanConstructor;
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type BadgeProps = ExtractPropTypes<typeof badgeProps>;
