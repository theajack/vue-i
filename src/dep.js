export default class Dep {
    constructor () {
        this.deps = new Set();
    }
  
    depend () {
        if (Dep.target) {
            this.deps.add(Dep.target);
        }
    }
  
    notify () {
        this.deps.forEach(watcher => watcher.update());
    }
}
  
// 正在运行的watcher
Dep.target = null;
  
// watcher栈
const targetStack = [];

// 将上一个watcher推到栈里，更新Dep.target为传入的_target变量。
export function pushTarget (_target) {
    if (Dep.target) targetStack.push(Dep.target);
    Dep.target = _target;
}

// 取回上一个watcher作为Dep.target，并且栈里要弹出上一个watcher。
export function popTarget () {
    Dep.target = targetStack.pop();
}
