<template>
  <div class="upcomming-events-container">
    <h2>Предстоящие мероприятия</h2>

    <div class="events-container">
      <a @click="scroll_left"><img src="../../assets/HomePage/button-left.png" alt=""></a>
      <div class="scrollable-container">

        <EventItem />
        <EventItem />
        <EventItem />

        <EventItem />
        <EventItem />
        <EventItem />

      </div>
      <a @click="scroll_right"><img src="../../assets/HomePage/button-right.png" alt=""></a>
    </div>

  </div>
</template>

<script scoped>
import EventItem from '../atoms/EventItem.vue';

export default {
    name: "UpcommingEvents",
    props: {},
    data() {
        return {};
    },
    methods: {
      scroll_left() {
        let content = document.querySelector(".scrollable-container");
        content.scrollLeft -= 200;
      },
      scroll_right() {
        let content = document.querySelector(".scrollable-container");
        content.scrollLeft += 200;
      },
    },
    components: {
      EventItem,
    },
};
</script>

<style scoped>
/* Upcomming Events */
.upcomming-events-container {
  /* border: 1px solid yellow; */
  width: 100%;

}

.events-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.scrollable-container {
  /* border: 1px solid greenyellow; */
  display: flex;
  justify-content: space-between;
  width: 85%;
  overflow: auto;
}

h2 {
  width: 83%;
  margin: auto;
  margin-bottom: 25px;
  color: #fff;
}

</style>