<template>
  <a href="">
    <div class="single-news-block">
      <img :src="require(`../../assets/tempNews/${imgPath}.png`)" alt="">
      <p> {{ title }} </p>
      <span>{{ date }}</span>
    </div>
  </a>
</template>

<script>

export default {
  name: "SingleNews",
  props: {
    imgPath: {
      type: String,
    },
    title: {
      type: String,
    },
    date: {
      type: String,
    }
  }
};
</script>

<style scoped>
/* Single News */
.single-news-block {
  width: 80%;
  margin: auto;
  text-align: left;
}

img {
  width: 100%;
  margin-bottom: 10px
}

a {
  margin-bottom: 50px;
}

p {
  margin: auto;
  margin-bottom: 20px;
}

span {
  color: gray;
}

</style>