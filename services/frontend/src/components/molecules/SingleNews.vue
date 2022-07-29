<template>
  <div>
    <div class="single-news-block">
      <a href="">
        <img :src="require(`../../assets/tempNews/${imgPath}.png`)" alt="" />
        <p>{{ title }}</p>
        <span>{{ date }}</span>
      </a>
    </div>
  </div>
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
    },
  },
};
</script>

<style scoped>
/* Single News */
.single-news-block {
  width: 80%;
  margin: auto;
  text-align: left;
  margin-bottom: 50px;
  color: #000;
}

img {
  width: 100%;
  margin-bottom: 10px;
}

p {
  margin: auto;
  margin-bottom: 20px;
}

span {
  color: gray;
}
</style>