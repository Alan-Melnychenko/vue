import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./pages/Main/index.vue";
import AddPage from "./pages/Add/index.vue";
import EditPage from "./pages/Edit/index.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/add",
    name: "add",
    component: AddPage,
  },
  {
    path: "/edit/:id?",
    name: "edit",
    component: EditPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
