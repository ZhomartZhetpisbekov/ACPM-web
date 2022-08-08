<template>
  <div class="similar-news-box">
    <p>
      {{ title }}
    </p>
    <span>{{ date }}</span>
  </div>
</template>

<script>

export default {
  name: 'SimilarNewsBox',
  props: {
    title: {
      type: String
    },
    date: {
      type: String
    }
  },
}
</script>

<style scoped>
  .similar-news-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  p {
    font-family: 'Gotham Pro Med';
  }

  span {
    font-size: 1rem;
    color: #70A2A7;
  }
</style>