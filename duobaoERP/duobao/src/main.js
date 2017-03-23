// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'
Vue.component('Datepicker',Datepicker);
window.echarts = echarts
window.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  mode: 'history',
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
