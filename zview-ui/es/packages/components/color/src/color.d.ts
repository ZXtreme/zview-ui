import type { ExtractPropTypes, PropType } from "vue";
export declare const ColorProps: {
    main: {
        type: StringConstructor;
        default: string;
    };
    mainTitle: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: PropType<string[]>;
        require: boolean;
        default: never[];
    };
};
export declare type ColorProps = ExtractPropTypes<typeof ColorProps>;
