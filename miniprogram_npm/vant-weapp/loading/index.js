import { VantComponent } from '../common/component';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
VantComponent({
    props: {
        color: String,
        vertical: Boolean,
        type: {
            type: String,
            value: 'circular'
        },
        size: {
            type: String,
            observer: 'setSizeWithUnit'
        },
        textSize: {
            type: String,
            observer: 'setTextSizeWithUnit'
        }
    },
    methods: {
        setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: addUnit(size)
            });
        },
        setTextSizeWithUnit(size) {
            this.set({
                textSizeWithUnit: addUnit(size)
            });
=======
VantComponent({
    props: {
        size: {
            type: String,
            value: '30px'
        },
        type: {
            type: String,
            value: 'circular'
        },
        color: {
            type: String,
            value: '#c9c9c9'
>>>>>>> quting
        }
    }
});
