import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import GoodsView from "../views/GoodsView";
import ContactsView from "../views/ContactsView";
import ThankYouView from "../views/ThankYouView";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/goods", component: GoodsView },
  { path: "/contacts", component: ContactsView },
  { path: "/thank-you", component: ThankYouView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
