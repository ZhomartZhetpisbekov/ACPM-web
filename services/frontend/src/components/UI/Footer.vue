<template>
  <footer class="footer">
    <div class="footer-title">
      <h2>ACPM</h2>
    </div>
    <FooterMiddle />
  </footer>
</template>

<script>
import FooterMiddle from "../molecules/FooterMiddle.vue";

export default {
  name: "BaseFooter",
  components: {
    FooterMiddle,
  },
};
</script>

<style scoped>
/* Footer */
.footer {
  background: #d9d9d9;
  color: #000;
  width: 100%;
  justify-content: space-between;
  padding: 25px 7.375rem 60px;
}

.footer-title {
  margin-bottom: 30px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 900;
}

@media only screen and (max-width: 60rem) {
  .footer-title {
    text-align: center;
  }
}
@media only screen and (max-width: 65rem) {
  .footer {
    padding: 25px 4rem 60px;
  }
}
</style>
