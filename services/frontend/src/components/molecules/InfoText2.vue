<template>
  <div v-if="category" class="info-text">
    <h1 class="info-text_title">{{ category.title }}</h1>
    <img :src="`${imgPath}${category.main_image}`" alt="">
    <div class="parsed-html" v-html="category.text"></div>
  </div>
</template>

<script>
import api from '../../services/api';
// import InfoLol from '../atoms/InfoLol.vue';

export default {
  name: 'InfoText2',
  // components: {InfoLol},
  props: {
    category: {
      type: Object,
    }
  },
  // mounted() {
  //   console.log(this.category);
  // },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`
    },
  },
}
</script>

<style scoped>
.info-text {
  color: var(--text-color);
  font-family: "Gotham Pro";
}
.info-text_title {
  font-family: "Gotham Pro Bold";
  font-size: 2rem;
  /* margin-top: 0.5rem; */
  margin-bottom: 2rem;
}

img {
  width: 100%;
}

.parsed-html{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
}
</style>