import { ExtractPropTypes } from "vue";
export declare const SpaceProps: {
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    size: {
        type: ArrayConstructor;
        default: () => number[];
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignment: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type SpaceProps = ExtractPropTypes<typeof SpaceProps>;
