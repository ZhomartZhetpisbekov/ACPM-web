<template>
  <div class="info-text">
    <InfoPath :paths="this.ablur" />
    <h1 class="info-text_title">Общество</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import InfoPath from "../atoms/InfoPath";
export default {
  name: "InfoText",
  components: {
    InfoPath,
  },
  data() {
    return {
      ablur: [],
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        // react to route changes...
        this.ablur = [...Object.values(toParams)];
        // console.log(toParams, previousParams);
      }
    );
  },
};
</script>

<style scoped>
.info-text {
  margin-left: 4rem;
  color: white
}
.info-text_title {
  font-size: 2rem;
  margin-top: 0.5rem;
}
</style>
