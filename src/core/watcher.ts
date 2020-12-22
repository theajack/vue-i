// Watcher
import {IGetter, IWatcherOption} from '../types/core';
import Dep, {pushTarget, popTarget} from './dep';

export default class Watcher {
    private computed: boolean | undefined;
    private watch: boolean | undefined;
    private callback: any;
    private value: any;
    private getter: IGetter;
    private dep: Dep;
    constructor (getter: IGetter, options: IWatcherOption = {}) {
        const {computed, watch, callback} = options;
        this.getter = getter;
        this.computed = computed;
        this.watch = watch;
        this.callback = callback;
        this.value = undefined;
    
        if (computed) {
            this.dep = new Dep();
        } else {
            this.get();
        }
    
    }

    get (): any {
        pushTarget(this);
        this.value = this.getter();
        popTarget();
        return this.value;
    }

    // 仅为computed使用
    depend (): void {
        this.dep.depend();
    }

    update (): void {
        if (this.computed) {
            this.get();
            this.dep.notify();
        } else if (this.watch) {
            const oldValue = this.value;
            this.get();
            this.callback(this.value, oldValue);
        } else {
            this.get();
        }
    }
}
