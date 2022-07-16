<template>
  <div>
    <h2 class="information-title">Общество</h2>
    <ul>
      <InfoItem
        v-for="(item, ind) in pageNames"
        :key="ind"
        :activeGiven="ind == currentActive"
        :title="item"
        :pagePath="pagePaths[ind]"
        :index="ind"
        @changeActive="(payload) => toggleActive(payload)"
      />
    </ul>
  </div>
</template>

<script>
import InfoItem from "../atoms/InfoItem.vue";

export default {
  name: "InfoMenu",
  props: {
    name: {
      type: String,
    },
  },
  components: {
    InfoItem,
  },
  data() {
    return {
      currentActive: 0,
      isActive: false,
      pageNames: [
        "О нас",
        "История Создания",
        "Цель, миссия",
        "Членство",
        "Сотрудничество",
        "Партнеры",
        "СМИ o нас",
      ],
      pagePaths: [
        "onas",
        "istoriya",
        "cel",
        "chlenstvo",
        "sotrudnichestvo",
        "partners",
        "smionas",
      ],
    };
  },
  methods: {
    toggleActive(index) {
      this.currentActive = index;
    },
  },
  beforeMount() {
    const computedCurrentSection = this.pagePaths.indexOf(
      this.$router.currentRoute.params.item
    );
    computedCurrentSection === -1
      ? (this.currentActive = 0)
      : (this.currentActive = computedCurrentSection);
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        const computedCurrentSection = this.pagePaths.indexOf(toParams.item);
        computedCurrentSection === -1
          ? (this.currentActive = 0)
          : (this.currentActive = computedCurrentSection);
      }
    );
  },
};
</script>

<style scoped>
.information-title {
  margin-left: 7rem;
  margin-bottom: 1.375rem;
  font-size: 2em;
  color: white;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 65rem) {
  .information-title {
    margin-left: 4rem;
  }
}
</style>
