import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Order from "../views/Order.vue"
import Configure from "../views/Configure.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/configure",
    name: "configure",
    component: Configure,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
