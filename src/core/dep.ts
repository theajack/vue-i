import Watcher from './watcher';

export default class Dep {
    private deps = new Set<Watcher>();
    static target: Watcher | undefined;
    constructor () {
        this.deps = new Set<Watcher>();
    }
  
    depend (): void {
        if (Dep.target) {
            this.deps.add(Dep.target);
        }
    }
  
    notify (): void {
        this.deps.forEach((watcher: Watcher) => watcher.update());
    }
}

// watcher栈
const targetStack: Watcher[] = [];

// 将上一个watcher推到栈里，更新Dep.target为传入的_target变量。
export function pushTarget (_target: Watcher) {
    if (Dep.target) targetStack.push(Dep.target);
    Dep.target = _target;
}

// 取回上一个watcher作为Dep.target，并且栈里要弹出上一个watcher。
export function popTarget () {
    Dep.target = targetStack.pop();
}
