import reactive from './reactive';
import Watcher from './watcher';
import computed from './computed';
import watch from './watch';

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
  