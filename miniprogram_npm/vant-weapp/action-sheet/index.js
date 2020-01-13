import { VantComponent } from '../common/component';
<<<<<<< HEAD
VantComponent({
=======
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
>>>>>>> quting
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
<<<<<<< HEAD
        description: String,
        round: {
            type: Boolean,
            value: true
        },
=======
        customStyle: String,
        overlayStyle: String,
>>>>>>> quting
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
<<<<<<< HEAD
        },
        closeOnClickAction: {
            type: Boolean,
            value: true
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
=======
>>>>>>> quting
        }
    },
    methods: {
        onSelect(event) {
            const { index } = event.currentTarget.dataset;
            const item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
<<<<<<< HEAD
                if (this.data.closeOnClickAction) {
                    this.onClose();
                }
=======
>>>>>>> quting
            }
        },
        onCancel() {
            this.$emit('cancel');
        },
        onClose() {
            this.$emit('close');
<<<<<<< HEAD
        },
        onClickOverlay() {
            this.$emit('click-overlay');
            this.onClose();
=======
>>>>>>> quting
        }
    }
});
