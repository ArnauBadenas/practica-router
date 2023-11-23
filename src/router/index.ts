import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  //createWebHashHistory es dolent pel SEO. Afegeix # a les rutes.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //ex: /destination/1/brazil/iguazu_falls
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id',
      name:'destination',
      component:()=>import('@/views/DestinationView.vue'),
      children: [
        {
          path:':experienceSlug',
          name:'experience',
          component:()=>import('@/views/ExperienceView.vue'),
          props: route=>({...route.params,id:parseInt(route.params.id as string)})
        }
      ]
    },
  ]
})

export default router
