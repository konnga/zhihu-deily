import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

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
