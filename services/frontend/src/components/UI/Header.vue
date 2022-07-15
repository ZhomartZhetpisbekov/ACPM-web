<template>
  <header class="header">
    <div class="header-content">
      <HeaderTop />
      <HeaderMiddle @openMenu="(payload) => toggleMenu(payload)" />
      <HeaderBottom />
      <div class="mobile-dropdown" :class="{ menuOpen: isActive }">
        <NavItem
          v-for="i in [0, 1, 2, 3, 4, 5, 6, 7]"
          :key="i"
          :styling="'middle'"
          :title="pageNames[i]"
        />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderTop from "../molecules/HeaderTop.vue";
import HeaderBottom from "../molecules/HeaderBottom.vue";
import HeaderMiddle from "../molecules/HeaderMiddle.vue";
import NavItem from "../atoms/NavItem.vue";

export default {
  name: "BaseHeader",
  components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom,
    NavItem,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
      pageNames: [
        "Общество",
        "События",
        "Образование",
        "Клинические протоколы",
        "Новости в медицине",
        "Новости",
        "Контакты",
        "Личный Кабинет",
      ],
    };
  },
  methods: {
    toggleMenu(payload) {
      this.isActive = payload;
    },
  },
};
</script>

<style>
/*Header*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  background: #313a59;
  /* border-bottom: 1px solid black; */
}

.header-content {
  max-width: 80rem;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
}

.header img {
  height: 4rem;
}
.mobile-dropdown {
  display: none;
  width: 100%;
  position: absolute;
  top: 7em;
  background: #313a59;
  padding-bottom: 2em;
}

.menuOpen {
  display: block;
}

@media screen and (min-width: 65rem) {
  .mobile-dropdown {
    display: none;
  }
}

@media screen and (max-width: 65rem) {
  .header {
    height: 7em;
  }
  .header-content {
    height: 7em;
  }
}
</style>
