// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import './assets/css/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI);

// var instance = axios.create({
//   baseURL: '',
//   timeout: 10000
// });
// https://virtserver.swaggerhub.com/Jack11/helix/1.0.0
axios.defaults.baseURL = 'http://api.helix.prowertech.com';
axios.defaults.timeout = 10000;

axios.interceptors.response.use(function (response) {
  // Do something with response data
  let { status, data} = response;
  if (status) return data;
  // return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
