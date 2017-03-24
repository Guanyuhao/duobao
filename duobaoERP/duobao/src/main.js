// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'
import VueUEditor from 'vue-ueditor'
//组件注册
Vue.component('Datepicker',Datepicker)
Vue.component('VueUEditor',VueUEditor)
Vue.use(Datepicker)
Vue.use(VueUEditor)
//插件全局
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
