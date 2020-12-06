import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "init_nav",
    component: () => import("@/components/navPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
