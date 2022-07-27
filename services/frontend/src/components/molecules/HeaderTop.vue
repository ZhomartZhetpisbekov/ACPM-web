<template>
  <nav>
    <ul>
      <li>
        <img :src="require('@/assets/Header/kz.svg')" alt="" />
      </li>
      <li>
        <img :src="require('@/assets/Header/ru.svg')" alt="" />
      </li>
      <li>
        <img :src="require('@/assets/Header/eng.svg')" alt="" />
      </li>
      <NavItem
        v-for="(item, ind) in headerTopLinks"
        :key="ind"
        :styling="'top'"
        :active="pageActive[ind]"
        :title="item.name"
        :imgPath="item.path"
        :pagePath="item.path"
        :routerName="item.routerName"
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
  computed: {
    headerTopLinks() {
      return this.$store.getters.headerTopItems;
    },
  },
  data() {
    return {
      // pageNames: ["Новости", "Контакты", "Личный Кабинет"],
      pageActive: [false, false, true],
      // pagePaths: ["Home", "Orders", "Rakhmet"],
      // pageImgs: ["news", "contacts", "cabinet"],
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* margin-right: 4rem; */
}
ul {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
}

ul img {
  height: 1rem;
  margin-right: 1rem;
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
