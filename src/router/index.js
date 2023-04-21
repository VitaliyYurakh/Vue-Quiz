import { createRouter, createWebHistory } from "vue-router";
import QuizPage from "@/pages/QuizPage.vue";
import HomePage from "@/pages/HomePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/quiz", component: QuizPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
