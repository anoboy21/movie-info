import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";
import DetailPage from "../views/DetailPage";
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/:id", component: DetailPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
