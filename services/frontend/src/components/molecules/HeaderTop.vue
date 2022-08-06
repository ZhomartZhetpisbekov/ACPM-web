<template>
  <nav>
    <ul>
      <li>
        <img :src="require('@/assets/Header/kz.svg')" alt="" />
      </li>
      <li>
        <img
          @click="changeLocale('ru')"
          :src="require('@/assets/Header/ru.svg')"
          alt=""
        />
      </li>
      <li>
        <img
          @click="changeLocale('en')"
          :src="require('@/assets/Header/en.svg')"
          alt=""
        />
      </li>
      <NavItem
        v-for="(item, ind) in $t('header.navTop')"
        :key="ind"
        :styling="'top'"
        :active="pageActive[ind]"
        :title="item"
        :imgPath="headerTopLinks[ind].path"
        :pagePath="headerTopLinks[ind].path"
        :routerName="headerTopLinks[ind].routerName"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";
import i18n from "../../plugins/i18n";

export default {
  name: "HeaderTop",
  components: {
    NavItem,
  },
  computed: {
    headerTopLinks() {
      return this.$store.getters.headerTopItems;
    },
    // topLinksTitle() {
    //   return $t('header.navTop');
    // }
  },
  data() {
    return {
      // pageNames: ["Новости", "Контакты", "Личный Кабинет"],
      pageActive: [false, false, true],
      // pagePaths: ["Home", "Orders", "Rakhmet"],
      // pageImgs: ["news", "contacts", "cabinet"],
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      await this.$store.dispatch("getNews");

      this.loading = false;
    },
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* margin-right: 4rem; */
  /* font-family: "Gotham Pro Bold"; */
}
ul {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  color: var(--header-top-color);
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
