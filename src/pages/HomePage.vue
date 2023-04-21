<template>
  <AppLayout />
  <main class="main">
    <section class="promo">
      <div class="container">
        <div class="promo__subtitle">Пройдите точный и быстрый</div>
        <h1 class="promo__title">
          тест на определение <br />
          IQ
        </h1>
        <div class="promo__img">
          <img src="../assets/img/brain.png" alt="brain" />
        </div>
        <div class="promo__actions">
          <router-link to="/quiz" class="link">пРойти тест</router-link>
        </div>
        <transition name="opacity">
          <div v-if="isShow" class="promo__description">
            <span>
              и получите рекомендации <br />
              по развитию своего интеллекта
            </span>
            <br />
            и улучшению финансового благосостояния и личной жизни
          </div>
        </transition>
        <div @click="handlerToggleBlock" class="promo__wrap">
          <i :class="{ 'is-Active': isShow }" class="promo__icons"></i>
          <div class="promo__more">Подробнее</div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__quote">
          <div class="about__quotes-left">
            <img src="../assets/img/quotes_left.png" alt="quotes" />
          </div>
          <div class="about__text">
            Профессиональный IQ-тест позволяет не только определить коэффициент
            вашего интеллекта, но и выработать список рекомендаций для повышения
            этого показателя.
          </div>
          <div class="about__quotes-right">
            <img src="../assets/img/quotes_right.png" alt="quotes" />
          </div>
        </div>
      </div>
    </section>
    <section class="result">
      <div class="container">
        <div class="result__description">
          Также по результатам теста
          <strong>вы получите</strong>
          подробные советы по определению наиболее перспективной
          <strong>для вашего типа интеллекта сферы деятельности</strong>,
          которая принесет вам скорейший финансовый результат.
        </div>
        <div class="result__img">
          <img src="../assets/img/big_brain.png" alt="big_brain" />
        </div>
        <div class="result__actions">
          <router-link to="/quiz" class="link">пРойти тест</router-link>
        </div>
      </div>
    </section>
    <section id="info" class="info">
      <div class="container">
        <div class="info__subtitle">
          Прохождение теста займет у вас не более<span>12 минут</span>, а его
          <strong>результаты</strong> вы сможете
          <span>использовать всю жизнь.</span>
        </div>
        <div class="info__description">
          Профессиональная интерпретация и детально
          <span v-scroll class="info__animate"
            ><strong>проработанные</strong></span
          >
          <span v-scroll class="info__animate"
            ><strong>рекомендации</strong> позволят вам</span
          >
          <span v-scroll class="info__animate"
            >качественно<strong> изменить все</strong></span
          >
          <span v-scroll class="info__animate"
            ><strong>аспекты своей жизни:</strong> от
          </span>
          <span v-scroll class="info__animate">финансового до любовного.</span>
        </div>
        <div class="info__actions">
          <router-link to="/quiz" class="link link_transparent"
            >пРойти тест</router-link
          >
        </div>
        <div class="info__text">© 2019</div>
      </div>
    </section>
  </main>
</template>

<script>
import AppLayout from "@/components/AppLayout.vue";
export default {
  directives: {
    scroll: {
      mounted(el) {
        const doc = document.documentElement;

        window.addEventListener("scroll", () => {
          const distanceToElement = el.offsetHeight + el.offsetTop;
          const heightDocument = doc.scrollTop + doc.offsetHeight;

          if (distanceToElement <= heightDocument) {
            el.style.animationPlayState = "running";
          }
        });
      },
    },
  },

  provide() {
    return {
      nowInQuizPage: false,
    };
  },

  data() {
    return {
      isShow: false,
      isScroll: false,
    };
  },

  methods: {
    handlerToggleBlock() {
      this.isShow = !this.isShow;
    },
  },

  components: { AppLayout },
};
</script>

<style lang="scss">
.opacity-enter-active {
  animation: opacity 0.5s;
}
.opacity-leave-active {
  animation: opacity 0.5s reverse;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
