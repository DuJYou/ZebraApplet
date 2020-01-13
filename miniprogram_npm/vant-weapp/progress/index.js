import { VantComponent } from '../common/component';
import { BLUE } from '../common/color';
<<<<<<< HEAD
import { addUnit } from '../common/utils';
=======
>>>>>>> quting
VantComponent({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
<<<<<<< HEAD
        trackColor: String,
=======
>>>>>>> quting
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
<<<<<<< HEAD
        },
        strokeWidth: {
            type: null,
            observer: 'setStrokeWidthUnit'
        }
    },
    data: {
        strokeWidthUnit: '4px'
    },
    methods: {
        setStrokeWidthUnit(val) {
            this.setData({
                strokeWidthUnit: addUnit(val)
            });
=======
>>>>>>> quting
        }
    }
});
