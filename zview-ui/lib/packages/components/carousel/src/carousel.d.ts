import type { ExtractPropTypes, PropType } from "vue";
export declare const carouselProps: {
    data: {
        type: PropType<string[]>;
        default: () => never[];
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    indicatorPosition: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    indicatorType: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    arrow: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const carouselEmits: {
    change: (current: number, prev: number) => boolean;
};
export declare type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export declare type CarouselEmits = typeof carouselEmits;
