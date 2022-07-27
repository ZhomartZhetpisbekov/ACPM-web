<template>
  <div class="upcomming-events-container">
    <h2>Предстоящие мероприятия</h2>

    <!-- <div class="events-container">
      <a @click="scroll_left"><img src="../../assets/HomePage/button-left.png" alt=""></a>
      <div class="scrollable-container">

        <EventItem 
          v-for="(item, index) in events"
          :key="index"
          :eventInfo="item"
          :eventsNum="events.length"/>

      </div>
      <a @click="scroll_right"><img src="../../assets/HomePage/button-right.png" alt=""></a>
    </div> -->

    <div class="events-container">
      <a @click="scroll_left"
        ><img src="../../assets/HomePage/button-left.png" alt=""
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
        ><img src="../../assets/HomePage/button-right.png" alt=""
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
        [1, "event1", "Tematisk fosk. Set sofanygon pesåsam."],
        [2, "event2", "TemaSet anygon peså sofanygon gon pesåpesåsam."],
        [3, "event3", "Teså sofanym. emaSet anygon polka"],
        [4, "event2", "Labaduba, coriga on polka. Ikola pirodka hu'swetor."],
        [5, "event1", "Lorino furiaka, boriko 08.2012 kamdetro."],
        [6, "event3", "Teno furiaka, boriklka"],
        [7, "event1", "Lorino furiaka, boriko 08.2012 kamdetro."],
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 3,
        slidesToScroll: 1,
        loop: true,
      },
    };
  },
  methods: {
    scroll_left() {
      // let content = document.querySelector(".scrollable-container");
      // content.scrollLeft -= 436;
      this.$refs.slider.$emit("slidePre");
    },
    scroll_right() {
      // let content = document.querySelector(".scrollable-container");
      // content.scrollLeft += 436;
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
  /* border: 1px solid yellow; */
  width: 100%;
  margin-bottom: 70px;
}

.events-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

a {
  margin-top: 115px;
}

a img {
  width: 30px;
}

.scrollable-container {
  /* border: 1px solid greenyellow; */
  display: flex;
  justify-content: space-between;
  width: 85%;
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

h2 {
  width: 83%;
  margin: auto;
  margin-bottom: 25px;
}

.custom-slider-item {
  width: 33% !important;
}

@media only screen and (max-width: 720px) {
  .scrollable-container {
    /* border: 1px solid #fff; */
    width: 95%;
  }
}
</style>