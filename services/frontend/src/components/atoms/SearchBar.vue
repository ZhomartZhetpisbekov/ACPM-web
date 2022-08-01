<template>
  <div class="searchbar">
    <!-- <img class="icon" :src="require('@/assets/Header/search.svg')" alt="" /> -->
    <input type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.searchbar {
  /* margin-left: 3rem; */
  position: relative;
  width: 100%;
}
::placeholder {
  color: var(--search-bar-text-color);
  font-size: 1rem;
}

.searchbar input {
  width: 100%;
  height: 2rem;
  background: var(--search-bar-color);
  border-radius: 1.125rem;
  border-color: var(--footer-border-color);
  border-width: 0;
  text-align: left;
  padding-left: 1rem;
}

@media screen and (max-width: 65rem) {
  ::placeholder {
    font-size: 0.875rem;
  }
}
</style>
