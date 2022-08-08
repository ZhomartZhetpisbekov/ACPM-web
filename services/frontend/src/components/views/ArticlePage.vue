<template>
  <div class="article-page">
    <div class="article-page-container">
      <div class="article-container">
        <img :src="this.imgPath" alt="" />
        <h3>{{ article.title }}</h3>
        <span>{{ article.date }}</span>
        <div v-html="article.text"></div>
      </div>
      <div class="similar-news-container">
        <h3>Другие новости</h3>
        <SimilarNewsBox
          v-for="(item, index) in news.slice(0, 3)"
          :key="index"
          :title="item.title"
          :date="item.date"
        />
      </div>
    </div>
    <div class="go-back-btn">
      <a @click="goBack">
        <i class="fa-solid fa-arrow-left-long"></i>
        Вернуться на страницу новостей
      </a>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import SimilarNewsBox from "../molecules/SimilarNewsBox.vue";

export default {
  name: "ArticlePage",
  components: {
    SimilarNewsBox,
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
    article() {
      return this.$store.state.article[0];
    },
    imgPath() {
      return `${api.defaults.baseURL}${this.article.main_image}`;
    },
  },
  mounted() {
    this.fetchArticle();
    this.fetchNews();
    this.getArticle();
  },
  methods: {
    async fetchArticle() {
      let newId = this.$router.currentRoute.params.id;
      this.loading = true;
      await this.$store.dispatch("getArticle", newId);
      this.loading = false;
    },
    async fetchNews() {
      this.loading = true;
      await this.$store.dispatch("getNews");
      this.loading = false;
    },
    goBack() {
      this.$router.back();
    }
  },
};
</script>

<style scoped>
h3 {
  font-family: "Gotham Pro Med";
  font-size: 2rem;
  line-height: 2rem;
  color: #005963;
}
span {
  color: #70a2a7;
}
.article-page {
  margin-top: 13rem;
  width: 100%;
  padding: 0 8rem;
  color: #000;
  font-family: "Gotham Pro";
  letter-spacing: 1.1px;
  line-height: 23px;
  text-align: center;
}

.article-page-container {
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.article-container {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.similar-news-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
}

.article-container img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}

.go-back-btn {
  margin: 30px 0 30px;
}

.go-back-btn a {
  color: #005963;
}

@media only screen and (max-width: 65rem) {
  .article-page {
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 720px) {
  .article-page-container {
    flex-direction: column;
    gap: 40px;
  }

  .article-container {
    width: 100%;
  }

  .similar-news-container {
    width: 100%;
  }
}
</style>