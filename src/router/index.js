import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Order from "../views/Order.vue"
import Configure from "../views/Configure.vue"
import Desktop4 from "../views/Desktop4.vue"
import Checkout from "../views/Checkout.vue"

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
  {
    path: "/desktop4",
    name: "desktop4",
    component: Desktop4,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
