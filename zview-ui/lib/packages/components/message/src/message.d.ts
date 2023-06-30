import { ExtractPropTypes } from "vue";
export declare const MessageType: string[];
export declare const MessageProps: {
    message: StringConstructor;
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    duration: {
        type: NumberConstructor;
        validator(value: number): boolean;
        default: number;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClose: {
        type: FunctionConstructor;
    };
};
export declare type MessageProps = ExtractPropTypes<typeof MessageProps>;
