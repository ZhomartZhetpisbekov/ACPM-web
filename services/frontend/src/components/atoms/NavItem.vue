<template>
  <li :class="`${this.addClass} ${this.styling}`">
    <img v-if="styling == 'top'" :src="this.path" />
    <p>{{ this.title }}</p>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    active: {
      type: Boolean,
    },
    styling: {
      type: String,
    },
    title: {
      type: String,
    },
    imgPath: {
      type: String,
    },
  },
  data() {
    return {
      addClass: this.active == true ? "active" : "",
      path:
        this.styling == "top" &&
        require("@/assets/Header/" + this.imgPath + ".svg"),
    };
  },
};
</script>

<style scoped>
li {
  color: white;
  display: flex;
  align-items: center;
}

.top {
  border-radius: 40px;
  margin-right: 1.5rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
}

.top img {
  height: 1.125rem;
  margin-right: 5px;
}

.bottom {
  font-size: 1.125rem;
}

.middle {
  font-size: 1.125rem;
  border-bottom: 1px solid #f4f4f4;
  margin: 0 3em;
  padding: 1em 0;
}

.active {
  background: #23a6f0;
}

@media screen and (max-width: 65rem) {
  .middle {
    margin: 0 2em;
  }
}

p {
  margin-bottom: 0;
}
</style>
