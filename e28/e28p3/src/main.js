import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import store from '@/common/store';
import router from '@/common/router';

import vuetify from './plugins/vuetify';

//turn off production tips
Vue.config.productionTip = false;

//include vue router
Vue.use(VueRouter);

new Vue({
	router: router,
	store: store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
