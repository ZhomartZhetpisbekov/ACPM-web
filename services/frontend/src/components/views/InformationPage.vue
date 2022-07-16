<template>
  <div class="information">
    <InfoMenu />
    <InfoText />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import InfoMenu from "../molecules/InfoMenu.vue";
import InfoText from "../molecules/InfoText.vue";

export default {
  name: "InformationPage",
  components: {
    InfoMenu,
    InfoText,
  },
};
</script>

<style scoped>
.information {
  margin-top: 12em;
  display: flex;
  width: 100%;
  padding: 2em 0;
  flex-direction: row;
  background: #252b42;
}
@media screen and (max-width: 65rem) {
  .information {
    margin-top: 7rem;
  }
}
</style>
