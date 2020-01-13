import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
const THRESHOLD = 0.3;
<<<<<<< HEAD
let ARRAY = [];
=======
>>>>>>> quting
VantComponent({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
<<<<<<< HEAD
        asyncClose: Boolean,
        name: {
            type: [Number, String],
            value: ''
        }
=======
        asyncClose: Boolean
>>>>>>> quting
    },
    mixins: [touch],
    data: {
        catchMove: false
    },
    created() {
        this.offset = 0;
<<<<<<< HEAD
        ARRAY.push(this);
    },
    destroyed() {
        ARRAY = ARRAY.filter(item => item !== this);
=======
>>>>>>> quting
    },
    methods: {
        open(position) {
            const { leftWidth, rightWidth } = this.data;
            const offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
        },
        close() {
            this.swipeMove(0);
        },
        swipeMove(offset = 0) {
            this.offset = offset;
            const transform = `translate3d(${offset}px, 0, 0)`;
            const transition = this.draging
                ? 'none'
<<<<<<< HEAD
                : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.setData({
=======
                : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.set({
>>>>>>> quting
                wrapperStyle: `
        -webkit-transform: ${transform};
        -webkit-transition: ${transition};
        transform: ${transform};
        transition: ${transition};
      `
            });
        },
        swipeLeaveTransition() {
            const { leftWidth, rightWidth } = this.data;
            const { offset } = this;
            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            }
            else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            }
            else {
                this.swipeMove(0);
            }
<<<<<<< HEAD
            this.setData({ catchMove: false });
=======
            this.set({ catchMove: false });
>>>>>>> quting
        },
        startDrag(event) {
            if (this.data.disabled) {
                return;
            }
<<<<<<< HEAD
            ARRAY.forEach(item => {
                if (item !== this) {
                    item.close();
                }
            });
=======
>>>>>>> quting
            this.draging = true;
            this.startOffset = this.offset;
            this.firstDirection = '';
            this.touchStart(event);
        },
        noop() { },
        onDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (!this.firstDirection) {
                this.firstDirection = this.direction;
<<<<<<< HEAD
                this.setData({ catchMove: this.firstDirection === 'horizontal' });
=======
                this.set({ catchMove: this.firstDirection === 'horizontal' });
>>>>>>> quting
            }
            if (this.firstDirection === 'vertical') {
                return;
            }
            const { leftWidth, rightWidth } = this.data;
            const offset = this.startOffset + this.deltaX;
            if ((rightWidth > 0 && -offset > rightWidth) ||
                (leftWidth > 0 && offset > leftWidth)) {
                return;
            }
            this.swipeMove(offset);
        },
        endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.draging = false;
            this.swipeLeaveTransition();
        },
        onClick(event) {
            const { key: position = 'outside' } = event.currentTarget.dataset;
            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
<<<<<<< HEAD
                this.$emit('close', { position, instance: this, name: this.data.name });
=======
                this.$emit('close', { position, instance: this });
>>>>>>> quting
            }
            else {
                this.swipeMove(0);
            }
        }
    }
});
