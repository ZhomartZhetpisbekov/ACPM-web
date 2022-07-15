<template>
  <div class="info-text">
    <InfoPath :paths="this.ablur" />
    <h1 class="info-text_title">Общество</h1>
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
      // parserer: {
      //   obschestvo: "Общество",
      //   onas: "Общество",
      //   istoriya: "История Создания",
      //   cel: "Цель, миссия",
      //   chlenstvo: "Членство",
      //   sotrudnichestvo: "Сотрудничество",
      //   partners: "Партнеры",
      //   smionas: "СМИ о нас",
      // },
      // pageName: this.parseredData(),
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        // react to route changes...
        this.ablur = [...Object.values(toParams)];
        // console.log(this.$route.params.item);
        // this.pageName = toParams.item !== undefined;
      }
    );
  },
  // methods: {
  //   parseredData() {
  //     return this.ablur && this.ablur.length > 1
  //       ? this.parserer[this.pageName[1]]
  //       : this.parserer[this.pageName[0]];
  //   },
  // },
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
