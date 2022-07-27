<template>
  <header class="header" :class="{ squeeze: scrolledDown }">
    <div class="header-content">
      <HeaderTop />
      <HeaderMiddle
        v-if="!scrolledDown"
        @openMenu="(payload) => toggleMenu(payload)"
      />
      <HeaderBottom :scrolledDown="scrolledDown" />
      <div class="mobile-dropdown" :class="{ menuOpen: isActive }">
        <NavItem
          v-for="(item, ind) in headerLinks"
          :key="ind"
          :styling="'middle'"
          :title="item.name"
          :pagePath="item.path"
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
  computed: {
    headerLinks() {
      return this.$store.getters.headerAllItems;
    },
  },
  data() {
    return {
      isActive: false,

      scrolledDown: false,
    };
  },
  mounted() {
    document.addEventListener("resize", this.handleResize(window.innerWidth));
    document.addEventListener("scroll", () => {
      this.handleScroll(window.scrollY);
    });
  },
  beforeDestroy() {
    document.removeEventListener("scroll", () => {
      this.handleScroll(window.scrollY);
    });
    window.removeEventListener("resize", this.handleResize(window.innerWidth));
  },
  methods: {
    toggleMenu(payload) {
      this.isActive = payload;
    },
    handleScroll(payload) {
      if (payload >= 150 && window.innerWidth > 1040) {
        this.scrolledDown = true;
      } else {
        this.scrolledDown = false;
      }
    },
    handleResize(payload) {
      if (payload < 1040) {
        this.scrolledDown = false;
      }
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
  z-index: 9999;
  justify-content: center;
  background: #313a59;
  /* border-bottom: 1px solid black; */
}

.header-content {
  max-width: 78rem;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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

.squeeze {
  height: 8rem;
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
