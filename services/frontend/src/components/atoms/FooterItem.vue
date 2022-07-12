<template>
  <a href="#">{{ this.link }}</a>
</template>

<script scoped>

export default {
  name: "FooterItem",
  props: {
    link: {
      type: String,
    },
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
/* Footer Item */
a {
  text-decoration: none;
  font-size: 1rem;
  color: #000;
  margin-bottom: 7px;
}
</style>