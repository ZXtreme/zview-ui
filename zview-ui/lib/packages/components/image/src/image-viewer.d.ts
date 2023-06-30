import type { ExtractPropTypes } from "vue";
import { PropType } from "vue";
export declare const imageViewerProps: {
    visable: {
        type: BooleanConstructor;
    };
    urlList: {
        type: PropType<string[]>;
        default: never[];
    };
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomRate: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;
