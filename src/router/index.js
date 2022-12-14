import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router'

Vue.use(VueRouter);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

const routes = [{
    path: '/',
    name: 'main',
    //component: MainPage,
    component: () => import( /* webpackChunkName: "about" */ '@/views/MainPage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    //component: TemplateBusinessCards,
    component: () => import( /* webpackChunkName: "about" */
      '../views/order/Order.vue'),
  },
  {
    path: '/order-product/:name',
    name: 'OrderProduct',
    //component: TemplateBusinessCards,
    component: () => import( /* webpackChunkName: "about" */
      '../views/order/OrderProduct.vue'),
    props: true
  },
  {
    path: '/order-product/:name/detail',
    name: 'orderDetail',
    //component: TemplateBusinessCards,
    component: () => import( /* webpackChunkName: "about" */
      '../views/templates/OrderDetail.vue'),
  },
  {
    path: '/create-product/:name',
    name: 'CreateProduct',
    //component: TemplateBusinessCards,
    component: () => import( /* webpackChunkName: "about" */
      '../views/templates/TemplateProducts.vue'),
  },
  {
    path: '/create-product/:name/:id',
    name: 'templateProduct',
    component: () => import( /* webpackChunkName: "about" */
      '../views/templates/TemplateProduct.vue'),
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
