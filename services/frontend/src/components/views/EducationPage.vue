<template>
  <div v-if="educationList.length > 0" class="information">
    <InfoMenu2 
      :categoryList="educationList"
      :category="educationDetails" />
    <InfoText2 :category="educationDetails" />
  </div>
</template>

<script>
import InfoMenu2 from "../molecules/InfoMenu2.vue";
import InfoText2 from "../molecules/InfoText2.vue";

export default {
  name: "EducationPage",
  components: {
    InfoMenu2,
    InfoText2,
  },
  computed: {
    educationList() {
      return this.$store.state.education;
    },
    educationDetails() {
      return this.$store.state.educationDetails[0];
    },
  },
  data() {
    return {
      educationTitle: "",
      // currentRoute: this.$router.currentRoute,
    };
  },
  mounted() {
    this.fetchEducation().then(() => {this.fetchEducationDetails()});
    // this.fetchEducationDetails();
    // console.log(this.$router.currentRoute);
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchEducationDetails();
      },
    },
  },
  methods: {
    async fetchEducation() {
      this.loading = true;
      await this.$store.dispatch("getEducation");
      this.loading = false;
    },
    async fetchEducationDetails() {
      !this.$router.currentRoute.params.category
        ? (this.educationTitle = this.$store.state.education[0].category)
        : (this.educationTitle = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getEducationDetails", this.educationTitle);
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