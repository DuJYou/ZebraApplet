import { VantComponent } from '../common/component';
<<<<<<< HEAD
VantComponent({
=======
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
>>>>>>> quting
    classes: [
        'bar-class',
        'price-class',
        'button-class'
    ],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
<<<<<<< HEAD
        suffixLabel: String,
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
=======
        suffixLabel: String
>>>>>>> quting
    },
    methods: {
        updatePrice() {
            const { price, decimalLength } = this.data;
<<<<<<< HEAD
            this.setData({
=======
            this.set({
>>>>>>> quting
                hasPrice: typeof price === 'number',
                priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip() {
<<<<<<< HEAD
            this.setData({ hasTip: typeof this.data.tip === 'string' });
=======
            this.set({ hasTip: typeof this.data.tip === 'string' });
>>>>>>> quting
        },
        onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
