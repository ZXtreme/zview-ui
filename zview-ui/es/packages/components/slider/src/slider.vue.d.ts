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
            [x: number]: string | import("./slider").SliderMarkerClass;
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
    numberValue: import("vue").Ref<string | number>;
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
                [x: number]: string | import("./slider").SliderMarkerClass;
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
    emits: (event: "change" | "input", ...args: any[]) => void;
    modelValue: import("vue").Ref<number | number[]>;
    runway: any;
    slider: any;
    runway_wraper: any;
    runway_wraper_width: import("vue").Ref<number>;
    change: (val: number | string, val2: number | string) => void;
    input: (val: number | string, val2: number | string) => void;
    changeNumberValue: (val: number) => void;
    updateState: () => void;
    ZInputNumber: import("@zview-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
        step: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
        };
        stepStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            values: string[];
            default: string;
        };
        controlsPosition: {
            type: StringConstructor;
            default: string;
            values: string[];
        };
        name: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        precision: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            step: {
                type: NumberConstructor;
                default: number;
                validator: (val: number) => boolean;
            };
            stepStrictly: {
                type: BooleanConstructor;
                default: boolean;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            min: {
                type: NumberConstructor;
                default: number;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            controlsPosition: {
                type: StringConstructor;
                default: string;
                values: string[];
            };
            name: {
                type: StringConstructor;
            };
            label: {
                type: StringConstructor;
            };
            placeholder: {
                type: StringConstructor;
            };
            precision: {
                type: NumberConstructor;
                default: number;
                validator: (val: number) => boolean;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onFocus?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
        }>>;
        emits: (event: "focus" | "change" | "blur", ...args: any[]) => void;
        disabledClass: import("vue").Ref<string>;
        isDisabled: import("vue").Ref<boolean>;
        min: import("vue").Ref<number>;
        max: import("vue").Ref<number>;
        step: import("vue").Ref<number>;
        stepStrictly: import("vue").Ref<boolean>;
        precision: import("vue").Ref<number>;
        readonly: import("vue").Ref<boolean>;
        numberValue: import("vue").Ref<string | number>;
        oldVal: import("vue").Ref<string | number>;
        input: any;
        judgeLocation: (val: number, start: number, end: number) => "start" | "end";
        getSideValue: (val: number, step: number) => [number, number];
        decrease: (num: number) => void;
        increase: (num: number) => void;
        blurInput: (e: FocusEvent, val: string | number) => void;
        focusInput: (e: FocusEvent) => void;
        isTriggerLimit: (num: number) => boolean;
        update: () => void;
        inputGetFocus: () => void;
        inputGetBlur: () => void;
        ZInput: import("@zview-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
            type: {
                type: StringConstructor;
                values: string[];
            };
            iconBefore: {
                type: StringConstructor;
            };
            iconAfter: {
                type: StringConstructor;
            };
            maxlength: {
                type: NumberConstructor;
            };
            size: {
                type: StringConstructor;
                values: string[];
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                    values: string[];
                };
                iconBefore: {
                    type: StringConstructor;
                };
                iconAfter: {
                    type: StringConstructor;
                };
                maxlength: {
                    type: NumberConstructor;
                };
                size: {
                    type: StringConstructor;
                    values: string[];
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelValue: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: string;
                };
            }>> & {
                onFocus?: ((...args: any[]) => any) | undefined;
                onChange?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
            }>>;
            emit: (event: "focus" | "change" | "blur", ...args: any[]) => void;
            text: import("vue").Ref<string | number>;
            size: import("vue").ComputedRef<{
                [x: string]: string | undefined;
            }>;
            input: import("vue").Ref<HTMLInputElement | null>;
            textLength: import("vue").ComputedRef<number>;
            handerInput: (e: Event) => void;
            clearInput: () => void;
            handlerBlur: (e: FocusEvent) => void;
            handlerFocus: (e: FocusEvent) => void;
            inputGetFocus: () => void;
            inputGetBlur: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "change" | "blur")[], "focus" | "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                values: string[];
            };
            iconBefore: {
                type: StringConstructor;
            };
            iconAfter: {
                type: StringConstructor;
            };
            maxlength: {
                type: NumberConstructor;
            };
            size: {
                type: StringConstructor;
                values: string[];
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
        }>> & {
            onFocus?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
        }, {
            modelValue: string | number;
            clearable: boolean;
        }>>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "change" | "blur")[], "focus" | "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        step: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
        };
        stepStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            values: string[];
            default: string;
        };
        controlsPosition: {
            type: StringConstructor;
            default: string;
            values: string[];
        };
        name: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        precision: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onFocus?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
    }, {
        size: string;
        disabled: boolean;
        modelValue: string | number;
        step: number;
        stepStrictly: boolean;
        max: number;
        min: number;
        readonly: boolean;
        controlsPosition: string;
        precision: number;
        controls: boolean;
    }>>;
    ZSliderRunway: import("vue").DefineComponent<{
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
                [x: number]: string | import("./slider").SliderMarkerClass;
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
                    [x: number]: string | import("./slider").SliderMarkerClass;
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
                    [x: number]: string | import("./slider").SliderMarkerClass;
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
                        [x: number]: string | import("./slider").SliderMarkerClass;
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
                    [x: number]: string | import("./slider").SliderMarkerClass;
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
                [x: number]: string | import("./slider").SliderMarkerClass;
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
            [x: number]: string | import("./slider").SliderMarkerClass;
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
