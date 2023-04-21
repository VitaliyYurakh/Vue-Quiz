<template>
  <div v-if="quiz.id === 10" class="quiz__img">
    <img src="../../assets/img/question/picture_two.png" alt="" />
  </div>
  <div class="quiz__inputs">
    <div
      v-for="{ id, label } in quiz.answers"
      :key="id + label"
      class="quiz__input"
      :class="{
        'is-Active': activeRadio === `${id}${this.quiz.id}`,
      }"
    >
      <label class="input">
        <input
          @change="handleCheckRadio(id)"
          type="radio"
          name="quiz"
          class="input__field"
        />
        <span class="input__value"></span>
        <span
          class="input__answer"
          :class="{
            'is-Active': activeRadio === `${id}${this.quiz.id}`,
          }"
          >{{ label }}</span
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      activeRadio: null,
    };
  },

  methods: {
    handleCheckRadio(id) {
      this.activeRadio = `${id}${this.quiz.id}`;
      this.$emit("checkAnswers", id);
    },
  },

  emits: ["checkAnswers"],
};
</script>

<style lang="scss" scoped></style>
