import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Test from './Test'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
