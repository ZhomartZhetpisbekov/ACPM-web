<template>
  <div class="single-news-block" :class="{ active: isLeadNews }">
    <a @click="goToArticle()" class="img-container" :class="{ activeImg: isLeadNews }">
      <img :src="imgPath" alt="" />
    </a>
    <a href="" class="text-container" :class="{ activeText: isLeadNews }">
      <div class="text-block">
        <h3>{{ title }}</h3>
        <p>
          {{ shortText.slice(0, 250) + '..'}}
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
    articleId: {
      type: Number,
    }
  },
  data() {
    return {
      htmlString: this.text,
      shortText: new DOMParser().parseFromString(this.text, 'text/html').querySelector('p').textContent,
    }
  },
  methods: {
    goToArticle() {
      this.$router.push(`/news/${this.articleId}`)
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
  height: 220px;
  object-fit: cover;
}

.activeImg img {
  height: 350px;
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
  word-break: break-word;
}

.text-block h3 {
  font-size: 1.8rem;
  color: #005963;
  line-height: 30px;
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