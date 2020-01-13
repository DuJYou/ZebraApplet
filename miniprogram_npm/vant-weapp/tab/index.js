import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'tabs',
<<<<<<< HEAD
        type: 'ancestor',
        linked(target) {
            this.parent = target;
        },
        unlinked() {
            this.parent = null;
        }
=======
        type: 'ancestor'
>>>>>>> quting
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
<<<<<<< HEAD
        titleStyle: String,
        name: {
            type: [Number, String],
            value: '',
        }
    },
    data: {
        active: false
=======
        titleStyle: String
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
>>>>>>> quting
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
<<<<<<< HEAD
        getComputedName() {
            if (this.data.name !== '') {
                return this.data.name;
            }
            return this.index;
        },
        updateRender(active, parent) {
            const { data: parentData } = parent;
            this.inited = this.inited || active;
            this.setData({
                active,
                shouldRender: this.inited || !parentData.lazyRender
            });
        },
        update() {
            if (this.parent) {
                this.parent.updateTabs();
=======
        update() {
            const parent = this.getRelationNodes('../tabs/index')[0];
            if (parent) {
                parent.updateTabs();
>>>>>>> quting
            }
        }
    }
});
