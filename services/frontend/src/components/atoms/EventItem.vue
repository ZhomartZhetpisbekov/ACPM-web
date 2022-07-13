<template>
  <div class="event-outter-container">
    <a href="">
      <div class="event-container">
        <img src="../../assets/HomePage/event1.png" alt="">
        <p>Tematisk fosk. Set sofanygon pesåsam.</p>
      </div>
    </a>
  </div>
</template>

<script scoped>

export default {
  name: "EventItem",
  props: {

  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
/* Event Item */
.event-outter-container {
  margin-right: 85px;
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

</style>