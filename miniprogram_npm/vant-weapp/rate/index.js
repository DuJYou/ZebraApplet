import { VantComponent } from '../common/component';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
=======
>>>>>>> quting
VantComponent({
    field: true,
    classes: ['icon-class'],
    props: {
        value: Number,
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
<<<<<<< HEAD
        size: null,
=======
        size: {
            type: Number,
            value: 20
        },
>>>>>>> quting
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
            value: 5
<<<<<<< HEAD
        },
        gutter: {
            type: null,
            observer: 'setGutterWithUnit'
        },
        touchable: {
            type: Boolean,
            value: true
        }
    },
    data: {
        innerValue: 0,
        gutterWithUnit: undefined
=======
        }
    },
    data: {
        innerValue: 0
>>>>>>> quting
    },
    watch: {
        value(value) {
            if (value !== this.data.innerValue) {
<<<<<<< HEAD
                this.setData({ innerValue: value });
=======
                this.set({ innerValue: value });
>>>>>>> quting
            }
        }
    },
    methods: {
<<<<<<< HEAD
        setGutterWithUnit(val) {
            this.setData({
                gutterWithUnit: addUnit(val)
            });
        },
=======
>>>>>>> quting
        onSelect(event) {
            const { data } = this;
            const { score } = event.currentTarget.dataset;
            if (!data.disabled && !data.readonly) {
<<<<<<< HEAD
                this.setData({ innerValue: score + 1 });
=======
                this.set({ innerValue: score + 1 });
>>>>>>> quting
                this.$emit('input', score + 1);
                this.$emit('change', score + 1);
            }
        },
        onTouchMove(event) {
<<<<<<< HEAD
            const { touchable } = this.data;
            if (!touchable)
                return;
            const { clientX } = event.touches[0];
            this.getRect('.van-rate__icon', true).then((list) => {
                const target = list
                    .sort(item => item.right - item.left)
                    .find(item => clientX >= item.left && clientX <= item.right);
                if (target != null) {
                    this.onSelect(Object.assign(Object.assign({}, event), { currentTarget: target }));
=======
            const { clientX, clientY } = event.touches[0];
            this.getRect('.van-rate__icon', true).then((list) => {
                const target = list
                    .sort(item => item.right - item.left)
                    .find(item => clientX >= item.left &&
                    clientX <= item.right &&
                    clientY >= item.top &&
                    clientY <= item.bottom);
                if (target != null) {
                    this.onSelect(Object.assign({}, event, { currentTarget: target }));
>>>>>>> quting
                }
            });
        }
    }
});
