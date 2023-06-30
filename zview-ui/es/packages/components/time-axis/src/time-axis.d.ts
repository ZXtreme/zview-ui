import { ExtractPropTypes, PropType } from "vue";
export interface TimeAxisItem {
    time: number | string;
    title: string;
    content: string;
    src: string;
}
export declare const TimeAxisProps: {
    timeAxisItems: {
        type: PropType<TimeAxisItem[]>;
        default: never[];
    };
    single: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TimeAxisProps = ExtractPropTypes<typeof TimeAxisProps>;
