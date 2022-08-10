<template>
  <div class="news-page">
    <!-- <div class="banner">
      <h2>Новости</h2>
    </div> -->
    <h2>Новости</h2>

    <div v-if="news.length > 0" class="news-container">
      <SingleNews
        :articleId="news[0].id"
        :imgPath="`${imgPath}${news[0].main_image}`"
        :title="news[0].title"
        :text="news[0].text"
        :date="news[0].date"
        :isLeadNews="true"
      />

      <SingleNews
        v-for="(item, index) in news.slice(1, 4)"
        :key="index"
        :articleId="item.id"
        :imgPath="`${imgPath}${item.main_image}`"
        :title="item.title"
        :text="item.text"
        :date="item.date"
        :isLeadNews="false"
      />
    </div>

    <div class="more-news-btn">
      <a href="">Показать еще</a>
    </div>
    <router-view></router-view>

    <BecomeMember />
  </div>
</template>

<script>
import SingleNews from "../molecules/SingleNews.vue";
import BecomeMember from "../molecules/BecomeMember.vue";
import api from "../../services/api";

export default {
  name: "NewsPage",
  components: { SingleNews, BecomeMember },
  mounted() {
    this.fetchNews();
    // console.log(this.news);
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      await this.$store.dispatch("getNews"); 

      this.loading = false;
    },
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`
    },
    news() {
      return this.$store.state.news
    }
  },
};
</script>

<style scoped>
/* News Page */
.news-page {
  margin-top: 13rem;
  width: 100%;
  color: #000;
  font-family: 'Gotham Pro';
  letter-spacing: 1.1px;
  line-height: 23px;
}

h2 {
  /* width: 82.5%; */
  margin-left: 8rem;
  padding: 10px 0;
  font-size: 42px;
  color: #005963;
}

.news-container {
  width: 83%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.more-news-btn {
  width: 100%;
  padding: 0 8rem;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 40px;
}

.more-news-btn a {
  padding: 10px 20px;
  background: #00ACB1;
  color: #fff;
  border-radius: 30px;
}

@media only screen and (max-width: 720px) {
  .news-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
