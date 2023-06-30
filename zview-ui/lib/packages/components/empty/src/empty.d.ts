import type { ExtractPropTypes } from "vue";
export declare const EmptyProps: {
    image: {
        type: StringConstructor;
        default: string;
    };
    imageSize: NumberConstructor;
    description: {
        type: StringConstructor;
        default: string;
    };
};
export declare type EmptyProps = ExtractPropTypes<typeof EmptyProps>;
