<template>
  <p class="info-path">Главная{{ parsedpath }}</p>
</template>

<script>
export default {
  name: "InfoPath",
  props: {
    paths: {
      type: Array,
    },
  },
  data() {
    return {
      parser: {
        " ": "Главная",
        obschestvo: "Общество",
        onas: "О нас",
        istoriya: "История Создания",
        cel: "Цель, миссия",
        chlenstvo: "Членство",
        sotrudnichestvo: "Сотрудничество",
        partners: "Партнеры",
        smionas: "СМИ о нас",
      },
    };
  },
  computed: {
    parsedpath() {
      //   const paths = this.$router.currentRoute.path.split("/");
      let pathParse = "";

      for (let i = 0; i < this.paths.length; i++) {
        pathParse = pathParse + " - " + this.parser[this.paths[i]];
      }
      return pathParse;
    },
  },
};
</script>

<style scoped>
.info-path {
  color: white;
  padding: 0.75rem 0;
  font-size: 0.875rem;
}
</style>
