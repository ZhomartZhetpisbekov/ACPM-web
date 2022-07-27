<template>
  <div class="info-text">
    <InfoPath :paths="this.ablur" />
    <h1 class="info-text_title">{{ parsedpath() }}</h1>
    <!-- <router-view></router-view> -->
    <InfoLol />
  </div>
</template>

<script>
import InfoLol from "../atoms/InfoLol";
import InfoPath from "../atoms/InfoPath";
export default {
  name: "InfoText",
  components: {
    InfoPath,
    InfoLol,
  },
  data() {
    return {
      ablur: [...Object.values(this.$route.params)],
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        // react to route changes...
        this.ablur = [...Object.values(toParams)];
      }
    );
  },
  computed: {
    parser() {
      return this.$store.state.parser;
    },
  },
  methods: {
    parsedpath() {
      return this.ablur && this.ablur.length > 1
        ? this.parser[this.ablur[1]]
        : this.parser[this.ablur[0]];
    },
  },
};
</script>

<style scoped>
.info-text {
  margin: 0 4rem;
  color: white;
}
.info-text_title {
  font-size: 2rem;
  margin-top: 0.5rem;
}
</style>
