import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import HomePage from './components/pages/HomePage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import SignUpPage from './components/pages/SignUpPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import SearchPage from './components/pages/SearchPage.vue';
import InventoryPage from './components/pages/InventoryPage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';
import CartPage from './components/pages/CartPage.vue';

import store from '@/common/store';

import vuetify from './plugins/vuetify';

//turn off production tips
Vue.config.productionTip = false;

//setup vue router
Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/login', component: LoginPage },
		{ path: '/signup', component: SignUpPage },
		{ path: '/product/:id', component: ProductPage, props: true },
		{ path: '/search', component: SearchPage, props: true },
		{ path: '/inventory', component: InventoryPage},
		{ path: '/favorites', component: FavoritesPage },
		{ path: '/cart', component: CartPage },
	],
	mode: 'history',
});

new Vue({
	router: router,
	store: store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
