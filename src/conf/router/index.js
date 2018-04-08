import Vue from 'vue';
import Router from 'vue-router';
import _base from './base';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => {
      require(['../../page/layout/layout.vue'], resolve);
    },
    children: [
      {
        path: '/',
        name: 'main',
        component: (resolve) => {
          require(['../../page/main/main.vue'], resolve);
        },
      },
      {
        path: '/themes',
        name: 'themes',
        component: (resolve) => {
          require(['../../page/themes/themes.vue'], resolve);
        },
      },
      {
        path: '/about',
        name: 'about',
        component: (resolve) => {
          require(['../../page/about/aboutus.vue'], resolve);
        },
      },
      {
        path: '/details',
        name: 'details',
        component: (resolve) => {
          require(['../../page/details/details.vue'], resolve);
        },
      },
    ],
  },
].concat(_base);
const router = new Router({ routes });
export default router;
