<template>
  <div class="home-page">
    <AboutUsBanner />
    <UpcommingEvents />
  </div>
</template>

<script>
import AboutUsBanner from '../molecules/AboutUsBanner.vue';
import UpcommingEvents from '../molecules/UpcommingEvents.vue';

export default {
  name: "HomePage",
  components: { AboutUsBanner, UpcommingEvents },
  props: {},
  data() {},
  methods: {},
};
</script>

<style>
/* Footer */
.home-page {
  /* border: 1px solid #fff; */
  margin-top: 200px;
  width: 100%;
  height: 150vh;
}
</style>