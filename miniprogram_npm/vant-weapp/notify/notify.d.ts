interface NotifyOptions {
<<<<<<< HEAD
    type?: 'primary' | 'success' | 'danger' | 'warning';
    color?: string;
    zIndex?: number;
    message: string;
    context?: any;
    duration?: number;
    selector?: string;
    background?: string;
    safeAreaInsetTop?: boolean;
    onClick?: () => void;
    onOpened?: () => void;
    onClose?: () => void;
=======
    text: string;
    color?: string;
    backgroundColor?: string;
    duration?: number;
    selector?: string;
    context?: any;
    safeAreaInsetTop?: boolean;
    zIndex?: number;
>>>>>>> quting
}
export default function Notify(options: NotifyOptions | string): void;
export {};
