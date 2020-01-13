import { VantComponent } from '../common/component';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
VantComponent({
    props: {
        dot: Boolean,
        info: null,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
=======
VantComponent({
    props: {
        info: null,
        name: String,
        size: String,
>>>>>>> quting
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
<<<<<<< HEAD
        },
        name: {
            type: String,
            observer(val) {
                this.setData({
                    isImageName: val.indexOf('/') !== -1
                });
            }
        }
    },
    data: {
        sizeWithUnit: null,
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: addUnit(size)
            });
=======
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
>>>>>>> quting
        }
    }
});
