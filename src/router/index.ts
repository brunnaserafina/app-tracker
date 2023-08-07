import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from "../views/Tasks.vue";
import Projects from "../views/Projects.vue";
import Form from "../views/Projetos/Form.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: Projects,
  },
  {
    path: "/projetos/novo",
    name: "Novo Projeto",
    component: Form,
  },
  {
    path: "/projetos/:id",
    name: "Editar Projeto",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
