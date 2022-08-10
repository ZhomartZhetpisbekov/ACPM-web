<template>
  <div v-if="protocolsList.length > 0" class="information">
    <InfoMenu2 
      :categoryList="protocolsList"
      :category="protocolsDetails" />
    <InfoText2 :category="protocolsDetails" />
  </div>
</template>

<script>
import InfoMenu2 from "../molecules/InfoMenu2.vue";
import InfoText2 from "../molecules/InfoText2.vue";

export default {
  name: "ProtocolsPage",
  components: {
    InfoMenu2,
    InfoText2,
  },
  computed: {
    protocolsList() {
      return this.$store.state.protocols;
    },
    protocolsDetails() {
      return this.$store.state.protocolsDetails[0];
    },
  },
  data() {
    return {
      protocolTitle: "",
      // currentRoute: this.$router.currentRoute,
    };
  },
  mounted() {
    this.fetchProtocols().then(() => {this.fetchProtocolsDetails()});
    // this.fetchEventsDetails();
    // console.log(this.$router.currentRoute);
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchProtocolsDetails();
      },
    },
  },
  methods: {
    async fetchProtocols() {
      this.loading = true;
      await this.$store.dispatch("getProtocols");
      this.loading = false;
    },
    async fetchProtocolsDetails() {
      !this.$router.currentRoute.params.category
        ? (this.protocolTitle = this.$store.state.protocols[0].category)
        : (this.protocolTitle = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getProtocolsDetails", this.protocolTitle);
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