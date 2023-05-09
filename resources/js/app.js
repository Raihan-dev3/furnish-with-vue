import "./bootstrap";

import { createApp } from "vue";

import App from "./components/app.vue";
import router from "./routes";

createApp(App).use(router).mount("#app");
