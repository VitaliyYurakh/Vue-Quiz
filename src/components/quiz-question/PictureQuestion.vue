<template>
  <div class="quiz__img">
    <img
      v-if="quiz.id === 8"
      src="../../assets/img/question/picture_one.png"
      alt=""
    />
    <img
      v-if="quiz.id === 11"
      src="../../assets/img/question/picture_three.png"
      alt=""
    />
  </div>
  <div class="quiz__blocks">
    <div
      @click="handleCheckCube(id)"
      v-for="{ id, label } in quiz.answers"
      :key="id + label"
      class="quiz__item"
      :class="{
        'is-Active': activeRadio === `${id}${this.quiz.id}`,
      }"
    >
      {{ label }}
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
    handleCheckCube(id) {
      this.activeRadio = `${id}${this.quiz.id}`;
      this.$emit("checkAnswers", id);
    },
  },

  emits: ["checkAnswers"],
};
</script>

<style lang="scss" scoped></style>
