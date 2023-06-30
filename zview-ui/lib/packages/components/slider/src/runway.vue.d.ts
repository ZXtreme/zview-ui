import { type SliderMarkerClass } from "./slider";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showStops: {
        type: BooleanConstructor;
    };
    marks: {
        type: import("vue").PropType<{
            [x: number]: string | SliderMarkerClass;
        }>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    placement: {
        type: StringConstructor;
        values: import("./slider").Placement[];
        default: string;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: import("vue").PropType<"default" | "large" | "small">;
        default: string;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<number | number[]>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        showStops: {
            type: BooleanConstructor;
        };
        marks: {
            type: import("vue").PropType<{
                [x: number]: string | SliderMarkerClass;
            }>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: NumberConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        formatTooltip: {
            type: import("vue").PropType<(val: number) => string | number>;
            default: undefined;
        };
        placement: {
            type: StringConstructor;
            values: import("./slider").Placement[];
            default: string;
        };
        showInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputSize: {
            type: import("vue").PropType<"default" | "large" | "small">;
            default: string;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        showInputControls: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onInput?: ((...args: any[]) => any) | undefined;
    }>>;
    slider_runway: import("vue").Ref<HTMLDivElement | null>;
    btn1: any;
    btn2: any;
    btn1Site: import("vue").Ref<number>;
    btn2Site: import("vue").Ref<number>;
    tip1: import("vue").Ref<string | number>;
    tip2: import("vue").Ref<string | number>;
    barStart: import("vue").Ref<number>;
    barEnd: import("vue").Ref<number>;
    stepArr: import("vue").Ref<number[]>;
    isDraw: import("vue").Ref<boolean>;
    site: import("vue").Ref<number>;
    emits: (event: "change" | "input", ...args: any[]) => void;
    handleMarks: import("vue").ComputedRef<string[]>;
    stopArr: import("vue").ComputedRef<number[]>;
    getStepArrIndex: (val: number) => [number[], number];
    barStyle: import("vue").ComputedRef<{
        bottom: string;
        height: string;
        left?: undefined;
        width?: undefined;
    } | {
        left: string;
        width: string;
        bottom?: undefined;
        height?: undefined;
    }>;
    setMarkerSite: (val: number, flag: "btn1" | "btn2") => void;
    setBarStartEnd: () => void;
    runwayClick: (e: MouseEvent) => boolean;
    getPartWidth: import("vue").ComputedRef<number>;
    update: () => void;
    ZSliderMarker: import("vue").DefineComponent<{
        modelValue: {
            type: import("vue").PropType<number | number[]>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        showStops: {
            type: BooleanConstructor;
        };
        marks: {
            type: import("vue").PropType<{
                [x: number]: string | SliderMarkerClass;
            }>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: NumberConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        formatTooltip: {
            type: import("vue").PropType<(val: number) => string | number>;
            default: undefined;
        };
        placement: {
            type: StringConstructor;
            values: import("./slider").Placement[];
            default: string;
        };
        showInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputSize: {
            type: import("vue").PropType<"default" | "large" | "small">;
            default: string;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        showInputControls: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<number | number[]>;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            showStops: {
                type: BooleanConstructor;
            };
            marks: {
                type: import("vue").PropType<{
                    [x: number]: string | SliderMarkerClass;
                }>;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            range: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: NumberConstructor;
                default: number;
            };
            width: {
                type: NumberConstructor;
            };
            showTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
            formatTooltip: {
                type: import("vue").PropType<(val: number) => string | number>;
                default: undefined;
            };
            placement: {
                type: StringConstructor;
                values: import("./slider").Placement[];
                default: string;
            };
            showInput: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputSize: {
                type: import("vue").PropType<"default" | "large" | "small">;
                default: string;
            };
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            showInputControls: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            "onUpdate:isDraw"?: ((...args: any[]) => any) | undefined;
            onSetMarkerSite?: ((...args: any[]) => any) | undefined;
        }>>;
        emits: (event: "update:isDraw" | "setMarkerSite", ...args: any[]) => void;
        attrs: {
            [x: string]: unknown;
        };
        btn: import("vue").Ref<HTMLDivElement | null>;
        site: import("vue").Ref<number>;
        btnIndex: import("vue").Ref<number>;
        buttonStyle: import("vue").ComputedRef<{
            bottom: string;
            left?: undefined;
        } | {
            left: string;
            bottom?: undefined;
        }>;
        mountMouseEvent: (dom: HTMLDivElement) => void;
        ZTooltip: import("@zview-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
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
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            instance: import("vue").ComponentInternalInstance | null;
            placement: import("vue").Ref<string>;
            content: import("vue").Ref<string | number>;
            width: import("vue").Ref<string | undefined>;
            isShow: import("vue").Ref<boolean>;
            tip: any;
            hide: (tip: any) => void;
            show: (tip: any) => void;
            calcStyle: (Rect: any, tip: any, key: string) => {
                x: number;
                y: number;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        }>>, {
            content: string | number;
            placement: string;
        }>>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:isDraw" | "setMarkerSite")[], "update:isDraw" | "setMarkerSite", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<number | number[]>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        showStops: {
            type: BooleanConstructor;
        };
        marks: {
            type: import("vue").PropType<{
                [x: number]: string | SliderMarkerClass;
            }>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: NumberConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        formatTooltip: {
            type: import("vue").PropType<(val: number) => string | number>;
            default: undefined;
        };
        placement: {
            type: StringConstructor;
            values: import("./slider").Placement[];
            default: string;
        };
        showInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputSize: {
            type: import("vue").PropType<"default" | "large" | "small">;
            default: string;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        showInputControls: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onUpdate:isDraw"?: ((...args: any[]) => any) | undefined;
        onSetMarkerSite?: ((...args: any[]) => any) | undefined;
    }, {
        disabled: boolean;
        vertical: boolean;
        height: number;
        placement: string;
        modelValue: number | number[];
        step: number;
        max: number;
        min: number;
        showStops: boolean;
        range: boolean;
        showTooltip: boolean;
        formatTooltip: (val: number) => string | number;
        showInput: boolean;
        inputSize: "default" | "large" | "small";
        showInputControls: boolean;
    }>;
    isObject: (val: unknown) => val is Record<any, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "input")[], "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showStops: {
        type: BooleanConstructor;
    };
    marks: {
        type: import("vue").PropType<{
            [x: number]: string | SliderMarkerClass;
        }>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    placement: {
        type: StringConstructor;
        values: import("./slider").Placement[];
        default: string;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: import("vue").PropType<"default" | "large" | "small">;
        default: string;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    vertical: boolean;
    height: number;
    placement: string;
    modelValue: number | number[];
    step: number;
    max: number;
    min: number;
    showStops: boolean;
    range: boolean;
    showTooltip: boolean;
    formatTooltip: (val: number) => string | number;
    showInput: boolean;
    inputSize: "default" | "large" | "small";
    showInputControls: boolean;
}>;
export default _sfc_main;
