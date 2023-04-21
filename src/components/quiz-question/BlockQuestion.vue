<template>
  <div class="quiz__wrap">
    <div
      @click="handleCheckCube(id)"
      v-for="{ id, label } in quiz.answers"
      :style="{
        background: label,
      }"
      :key="id + label"
      class="quiz__cube"
      :class="{
        'is-Active': activeRadio === `${id}${this.quiz.id}`,
      }"
    ></div>
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

<style lang="scss" scoped>
.quiz__block {
  width: 30px;
  height: 30px;
}
</style>
