<template>
    <div class="col-md-2">
      <div class="footer-items-box">
        <h2>{{ title }}</h2>
        <FooterItem 
          v-for="(item, index) in footerNavs"
          :key="index"
          :title="item"
        />
      </div>
    </div>
</template>

<script>
import FooterItem from '../atoms/FooterItem.vue';

export default {
    name: "FooterMiddleBox",
    props: {
      footerNavs: {
        type: Array,
      },
      title: {
        type: String,
      }
    },
    data() {
        return {};
    },
    methods: {},
    components: { FooterItem }
};
</script>

<style scoped>
/* Footer Middle Box */
.col-md-2 {
  width: 20%;
}

.footer-items-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}

h2 {
  font-size: 1.3rem;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 14px;
}

@media only screen and (max-width: 720px) {
  .col-md-2 {
    width: 100%;
    margin-bottom: 10px;
  }

  .footer-items-box {
    align-items: center;
  }
}
</style>