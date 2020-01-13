import { VantComponent } from '../common/component';
<<<<<<< HEAD
VantComponent({
=======
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea({ safeAreaInsetTop: true })],
>>>>>>> quting
    classes: ['title-class'],
    props: {
        title: String,
        fixed: Boolean,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
<<<<<<< HEAD
            value: 1
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: true
        },
    },
    data: {
        statusBarHeight: 0
    },
    created() {
        const { statusBarHeight } = wx.getSystemInfoSync();
        this.setData({ statusBarHeight });
=======
            value: 120
        }
>>>>>>> quting
    },
    methods: {
        onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight() {
            this.$emit('click-right');
        }
    }
});
