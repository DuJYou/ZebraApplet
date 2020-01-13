import { isObj } from '../common/utils';
const defaultOptions = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
<<<<<<< HEAD
    duration: 2000,
=======
    duration: 3000,
>>>>>>> quting
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return isObj(message) ? message : { message };
}
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
<<<<<<< HEAD
    const options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
=======
    const options = Object.assign({}, currentOptions, parseOptions(toastOptions));
>>>>>>> quting
    const context = options.context || getContext();
    const toast = context.selectComponent(options.selector);
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
    toast.clear = () => {
<<<<<<< HEAD
        toast.setData({ show: false });
=======
        toast.set({ show: false });
>>>>>>> quting
        if (options.onClose) {
            options.onClose();
        }
    };
    queue.push(toast);
<<<<<<< HEAD
    toast.setData(options);
=======
    toast.set(options);
>>>>>>> quting
    clearTimeout(toast.timer);
    if (options.duration > 0) {
        toast.timer = setTimeout(() => {
            toast.clear();
            queue = queue.filter(item => item !== toast);
        }, options.duration);
    }
    return toast;
}
const createMethod = (type) => (options) => Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
    queue.forEach(toast => {
        toast.clear();
    });
    queue = [];
};
Toast.setDefaultOptions = (options) => {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
    currentOptions = Object.assign({}, defaultOptions);
};
export default Toast;
