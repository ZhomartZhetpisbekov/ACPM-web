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
    <div class="mobile-dropdown__info">
      <ul class="mobile-dropdown__sections">
        <MobileMenuItem
          v-for="(item, ind) in headerLinks"
          :key="ind"
          :currentSection="ind == current"
          :sectionName="item.name"
          :styling="'left'"
          :pagePath="item.path"
          :id="ind"
          @changeCurrentSection="(payload) => clickHandler(payload)"
        />
      </ul>
      <ul class="mobile-dropdown__list">
        <MobileMenuItem
          v-for="(item, ind) in headerLinks[current].children"
          :key="ind"
          :sectionName="item.name"
          :styling="'right'"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";
import SearchBar from "../atoms/SearchBar.vue";
import DropDown from "../atoms/LangsDropDown.vue";
import MobileMenuItem from "../atoms/MobileMenuItem.vue";
export default {
  name: "MobileDropdown",
  components: {
    NavItem,
    SearchBar,
    DropDown,
    MobileMenuItem,
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
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    clickHandler(payload) {
      this.current = payload;
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
  /* bottom: 0; */
  height: 100vh;
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

.mobile-dropdown__info {
  margin-top: 1.5rem;
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  /* justify-content: space-between; */

  border-top: 2px solid var(--search-bar-color);
}

.mobile-dropdown__sections {
  width: calc(100% / 2);
  list-style: none;
}

.mobile-dropdown__list {
  width: calc(100% / 2);
  list-style: none;
  height: 100vh;
  background: #fff;
  /* width: 100%; */
}

@media screen and (min-width: 65rem) {
  .mobile-dropdown {
    display: none;
  }
}
</style>
