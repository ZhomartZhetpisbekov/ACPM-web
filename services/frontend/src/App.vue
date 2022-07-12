<template>
  <section>
    <BaseHeader :title="'damn'" />
    <MainContent :title="'mainContent'" />
    <BaseFooter :title="'footfetish'" />
  </section>
</template>

<script>
import BaseHeader from "./components/UI/Header.vue";
import MainContent from "./components/UI/MainContent.vue";
import BaseFooter from "./components/UI/Footer.vue";

export default {
  name: "App",

  components: {
    BaseHeader,
    MainContent,
    BaseFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat";
  width: 100vw;
  overflow-x: hidden;
  background: #313a59;
  display: flex;
  /* justify-content: center; */
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
