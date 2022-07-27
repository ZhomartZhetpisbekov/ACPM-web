<template>
  <div class="news-page">
    <div class="banner">
      <h2>Новости</h2>
    </div>

    <LeadNews />

    <h3>ACPM Новости</h3>

    <div class="news-container">
      <SingleNews
        v-for="(item, index) in temporaryNews"
        :key="index"
        :imgPath="item.imgPath"
        :title="item.title"
        :date="item.date"
      />
    </div>
  </div>
</template>

<script>
import LeadNews from "../molecules/LeadNews.vue";
import SingleNews from "../molecules/SingleNews.vue";

export default {
  name: "NewsPage",
  components: { LeadNews, SingleNews },
  methods: {
  },
  data() {
    return {
      temporaryNews: [
        {
          imgPath: "1",
          title:
            "On Inaugural World Bronchiectasis Day, International Lung Health Organizations Raise Awareness",
          date: "07 July, 2022",
        },
        {
          imgPath: "2",
          title: "ERS journals awarded highest Journal Impact Factors to date",
          date: "22 June, 2022",
        },
        {
          imgPath: "3",
          title:
            "Be aware that onsite spaces are limited – we recommend early registration to avoid disappointment.",
          date: "22 January, 2022",
        },
        {
          imgPath: "2",
          title: "ERS journals awarded highest Journal Impact Factors to date",
          date: "22 June, 2022",
        },
        {
          imgPath: "1",
          title:
            "On Inaugural World Bronchiectasis Day, International Lung Health Organizations Raise Awareness",
          date: "07 July, 2022",
        },
        {
          imgPath: "3",
          title:
            "Be aware that onsite spaces are limited – we recommend early registration to avoid disappointment.",
          date: "22 January, 2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* News Page */
.news-page {
  margin-top: 12rem;
  width: 100%;
}

.banner {
  width: 100%;
  height: 200px;
  background-image: url(../../assets/HomePage/background-img.png);
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  margin-bottom: 80px;
}

.banner h2 {
  width: 85%;
  margin: auto auto 10px;
  font-weight: 500;
  font-size: 42px;
}

h3 {
  font-weight: 700;
  font-size: 24px;
  width: 85%;
  margin: auto auto 20px;
}

.news-container {
  width: 91%;
  margin: auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
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
