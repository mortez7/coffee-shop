<template>
  <main>
    <div class="banner" :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <div class="row" v-if="!isLoading">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" :src="product.image" alt="coffee_item" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div class="shop__point" v-if="product.country">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div class="shop__point" v-if="product.description">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
        <spinner-component v-else />
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
export default {
  components: { NavbarComponent, SpinnerComponent },
  beforeMount() {
    this.$store.dispatch("setIsLoading", true);
  },
  mounted() {
    fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setProductData", data);
        this.$store.dispatch("setIsLoading", false);
      });
  },
  computed: {
    product() {
      return this.$store.getters["getProduct"];
    },
    pageName() {
      return this.$route.name;
    },
    card() {
      const pageGetter = this.pageName === "coffee" ? "getCoffeeById" : "getGoodsById";
      return this.$store.getters[pageGetter](this.$route.params.id);
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
};
</script>
