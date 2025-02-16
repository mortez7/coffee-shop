import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import ForYourPleasureView from "../views/ForYourPleasureView";
import ContactsView from "../views/ContactsView";
import ThankYouView from "../views/ThankYouView";
import GoodsItemView from "../views/GoodsItemView";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/for-your-pleasure", component: ForYourPleasureView },
  { path: "/contacts", component: ContactsView },
  { path: "/thank-you", component: ThankYouView },
  { name: "coffee", path: "/our-coffee/:id", component: GoodsItemView },
  { name: "goods", path: "/for-your-pleasure/:id", component: GoodsItemView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
