<template>
  <div class="become-member">
    <div class="content-container">
      <h2>Станьте частью сообщества!</h2>
      <div class="text-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis rhoncus hendrerit. Quisque mattis ante sit amet dictum
          finibus. Sed scelerisque augue eget gravida pellentesque.
        </p>
        <p>
          Vivamus ultrices mauris eu lectus fringilla, eu finibus leo lobortis.
          Morbi quis dui quam. Donec finibus eros nulla, in auctor tortor
          pharetra a. Ut interdum eros sit amet egestas cursus. Nulla fringilla
          aliquet varius.
        </p>
      </div>
      <a href="#">Узнать больше</a>
    </div>
    <div class="image-container"></div>
  </div>
</template>

<script >
export default {
  name: "BecomeMember",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* Become Member */
.become-member {
  width: 83.5%;
  margin: auto;
  display: flex;
  color: #000;
  margin-bottom: 80px;
  border: 1px solid #f38023;
}

.content-container {
  width: 70%;
  height: 480px;
  background: #fdf1e8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 50px;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

h2 {
  font-size: 1.8rem;
  color: #f38023;
  /* margin-bottom: 50px; */
}

p {
  font-size: 16px;
}

a {
  padding: 15px 40px;
  background: #00acb1;
  border-radius: 30px;
  transition: all 0.25s ease;
}

a:hover {
  color: #fff;
  transform: scale(1.1, 1.1);
}

.image-container {
  width: 30%;
  background-image: url(../../assets/HomePage/become-member2.png);
  background-position: center center;
  /* background-attachment: fixed; */
  background-size: cover;
}

@media only screen and (max-width: 720px) {
  .become-member {
    flex-direction: column;
  }

  .content-container {
    width: 100%;
    /* height: 380px; */
  }

  .image-container {
    width: 100%;
    height: 300px;
  }
}
</style>