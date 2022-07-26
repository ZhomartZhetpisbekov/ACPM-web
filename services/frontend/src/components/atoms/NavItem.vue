<template>
  <li :class="`${this.addClass} ${this.styling}`" @click="changePage">
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
    pagePath: {
      type: String,
    },
    routerName: {
      type: String
    }
  },
  data() {
    return {
      addClass: this.active == true ? "active" : "",
      path:
        this.styling == "top" &&
        require("@/assets/Header/" + this.imgPath + ".svg"),
    };
  },
  methods: {
    changePage() {
      if (this.$router.currentRoute.path !== "/" + this.pagePath)
        this.$router.push({
          name: this.routerName,
          params: { name: this.pagePath },
        });
    },
  },
};
</script>

<style scoped>
li {
  padding-bottom: 0.25rem;
  /* color: white; */
  display: flex;
  align-items: center;
  border-bottom: 2px solid #313a59;
}

li:hover {
  cursor: pointer;
}

.bottom:hover {
  border-bottom: 2px solid white;
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

.bottomSqueezed {
  font-size: 1rem;
}

.middle {
  font-size: 1.125rem;
  border-bottom: 1px solid #f4f4f4;
  margin: 0 3em;
  padding: 1em 0;
}

.active {
  background: #23a6f0;
  color: #fff;
}

@media screen and (max-width: 65rem) {
  .middle {
    margin: 0 2em;
  }
}
</style>
