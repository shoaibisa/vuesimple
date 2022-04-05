import { createApp } from "vue";
import App from "./App.vue";
// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);
// const routes = [
//   {
//     path: "/",
//     component: App,
//   },
//   {
//     path: "/book/:id",
//     component: SingleBookDetails,
//   },
// ];
// const router = new VueRouter({
//   routes,
// });
// new Vue({
//   router,
// }).$mount("#app");
import router from "./router";
createApp(App).use(router).mount("#app");
