import Vue from "vue";
import Router from 'vue-router';

import Blockchain from "./views/Blockchain";
import Home from "./views/Home";
import Transact from "./views/Transact";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/blockchain",
      name: "Blockchain",
      component: Blockchain
    },
    {
      path: "/transact",
      name: "Transact",
      component: Transact
    }
  ]
});

export default router;