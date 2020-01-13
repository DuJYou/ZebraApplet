import { VantComponent } from '../common/component';
<<<<<<< HEAD
import { WHITE } from '../common/color';
VantComponent({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: 'danger'
        },
        color: {
            type: String,
            value: WHITE
=======
import { RED } from '../common/color';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
    props: {
        text: String,
        color: {
            type: String,
            value: '#fff'
        },
        backgroundColor: {
            type: String,
            value: RED
>>>>>>> quting
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
<<<<<<< HEAD
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
=======
>>>>>>> quting
        }
    },
    methods: {
        show() {
<<<<<<< HEAD
            const { duration, onOpened } = this.data;
            clearTimeout(this.timer);
            this.setData({
                show: true
            }, onOpened);
=======
            const { duration } = this.data;
            clearTimeout(this.timer);
            this.set({
                show: true
            });
>>>>>>> quting
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(() => {
                    this.hide();
                }, duration);
            }
        },
        hide() {
<<<<<<< HEAD
            const { onClose } = this.data;
            clearTimeout(this.timer);
            this.setData({
                show: false
            }, onClose);
        },
        onTap(event) {
            const { onClick } = this.data;
            if (onClick) {
                onClick(event.detail);
            }
=======
            clearTimeout(this.timer);
            this.set({
                show: false
            });
>>>>>>> quting
        }
    }
});
