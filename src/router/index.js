import Vue from 'vue'
import Router from 'vue-router'
import HotMovie from '@/components/HotMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HotMovie',
      component: HotMovie
    },   
  ]
})
