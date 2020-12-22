export interface Json<T = any> {
    [prop: string]: T
}

export interface IWatcherOption {
    computed?: boolean;
    watch?: boolean;
    callback?(): any;
}

export interface IGetter {
    (): any;
}
export interface IFunc {
    (...args: Array<any>): any;
}