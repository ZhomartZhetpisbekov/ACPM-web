<template>
  <div class="event-container">
    <a href="" class="event-link-wrapper">
      <img :src="require(`../../assets/HomePage/${eventInfo[1]}.jpeg`)" />
      <p>
        {{ eventInfo[2] }} <br>
        <a class="read-more">Read More...</a>
      </p>
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
  text-align: left;
}

img {
  width: 100%;
  display: block;
}

p {
  background: #f0f5f6;
  color: #000;
  padding: 15px 20px;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: auto;
  height: 60px;
  width: 100%;
}

.read-more {
  color: #17A2AB;
}
</style>