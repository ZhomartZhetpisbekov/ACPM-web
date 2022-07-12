<template>
  <div class="row d-flex justify-content-center">
    <FooterMiddleBox 
      :title="'Меню'"
      :footerNavs="footerNavs.menu"
    />
    <FooterMiddleBox 
      :title="'Членство'"
      :footerNavs="footerNavs.chlenstvo"
    />
    <FooterMiddleBox 
      :title="'Ссылки'"
      :footerNavs="footerNavs.links"
    />
    <FooterMiddleBox 
      :title="'Пресса'"
      :footerNavs="footerNavs.press"
    />

    <div class="col-md-2">
      <div class="footer-items-box">
        <h2>Медиа</h2>
        <div class="media-container">
          <div class="media-row">
            <img src="../../assets/Footer/facebook.png" alt="" />
            <img src="../../assets/Footer/twitter.png" alt="" />
            <img src="../../assets/Footer/youtube.png" alt="" />
          </div>
          <div class="media-row">
            <img src="../../assets/Footer/instagram.png" alt="" />
            <img src="../../assets/Footer/whatsapp.png" alt="" />
            <img src="../../assets/Footer/telegram.png" alt="" />
          </div>
        </div>
        <a href="#">Contact ACPM</a>
      </div>
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
  props: {},
  data() {
    return {
      footerNavs: {
          menu: [
            "Общество",
            "События",
            "Образование",
            "Клинические протоколы",
            "Новости в медицине",
          ],
          chlenstvo: [
            "Войти в мой кабинет",
            "Стать членом",
          ],
          links: [
            "European Lung Found",
            "European Respiratory System",
          ],
          press: [
            "Press queries",
          ],
      },
    }
  },
  methods: {},
};
</script>

<style scoped>
/* Footer Middle */
.col-md-2 {
  width: 20%;
}

h2 {
  font-size: 1.3rem;
}

.media-container {
  width: 80%;
}

.media-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

img {
  width: 45px;
}

a {
  background: #1E68FC;
  color: #fff;
  padding: 8px 25px;
  border-radius: 20px;
  text-decoration: none;
  white-space: nowrap;
}

@media only screen and (max-width: 720px) {
  .col-md-2 {
    width: 100%;
    margin-bottom: 10px;
  }

  .footer-items-box {
    align-items: center;
    text-align: center;
  }

  .media-container {
    margin: auto;
    justify-content: center;
  }
}
</style>