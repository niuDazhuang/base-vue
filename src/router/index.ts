import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Track = () => import('@pages/Track.vue')

/* eslint-disable object-curly-newline */
export const routes: IRoute[] = [
  { path: '/', name: '轨迹', component: Track }
]

const router: Router = new Router({
  base: '/',
  routes
})

export default router
