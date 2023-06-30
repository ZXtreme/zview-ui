export interface MessageOptions {
    message: string;
    type?: {
        type: "success" | "info" | "warning" | "error";
        default: "info";
    };
    duration?: {
        type: number;
        default: 3000;
    };
    dangerouslyUseHTMLString?: {
        type: boolean;
        default: false;
    };
    showClose?: {
        type: boolean;
        default: false;
    };
    onClose?: () => void;
}
export default function message(options: MessageOptions): void;
