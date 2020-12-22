import {IGetter, IFunc} from '../types/core';
import Watcher from './watcher';

export default function watch (getter: IGetter, callback: IFunc) {
    new Watcher(getter, {watch: true, callback});
}