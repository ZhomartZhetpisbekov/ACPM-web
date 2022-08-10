<template>
  <div v-if="groupList.length > 0" class="information">
    <InfoMenu2 
      :categoryList="groupList"
      :category="categoryDetails" />
    <InfoText2 :category="categoryDetails" />
  </div>
</template>

<script>
import InfoMenu2 from "../molecules/InfoMenu2.vue";
import InfoText2 from "../molecules/InfoText2.vue";

export default {
  name: "EventsPage",
  components: {
    InfoMenu2,
    InfoText2,
  },
  computed: {
    groupList() {
      return this.$store.state.group;
    },
    categoryDetails() {
      return this.$store.state.categoryDetails[0];
    },
  },
  data() {
    return {
      group: 'events',
      category: "",
      // currentRoute: this.$router.currentRoute,
    };
  },
  mounted() {
    this.fetchGroup().then(() => {this.fetchCategoryDetails()});
    // this.fetchCategoryDetails();
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
    async fetchGroup() {
      this.loading = true;
      await this.$store.dispatch("getGroup", this.group);
      this.loading = false;
    },
    async fetchCategoryDetails() {
      !this.$router.currentRoute.params.category
        ? (this.category = this.$store.state.group[0].category)
        : (this.category = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getSocietyDetails", this.group, this.category);
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