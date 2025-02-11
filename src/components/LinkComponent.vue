<template>
  <li :class="classItem">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      require: false,
    },
    link: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: false,
    },
  },
};
</script>
