import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
<<<<<<< HEAD
import { isDef, addUnit } from '../common/utils';
=======
import { nextTick } from '../common/utils';
>>>>>>> quting
VantComponent({
    mixins: [touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
<<<<<<< HEAD
        linked(target) {
            target.index = this.children.length;
            this.children.push(target);
            this.updateTabs();
        },
        unlinked(target) {
            this.children = this.children
                .filter((child) => child !== target)
                .map((child, index) => {
                child.index = index;
                return child;
            });
            this.updateTabs();
        }
    },
    props: {
        color: {
            type: String,
            observer: 'setLine'
        },
        sticky: Boolean,
        animated: {
            type: Boolean,
            observer: 'setTrack'
        },
        swipeable: Boolean,
        lineWidth: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        lineHeight: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        titleActiveColor: String,
        titleInactiveColor: String,
        active: {
            type: [String, Number],
            value: 0,
            observer(name) {
                if (name !== this.getCurrentName()) {
                    this.setCurrentIndexByName(name);
                }
            }
=======
        linked(child) {
            this.child.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked(child) {
            const index = this.child.indexOf(child);
            const { tabs } = this.data;
            tabs.splice(index, 1);
            this.child.splice(index, 1);
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: Number,
            value: -1
        },
        lineHeight: {
            type: Number,
            value: -1
        },
        active: {
            type: Number,
            value: 0
>>>>>>> quting
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
<<<<<<< HEAD
        ellipsis: {
            type: Boolean,
            value: true
        },
=======
>>>>>>> quting
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
<<<<<<< HEAD
            value: 4,
            observer(value) {
                this.setData({
                    scrollable: this.children.length > value || !this.data.ellipsis
                });
            }
=======
            value: 4
>>>>>>> quting
        },
        offsetTop: {
            type: Number,
            value: 0
<<<<<<< HEAD
        },
        lazyRender: {
            type: Boolean,
            value: true
        },
=======
        }
>>>>>>> quting
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
<<<<<<< HEAD
        currentIndex: null,
        container: null
    },
    beforeCreate() {
        this.children = [];
    },
    mounted() {
        this.setData({
            container: () => this.createSelectorQuery().select('.van-tabs')
        });
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
    },
    methods: {
        updateTabs() {
            const { children = [], data } = this;
            this.setData({
                tabs: children.map((child) => child.data),
                scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
            });
            this.setCurrentIndexByName(this.getCurrentName() || data.active);
        },
        trigger(eventName) {
            const { currentIndex } = this.data;
            const child = this.children[currentIndex];
            this.$emit(eventName, {
                index: currentIndex,
                name: child.getComputedName(),
                title: child.data.title
=======
        wrapStyle: '',
        position: ''
    },
    watch: {
        swipeThreshold() {
            this.set({
                scrollable: this.child.length > this.data.swipeThreshold
            });
        },
        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate() {
        this.child = [];
    },
    mounted() {
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then((rect) => {
            this.navHeight = rect.height;
            this.observerContentScroll();
        });
    },
    destroyed() {
        // @ts-ignore
        this.createIntersectionObserver().disconnect();
    },
    methods: {
        updateTabs(tabs) {
            tabs = tabs || this.data.tabs;
            this.set({
                tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger(eventName, index) {
            this.$emit(eventName, {
                index,
                title: this.data.tabs[index].title
>>>>>>> quting
            });
        },
        onTap(event) {
            const { index } = event.currentTarget.dataset;
<<<<<<< HEAD
            const child = this.children[index];
            if (child.data.disabled) {
                this.trigger('disabled');
            }
            else {
                this.setCurrentIndex(index);
                wx.nextTick(() => {
                    this.trigger('click');
                });
            }
        },
        // correct the index of active tab
        setCurrentIndexByName(name) {
            const { children = [] } = this;
            const matched = children.filter((child) => child.getComputedName() === name);
            const defaultIndex = (children[0] || {}).index || 0;
            this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
        },
        setCurrentIndex(currentIndex) {
            const { data, children = [] } = this;
            if (!isDef(currentIndex) ||
                currentIndex >= children.length ||
                currentIndex < 0) {
                return;
            }
            const shouldEmitChange = data.currentIndex !== null;
            this.setData({ currentIndex });
            children.forEach((item, index) => {
                const active = index === currentIndex;
                if (active !== item.data.active || !item.inited) {
                    item.updateRender(active, this);
                }
            });
            wx.nextTick(() => {
                this.setLine();
                this.setTrack();
                this.scrollIntoView();
                this.trigger('input');
                if (shouldEmitChange) {
                    this.trigger('change');
                }
            });
        },
        getCurrentName() {
            const activeTab = this.children[this.data.currentIndex];
            if (activeTab) {
                return activeTab.getComputedName();
=======
            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', index);
            }
            else {
                this.trigger('click', index);
                this.setActive(index);
            }
        },
        setActive(active) {
            if (active !== this.data.active) {
                this.trigger('change', active);
                this.set({ active });
                this.setActiveTab();
>>>>>>> quting
            }
        },
        setLine(skipTransition) {
            if (this.data.type !== 'line') {
                return;
            }
<<<<<<< HEAD
            const { color, duration, currentIndex, lineWidth, lineHeight } = this.data;
            this.getRect('.van-tab', true).then((rects = []) => {
                const rect = rects[currentIndex];
                if (rect == null) {
                    return;
                }
                const width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                const height = lineHeight !== -1
                    ? `height: ${addUnit(lineHeight)}; border-radius: ${addUnit(lineHeight)};`
                    : '';
                let left = rects
                    .slice(0, currentIndex)
=======
            const { color, active, duration, lineWidth, lineHeight } = this.data;
            this.getRect('.van-tab', true).then((rects) => {
                const rect = rects[active];
                const width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                const height = lineHeight !== -1 ? `height: ${lineHeight}px;` : '';
                let left = rects
                    .slice(0, active)
>>>>>>> quting
                    .reduce((prev, curr) => prev + curr.width, 0);
                left += (rect.width - width) / 2;
                const transition = skipTransition
                    ? ''
                    : `transition-duration: ${duration}s; -webkit-transition-duration: ${duration}s;`;
<<<<<<< HEAD
                this.setData({
                    lineStyle: `
            ${height}
            width: ${addUnit(width)};
=======
                this.set({
                    lineStyle: `
            ${height}
            width: ${width}px;
>>>>>>> quting
            background-color: ${color};
            -webkit-transform: translateX(${left}px);
            transform: translateX(${left}px);
            ${transition}
          `
                });
            });
        },
        setTrack() {
<<<<<<< HEAD
            const { animated, duration, currentIndex } = this.data;
            this.setData({
                trackStyle: `
          transform: translate3d(${-100 * currentIndex}%, 0, 0);
          -webkit-transition-duration: ${animated ? duration : 0}s;
          transition-duration: ${animated ? duration : 0}s;
        `
=======
            const { animated, active, duration } = this.data;
            if (!animated)
                return '';
            this.getRect('.van-tabs__content').then((rect) => {
                const { width } = rect;
                this.set({
                    trackStyle: `
            width: ${width * this.child.length}px;
            left: ${-1 * active * width}px;
            transition: left ${duration}s;
            display: -webkit-box;
            display: flex;
          `
                });
                const props = { width, animated };
                this.child.forEach((item) => {
                    item.set(props);
                });
            });
        },
        setActiveTab() {
            this.child.forEach((item, index) => {
                const data = {
                    active: index === this.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.set(data);
                }
            });
            nextTick(() => {
                this.setLine();
                this.setTrack();
                this.scrollIntoView();
>>>>>>> quting
            });
        },
        // scroll active tab into view
        scrollIntoView() {
<<<<<<< HEAD
            const { currentIndex, scrollable } = this.data;
=======
            const { active, scrollable } = this.data;
>>>>>>> quting
            if (!scrollable) {
                return;
            }
            Promise.all([
                this.getRect('.van-tab', true),
                this.getRect('.van-tabs__nav')
            ]).then(([tabRects, navRect]) => {
<<<<<<< HEAD
                const tabRect = tabRects[currentIndex];
                const offsetLeft = tabRects
                    .slice(0, currentIndex)
                    .reduce((prev, curr) => prev + curr.width, 0);
                this.setData({
=======
                const tabRect = tabRects[active];
                const offsetLeft = tabRects
                    .slice(0, active)
                    .reduce((prev, curr) => prev + curr.width, 0);
                this.set({
>>>>>>> quting
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
<<<<<<< HEAD
        onTouchScroll(event) {
            this.$emit('scroll', event.detail);
        },
=======
>>>>>>> quting
        onTouchStart(event) {
            if (!this.data.swipeable)
                return;
            this.touchStart(event);
        },
        onTouchMove(event) {
            if (!this.data.swipeable)
                return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd() {
            if (!this.data.swipeable)
                return;
<<<<<<< HEAD
            const { tabs, currentIndex } = this.data;
            const { direction, deltaX, offsetX } = this;
            const minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && currentIndex !== 0) {
                    this.setCurrentIndex(currentIndex - 1);
                }
                else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
                    this.setCurrentIndex(currentIndex + 1);
                }
            }
=======
            const { active, tabs } = this.data;
            const { direction, deltaX, offsetX } = this;
            const minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && active !== 0) {
                    this.setActive(active - 1);
                }
                else if (deltaX < 0 && active !== tabs.length - 1) {
                    this.setActive(active + 1);
                }
            }
        },
        setWrapStyle() {
            const { offsetTop, position } = this.data;
            let wrapStyle;
            switch (position) {
                case 'top':
                    wrapStyle = `
            top: ${offsetTop}px;
            position: fixed;
          `;
                    break;
                case 'bottom':
                    wrapStyle = `
            top: auto;
            bottom: 0;
          `;
                    break;
                default:
                    wrapStyle = '';
            }
            // cut down `set`
            if (wrapStyle === this.data.wrapStyle)
                return;
            this.set({ wrapStyle });
        },
        observerContentScroll() {
            if (!this.data.sticky) {
                return;
            }
            const { offsetTop } = this.data;
            const { windowHeight } = wx.getSystemInfoSync();
            // @ts-ignore
            this.createIntersectionObserver().disconnect();
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ top: -(this.navHeight + offsetTop) })
                .observe('.van-tabs', (res) => {
                const { top } = res.boundingClientRect;
                if (top > offsetTop) {
                    return;
                }
                const position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                this.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) })
                .observe('.van-tabs', (res) => {
                const { top, bottom } = res.boundingClientRect;
                if (bottom < this.navHeight) {
                    return;
                }
                const position = res.intersectionRatio > 0 ? 'top' : '';
                this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                this.setPosition(position);
            });
        },
        setPosition(position) {
            if (position !== this.data.position) {
                this.set({ position }).then(() => {
                    this.setWrapStyle();
                });
            }
>>>>>>> quting
        }
    }
});
