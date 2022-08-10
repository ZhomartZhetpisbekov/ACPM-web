<template>
  <div>
    <ul v-if="category" class="information-menu">
      <li class="information-menu__title">{{ $t(`header.menu.${category.group}`) }}</li>
      <InfoItem2
        v-for="(item, ind) in categoryList"
        :key="ind"
        :title="item.category"
        :group="category.group"
      />
    </ul>
  </div>
</template>

<script>
import InfoItem2 from "../atoms/InfoItem2.vue"

export default {
  name: 'InfoMenu2',
  components: {InfoItem2},
  props: {
    categoryList: {
      type: Array,
    },
    category: {
      type: Object,
    }
  },
}
</script>

<style>
.information-menu {
  margin-right: 4rem;
  background: var(--footer-bg-color);
}

.information-menu__title {
  list-style: none;
  padding: 1rem;
  font-family: "Gotham Pro Bold";
  background: var(--menu-title);
  color: var(--text-color);
  width: 16rem;
}

@media screen and (max-width: 65rem) {
  .information-menu {
    display: none;
  }
}
</style>