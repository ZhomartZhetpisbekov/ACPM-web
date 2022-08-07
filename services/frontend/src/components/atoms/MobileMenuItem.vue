<template>
  <li :class="{ current: currentSection }" @click="clickHandler">
    <p class="mobile-menu__item" :class="styling">{{ sectionName }}</p>
  </li>
</template>

<script>
export default {
  name: "MobileMenuItem",
  props: {
    currentSection: {
      type: Boolean,
    },
    sectionName: {
      type: String,
    },
    styling: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    clickHandler() {
      if (this.styling == "left") {
        this.$emit("changeCurrentSection", this.id);
      }
    },
  },
};
</script>

<style>
.mobile-menu__item:hover {
  cursor: pointer;
}

.mobile-menu__item {
  line-height: 1.5rem;
}
.mobile-menu__item.left {
  font-size: 0.875rem;
  padding: 1rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--footer-bg-color);
}

.mobile-menu__item.right {
  font-size: 0.875rem;
  background: #fff;
  color: var(--text-color);
  padding: 1rem;
  border-bottom: var(--search-bar-color) 1px solid;
}

.current {
  background: var(--text-color);
  color: #fff;
}

.current > .left {
  color: #fff;
}
</style>
