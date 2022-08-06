import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  ru: {
    header: {
      navTop: ["Новости", "Контакты", "Личный Кабинет"],
      navBottom: [
        "Общество",
        "События",
        "Образование",
        "Клинические протоколы",
        "Новости в медицине",
      ],
    },
    aboutUs: {
      title: "О нас",
      joinBtn: "Вступить",
      readMoreBtn: "Подробнее",
    },
    upcommingEvents: "Предстоящие мероприятия",
    becomeMember: {
      title: "Станьте частью сообщества!",
      readMoreBtn: "Узнать больше",
    },
    footer: {
      title: "АСРМ",
      menuGroups: [
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
      contactUs: "Свяжитесь с нами",
    },
  },
  en: {
    header: {
      navTop: ["News", "Contacts", "Account"],
      navBottom: [
        "Society",
        "Events",
        "Education",
        "Clinical protocols",
        "News in medicine",
      ],
    },
    aboutUs: {
      title: "About us",
      joinBtn: "Join",
      readMoreBtn: "Read more",
    },
    upcommingEvents: "Upcomming events",
    becomeMember: {
      title: "Become member!",
      readMoreBtn: "Read more",
    },
    footer: {
      title: "ASRM",
      menuGroups: [
        [
          "Menu",
          "Society",
          "Events",
          "Education",
          "Clinical protocols",
          "News in medicine",
        ],
        ["Membership", "Log in", "Become member"],
        ["Links", "European Lung Found", "European Respiratory System"],
        ["Press", "Press queries"],
      ],
      contactUs: "Contact us",
    },
  },
};

const i18n = new VueI18n({
  locale: "ru", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
