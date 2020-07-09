import Vue from 'vue'
import http from '@/http'
import { dateFormat } from '@utils/index'
import domPortal from '@plugins/domPortal'
import toast from '@components/Toast'
import router from './router'
import App from './App.vue'
import '@styles/public.css'

Vue.filter('date', dateFormat)
Vue.directive('dom-portal', domPortal)
Object.assign(Vue.prototype, {
  $toast: toast,
  $http: http
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
