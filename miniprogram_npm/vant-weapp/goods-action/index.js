import { VantComponent } from '../common/component';
<<<<<<< HEAD
VantComponent({
    relation: {
        type: 'descendant',
        name: 'goods-action-button',
        linked(child) {
            this.children.push(child);
        },
        unlinked(child) {
            this.children = this.children.filter((item) => item !== child);
        }
    },
    beforeCreate() {
        this.children = [];
    },
    props: {
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    }
=======
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()]
>>>>>>> quting
});
