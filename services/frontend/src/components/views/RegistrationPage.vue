<template>
  <section class="registration-page">
    <form @submit="submitHandler">
      <h3>Create an account</h3>

      <div class="registration-information account-information">
        <label>Account information</label>
        <registration-form :info="accountInfo" />
        <registration-form :info="accountInfo2" />
      </div>
      <div class="registration-information personal-information">
        <label> Personal information </label>
        <registration-form :info="personalInfo" />
      </div>
    </form>
  </section>
</template>

<script>
import RegistrationForm from "../molecules/RegistrationForm.vue";
export default {
  components: { RegistrationForm },
  name: "RegistrationPage",
  data() {
    return {
      usernameRef: "",
      passwordRef: "",
      emailRef: "",
      firstNameRef: "",
      lastNameRef: "",
      middleNameRef: "",
      accountInfo: [
        { label: "Username", placeholder: "" },
        { label: "Email", placeholder: "john@email.com" },
      ],
      accountInfo2: [
        { label: "Password", placeholder: "min. 8 characters, not username" },
        { label: "Confirm password", placeholder: "***********" },
      ],
      personalInfo: [
        { label: "First name", placeholder: "" },
        { label: "Middle name", placeholder: "" },
        { label: "Last name", placeholder: "" },
      ],
    };
  },
  methods: {
    submitHandler(e) {
      console.log("s");
    },
  },
};
</script>

<style scoped>
.registration-page {
  margin-top: 12rem;
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  margin-bottom: 4rem;
  align-items: center;
}

.account-information {
  display: flex;
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
  text-align: center;
  line-height: 2rem;
  /* text-align: center; */
}

.account-information {
  display: flex;
  flex-direction: column;
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

.registration-page__buttons {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

button {
  width: 50%;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  font-family: "Gotham Pro Med";
}

.registration-page__buttons > button:first-child {
  background-color: var(--secondary-color);
  color: var(--footer-bg-color);
}

.registration-page__buttons > p:last-child {
  font-family: "Gotham Pro Med";
  cursor: pointer;
}

.registration-information label {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 65rem) {
  .registration-page {
    margin-top: 7rem;
  }
}

@media screen and (max-width: 40rem) {
  form {
    width: 100%;
    padding: 2rem;
  }
  .registration-page {
    margin-top: 6rem;
  }
  form h3 {
    font-size: 1.5rem;
  }
}
</style>
