<template>
  <li
    class="info-middle"
    :class="{ active: this.activeGiven }"
    @click="changePage"
  >
    <p>{{ this.title }}</p>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    activeGiven: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    pagePath: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      currentPage: this.$router.currentRoute.path,
    };
  },
  methods: {
    changePage() {
      if (
        this.$router.currentRoute.path !==
        "/" + this.$router.currentRoute.params.name + "/" + this.pagePath
      ) {
        this.$router.push({
          name: "Information",
          params: {
            name: this.$router.currentRoute.params.name,
            item: this.pagePath,
          },
        });
        this.addClass = "active";
        this.$emit("changeActive", this.index);
      }
    },
  },
};
</script>

<style scoped>
li {
  color: white;
  display: flex;
  align-items: center;
  transition: all 0.375s ease;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  width: 24rem;
}

li:hover {
  background: #23a6f0;
  color: white;
  cursor: pointer;
}

.info-middle {
  font-size: 1rem;
  padding: 0.875rem 3rem 0.875rem 7rem;
}

.active {
  background: white;
  color: black;
  font-size: 1.375rem;
  margin: 0;
}

@media screen and (max-width: 65rem) {
  .info-middle {
    padding: 0.875rem 0 0.875rem 4rem;
  }
  li {
    width: 18rem;
  }
  .active {
    font-size: 1.175rem;
  }
}
</style>
