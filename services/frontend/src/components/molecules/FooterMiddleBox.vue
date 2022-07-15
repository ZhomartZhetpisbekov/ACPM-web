<template>
  <div class="footer-items-box">
    <h2>{{ footerNavs[0] }}</h2>
    <FooterItem
      v-for="(item, index) in footerNavs.slice(1)"
      :key="index"
      :link="item"
    />
  </div>
</template>

<script>
import FooterItem from "../atoms/FooterItem.vue";

export default {
  name: "FooterMiddleBox",
  props: {
    footerNavs: {
      type: Array,
    },
  },
  components: { FooterItem },
};
</script>

<style scoped>
/* Footer Middle Box */

.footer-items-box {
  /* border: 1px solid blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  text-align: left;
}

h2 {
  font-size: 1.3rem;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 14px;
}

@media only screen and (max-width: 720px) {

  .footer-items-box {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 15px;
  }
}
</style>
