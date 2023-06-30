import { ExtractPropTypes } from "vue";
export declare const Direction: string[];
export declare const ContainerProps: {
    direction: {
        type: StringConstructor;
        value: string[];
    };
};
export declare const HeaderProps: {
    height: {
        type: StringConstructor;
        default: string;
    };
};
export declare const AsideProps: {
    width: {
        type: StringConstructor;
        default: string;
    };
};
export declare const FooterProps: {
    height: {
        type: StringConstructor;
        default: string;
    };
};
export declare type ContainerProps = ExtractPropTypes<typeof ContainerProps>;
export declare type HeaderProps = ExtractPropTypes<typeof HeaderProps>;
export declare type AsideProps = ExtractPropTypes<typeof AsideProps>;
export declare type FooterProps = ExtractPropTypes<typeof FooterProps>;
