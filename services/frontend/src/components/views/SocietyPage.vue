<template>
  <div v-if="societyList.length > 0" class="information">
    <InfoMenu2 :categoryList="societyList" />
    <InfoText2 :category="categoryDetails" />
  </div>
</template>

<script>
import InfoMenu2 from "../molecules/InfoMenu2.vue";
import InfoText2 from "../molecules/InfoText2.vue";

export default {
  name: "SocietyPage",
  components: {
    InfoMenu2,
    InfoText2,
  },
  computed: {
    societyList() {
      return this.$store.state.society;
    },
    categoryDetails() {
      return this.$store.state.categoryDetails[0];
    },
  },
  data() {
    return {
      category: "",
      // currentRoute: this.$router.currentRoute,
    };
  },
  mounted() {
    this.fetchSociety();
    this.fetchCategoryDetails();
    // console.log(this.$router.currentRoute);
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchCategoryDetails();
      },
    },
  },
  methods: {
    async fetchSociety() {
      this.loading = true;
      await this.$store.dispatch("getSociety");
      this.loading = false;
    },
    async fetchCategoryDetails() {
      !this.$router.currentRoute.params.category
        ? (this.category = "О нас")
        : (this.category = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getCategoryDetails", this.category);
      this.loading = false;
    },
  },
};
</script>

<style>
.information {
  margin-top: 12em;
  display: flex;
  width: 100%;
  padding: 0 8rem 4rem 8rem;
  flex-direction: row;
}
</style>