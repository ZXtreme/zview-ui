import type { ExtractPropTypes } from "vue";
export declare const ResultProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type ResultProps = ExtractPropTypes<typeof ResultProps>;
