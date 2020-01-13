import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
import { GRAY, BLUE } from '../common/color';
=======
>>>>>>> quting
VantComponent({
    mixins: [button, openType],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
<<<<<<< HEAD
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: {
            type: null,
            observer: 'setWidthWithUnit'
        },
=======
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
>>>>>>> quting
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
<<<<<<< HEAD
        confirmButtonColor: {
            type: String,
            value: BLUE
        },
        cancelButtonColor: {
            type: String,
            value: GRAY
        },
=======
>>>>>>> quting
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show(show) {
            !show && this.stopLoading();
        }
    },
    methods: {
        onConfirm() {
            this.handleAction('confirm');
        },
        onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction(action) {
            if (this.data.asyncClose) {
<<<<<<< HEAD
                this.setData({
=======
                this.set({
>>>>>>> quting
                    [`loading.${action}`]: true
                });
            }
            this.onClose(action);
        },
        close() {
<<<<<<< HEAD
            this.setData({
=======
            this.set({
>>>>>>> quting
                show: false
            });
        },
        stopLoading() {
<<<<<<< HEAD
            this.setData({
=======
            this.set({
>>>>>>> quting
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            const callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
<<<<<<< HEAD
        },
        setWidthWithUnit(val) {
            this.setData({
                widthWithUnit: addUnit(val)
            });
=======
>>>>>>> quting
        }
    }
});
