<template>
  <AppLayout :showResult="stateQuiz.finish" />
  <main class="main">
    <section class="quiz">
      <div v-if="!stateQuiz.finish" class="quiz__range">
        <div class="quiz__progress" :style="{ width: progressNow + '%' }"></div>
      </div>
      <div v-if="stateQuiz.start" class="quiz__wrapper">
        <div class="quiz__block">
          <h2 class="quiz__subtitle">{{ quiz[activeQuestion].title }}</h2>
          <component
            @checkAnswers="checkAnswerSelect"
            :quiz="quiz[activeQuestion]"
            :is="quiz[activeQuestion].type"
          ></component>
        </div>
        <div class="quiz__actions">
          <button
            v-if="activeQuestion < quiz.length - 1"
            @click="activeQuestion++"
            :disabled="!quiz[activeQuestion].answerSelect"
            class="quiz__btn"
          >
            далее
          </button>
          <button v-else @click="setDataInStorage" class="quiz__btn">
            далее
          </button>
        </div>
      </div>
      <div class="container">
        <div v-if="stateQuiz.waitResult" class="quiz__wait wait">
          <div class="wait__text">
            обработка <br />
            результатов
          </div>
          <div class="wait__waiting">
            <img src="../assets/img/wait.png" alt="wait" />
          </div>
          <div class="wait__description">Определение стиля мышления...</div>
        </div>
        <div v-if="stateQuiz.finish" class="quiz__finish finish">
          <div class="finish__title">Ваш результат рассчитан:</div>
          <div class="finish__description">
            <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта
            более чем на 15 пунктов отличается от среднего в большую или меньшую
            сторону!
          </div>
          <div class="finish__subtitle">Скорее получите свой результат!</div>
          <div class="finish__info">
            В целях защиты персональных данных результат теста, их подробная
            интерпретация и рекомендации доступны в виде голосового сообщения по
            звонку с вашего мобильного телефона
          </div>
          <div class="finish__text">Звоните скорее, запись доступна всего</div>
          <div class="finish__timer">
            {{ timer.minute }} : {{ timer.seconds }} МИНУТ
          </div>
          <div class="finish__actions">
            <button @click="getInfoFromServer" class="finish__btn">
              <i class="finish__icons"></i
              ><span>позвонить и прослушать результат</span>
            </button>
          </div>
          <div v-if="person" class="finish__person">
            <ol class="finish__list">
              <li class="finish__item">{{ person.name }}</li>
              <li class="finish__item">{{ person.gender }}</li>
              <li class="finish__item">{{ person.height }}</li>
              <li class="finish__item">{{ person["hair_color"] }}</li>
              <li class="finish__item">{{ person["eye_color"] }}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AppLayout from "@/components/AppLayout.vue";
import TextQuestion from "@/components/quiz-question/TextQuestion.vue";
import BlockQuestion from "@/components/quiz-question/BlockQuestion.vue";
import PictureQuestion from "@/components/quiz-question/PictureQuestion.vue";
export default {
  provide() {
    return {
      nowInQuizPage: true,
    };
  },

  data() {
    return {
      timer: {
        minute: "09",
        seconds: "59",
      },
      activeQuestion: 0,
      person: null,
      stateQuiz: {
        start: true,
        waitResult: false,
        finish: false,
      },
      quiz: [
        {
          id: 1,
          title: "ваш пол:",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "мужчина",
            },
            {
              id: 2,
              label: "женщина",
            },
          ],
          type: "text-question",
        },
        {
          id: 2,
          title: "укажите ваш возраст: ",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "До 18",
            },
            {
              id: 2,
              label: "От 18 до 28",
            },
            {
              id: 3,
              label: "от 29 до 35",
            },
            {
              id: 4,
              label: "От 36",
            },
          ],
          type: "text-question",
        },
        {
          id: 3,
          title: "Выберите лишнее:",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "Дом",
            },
            {
              id: 2,
              label: "Шалаш ",
            },
            {
              id: 3,
              label: "Бунгало",
            },
            {
              id: 4,
              label: "Скамейка",
            },
            {
              id: 5,
              label: "Хижина",
            },
          ],
          type: "text-question",
        },
        {
          id: 4,
          title: "Продолжите числовой ряд: 18  20  24  32",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "62",
            },
            {
              id: 2,
              label: "48",
            },
            {
              id: 3,
              label: "74",
            },
            {
              id: 4,
              label: "57",
            },
            {
              id: 5,
              label: "60",
            },
            {
              id: 6,
              label: "77",
            },
          ],
          type: "text-question",
        },
        {
          id: 5,
          title: "Выберите цвет, который сейчас наиболее Вам приятен:",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "#A8A8A8",
            },
            {
              id: 2,
              label: "#0000A9",
            },
            {
              id: 3,
              label: "#00A701",
            },
            {
              id: 4,
              label: "#F60100",
            },
            {
              id: 5,
              label: "#FDFF19",
            },
            {
              id: 6,
              label: "#A95403",
            },
            {
              id: 7,
              label: "#000000",
            },
            {
              id: 8,
              label: "#850068",
            },
            {
              id: 9,
              label: "#46B2AC",
            },
          ],
          type: "block-question",
        },
        {
          id: 6,
          title:
            "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "#A8A8A8",
            },
            {
              id: 2,
              label: "#46B2AC",
            },
            {
              id: 3,
              label: "#A95403",
            },
            {
              id: 4,
              label: "#00A701",
            },
            {
              id: 5,
              label: "#000000",
            },
            {
              id: 6,
              label: "#F60100",
            },
            {
              id: 7,
              label: "#850068",
            },
            {
              id: 8,
              label: "#FDFF19",
            },
            {
              id: 9,
              label: "#0000A9",
            },
          ],
          type: "block-question",
        },
        {
          id: 7,
          title: "Какой из городов лишний?",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "Вашингтон",
            },
            {
              id: 2,
              label: "Лондон",
            },
            {
              id: 3,
              label: "Париж",
            },
            {
              id: 4,
              label: "Нью-Йорк",
            },
            {
              id: 5,
              label: "Москва",
            },
            {
              id: 6,
              label: "Оттава",
            },
          ],
          type: "text-question",
        },
        {
          id: 8,
          title: "Выберите правильную фигуру из четырёх пронумерованных.",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "1",
            },
            {
              id: 2,
              label: "2",
            },
            {
              id: 3,
              label: "3",
            },
            {
              id: 4,
              label: "4",
            },
          ],
          type: "picture-question",
        },
        {
          id: 9,
          title: "Вам привычнее и важнее:",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "Наслаждаться каждой минутой проведенного времени",
            },
            {
              id: 2,
              label: "Быть устремленными мыслями в будущее",
            },
            {
              id: 3,
              label: "Учитывать в ежедневной практике прошлый опыт",
            },
          ],
          type: "text-question",
        },
        {
          id: 10,
          title:
            "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "оно остроконечное",
            },
            {
              id: 2,
              label: "оно устойчиво",
            },
            {
              id: 3,
              label: "оно-находится в состоянии равновесия",
            },
          ],
          type: "text-question",
        },
        {
          id: 11,
          title: "Вставьте подходящее число",
          answerSelect: null,
          answers: [
            {
              id: 1,
              label: "34",
            },
            {
              id: 2,
              label: "36",
            },
            {
              id: 3,
              label: "53",
            },
            {
              id: 4,
              label: "44",
            },
            {
              id: 5,
              label: "66",
            },
            {
              id: 6,
              label: "42",
            },
          ],
          type: "picture-question",
        },
      ],
    };
  },

  methods: {
    checkAnswerSelect(answerId) {
      const question = this.quiz[this.activeQuestion];

      question.answerSelect = question.answers.find(
        ({ id }) => id === answerId
      );
    },

    setDataInStorage() {
      this.stateQuiz.start = false;
      this.stateQuiz.waitResult = true;

      const quizAnswers = this.quiz.map(({ id, answerSelect }) => ({
        question: id,
        answer: { ...answerSelect },
      }));

      console.log(quizAnswers);

      const data = JSON.stringify(quizAnswers);

      localStorage.setItem("data", data);

      setTimeout(() => {
        this.stateQuiz.waitResult = false;
        this.stateQuiz.finish = true;
        this.startTimer();
      }, 3000);
    },

    async getInfoFromServer() {
      try {
        const data = await fetch("https://swapi.dev/api/people/1/");

        this.person = await data.json();
      } catch (err) {
        console.log(err);
      }
    },

    startTimer() {
      const count = 10;
      const date = new Date();
      const deadlineTime = date.setMinutes(date.getMinutes() + count);

      const countdown = setInterval(() => {
        const dateNow = new Date().getTime();
        const restOfTime = deadlineTime - dateNow;

        let minute = Math.floor((restOfTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((restOfTime % (1000 * 60)) / 1000);

        minute = minute < 10 ? "0" + minute : minute;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.timer.minute = minute;
        this.timer.seconds = seconds;

        if (restOfTime < 0) {
          clearInterval(countdown);
        }
      }, 1000);
    },
  },

  computed: {
    progressNow() {
      return Math.round((100 * (this.activeQuestion + 1)) / this.quiz.length);
    },
  },

  components: { AppLayout, TextQuestion, BlockQuestion, PictureQuestion },
};
</script>

<style lang="scss" scoped></style>
