<template>
  <div class="information">
    <InfoMenu />
    <InfoText />
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
</style>
