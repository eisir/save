import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
var path = require('path')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

Vue.use(VueResource)
Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'static/data' : ''
