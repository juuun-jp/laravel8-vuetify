// require('./bootstrap');

// vue & vuetify
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// vue-router
import VueRouter from 'vue-router';
import router from './router';
Vue.use(VueRouter);

// create vue instance
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
});