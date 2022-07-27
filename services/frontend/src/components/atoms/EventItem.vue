<template>
  <div class="event-container">
    <a href="" class="event-link-wrapper">
      <img :src="require(`../../assets/HomePage/${eventInfo[1]}.jpeg`)" />
      <p>{{ eventInfo[2] }}</p>
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
    },
  },
};
</script>

<style scoped>
/* Event Item */

.event-container {
  width: 90%;
  text-align: center;
}

img {
  width: 100%;
  display: block;
}

p {
  background: #FACBA6;
  color: #005963;
  padding: 15px 20px;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  margin: auto;
  height: 120px;
  /* width: 100%; */
}

</style>