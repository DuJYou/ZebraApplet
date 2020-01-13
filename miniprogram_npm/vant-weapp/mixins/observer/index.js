import { behavior } from './behavior';
<<<<<<< HEAD
export function observe(vantOptions, options) {
    const { watch } = vantOptions;
=======
import { observeProps } from './props';
export function observe(vantOptions, options) {
    const { watch, computed } = vantOptions;
>>>>>>> quting
    options.behaviors.push(behavior);
    if (watch) {
        const props = options.properties || {};
        Object.keys(watch).forEach(key => {
            if (key in props) {
                let prop = props[key];
                if (prop === null || !('type' in prop)) {
                    prop = { type: prop };
                }
                prop.observer = watch[key];
                props[key] = prop;
            }
        });
        options.properties = props;
    }
<<<<<<< HEAD
=======
    if (computed) {
        options.methods = options.methods || {};
        options.methods.$options = () => vantOptions;
        if (options.properties) {
            observeProps(options.properties);
        }
    }
>>>>>>> quting
}
