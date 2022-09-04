import Vue from 'vue'
import App from './App.vue'
//引入路由

import '@/antPlugin/antPlugin.js'
// import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')
