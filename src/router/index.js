import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
  let links = Array.from(document.getElementsByTagName('link'))
  let manifest = links.find(l => l.rel == 'manifest')
  document.head.append(manifest)

  console.log('manifest appended 2')


  // let meta = document.getElementById('metaID')
  // if (meta) {
  //   document.head.removeChild(meta)
  // }
  // let newMeta = document.createElement('meta')
  // newMeta.setAttribute('name', 'application-url')

  // if (window.location.href !== 'http://localhost:8080/about'){
  //   newMeta.setAttribute('content', '/')
  // } else {
  //   newMeta.setAttribute('content', window.location.href)
  // }
  // newMeta.id = 'metaID'
  // document.head.append(newMeta)
})

export default router
