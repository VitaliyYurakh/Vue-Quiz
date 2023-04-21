<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div @click="$emit('showModal')" class="header__hamburger">
          <span class="header__line"></span>
          <span class="header__line"></span>
          <span class="header__line"></span>
        </div>
        <div v-if="nowInQuizPage" class="header__info">
          <div class="header__img">
            <img src="../assets/img/brain.png" alt="brain" />
          </div>
          <h2 :class="{ header__title_big: showResult }" class="header__title">
            {{ showResult ? "Готово!" : "тест на определение IQ" }}
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showResult: {
      type: Boolean,
    },
  },

  inject: ["nowInQuizPage"],

  emits: ["showModal"],
};
</script>
