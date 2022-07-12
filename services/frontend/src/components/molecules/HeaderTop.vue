<template>
  <nav>
    <ul>
      <NavItem
        v-for="i in [0, 1, 2]"
        :key="i"
        :styling="'top'"
        :active="pageActive[i]"
        :title="pageNames[i]"
        :imgPath="pageImgs[i]"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";

export default {
  name: "HeaderTop",
  components: {
    NavItem,
  },
  data() {
    return {
      pageNames: ["Новости", "Контакты", "Личный Кабинет"],
      pageActive: [false, false, true],
      pagePaths: ["Home", "Orders", "Rakhmet"],
      pageImgs: ["news", "contacts", "cabinet"],
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 4rem;
}
ul {
  list-style: none;
  display: flex;
}
@media screen and (max-width: 65rem) {
  ul {
    display: none;
  }
  nav {
    display: nones;
    /* margin-right: 8rem; */
  }
}
/*  */
</style>
