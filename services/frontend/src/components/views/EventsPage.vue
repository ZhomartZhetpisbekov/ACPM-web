<template>
  <div class="information">
    <InfoMenu2 :categoryList="eventsList" />
    <InfoText2 :category="eventsDetails" />
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
    eventsList() {
      return this.$store.state.events;
    },
    eventsDetails() {
      return this.$store.state.eventsDetails[0];
    },
  },
  data() {
    return {
      eventTitle: "",
      // currentRoute: this.$router.currentRoute,
    };
  },
  mounted() {
    this.fetchEvents();
    this.fetchEventsDetails();
    // console.log(this.$router.currentRoute);
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchEventsDetails();
      },
    },
  },
  methods: {
    async fetchEvents() {
      this.loading = true;
      await this.$store.dispatch("getEvents");
      this.loading = false;
    },
    async fetchEventsDetails() {
      !this.$router.currentRoute.params.category
        ? (this.eventTitle = "О нас")
        : (this.eventTitle = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getEventsDetails", this.eventTitle);
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