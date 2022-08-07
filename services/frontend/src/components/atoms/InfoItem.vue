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
  color: var(--text-color);
  display: flex;
  align-items: center;
  transition: all 0.375s ease;
  padding: 1rem;
  font-family: "Gotham Pro";
  font-size: 0.875rem;
  /* border-top-right-radius: 1.5rem; */
  /* border-bottom-right-radius: 1.5rem;/ */
  width: 16rem;
  border-top: 1px solid var(--search-bar-color);
}

li:hover {
  background: var(--active-color);
  font-family: "Gotham Pro Med";
  font-style: italic;
  cursor: pointer;
}

.active {
  background: var(--active-color);
  font-family: "Gotham Pro Med";
  font-style: italic;
  /* border: none; */
}

@media screen and (max-width: 65rem) {
  /* .info-middle {
    padding: 0.875rem 0 0.875rem 4rem;
  }
  li {
    width: 18rem;
  }
  .active {
    font-size: 1.175rem;
  } */
}
</style>
