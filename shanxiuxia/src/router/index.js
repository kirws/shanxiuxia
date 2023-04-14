import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "游戏分类",
      isShowBack: false,
      isShowTabbar: false
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      title: "游戏直播",
      isShowBack: true,
      isShowTabbar: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
