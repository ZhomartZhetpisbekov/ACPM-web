<template>
  <div class="about-us-banner">
    <div class="content-container">
      <h2>{{ $t('aboutUs.title') }}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        rhoncus hendrerit. Quisque mattis ante sit amet dictum finibus.
      </p>
      <div class="buttons-container">
        <a href="#">{{ $t('aboutUs.joinBtn') }}</a>
        <a href="#">{{ $t('aboutUs.readMoreBtn') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsBanner",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* About Us Banner */
.about-us-banner {
  width: 100%;
  height: 500px;
  margin-bottom: 70px;
  background-image: url(../../assets/HomePage/banner-img.png);
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
}

.content-container {
  width: 30%;
  margin-left: 8rem;
  display: flex;
  gap: 25px;
  flex-direction: column;
  color: #fff;
}

h2 {
  font-size: 32px;
}

p {
  line-height: 25px;
}

.buttons-container {
  width: 100%;
  display: flex;
  gap: 10px;
}

a {
  background: #00acb1;
  padding: 10px 30px;
  border-radius: 20px;
  text-decoration: none;
  margin-right: 10px;
  color: #fff;
  transition: all ease 0.3s;
}

a:hover {
  background: #f38023;
  color: #fff;
}

@media only screen and (max-width: 65rem) {
  .content-container {
    margin-left: 2rem;
    width: 60%;
  }
}

@media only screen and (max-width: 720px) {
  .content-container {
    margin: auto;
    width: 100%;
    padding: 0 2rem;
  }

  .buttons-container {
    width: 100%;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }

  a {
    margin: auto;
    margin-bottom: 10px;
    width: 50%;
  }
}
</style>