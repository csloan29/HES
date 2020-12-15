import VueRouter from 'vue-router';
import store from '@/common/store';

const routes = [
	{
		path: '/',
		component: () => import ('@/components/pages/HomePage.vue')
	},
	{
		path: '/login',
		component: () => import ('@/components/pages/LoginPage.vue')
	},
	{
		path: '/signup',
		component: () => import ('@/components/pages/SignUpPage.vue')
	},
	{
		path: '/account',
		component: () => import ('@/components/pages/AccountPage.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/product/:id',
		component: () => import ('@/components/pages/ProductPage.vue'),
		props: true
	},
	{
		path: '/search',
		component: () => import ('@/components/pages/SearchPage.vue')
	},
	{
		path: '/inventory',
		component: () => import ('@/components/pages/InventoryPage.vue')
	},
	{
		path: '/favorites',
		component: () => import ('@/components/pages/FavoritesPage.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/cart',
		component: () => import ('@/components/pages/CartPage.vue')
	},
	{
		path: '/denied',
		component: () => import ('@/components/pages/AccessDeniedPage.vue'),
	},

];

//Initialize VueRouter
const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.user) {
        next('/denied');
    }
    else {
        next();
    }
});

export default router;
