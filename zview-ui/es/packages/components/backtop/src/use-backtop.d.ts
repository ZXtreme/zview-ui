import type { SetupContext } from "vue";
import type { BacktopEmits, BacktopProps } from "./backtop";
export declare const useBacktop: (props: BacktopProps, emit: SetupContext<BacktopEmits>["emit"]) => {
    visible: import("vue").Ref<boolean>;
    handleClick: (event: MouseEvent) => void;
};
