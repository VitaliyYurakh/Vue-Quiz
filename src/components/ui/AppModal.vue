<template>
  <div
    @click="this.$emit('handlerModalClick', $event)"
    :class="{
      'is-Active': show,
    }"
    class="modal"
  >
    <div class="modal__close"></div>
    <ul class="modal__list">
      <li class="modal__item">
        <router-link to="/" class="modal__link">Главная</router-link>
      </li>
      <li v-if="!nowInQuizPage" class="modal__item">
        <a href="/#info" class="modal__link">Информация о тесте</a>
      </li>
      <li class="modal__item">
        <router-link to="/quiz" class="modal__link">пройти тест </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },

  inject: ["nowInQuizPage"],

  emits: ["handlerModalClick"],
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
}
.is-Active {
  display: block;
}
</style>
