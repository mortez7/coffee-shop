import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import productCards from "./productCards";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { links, productCards },
});

export default store;
