import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    mixins: [button, openType],
    classes: ['hover-class', 'loading-class'],
<<<<<<< HEAD
    data: {
        style: ''
    },
    props: {
        icon: String,
=======
    props: {
        icon: String,
        color: String,
>>>>>>> quting
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
<<<<<<< HEAD
        customStyle: String,
        loadingType: {
            type: String,
            value: 'circular'
        },
=======
>>>>>>> quting
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
<<<<<<< HEAD
        },
        color: {
            type: String,
            observer(color) {
                let style = '';
                if (color) {
                    style += `color: ${this.data.plain ? color : 'white'};`;
                    if (!this.data.plain) {
                        // Use background instead of backgroundColor to make linear-gradient work
                        style += `background: ${color};`;
                    }
                    // hide border when color is linear-gradient
                    if (color.indexOf('gradient') !== -1) {
                        style += 'border: 0;';
                    }
                    else {
                        style += `border-color: ${color};`;
                    }
                }
                if (style !== this.data.style) {
                    this.setData({ style });
                }
            }
=======
>>>>>>> quting
        }
    },
    methods: {
        onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
