import { ExtractPropTypes } from "vue";
export declare const TooltipType: string[];
export declare const TooltipProps: {
    placement: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    content: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    width: {
        type: StringConstructor;
    };
};
export declare type TooltipProps = ExtractPropTypes<typeof TooltipProps>;
