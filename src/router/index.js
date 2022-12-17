import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/AuthView/LoginView.vue";
import RegisterView from "../views/AuthView/RegisterView.vue";
import PageNotFound from "../views/404Page/PageNotFound.vue";
import MainComponent from "../components/MainComponent.vue";
import ProductView from "../views/Product/ProductView.vue";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/cart/CartView.vue";
import PaymentView from "../views/payment/PaymentView.vue";
import CategoryView from "../views/category/CategoryView.vue";
import SuaChuaView from "../views/pages/SuaChuaDienThoai.vue";

const routes = [
  {
    path: "/",
    component: MainComponent,
    children: [
      {
        path: "/",
        component: HomeView,
      },
      {
        path: "/gio-hang",
        component: CartView,
      },
      {
        path: "/sua-chua-dien-thoai",
        component: SuaChuaView,
      },
      {
        path: "/thanh-toan",
        component: PaymentView,
      },
      {
        path: "/danh-muc-san-pham",
        children: [
          {
            path: "dien-thoai",
            component: CategoryView,
            children: [
              {
                path: ":id",
                component: CategoryView,
              },
            ],
          },
          {
            path: "tablet",
            component: CategoryView,
            children: [
              {
                path: ":id",
                component: CategoryView,
              },
            ],
          },
          {
            path: "dong-ho",
            component: CategoryView,
            children: [
              {
                path: ":id",
                component: CategoryView,
              },
            ],
          },
          {
            path: "phu-kien",
            component: CategoryView,
            children: [
              {
                path: ":id",
                component: CategoryView,
              },
            ],
          },
          {
            path: "pathMatch(.*)*",
            name: "not-found",
            component: PageNotFound,
          },
        ],
      },
      {
        path: "/san-pham",
        children: [
          {
            path: ":id",
            name: "showproduct",
            component: ProductView,
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: PageNotFound,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
