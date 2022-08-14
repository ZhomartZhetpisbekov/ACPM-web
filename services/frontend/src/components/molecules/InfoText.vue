<template>
  <div v-if="category" class="info-text">
    <h1 class="info-text_title">{{ category.title }}</h1>
    <img :src="`${imgPath}${category.main_image}`" alt="" />
    <div class="parsed-html" v-html="category.text"></div>
    <div v-if="category.pdfs.length > 0">
      <a v-for="(item, index) in category.pdfs"
        :key="index"
        :href="`${imgPath}${item.pdf}`"
      >
        {{ item.pdf }}
      </a>
      <vue-pdf-embed
        v-for="(item, index) in category.pdfs"
        :key="index"
        :source="`${imgPath}${item.pdf}`"
      />
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";

export default {
  name: "InfoText",
  components: { VuePdfEmbed },
  props: {
    category: {
      type: Object,
    },
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`;
    },
  },
};
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

.parsed-html {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  line-height: 1.5rem;
}

.parsed-html >>> img {
  width: 50%;
}

.parsed-html >>> iframe {
  width: 100%;
  aspect-ratio: 16/9;
}

.parsed-html >>> ol, .parsed-html >>> ul {
  padding: 0 2rem;
}

.parsed-html >>> a {
  color: var(--text-color);
  text-decoration: underline;
}

</style>