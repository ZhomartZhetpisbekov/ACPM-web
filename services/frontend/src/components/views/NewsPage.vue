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

    <!-- Make a div wrapped slider,set height and width -->
    <div style="width: 100%; margin: 20px auto; height: 400px">
      <!-- Using the slider component -->
      <slider
        ref="slider"
        :options="options"
        @slide="slide"
        @tap="onTap"
        @init="onInit"
      >
        <!-- slideritem wrapped package with the components you need -->
        <slideritem
          v-for="(item, index) in someList"
          :key="index"
          :style="item.style"
          >{{ item.html }}</slideritem
        >
        <!-- Customizable loading -->
        <div slot="loading">loading...</div>
      </slider>
    </div>
    <a @click="slideNext">swipe</a>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import LeadNews from "../molecules/LeadNews.vue";
import SingleNews from "../molecules/SingleNews.vue";

export default {
  name: "NewsPage",
  components: { LeadNews, SingleNews, slider, slideritem },
  methods: {
    slideNext () {
    this.$refs.slider.$emit('slideNext')
  }
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
      someList: [
        {
          html: "slider1",
          style: {
            background: "#4abf8a",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider2",
          style: {
            background: "#4bbfc3",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider3",
          style: {
            background: "#7baabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider4",
          style: {
            background: "#7caabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider5",
          style: {
            background: "#4abf8a",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider6",
          style: {
            background: "#4bbfc3",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider7",
          style: {
            background: "#7baabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slider8",
          style: {
            background: "#7caabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 4,
        slidesToScroll: 1,
        loop: true,
      },
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
