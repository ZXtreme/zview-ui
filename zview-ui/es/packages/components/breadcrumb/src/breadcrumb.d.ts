import type { ExtractPropTypes } from "vue";
export declare const BreadcrumbProps: {
    separator: {
        type: StringConstructor;
        default: string;
    };
    separatorIcon: {
        type: StringConstructor;
        default: string;
    };
};
export declare type BreadcrumbProps = ExtractPropTypes<typeof BreadcrumbProps>;
