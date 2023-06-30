declare const Color: import("@zview-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    main: {
        type: StringConstructor;
        default: string;
    };
    mainTitle: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: import("vue").PropType<string[]>;
        require: boolean;
        default: never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    main: {
        type: StringConstructor;
        default: string;
    };
    mainTitle: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: import("vue").PropType<string[]>;
        require: boolean;
        default: never[];
    };
}>>, {
    main: string;
    mainTitle: string;
    content: string[];
}>>;
export default Color;
