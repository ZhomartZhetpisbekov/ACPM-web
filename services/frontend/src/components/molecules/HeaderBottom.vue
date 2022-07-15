<template>
  <nav>
    <ul>
      <NavItem
        v-for="i in [0, 1, 2, 3, 4]"
        :key="i"
        :styling="'bottom'"
        :title="pageNames[i]"
        :pagePath="pagePaths[i]"
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
  margin: 1rem 4rem 1.25rem 4rem;
}

@media screen and (max-width: 65rem) {
  ul {
    display: none;
  }
}
</style>
