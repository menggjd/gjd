import home from '@/components/home'
import news from '@/components/news'
export default [
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
{path: '*', redirect: '/news'}
]
