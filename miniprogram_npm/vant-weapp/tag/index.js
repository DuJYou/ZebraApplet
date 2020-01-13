import { VantComponent } from '../common/component';
<<<<<<< HEAD
VantComponent({
    props: {
        size: String,
=======
import { RED, BLUE, GREEN, ORANGE } from '../common/color';
const DEFAULT_COLOR = '#999';
const COLOR_MAP = {
    danger: RED,
    primary: BLUE,
    success: GREEN,
    warning: ORANGE
};
VantComponent({
    props: {
        size: String,
        type: String,
>>>>>>> quting
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
<<<<<<< HEAD
        textColor: String,
        type: {
            type: String,
            value: 'default'
        },
        closeable: Boolean
    },
    methods: {
        onClose() {
            this.$emit('close');
=======
        textColor: String
    },
    computed: {
        style() {
            const color = this.data.color || COLOR_MAP[this.data.type] || DEFAULT_COLOR;
            const key = this.data.plain ? 'color' : 'background-color';
            const style = { [key]: color };
            if (this.data.textColor) {
                style.color = this.data.textColor;
            }
            return Object.keys(style).map(key => `${key}: ${style[key]}`).join(';');
>>>>>>> quting
        }
    }
});
