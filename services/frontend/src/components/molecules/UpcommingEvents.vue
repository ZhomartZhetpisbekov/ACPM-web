<template>
  <div class="upcomming-events-container">
    <h2>{{ $t('upcommingEvents') }}</h2>
    <div class="events-container">
      <a @click="scroll_left"
        ><img src="../../assets/HomePage/left.png" alt=""
      /></a>
      <div class="scrollable-container">
        <slider
          ref="slider"
          :options="options"
          @slide="slide"
          @tap="onTap"
          @init="onInit"
        >
          <slideritem
            v-for="(item, index) in events"
            :key="index"
            class="custom-slider-item"
          >
            <EventItem :eventInfo="item" :eventsNum="events.length" />
          </slideritem>
          <div slot="loading">loading...</div>
        </slider>
      </div>
      <a @click="scroll_right"
        ><img src="../../assets/HomePage/right.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import EventItem from "../atoms/EventItem.vue";

export default {
  name: "UpcommingEvents",
  props: {},
  data() {
    return {
      events: [
        [1, "conference1", "Tematisk fosk. Set sofanygon pesåsam Tematisk fosk. Set sofanygon pesåsam Tematisk fosk. Set sofanygon pesåsam."],
        [2, "conference2", "TemaSet anygon peså sofanygon gon pesåpesåsam TemaSet anygon peså sofanygon gon pesåpesåsam TemaSet anygon peså sofanygon gon pesåpesåsam."],
        [3, "conference3", "Teså sofanym. emaSet anygon polka"],
        [4, "conference2", "Labaduba, coriga on polka. Ikola pirodka hu'swetor."],
        [5, "conference1", "Lorino furiaka, boriko 08.2012 kamdetro."],
        [6, "conference3", "Teno furiaka, boriklka"],
        [7, "conference1", "Lorino furiaka, boriko 08.2012 kamdetro."],
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 3,
        slidesToScroll: 1,
        autoplay: 5000,
        loop: true,
      },
    };
  },
  methods: {
    scroll_left() {
      this.$refs.slider.$emit("slidePre");
    },
    scroll_right() {
      this.$refs.slider.$emit("slideNext");
    },
  },
  components: {
    EventItem,
    slider,
    slideritem,
  },
};
</script>

<style scoped>
/* Upcomming Events */
.upcomming-events-container {
  width: 100%;
  margin-bottom: 70px;
}
.events-container {
  display: flex;
  justify-content: center;
}

a {
  margin-top: 115px;
}

a img {
  width: 30px;
}

.scrollable-container {
  width: 86%;
}

h2 {
  width: 83%;
  margin: auto;
  margin-bottom: 25px;
  color: #F38023;
}

.custom-slider-item {
  width: 33%;
}

@media only screen and (max-width: 720px) {
  .custom-slider-item {
    width: 80%;
  }
}

@media only screen and (max-width: 530px) {
  .custom-slider-item {
    width: 100%;
  }
}
</style>