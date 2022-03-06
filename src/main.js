import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "mdb-vue-ui-kit/css/mdb.min.css";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());

// NioRouterModule.setupRouter(router);
app.use(router);

app.mount("#app");
