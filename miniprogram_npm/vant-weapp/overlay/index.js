import { VantComponent } from '../common/component';
VantComponent({
    props: {
        show: Boolean,
<<<<<<< HEAD
        customStyle: String,
        duration: {
            type: null,
=======
        mask: Boolean,
        customStyle: String,
        duration: {
            type: [Number, Object],
>>>>>>> quting
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop() { }
    }
});
