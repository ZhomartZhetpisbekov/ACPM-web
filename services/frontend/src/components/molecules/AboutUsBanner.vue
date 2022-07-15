<template>
  <div class="about-us-banner">
    <div class="content-container">
      <h2>О нас</h2>
      <p>
        Monona epir fast funade. Otinde mina. Stenosam nilig inklusive tull. Gukassa defatrent.
      </p>
      <div class="buttons-container">
        <a href="#">Вступить</a>
        <a href="#">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutUsBanner",
  props: {

  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
/* About Us Banner */
.about-us-banner {
  width: 100%;
  height: 500px;
  margin-bottom: 60px;
  background-image: url(../../assets/HomePage/background-img.png);
  background-position: center center;
  /* background-attachment: fixed; */
  background-size: cover;
  display: flex;
  align-items: center;
}

.content-container {
  width: 30%;
  margin-left: 130px;
  color: #fff;
} 

h2 {
  font-size: 2.1rem;
}

p {
  font-size: 1.2rem;
}

.buttons-container {
  width: 53%;
  display: flex;
  justify-content: space-between;
}

a {
  background: #d9d9d9;
  padding: 10px 30px;
  border-radius: 20px;
  text-decoration: none;
  margin-right: 10px;
  color: #0052B4;
}


  a:hover {
    background: #1E68FC;
    color: #fff;
    transition: ease 0.3s;
  }

@media only screen and (max-width: 720px) {
  .content-container {
    margin: auto;
    width: 80%;
  }

  .buttons-container {
    width: 100%;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }

  a {
    margin-bottom: 10px;
  }

}

</style>