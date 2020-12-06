const { createApp } = require("vue");
import router from "@/router";
import App from "./App.vue";
import bulma from "bulma";

createApp(App)
  .use(bulma)
  .use(router)
  .mount("#app");
