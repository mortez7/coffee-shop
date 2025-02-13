<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <link-component classItem="header__item" :link="links.header.link">
        <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon" />
      </link-component>

      <link-component v-for="link in links.other" :key="link.id" classItem="header__item" :link="link.link" :text="link.text" />
    </ul>
  </header>
</template>

<script>
import LinkComponent from "@/components/LinkComponent.vue";

export default {
  components: {
    LinkComponent,
  },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>
