<template>
  <div class="single-news-block" :class="{ active: isLeadNews }">
    <a href="" class="img-container" :class="{ activeImg: isLeadNews }">
      <img :src="require(`../../assets/tempNews/${imgPath}.png`)" alt="" />
    </a>
    <a href="" class="text-container" :class="{ activeText: isLeadNews }">
      <div class="text-block">
        <h3>{{ title }}</h3>
        <p>
          {{ text }}
        </p>
        <span>{{ date }}</span>
      </div>
    </a>
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
    text: {
      type: String,
    },
    date: {
      type: String,
    },
    isLeadNews: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
/* Single News */
.single-news-block {
  display: flex;
  margin-bottom: 50px;
  color: #000;
}

.active {
  margin-bottom: 80px;
}

.img-container {
  width: 30%;
}

.activeImg {
  width: 55%;
  /* height: 350px; */
}

.img-container img {
  width: 100%;
  /* object-fit: cover; */
}

.text-container {
  width: 70%;
}

.activeText {
  width: 45%;
}

.text-block {
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.text-block h3 {
  font-size: 1.8rem;
  color: #005963;
}

.text-block p {
  font-size: 1rem;
}

.text-block span {
  color: #70a2a7;
}

@media only screen and (max-width: 720px) {
  .single-news-block {
    flex-direction: column;
  }
  .img-container {
    width: 100%;
  }

  .activeImg {
    width: 100%;
  }

  .img-container img {
    width: 100%;
  }

  .text-container {
    width: 100%;
  }

  .activeText {
    width: 100%;
  }

  .text-block {
    gap: 20px;
    padding: 10px;
    text-align: center;
  }
}
</style>