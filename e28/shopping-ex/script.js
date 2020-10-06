// Vue v2
const app = new Vue({
    el: '#app',
    data: {
        item: '',
        qty: '',
        items: [],
        itemsCount: 0,
    },
    methods: {
        addItem() {
            this.items.push({ name: this.item, qty: this.qty });
            this.itemsCount += this.qty;

            // Clear inputs
            this.item = '';
            this.qty = '';
        }
    }
})

// Vue v3
// const app = Vue.createApp({
//     data() {
//         return {
//             item: '',
//             items: [],
//         }
//     }
// }).mount('#app');


// Example demonstrating some object syntax shortcuts:
let max = 10;

let example = {
    // Two different syntaxes, same result:
    max: max,
    max,

    // Two different syntaxes, same result:
    sayHello: function () {
        alert('Hello');
    },

    sayHello() {
        alert('Hello');
    }
};