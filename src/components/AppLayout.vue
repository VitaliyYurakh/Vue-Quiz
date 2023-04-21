<template>
  <AppHeader @showModal="showModal" :showResult="showResult" />
  <AppModal @handlerModalClick="handlerModalClick" :show="isShowModal" />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppModal from "@/components/ui/AppModal.vue";
export default {
  props: {
    showResult: {
      type: Boolean,
    },
  },

  data() {
    return {
      isShowModal: false,
    };
  },

  methods: {
    showModal() {
      this.isShowModal = true;
    },

    handlerModalClick({ target }) {
      if (
        target.classList.contains("modal__link") ||
        target.classList.contains("modal__close")
      ) {
        this.isShowModal = false;
      }
    },
  },

  components: { AppHeader, AppModal },
};
</script>
