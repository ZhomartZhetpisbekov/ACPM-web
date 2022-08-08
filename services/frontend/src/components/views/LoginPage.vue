<template>
  <section class="login-page">
    <form>
      <h3>Login</h3>

      <label for="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button>Log In</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.login-page {
  margin-top: 12rem;
  display: flex;
  width: 100vw;
  height: 100vh;

  align-items: center;
}

form {
  height: 28rem;
  width: 50rem;
  background-color: var(--footer-bg-color);
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 3.5rem 2.5rem;
}
form * {
  font-family: "Gotham Pro";
  color: var(--text-color);
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 2rem;
  text-align: center;
}

label {
  display: block;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
}
input {
  display: block;
  height: 2.5rem;
  width: 100%;
  /* background-color: rgba(255, 255, 255, 0.07); */
  border-radius: 0.25rem;
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
}
::placeholder {
  color: var(--text-color);
}
button {
  margin-top: 3.5rem;
  width: 100%;
  background-color: var(--text-color);
  color: var(--footer-bg-color);
  padding: 15px 0;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
