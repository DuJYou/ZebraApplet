import { VantComponent } from '../common/component';
import { link } from '../mixins/link';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    mixins: [link, button, openType],
<<<<<<< HEAD
    relation: {
        type: 'ancestor',
        name: 'goods-action',
        linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        text: String,
        color: String,
=======
    props: {
        text: String,
>>>>>>> quting
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
<<<<<<< HEAD
    mounted() {
        this.updateStyle();
    },
=======
>>>>>>> quting
    methods: {
        onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
<<<<<<< HEAD
        },
        updateStyle() {
            const { children = [] } = this.parent;
            const index = children.indexOf(this);
            this.setData({
                isFirst: index === 0,
                isLast: index === children.length - 1
            });
=======
>>>>>>> quting
        }
    }
});
