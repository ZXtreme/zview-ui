import type { ExtractPropTypes } from "vue";
export declare const timelineItemProps: {
    timestamp: {
        type: StringConstructor;
        default: string;
    };
    hideTimestamp: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    icon: {
        type: StringConstructor;
    };
    hollow: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;
