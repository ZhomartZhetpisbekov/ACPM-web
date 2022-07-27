<template>
  <section>
    <BaseHeader />
    <router-view />
    <BaseFooter :title="'footfetish'" />
  </section>
</template>

<script>
import BaseHeader from "./components/UI/Header.vue";
import BaseFooter from "./components/UI/Footer.vue";

export default {
  name: "App",

  components: {
    BaseHeader,
    // HomePage,
    BaseFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"); */
@import url("http://fonts.cdnfonts.com/css/gotham-pro");
@import "./assets/variables.css";
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Gotham Pro", sans-serif;
  width: 100vw;
  overflow-x: hidden;
  background: var(--bg-color);
  color: var(--bg-color);
  display: flex;
  /* justify-content: center; */
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
