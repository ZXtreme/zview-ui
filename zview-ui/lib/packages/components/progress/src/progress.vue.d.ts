import type { CSSProperties } from "vue";
import type { ProgressColor } from "./progress";
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    status: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: import("vue").PropType<"round" | "square" | "inherit" | "butt">;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<string | import("./progress").ProgressFn | ProgressColor[]>;
        default: string;
    };
    format: {
        type: import("vue").PropType<import("./progress").ProgressFn>;
        default: (percentage: number) => string;
    };
}, {
    STATUS_COLOR_MAP: Record<string, string>;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            values: string[];
            default: string;
        };
        percentage: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
        };
        status: {
            type: StringConstructor;
            default: string;
            values: string[];
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        strokeLinecap: {
            type: import("vue").PropType<"round" | "square" | "inherit" | "butt">;
            default: string;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        textInside: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: import("vue").PropType<string | import("./progress").ProgressFn | ProgressColor[]>;
            default: string;
        };
        format: {
            type: import("vue").PropType<import("./progress").ProgressFn>;
            default: (percentage: number) => string;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    progressClasses: import("vue").ComputedRef<{
        [x: string]: string | boolean;
        "z-progress-without-text": boolean;
        "z-progress-text-inside": boolean;
    }>;
    barStyle: import("vue").ComputedRef<CSSProperties>;
    relativeStrokeWidth: import("vue").ComputedRef<string>;
    radius: import("vue").ComputedRef<number>;
    trackPath: import("vue").ComputedRef<string>;
    perimeter: import("vue").ComputedRef<number>;
    rate: import("vue").ComputedRef<1 | 0.75>;
    strokeDashoffset: import("vue").ComputedRef<string>;
    trailPathStyle: import("vue").ComputedRef<CSSProperties>;
    circlePathStyle: import("vue").ComputedRef<CSSProperties>;
    stroke: import("vue").ComputedRef<string>;
    statusIcon: import("vue").ComputedRef<"success" | "warning" | "close">;
    progressTextSize: import("vue").ComputedRef<number>;
    content: import("vue").ComputedRef<string>;
    getColors: (color: ProgressColor[]) => ProgressColor[];
    getCurrentColor: (percentage: number) => string;
    ZIcon: import("@zview-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
            default: string;
        };
        dot: {
            type: BooleanConstructor;
        };
        badge: {
            type: (StringConstructor | NumberConstructor)[];
        };
        color: {
            type: StringConstructor;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                default: string;
            };
            dot: {
                type: BooleanConstructor;
            };
            badge: {
                type: (StringConstructor | NumberConstructor)[];
            };
            color: {
                type: StringConstructor;
            };
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        styleDot: import("vue").ComputedRef<{
            "z-dot": boolean;
        }>;
        badge: import("vue").ComputedRef<string | number | undefined>;
        iconColor: import("vue").ComputedRef<{
            color: string | undefined;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            default: string;
        };
        dot: {
            type: BooleanConstructor;
        };
        badge: {
            type: (StringConstructor | NumberConstructor)[];
        };
        color: {
            type: StringConstructor;
        };
    }>>, {
        name: string;
        dot: boolean;
    }>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    status: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: import("vue").PropType<"round" | "square" | "inherit" | "butt">;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<string | import("./progress").ProgressFn | ProgressColor[]>;
        default: string;
    };
    format: {
        type: import("vue").PropType<import("./progress").ProgressFn>;
        default: (percentage: number) => string;
    };
}>>, {
    type: string;
    color: string | import("./progress").ProgressFn | ProgressColor[];
    width: number;
    indeterminate: boolean;
    format: import("./progress").ProgressFn;
    percentage: number;
    status: string;
    duration: number;
    strokeWidth: number;
    strokeLinecap: "round" | "square" | "inherit" | "butt";
    showText: boolean;
    textInside: boolean;
}>;
export default _sfc_main;
