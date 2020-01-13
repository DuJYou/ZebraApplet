import { VantComponent } from '../common/component';
<<<<<<< HEAD
import { addUnit, isDef } from '../common/utils';
const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;
// add num and avoid float number
function add(num1, num2) {
    const cardinal = Math.pow(10, 10);
    return Math.round((num1 + num2) * cardinal) / cardinal;
}
VantComponent({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
=======
VantComponent({
    field: true,
    classes: [
        'input-class',
        'plus-class',
        'minus-class'
    ],
>>>>>>> quting
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
<<<<<<< HEAD
        inputWidth: null,
        buttonSize: null,
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: {
            type: Number,
            value: null
        },
=======
        inputWidth: String,
        asyncChange: Boolean,
        disableInput: Boolean,
>>>>>>> quting
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: true
        },
        showMinus: {
            type: Boolean,
            value: true
<<<<<<< HEAD
=======
        },
        disablePlus: Boolean,
        disableMinus: Boolean
    },
    computed: {
        minusDisabled() {
            return this.data.disabled || this.data.disableMinus || this.data.value <= this.data.min;
        },
        plusDisabled() {
            return this.data.disabled || this.data.disablePlus || this.data.value >= this.data.max;
>>>>>>> quting
        }
    },
    watch: {
        value(value) {
            if (value === '') {
                return;
            }
            const newValue = this.range(value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
<<<<<<< HEAD
                this.setData({ value: newValue });
            }
        },
        inputWidth() {
            this.set({
                inputStyle: this.computeInputStyle()
            });
        },
        buttonSize() {
            this.set({
                inputStyle: this.computeInputStyle(),
                buttonStyle: this.computeButtonStyle()
            });
        }
    },
    data: {
        focus: false,
        inputStyle: '',
        buttonStyle: ''
    },
    created() {
        this.setData({
=======
                this.set({ value: newValue });
            }
        },
        max: 'check',
        min: 'check',
    },
    data: {
        focus: false
    },
    created() {
        this.set({
>>>>>>> quting
            value: this.range(this.data.value)
        });
    },
    methods: {
<<<<<<< HEAD
        isDisabled(type) {
            if (type === 'plus') {
                return this.data.disabled || this.data.value >= this.data.max;
            }
            return this.data.disabled || this.data.value <= this.data.min;
=======
        check() {
            const newValue = this.range(this.data.value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
                this.set({ value: newValue });
            }
>>>>>>> quting
        },
        onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur(event) {
            const value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },
        // limit value range
        range(value) {
            value = String(value).replace(/[^0-9.-]/g, '');
<<<<<<< HEAD
            // format range
            value = value === '' ? 0 : +value;
            value = Math.max(Math.min(this.data.max, value), this.data.min);
            // format decimal
            if (isDef(this.data.decimalLength)) {
                value = value.toFixed(this.data.decimalLength);
            }
            return value;
=======
            return Math.max(Math.min(this.data.max, value), this.data.min);
>>>>>>> quting
        },
        onInput(event) {
            const { value = '' } = event.detail || {};
            this.triggerInput(value);
        },
<<<<<<< HEAD
        onChange() {
            const { type } = this;
            if (this.isDisabled(type)) {
=======
        onChange(type) {
            if (this.data[`${type}Disabled`]) {
>>>>>>> quting
                this.$emit('overlimit', type);
                return;
            }
            const diff = type === 'minus' ? -this.data.step : +this.data.step;
<<<<<<< HEAD
            const value = add(+this.data.value, diff);
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        longPressStep() {
            this.longPressTimer = setTimeout(() => {
                this.onChange();
                this.longPressStep();
            }, LONG_PRESS_INTERVAL);
        },
        onTap(event) {
            const { type } = event.currentTarget.dataset;
            this.type = type;
            this.onChange();
        },
        onTouchStart(event) {
            clearTimeout(this.longPressTimer);
            const { type } = event.currentTarget.dataset;
            this.type = type;
            this.isLongPress = false;
            this.longPressTimer = setTimeout(() => {
                this.isLongPress = true;
                this.onChange();
                this.longPressStep();
            }, LONG_PRESS_START_TIME);
        },
        onTouchEnd() {
            clearTimeout(this.longPressTimer);
        },
        triggerInput(value) {
            this.setData({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        },
        computeInputStyle() {
            let style = '';
            if (this.data.inputWidth) {
                style = `width: ${addUnit(this.data.inputWidth)};`;
            }
            if (this.data.buttonSize) {
                style += `height: ${addUnit(this.data.buttonSize)};`;
            }
            return style;
        },
        computeButtonStyle() {
            let style = '';
            const size = addUnit(this.data.buttonSize);
            if (this.data.buttonSize) {
                style = `width: ${size};height: ${size};`;
            }
            return style;
=======
            const value = Math.round((+this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        onMinus() {
            this.onChange('minus');
        },
        onPlus() {
            this.onChange('plus');
        },
        triggerInput(value) {
            this.set({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
>>>>>>> quting
        }
    }
});
