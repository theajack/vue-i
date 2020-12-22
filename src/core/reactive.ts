import {Json} from '../types/core';
import Dep from './dep';
import {isObject} from './utils';

// 将对象定义为响应式
export default function reactive (data: Json): Json {
    if (isObject(data)) {
        Object.keys(data).forEach(key => {
            defineReactive(data, key);
        });
    }
    return data;
}

function defineReactive (data: Json, key: string): void {
    let val = data[key];
    // 收集依赖
    const dep = new Dep();

    Object.defineProperty(data, key, {
        get () {
            dep.depend();
            return val;
        },
        set (newVal) {
            val = newVal;
            dep.notify();
        }
    });

    if (isObject(val)) {
        reactive(val);
    }
}

