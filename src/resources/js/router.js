
import VueRouter from 'vue-router'


// views
import Home from './views/Home.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
});

