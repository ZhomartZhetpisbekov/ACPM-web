<template>
  <div class="mobile-dropdown" :class="{ menuOpen: isActive }">
    <div class="mobile-dropdown__container">
      <DropDown />
      <NavItem
        :active="true"
        :imgPath="'account'"
        :pagePath="'account'"
        :styling="'top'"
        :title="'Личный кабинет'"
      />
    </div>
    <SearchBar />
    <ul class="mobile-dropdown__list">
      <NavItem
        v-for="(item, ind) in headerLinks"
        :key="ind"
        :styling="'mobile'"
        :title="item.name"
        :pagePath="item.path"
      />
    </ul>
  </div>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";
import SearchBar from "../atoms/SearchBar.vue";
import DropDown from "../atoms/DropDown.vue";
export default {
  name: "MobileDropdown",
  components: {
    NavItem,
    SearchBar,
    DropDown,
  },
  props: {
    isActive: {
      type: Boolean,
    },
  },
  computed: {
    headerLinks() {
      return this.$store.getters.headerBottomItems;
    },
  },
};
</script>

<style scoped>
.mobile-dropdown {
  display: none;
  width: 100%;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--footer-bg-color);
  padding-bottom: 2em;
  font-size: 0.875rem;
}

.mobile-dropdown__container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.menuOpen {
  display: block;
}

.mobile-dropdown__list {
  margin-top: 1.5rem;
}

@media screen and (min-width: 65rem) {
  .mobile-dropdown {
    display: none;
  }
}
</style>
