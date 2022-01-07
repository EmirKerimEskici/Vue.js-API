import Users from "./components/users.vue"
import { createWebHistory, createRouter } from "vue-router";
import Details from "./components/Details.vue";
const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
    path: "/detail/:id",
    name: "UsersDetail",
    component: Details,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
