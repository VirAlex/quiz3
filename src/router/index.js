import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Action from "../views/Action.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/action",
    name: "action",
    component: Action
  }
];

const router = new VueRouter({
  routes
})

export default router
