import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'main',
    //component: MainPage,
    component: () => import( /* webpackChunkName: "about" */ '@/views/MainPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/order',
    name: 'order',
    //component: TemplateBusinessCards,
    component: () => import( /* webpackChunkName: "about" */
      '../views/order/Order.vue'),
  },
  {
    path: '/business-cards',
    name: 'templateBusinessCards',
    //component: TemplateBusinessCards,
    component: () => import( /* webpackChunkName: "about" */
      '../views/templates/TemplateBusinessCards.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import( /* webpackChunkName: "about" */
      '../views/account/Account.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( /* webpackChunkName: "about" */
      '../views/account/Cart.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import( /* webpackChunkName: "about" */
      '../views/account/Orders.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import( /* webpackChunkName: "about" */
      '../views/account/Payment.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
