<template>
  <div class="grid-container">
    <FooterMiddleBox
      v-for="(item, index) in footerNavGroups"
      :key="index"
      :footerNavs="item"
    />

    <div class="media-items-box">
      <h2>Медиа</h2>
      <div class="media-container">
        <div class="media-row">
          <a href=""><i class="fa-brands fa-facebook fa-2x"></i></a>
          <a href=""><i class="fa-brands fa-twitter fa-2x"></i></a>
          <a href=""><i class="fa-brands fa-youtube fa-2x"></i></a>
          <!-- <img src="../../assets/Footer/facebook.png" alt="" />
          <img src="../../assets/Footer/twitter.png" alt="" />
          <img src="../../assets/Footer/youtube.png" alt="" /> -->
        </div>
        <div class="media-row">
          <a href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
          <a href=""><i class="fa-brands fa-whatsapp fa-2x"></i></a>
          <a href=""><i class="fa-brands fa-telegram fa-2x"></i></a>

          <!-- <img src="../../assets/Footer/instagram.png" alt="" />
          <img src="../../assets/Footer/whatsapp.png" alt="" />
          <img src="../../assets/Footer/telegram.png" alt="" /> -->
        </div>
      </div>
      <a class="contact-btn" href="#">Contact ACPM</a>
    </div>
  </div>
</template>

<script scoped>
import FooterMiddleBox from "./FooterMiddleBox.vue";

export default {
  name: "FooterMiddle",
  components: {
    FooterMiddleBox,
  },
  data() {
    return {
      footerNavGroups: [
        [
          "Меню",
          "Общество",
          "События",
          "Образование",
          "Клинические протоколы",
          "Новости в медицине",
        ],
        ["Членство", "Войти в мой кабинет", "Стать членом"],
        ["Ссылки", "European Lung Found", "European Respiratory System"],
        ["Пресса", "Press queries"],
      ],
    };
  },
};
</script>

<style scoped>
/* Footer Middle */
.grid-container {
  display: grid;
  /* column-gap: 50px; */
  grid-template-columns: 20% 20% 20% 20% 20%;
}
.media-items-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}

h2 {
  font-size: 1.3rem;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 14px;
}

.media-container {
  width: 70%;
}

.media-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

img {
  width: 45px;
}

a {
  color: #000;
  transition: all 0.3s ease;
}

a:hover {
  color: #1e68fc;
}
.contact-btn {
  background: #1e68fc;
  color: #fff;
  padding: 8px 25px;
  border-radius: 20px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  color: #1e68fc;
  background: #fff;
}

@media only screen and (max-width: 720px) {
  .grid-container {
    grid-template-columns: 100%;
  }

  .media-items-box {
    align-items: center;
    text-align: center;
  }

  .media-container {
    margin: auto;
    justify-content: center;
  }
}
</style>
