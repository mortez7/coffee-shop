import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import GoodsView from "../views/GoodsView";
import ContactsView from "../views/ContactsView";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/goods", component: GoodsView },
  { path: "/contacts", component: ContactsView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
