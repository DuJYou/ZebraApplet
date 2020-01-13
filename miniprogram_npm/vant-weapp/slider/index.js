import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
=======
>>>>>>> quting
VantComponent({
    mixins: [touch],
    props: {
        disabled: Boolean,
        useButtonSlot: Boolean,
        activeColor: String,
        inactiveColor: String,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 0
        },
        barHeight: {
<<<<<<< HEAD
            type: null,
=======
            type: String,
>>>>>>> quting
            value: '2px'
        }
    },
    watch: {
        value(value) {
            this.updateValue(value, false);
        }
    },
    created() {
        this.updateValue(this.data.value);
    },
    methods: {
        onTouchStart(event) {
            if (this.data.disabled)
                return;
            this.touchStart(event);
            this.startValue = this.format(this.data.value);
<<<<<<< HEAD
            this.dragStatus = 'start';
=======
>>>>>>> quting
        },
        onTouchMove(event) {
            if (this.data.disabled)
                return;
<<<<<<< HEAD
            if (this.dragStatus === 'start') {
                this.$emit('drag-start');
            }
            this.touchMove(event);
            this.dragStatus = 'draging';
=======
            this.touchMove(event);
>>>>>>> quting
            this.getRect('.van-slider').then((rect) => {
                const diff = this.deltaX / rect.width * 100;
                this.newValue = this.startValue + diff;
                this.updateValue(this.newValue, false, true);
            });
        },
        onTouchEnd() {
            if (this.data.disabled)
                return;
<<<<<<< HEAD
            if (this.dragStatus === 'draging') {
                this.updateValue(this.newValue, true);
                this.$emit('drag-end');
            }
=======
            this.updateValue(this.newValue, true);
>>>>>>> quting
        },
        onClick(event) {
            if (this.data.disabled)
                return;
<<<<<<< HEAD
            const { min } = this.data;
            this.getRect('.van-slider').then((rect) => {
                const value = (event.detail.x - rect.left) / rect.width * this.getRange() + min;
=======
            this.getRect('.van-slider').then((rect) => {
                const value = (event.detail.x - rect.left) / rect.width * 100;
>>>>>>> quting
                this.updateValue(value, true);
            });
        },
        updateValue(value, end, drag) {
            value = this.format(value);
<<<<<<< HEAD
            const { barHeight, min } = this.data;
            const width = `${((value - min) * 100) / this.getRange()}%`;
            this.setData({
                value,
                barStyle: `
          width: ${width};
          height: ${addUnit(barHeight)};
          ${drag ? 'transition: none;' : ''}
        `,
=======
            this.set({
                value,
                barStyle: `width: ${value}%; height: ${this.data.barHeight};`
>>>>>>> quting
            });
            if (drag) {
                this.$emit('drag', { value });
            }
            if (end) {
                this.$emit('change', value);
            }
        },
<<<<<<< HEAD
        getRange() {
            const { max, min } = this.data;
            return max - min;
        },
=======
>>>>>>> quting
        format(value) {
            const { max, min, step } = this.data;
            return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
        }
    }
});
