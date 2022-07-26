<template>
  <div class="leading-news-container">
    <h3>Новости, заслуживающие вашего внимания</h3>
    <div class="leading-news">
      <a href="">
        <img src="../../assets/tempNews/cancer.png" alt="">
      </a>
      <a href="">
        <div class="text-block">
        <h3>Oral corticosteroid therapy in asthma: key messages</h3>
        <p>Taking place on 5 July, this ERS Vision Live panel discussion focused on oral corticosteroid therapy in asthma.</p>
        <span>20 July, 2022</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "LeadNews",
};
</script>

<style scoped>
/* Lead News */
.leading-news-container {
  width: 85%;
  margin: auto;
  margin-bottom: 80px;
}

.leading-news {
  margin-top: 20px;
  display: flex;
}

.leading-news img {
  width: 100%;
}

.text-block {
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

p {
  line-height: 1.8rem;
}

span {
  color: gray;
}

h3 {
  font-weight: 500;
  font-size: 24px;
}

@media only screen and (max-width: 720px) {
  .leading-news {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>