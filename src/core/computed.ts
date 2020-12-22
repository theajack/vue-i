// computed
import {IGetter} from '../types/core';
import Watcher from './watcher';
 
export default function computed (getter: IGetter): {value?: any} {
    const def = {};
    const computedWatcher = new Watcher(getter, {computed: true});
    Object.defineProperty(def, 'value', {
        get () {
            // 先让computedWatcher收集渲染watcher作为自己的依赖。
            computedWatcher.depend();
            // 在这次执行用户传入的函数中，又会让响应式的值收集到`computedWatcher`
            return computedWatcher.get();
        },
    });
    return def;
}
