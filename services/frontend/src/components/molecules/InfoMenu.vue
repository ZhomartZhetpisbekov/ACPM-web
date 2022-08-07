<template>
  <div>
    <!-- <h2 class="information-title">Общество</h2> -->
    <ul class="information-menu">
      <li class="information-menu__title">{{ this.headerTitle }}</li>
      <InfoItem
        v-for="(item, ind) in menuItmes"
        :key="ind"
        :activeGiven="ind == currentActive"
        :title="item.name"
        :pagePath="item.path"
        :index="ind"
        @changeActive="(payload) => toggleActive(payload)"
      />
    </ul>
  </div>
</template>

<script>
import InfoItem from "../atoms/InfoItem.vue";

export default {
  name: "InfoMenu",
  props: {
    name: {
      type: String,
    },
  },
  components: {
    InfoItem,
  },
  computed: {
    menuItmes() {
      return this.$store.state.menu.pages.headerNavBottom[this.findTitle]
        .children;
    },
    headerBottom() {
      return this.$store.state.menu.pages.headerNavBottom;
    },
    headerTitle() {
      return this.headerBottom[this.findTitle].name;
    },
  },
  data() {
    return {
      currentActive: 0,
      isActive: false,
      findTitle: 0,
    };
  },
  methods: {
    toggleActive(index) {
      this.currentActive = index;
    },
  },
  beforeMount() {
    const computedCurrentSection = this.menuItmes.findIndex(
      (item) => item.path === this.$router.currentRoute.params.item
    );
    const damn = this.headerBottom.findIndex(
      (item) => item.path === this.$router.currentRoute.params.name
    );
    damn === -1 ? (this.findTitle = 0) : (this.findTitle = damn);
    computedCurrentSection === -1
      ? (this.currentActive = 0)
      : (this.currentActive = computedCurrentSection);
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        const computedCurrentSection = this.menuItmes.findIndex(
          (item) => item.path === toParams.item
        );
        const damn = this.headerBottom.findIndex(
          (item) => item.path === this.$router.currentRoute.params.name
        );
        damn === -1 ? (this.findTitle = 0) : (this.findTitle = damn);
        computedCurrentSection === -1
          ? (this.currentActive = 0)
          : (this.currentActive = computedCurrentSection);
      }
    );
  },
};
</script>

<style scoped>
.information-menu {
  background: var(--footer-bg-color);
}

.information-menu__title {
  list-style: none;
  padding: 1rem;
  font-family: "Gotham Pro Bold";
  background: var(--menu-title);
  color: var(--text-color);
  width: 16rem;
}

/* @media screen and (max-width: 65rem) {
  .information-title {
    margin-left: 4rem;
  }
} */
</style>
