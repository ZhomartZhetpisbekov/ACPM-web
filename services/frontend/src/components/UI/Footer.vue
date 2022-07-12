<template>
  <footer class="footer" style="border: 1px solid green">
    <div class="footer-title">
      <h2>ACPM</h2>
    </div>
    <FooterMiddle />
  </footer>
</template>

<script>
import FooterMiddle from '../molecules/FooterMiddle.vue';

export default {
  name: "BaseFooter",
  components: {
    FooterMiddle,
  },
  props: {},
  data() {},
  methods: {},
};
</script>

<style scoped>
/* Footer */
.footer {
  margin-top: 130px;
  /* max-width: 80rem; */
  background: #d9d9d9;
  width: 100%;
  justify-content: space-between;
  padding: 25px 140px 60px;
}

.footer-title {
  margin-bottom: 30px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 900;
}
</style>