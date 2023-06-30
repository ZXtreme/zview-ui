import type { SetupContext } from "vue";
import type { CarouselEmits, CarouselProps } from "./carousel";
export declare const useCarousel: (props: CarouselProps, emit: SetupContext<CarouselEmits>["emit"]) => {
    root: import("vue").Ref<HTMLDivElement | undefined>;
    transitionItem: import("vue").Ref<HTMLDivElement | undefined>;
    activeIndex: import("vue").Ref<number>;
    arrowDisplay: import("vue").ComputedRef<boolean>;
    handleIndicatorClick: (index: number) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    setActiveItem: (index: number) => void;
    prev: () => void;
    next: () => void;
    throttledArrowClick: import("lodash-es").DebouncedFunc<(index: number) => void>;
    throttledIndicatorHover: import("lodash-es").DebouncedFunc<(index: number) => void>;
    hover: import("vue").Ref<boolean>;
    animating: import("vue").Ref<boolean>;
};
