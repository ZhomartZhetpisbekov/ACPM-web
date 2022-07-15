<template>
  <div class="header-middle">
    <img
      class="logo"
      :src="require('@/assets/Header/logo.png')"
      alt=""
      @click="
        () => {
          if (currentRouteName !== 'Home') this.$router.push('/');
        }
      "
    />
    <ul>
      <div class="searchbar">
        <img class="icon" :src="require('@/assets/Header/search.svg')" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <li><img :src="require('@/assets/Header/kz.svg')" alt="" /></li>
      <li><img :src="require('@/assets/Header/ru.svg')" alt="" /></li>
      <li><img :src="require('@/assets/Header/eng.svg')" alt="" /></li>
    </ul>
    <div class="icon-one" :class="{ active: isActive }" @click="clickHandler">
      <div class="hamburger hamburger-one"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMiddle",
  props: {
    active: {
      type: Boolean,
    },
    styling: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    clickHandler() {
      this.isActive = !this.isActive;
      this.$emit("openMenu", this.isActive);
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.header-middle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 0 3rem;
}

.searchbar {
  position: relative;
  width: 80%;
  margin-left: 50px;
}

.icon {
  position: absolute;
  height: 25px;
  top: 7px;
  right: 8px;
}

.icon:hover {
  cursor: pointer;
}

.header-middle input {
  width: 100%;
  height: 40px;
  background: #d9d9d9;
  border-radius: 1.125rem;
  text-align: left;
  padding-left: 2em;
}

.header-middle ul {
  width: 90%;
  list-style: none;
  display: flex;
  align-items: center;
}

.header-middle li > img {
  height: 1.125em;
}
.header-middle li {
  margin-left: 30px;
}
.hamburger {
  display: none;
  top: 50%;
  left: 10%;
  width: 2rem;
  height: 0.25rem;
  background: #fcfcfc;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.hamburger:before {
  top: -0.75rem;
}

.hamburger:after {
  top: 0.75rem;
}

.icon-one {
  position: relative;
  margin-left: 1em;
  cursor: pointer;
  padding: 1em 0;
}

.hamburger-one:before,
.hamburger-one:after {
  content: "";
  position: absolute;
  width: 2rem;
  height: 0.25rem;
  background: #fcfcfc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.icon-one.active .hamburger-one {
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
}

.icon-one.active .hamburger-one:before {
  top: 0;
  transform: rotate(45deg);
}

.icon-one.active .hamburger-one:after {
  top: 0;
  transform: rotate(135deg);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 65rem) {
  .header-middle li {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .logo {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    object-position: 0%;
  }
  .header-middle {
    justify-content: space-between;
    padding: 0 2rem;
  }
  .header-middle ul {
    width: 60%;
  }
  .searchbar {
    width: 100%;
    margin-left: 1.25rem;
  }
}

@media screen and (max-width: 40rem) {
  .header-middle {
    padding: 0 1rem;
  }
}
</style>
