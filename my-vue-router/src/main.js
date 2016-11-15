import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Baz from './components/Baz'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

Vue.use(VueRouter)

var router = new VueRouter();
router.map({
  '/foo':{
    component:Foo,
    subRoutes:{
      '/baz':{
        component: Baz
      }
    }
  },
  '/bar':{
    component: Bar
  }
});

router.start(App, 'app')