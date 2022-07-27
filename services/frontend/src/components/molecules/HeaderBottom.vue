<template>
  <nav>
    <ul :class="{ squeezedList: scrolledDown }">
      <div class="squeezedSpan" v-if="scrolledDown">
        <img class="squeezedLogo" :src="require('@/assets/Header/logo.png')" />
      </div>
      <NavItem
        v-for="(item, ind) in headerBottomLinks"
        :key="ind"
        :styling="!scrolledDown ? 'bottom' : 'bottomSqueezed'"
        :title="item.name"
        :pagePath="item.path"
        :routerName="item.routerName"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";

export default {
  name: "HeaderBottom",
  components: {
    NavItem,
  },
  props: {
    scrolledDown: {
      type: Boolean,
    },
  },
  computed: {
    headerBottomLinks() {
      return this.$store.getters.headerBottomItems;
    },
  },
  data() {
    return {
      pageNames: [
        "Общество",
        "События",
        "Образование",
        "Клинические протоколы",
        "Новости в медицине",
      ],
      pageActive: [false, false, true],
      pagePaths: [
        "obschestvo",
        "sobytia",
        "obrazovanie",
        "clinicalprotocols",
        "medicinicnews",
      ],
      pageImgs: ["Home", "Order", "Rakhmet"],
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
}
ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  /* margin: 1rem 4rem 1.25rem 4rem; */
}

li {
  display: flex;
}

.squeezedList {
  margin: 0 4rem 1rem 4rem;
}

.squeezedSpan {
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
}

.squeezedLogo {
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  object-fit: cover;
  object-position: 0%;
  border-radius: 50%;
}

@media screen and (max-width: 65rem) {
  ul {
    display: none;
  }
}
</style>
