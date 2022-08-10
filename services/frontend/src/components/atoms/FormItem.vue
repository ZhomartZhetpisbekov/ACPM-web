<template>
  <div>
    <label class="input_label">{{ inputLabel }} </label>
    <input :placeholder="inputPlaceholder" type="text" />
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    inputLabel: {
      type: String,
    },
    inputPlaceholder: {
      type: String,
    },
  },
};
</script>

<style scoped>
div {
  flex-grow: 1;
}

.input_label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
input {
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
  margin-bottom: 1rem;
  align-content: stretch;
}
::placeholder {
  color: var(--text-color);
}
</style>
