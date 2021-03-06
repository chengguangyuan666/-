// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, Icon, Search, Swipe, SwipeItem } from 'vant' // vant按需引入   教程https://segmentfault.com/a/1190000019822589?utm_source=tag-newest

Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(Button)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
