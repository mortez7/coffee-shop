<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <title-component :title="title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel<br />
              met spot shy want. Children me laughing we prospect answered followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper" v-if="!isLoading">
              <product-card-component v-for="card in goods" :key="card.id" classItem="shop__item" :card="card" @onNavigate="navigate" />
            </div>
            <spinner-component v-else />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import { navigate } from "../mixins/navigate";

export default {
  components: {
    NavbarComponent,
    ProductCardComponent,
    TitleComponent,
    SpinnerComponent,
  },
  data() {
    return {
      title: "For your pleasure",
      name: "goods",
    };
  },
  computed: {
    goods() {
      return this.$store.getters["getGoodsCards"];
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  beforeMount() {
    this.$store.dispatch("setIsLoading", true);
  },
  mounted() {
    fetch("http://localhost:3000/goods")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setGoodsData", data);
        this.$store.dispatch("setIsLoading", false);
      });
  },
  mixins: [navigate],
};
</script>
