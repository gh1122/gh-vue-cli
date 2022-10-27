import Vue from 'vue';

//将lodash挂载在vue原型上
Vue.prototype.$lodash = require('lodash');

<%_ if (options.vuex) { _%>
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  }
});
<%_ } _%>

<%_ if (options.router) { _%>
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const routes = [
  { path: '/foo', component: Foo }
]
const router = new VueRouter({
  routes
})
<%_ } _%>

import App from './App.vue';
new Vue({
  <%_ if (options.vuex) { _%>
    store,
  <%_ } _%>
  <%_ if (options.router) { _%>
    router,
  <%_ } _%>
  render: h => h(App),
}).$mount('#app');
