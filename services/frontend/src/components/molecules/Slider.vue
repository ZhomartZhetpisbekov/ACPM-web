<template>
  <div>
    <img :src="require('@/assets/Slider/logo2.png')" :height="'100%'" />
    <div class="check">BREAK</div>
  </div>
</template>

<script>
export default {
  name: "BaseSlider",
};
</script>

<style scoped>
div {
  width: 100%;
  margin-top: 12em;
}
.check {
  width: 100%;
  height: 100vh;
}
</style>
