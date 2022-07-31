<template>
  <div class="home-page">
    <AboutUsBanner />
    <UpcommingEvents />
    <BecomeMember />
  </div>
</template>

<script>
import AboutUsBanner from "../molecules/AboutUsBanner.vue";
import UpcommingEvents from "../molecules/UpcommingEvents.vue";
import BecomeMember from "../molecules/BecomeMember.vue";

export default {
  name: "HomePage",
  components: { AboutUsBanner, UpcommingEvents, BecomeMember },
};
</script>

<style>
/* Footer */
.home-page {
  /* border: 1px solid #fff; */
  margin-top: 12rem;
  width: 100%;
  /* height: 250vh; */
}
@media screen and (max-width: 65rem) {
  .home-page{
    margin-top: 6rem;
  }
}
</style>
