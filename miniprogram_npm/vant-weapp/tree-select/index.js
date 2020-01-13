import { VantComponent } from '../common/component';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
=======
const ITEM_HEIGHT = 44;
>>>>>>> quting
VantComponent({
    classes: [
        'main-item-class',
        'content-item-class',
        'main-active-class',
        'content-active-class',
        'main-disabled-class',
        'content-disabled-class'
    ],
    props: {
<<<<<<< HEAD
        items: {
            type: Array,
            observer: 'updateSubItems'
        },
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0,
            observer: 'updateSubItems'
        },
        height: {
            type: [Number, String],
            value: 300,
            observer: 'updateHeight'
        },
        max: {
            type: Number,
            value: Infinity
        }
    },
    data: {
        subItems: []
    },
    created() {
        this.updateHeight();
=======
        items: Array,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        activeId: {
            type: [Number, String, Array]
        },
        maxHeight: {
            type: Number,
            value: 300
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0
    },
    watch: {
        items() {
            this.updateSubItems().then(() => {
                this.updateMainHeight();
            });
        },
        maxHeight() {
            this.updateItemHeight(this.data.subItems);
            this.updateMainHeight();
        },
        mainActiveIndex: 'updateSubItems'
>>>>>>> quting
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem(event) {
            const { item } = event.currentTarget.dataset;
<<<<<<< HEAD
            const isArray = Array.isArray(this.data.activeId);
            // 判断有没有超出右侧选择的最大数
            const isOverMax = isArray && this.data.activeId.length >= this.data.max;
            // 判断该项有没有被选中, 如果有被选中，则忽视是否超出的条件
            const isSelected = isArray
                ? this.data.activeId.indexOf(item.id) > -1
                : this.data.activeId === item.id;
            if (!item.disabled && (!isOverMax || isSelected)) {
=======
            if (!item.disabled) {
>>>>>>> quting
                this.$emit('click-item', item);
            }
        },
        // 当一个导航被点击时
        onClickNav(event) {
<<<<<<< HEAD
            const index = event.detail;
=======
            const { index } = event.currentTarget.dataset;
>>>>>>> quting
            const item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index });
            }
        },
        // 更新子项列表
        updateSubItems() {
            const { items, mainActiveIndex } = this.data;
            const { children = [] } = items[mainActiveIndex] || {};
<<<<<<< HEAD
            return this.set({ subItems: children });
        },
        updateHeight() {
            this.setData({
                innerHeight: addUnit(this.data.height)
            });
=======
            this.updateItemHeight(children);
            return this.set({ subItems: children });
        },
        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight() {
            const { items = [], subItems = [] } = this.data;
            const maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            this.set({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
        },
        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight(subItems) {
            const itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
            return this.set({ itemHeight });
>>>>>>> quting
        }
    }
});
