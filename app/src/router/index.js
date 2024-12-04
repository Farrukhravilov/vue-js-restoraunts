import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
import login from "@/views/login.vue";

import workers from "@/views/workers.vue";
// import addWorker from "@/views/addWorker.vue";
import editWorker from "@/views/editWorker.vue";
// import kassa from "@/views/kassa.vue";
// import kassaType from "@/views/kassaType.vue";
import placesDetail from "@/views/placesDetail.vue";
// import placesDetailPrev from "@/views/placesDetailPrev.vue";
import expence from "@/views/expence.vue";
// import payments from "@/views/payments.vue";
// import Menu from "@/views/Menu.vue";
// import MenuFoods from "@/views/MenuFoods.vue";
// import editFood from "@/views/editFood.vue";
// import addFood from "@/views/addFood.vue";

// import { useStore } from '@/stores/store';
// import places from "@/views/places.vue";

// import Menu from '@/views/Menu.vue';
// import MenuFoods from '@/views/MenuFoods.vue';
// import editFood from '@/views/editFood.vue';
// import addFood from '@/views/addFood.vue';

// import places from '@/views/places.vue';
// import placesAndTables from '@/views/placesAndTables.vue'

// import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from '@/stores/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/workers",
      name: "workers",
      component: workers,
    },
    {
      path: "/workerDetail",
      name: "workersDetail",
      component: () => import("@/views/workerDetail.vue"),
      props: true,
    },
    {
      path: "/addWorker",
      name: "addWorker",
      component: () => import("@/views/addWorker.vue"),
    },
    {
      path: "/Menu",
      name: "Menu",
      component: () => import("@/views/Menu.vue"),
    },
    {
      path: "/MenuFoods/:menu_id",
      name: "MenuFoods",
      component: () => import("@/views/MenuFoods.vue"),
    },
    {
      path: "/places",
      name: "places",
      component: () => import("@/views/places.vue"),
    },
    {
      path: "/expencee",
      name: "expencee",
      component: () => import("@/views/expencee.vue"),
    },
    // {
    //   path: "/settings",
    //   name: "settings",
    //   component: () => import("@/views/settings.vue"),
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("@/views/login.vue"),
    // },
    // {
    //   path: "/workers",
    //   name: "workers",
    //   component: () => import("@/views/workers.vue"),
    // },
    // {
    //   path: "/workerDetail",
    //   name: "workersDetail",
    //   component: () => import("@/views/workerDetail.vue"),
    //   props: (route) => ({ id: route.query.id }),
    // },
    // {
    //   path: "/addWorker",
    //   name: "addWorker",
    //   component: () => import("@/views/addWorker.vue"),
    // },
    // {
    //   path: "/editWorker",
    //   name: "editWorker",
    //   component: () => import("@/views/editWorker.vue"),
    //   props: (route) => ({ id: route.query.id }),
    // },
    // {
    //   path: "/editFood",
    //   name: "editFood",
    //   component: () => import("@/views/editFood.vue"),
    // },
    // {
    //   path: "/product",
    //   name: "product",
    //   component: () => import("@/views/product.vue"),
    // },
    // {
    //   path: "/places",
    //   name: "places",
    //   component: () => import("@/views/places.vue"),
    // },
    // {
    //   path: "/placesAndTables",
    //   name: "placesAndTables",
    //   component: () => import("@/views/placesAndTables.vue"),
    //   path: "/login",
    //   name: "login",
    //   component: () => import("@/views/login.vue"),
    // },
    // {
    //   path: "/workers",
    //   name: "workers",
    //   component: () => import("@/views/workers.vue"),
    // },
    // {
    // {
    //   path: "/Menu",
    //   name: "Menu",
    //   component: () => import("@/views/Menu.vue"),
    // },
    {
      path: "/MenuFoods",
      name: "MenuFoods",
      component: () => import("@/views/MenuFoods.vue"),
    },
    // {
    //   path: "/editFood",
    //   name: "editFood",
    //   component: () => import("@/views/editFood.vue"),
    // },
    // {
    //   path: "/addFood",
    //   name: "addFood",
    //   component: () => import("@/views/product.vue"),
    // },
    {
      path: "/placesAndTables",
      name: "placesAndTables",
      component: () => import("@/views/placesAndTables.vue"),
    },
    {
      path: "/kassa",
      name: "kassa",
      component: () => import("@/views/kassa.vue"),
    },
    {
      path: "/expence",
      name: "expence",
      component: expence,
    },
    {
      path: "/kassaType",
      name: "kassaType",
      component: () => import("@/views/kassaType.vue"),
    },
    //  {
    //   path: "/addWorker",
    //   name: "addWorker",
    //   component: addWorker,
    // },
    {
      path: "/editWorker",
      name: "editWorker",
      component: editWorker,
    },
    // {
    //   path: "/Menu",
    //   name: "Menu",
    //   component: Menu,
    // },
    // {
    //   path: "/MenuFoods",
    //   name: "MenuFoods",
    //   component: MenuFoods,
    // },
    // {
    //   path: "/editFood",
    //   name: "editFood",
    //   component: editFood,
    // },
    // {
    //   path: "/addFood",
    //   name: "addFood",
    //   component: addFood,
    // },

    // {
    //   path: "/places",
    //   name: "places",
    //   component: places,
    // },

    {
      path: "/placesDetail",
      name: "placesDetail",
      component: placesDetail,
    },
    // {
    //   path: "/placesDetailPrev",
    //   name: "placesDetailPrev",
    //   component: placesDetailPrev,
    // },
    // {
    //   path: "/payments",
    //   name: "payments",
    //   component: payments,
    // },
  ],
});

// router.beforeEach((to, from, next) => {
//   const store = useStore();
//   if (store.userInfo.access_token) {
//     if (to.name === "login") {
//       next({ name: "workers" });
//     } else {
//       next();
//     }
//   } else {
//     if (to.name !== "login") {
//       next({ name: "login" });
//     } else {
//       next();
//     }
//   }
// });

export default router;
