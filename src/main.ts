import { createApp } from "vue";
// Vue Router
import { createPinia } from "pinia";
import index from "./router";

import { registerStore } from "./store";
import App from "~/App.vue";

import "~/css/tailwind.css";
import "~/css/app.scss";

const app = createApp(App);

app.use(createPinia());
registerStore();

app.use(index);

app.mount("#app");
