import { ExtractPropTypes } from "vue";
export declare const TimeSpinnerProps: {
    hours: {
        type: NumberConstructor;
    };
    minutes: {
        type: NumberConstructor;
    };
    seconds: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
};
export declare type TimeSpinnerProps = ExtractPropTypes<typeof TimeSpinnerProps>;
