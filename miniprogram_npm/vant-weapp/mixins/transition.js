import { isObj } from '../common/utils';
const getClassNames = (name) => ({
    enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
    'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
    leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
    'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`
});
const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
export const transition = function (showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            // @ts-ignore
            duration: {
<<<<<<< HEAD
                type: null,
=======
                type: [Number, Object],
>>>>>>> quting
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
        attached() {
            if (this.data.show) {
                this.enter();
            }
        },
        methods: {
            observeShow(value) {
<<<<<<< HEAD
                value ? this.enter() : this.leave();
=======
                if (value) {
                    this.enter();
                }
                else {
                    this.leave();
                }
>>>>>>> quting
            },
            enter() {
                const { duration, name } = this.data;
                const classNames = getClassNames(name);
                const currentDuration = isObj(duration) ? duration.enter : duration;
                this.status = 'enter';
<<<<<<< HEAD
                this.$emit('before-enter');
=======
>>>>>>> quting
                Promise.resolve()
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('enter');
<<<<<<< HEAD
                    this.$emit('enter');
                    this.setData({
=======
                    this.set({
>>>>>>> quting
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration
                    });
                })
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('enter');
<<<<<<< HEAD
                    this.transitionEnded = false;
                    this.setData({
=======
                    this.set({
>>>>>>> quting
                        classes: classNames['enter-to']
                    });
                })
                    .catch(() => { });
            },
            leave() {
<<<<<<< HEAD
                if (!this.data.display) {
                    return;
                }
=======
>>>>>>> quting
                const { duration, name } = this.data;
                const classNames = getClassNames(name);
                const currentDuration = isObj(duration) ? duration.leave : duration;
                this.status = 'leave';
<<<<<<< HEAD
                this.$emit('before-leave');
=======
>>>>>>> quting
                Promise.resolve()
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('leave');
<<<<<<< HEAD
                    this.$emit('leave');
                    this.setData({
=======
                    this.set({
>>>>>>> quting
                        classes: classNames.leave,
                        currentDuration
                    });
                })
<<<<<<< HEAD
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('leave');
                    this.transitionEnded = false;
                    setTimeout(() => this.onTransitionEnd(), currentDuration);
                    this.setData({
=======
                    .then(() => setTimeout(() => this.onTransitionEnd(), currentDuration))
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('leave');
                    this.set({
>>>>>>> quting
                        classes: classNames['leave-to']
                    });
                })
                    .catch(() => { });
            },
            checkStatus(status) {
                if (status !== this.status) {
                    throw new Error(`incongruent status: ${status}`);
                }
            },
            onTransitionEnd() {
<<<<<<< HEAD
                if (this.transitionEnded) {
                    return;
                }
                this.transitionEnded = true;
                this.$emit(`after-${this.status}`);
                const { show, display } = this.data;
                if (!show && display) {
                    this.setData({ display: false });
=======
                if (!this.data.show) {
                    this.set({ display: false });
                    this.$emit('transitionEnd');
>>>>>>> quting
                }
            }
        }
    });
};
