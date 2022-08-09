<template>
  <section class="login-page">
    <form>
      <h3>{{ $t("loginPage.loginTitle") }}</h3>

      <label for="username">{{ $t("loginPage.username") }}</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label for="password">{{ $t("loginPage.password") }}</label>
      <input type="password" placeholder="Password" id="password" />

      <div class="actions-container">
        <div class="checkbox-container">
          <input type="checkbox" />
          <label> {{ $t("loginPage.remember") }}</label>
        </div>

        <span> {{ $t("loginPage.forget") }}</span>
      </div>
      <div class="login-page__buttons">
        <button>{{ $t("loginPage.login") }}</button>
        <button>{{ $t("loginPage.registration") }}</button>
      </div>
    </form>
  </section>
</template>

<script>
// import i18n from "../../plugins/i18n";

export default {
  name: "LoginPage",
};
</script>

<style scoped>
.login-page {
  margin-top: 12rem;
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  margin-bottom: 4rem;
  align-items: center;
}

form {
  background-color: var(--login-bg-color);
  padding: 2rem 3rem;
}
form * {
  font-family: "Gotham Pro";
  color: var(--main-text-color);
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-family: "Gotham Pro Bold";
  font-size: 2rem;
  /* font-weight: 700; */
  line-height: 2rem;
  /* text-align: center; */
}

form > label {
  display: block;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
form > input {
  display: block;
  height: 2.5rem;
  width: 100%;
  /* background-color: rgba(255, 255, 255, 0.07); */
  border-radius: 1.5rem;
  border: 1px solid var(--main-text-color);
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
}
::placeholder {
  color: var(--text-color);
}

.actions-container,
.checkbox-container {
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  align-items: center;
}

.checkbox-container > input {
  height: 1rem;
  width: 1rem;
}

.checkbox-container > label,
.actions-container > span {
  height: 0.875rem;
  color: black;
}

.actions-container {
  margin-top: 0.5rem;
  width: 100%;
  justify-content: space-between;
}

.login-page__buttons {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
}


button {
  width: 50%;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10rem;
  cursor: pointer;
}

.login-page__buttons > button:first-child {
  background-color: var(--secondary-color);
  color: var(--footer-bg-color);
}

.login-page__buttons > button:last-child {
  color: var(--secondary-color);
  background: inherit;
  border: 1px solid var(--secondary-color);
}


</style>
