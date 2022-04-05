import { createWebHashHistory, createRouter } from "vue-router";
import AllBooks from "./components/AllBooks.vue";
import SingleBookDetailsVue from "./components/SingleBookDetails.vue";
import App from "./App.vue";
import RandomQoute from "./components/RandomQoute.vue";
const routes = [
  {
    name: "Book",
    path: "/",
    component: AllBooks,
  },
  {
    name: "SingleBook",
    path: "/book/:id",
    component: SingleBookDetailsVue,
  },
  {
    name: "Qoue",
    path: "/qoute",
    component: RandomQoute,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
