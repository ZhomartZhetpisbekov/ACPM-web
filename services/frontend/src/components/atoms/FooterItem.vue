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
};
</script>

<style scoped>
/* Footer Item */
a {
  text-decoration: none;
  font-size: 16px;
  color: #005963;
  margin-bottom: 10px;
  transition: all 0.25s ease;
}

a:hover {
  color: #F38023;
}
</style>
