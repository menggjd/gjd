import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import news from '@/components/news'
import user from '@/components/user'
import arc from '@/components/arc'
import note from '@/components/note'
Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/user/',
    name: 'user',
    component: user,
    children:[
    {
      
      path:'/arc/:id',
      name:'arc',
      component:arc
    }
    ]
    
  },
  {
    path:'/note',
    name:'note',
    component:note
  }

]
const router = new Router({
  routes
})
export default router
