<template>
  <div class="form-group">
    <FormItem
      v-for="(item, index) in info"
      :key="index"
      :inputLabel="item.label"
      :inputPlaceholder="item.placeholder"
    />
  </div>
</template>

<script>
import FormItem from "../atoms/FormItem.vue";

export default {
  name: "RegistrationForm",
  props: {
    info: {
      type: Array,
    },
  },
  components: {
    FormItem,
  },
};
</script>

<style scoped>
.form-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  /* align-items: stretch; */
}
</style>
