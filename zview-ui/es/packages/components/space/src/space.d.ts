import type { VNode } from "vue";
declare const Space: import("vue").DefineComponent<{
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    size: {
        type: ArrayConstructor;
        default: () => number[];
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignment: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    size: {
        type: ArrayConstructor;
        default: () => number[];
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignment: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
}>>, {
    size: unknown[];
    direction: string;
    inline: boolean;
    wrap: boolean;
    alignment: string;
}>;
export default Space;
export declare type SpaceInstance = InstanceType<typeof Space>;
