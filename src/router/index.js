import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../views/index/index'
import Home from '../views/home/index.vue'
import Classes from '../views/classes/index.vue'
import Charts from '../views/charts/index.vue'
import Me from '../views/me/index.vue'
import IndexInfo from '../views/index/info/index.vue'
import IndexLive from '../views/index/live/index.vue'
import ScndManufacturer from '../views/index/scond/manufacturer.vue'
import ThreeDtail from '../views/index/three/detail.vue'



Vue.use(Router)

const User = {
  template: `
    <div class="index">
      <h2>Index {{ $route.params.id }}</h2>
    </div>
  `
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/index/info' 
    },
    { 
      path: '/index/:id', 
      component: Index,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '',
          component: IndexInfo
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'live',
          component: IndexLive
        }]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/scndManufacturer',
      name: 'ScndManufacturer',
      component: ScndManufacturer
    },
    {
      path: '/threeDtail',
      name: 'ThreeDtail',
      component: ThreeDtail
    }
  ]
})
