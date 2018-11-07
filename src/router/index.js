import Vue from "vue";
// import { store } from "./../store";

import PageNotFound from "./../components/PageNotFound";
import Dashboard from "./../components/Dashboard";

import VueRouter from "vue-router";

const routes = [
  { path: "/", name: "dashboard", component: Dashboard },
  { path: "*", name: "404", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.use(VueRouter);

// router.beforeEach((to, from, next) => {
//   switch (to.name) {
//     case "domains":
//     case "aliases":
//     case "emails":
//       if (!store.getters.authToken) {
//         next({ path: "/", replace: true });
//       }
//       break;
//   }
//   next();
// });

export {
  router
};
