import Vue from 'vue';
import { Loading } from 'element-ui';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Loading.directive);

/* eslint-disable no-new */

export default () => {
  new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
  });
};
