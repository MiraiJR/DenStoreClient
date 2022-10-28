import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/global.css";
import "./assets/css/auth.css";
import "./assets/css/product.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
