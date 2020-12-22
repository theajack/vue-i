export function isObject (value: any): boolean {
    return typeof value === 'object' && value !== null;
}

export function queryById (id: string): HTMLElement {
    const dom = document.getElementById(id);
    if (!dom) {
        const div = document.createElement('div');
        div.setAttribute('id', id);
        return div;
    }
    return dom;
}