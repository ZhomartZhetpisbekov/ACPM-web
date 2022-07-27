<template>
  <div class="event-outter-container">
    <a href=""> 
      <div class="event-container">
        <img :src="require(`../../assets/HomePage/${eventInfo[1]}.png`)" />
        <p>{{ eventInfo[2] }}</p>
      </div>
    </a>
  </div>
</template>

<script scoped>

export default {

  name: "EventItem",
  props: {
    eventInfo: {
      type: Array,
    },
    eventsNum: {
      type: Number,
    }
  },
  // data() {
  //   return {
  //     lastEvent: (this.eventInfo[0] === this.eventsNum) ? true : false,
  //   }
  // },
};
</script>

<style scoped>
/* Event Item */
.event-outter-container {
  width: 100%;

}

.last-event {
  margin-right: 0;
}

.event-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

img {
  width: 350px;
  
}

p {
  width: 80%;
  font-size: 1.2rem;
}

@media only screen and (max-width: 720px) {
  .event-container {
    /* border: 1px solid yellow; */
    width: 100%;
  }
}

</style>