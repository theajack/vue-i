import reactive from './core/reactive';
import Watcher from './core/watcher';
import computed from './core/computed';
import watch from './core/watch';

let app = document.createElement('div');
let app2 = document.createElement('div');

app.setAttribute('id', 'app');
app2.setAttribute('id', 'app2');

document.body.append(app);
document.body.append(app2);

const data = reactive({
    msg: 'Hello World',
    number: 1,
});

new Watcher(() => {
    console.log('update');
    document.getElementById('app').innerHTML = `msg is ${data.msg}`;
});

const numberPlusOne = computed(() => data.number + 1);
new Watcher(() => {
    document.getElementById('app2').innerHTML = `
      computed: 1 + number 是 ${numberPlusOne.value}
    `;
});

watch(
    () => data.msg,
    (newVal, oldVal) => {
        console.log('newVal: ', newVal);
        console.log('old: ', oldVal);
    }
);
window.data = data;
