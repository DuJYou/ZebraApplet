import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';
<<<<<<< HEAD
=======
import { safeArea } from '../mixins/safe-area';
>>>>>>> quting
VantComponent({
    classes: [
        'enter-class',
        'enter-active-class',
        'enter-to-class',
        'leave-class',
        'leave-active-class',
        'leave-to-class'
    ],
<<<<<<< HEAD
    mixins: [transition(false)],
    props: {
        round: Boolean,
        closeable: Boolean,
        customStyle: String,
        overlayStyle: String,
=======
    mixins: [transition(false), safeArea()],
    props: {
>>>>>>> quting
        transition: {
            type: String,
            observer: 'observeClass'
        },
<<<<<<< HEAD
=======
        customStyle: String,
        overlayStyle: String,
>>>>>>> quting
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
<<<<<<< HEAD
        closeIcon: {
            type: String,
            value: 'cross'
        },
        closeIconPosition: {
            type: String,
            value: 'top-right'
        },
=======
>>>>>>> quting
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
<<<<<<< HEAD
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
=======
>>>>>>> quting
        }
    },
    created() {
        this.observeClass();
    },
    methods: {
<<<<<<< HEAD
        onClickCloseIcon() {
            this.$emit('close');
        },
=======
>>>>>>> quting
        onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass() {
            const { transition, position } = this.data;
            const updateData = {
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
<<<<<<< HEAD
            this.setData(updateData);
=======
            this.set(updateData);
>>>>>>> quting
        }
    }
});
