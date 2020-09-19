import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Raiz',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: {name: 'Home'}
  },
  {
    path: '/portada',
    name: 'Portada',
    component: Home,
    redirect: {name: 'Home'}
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Home,
    redirect: {name: 'Home'}
  },
  {
    path: '/sobre-mi',
    name: 'SobreMi',
    alias: ['/sobremi' , '/about'],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SobreMi.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/post/:post',
    name: 'Articulo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue')
  },
  {
    path: '/administrador',
    name: 'Administrador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrador.vue'),
    children: [{
      path: 'simple',
      name: 'AdministradorSimple',
      component: () => import(/* webpackChunkName: "about" */ '../views/AdmSimple.vue')
    },
    {
      path: 'avanzado',
      name: 'AdministradorAvanzado',
      component: () => import(/* webpackChunkName: "about" */ '../views/AdmAvanzado.vue')
    }]
  },
  {
    path: '/*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
