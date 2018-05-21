import Vue from 'vue'
import home from './home.vue'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#home',
  render: h => h(home)
})
