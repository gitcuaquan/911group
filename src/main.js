import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vi from "./lang/vi";
import en from "./lang/en";

const app = createApp(App);
app.use(store);
app.use(router);

app.config.globalProperties.$t = (string) => {
  const lang = localStorage.getItem("lang");
  if (!lang) localStorage.setItem("lang", "vi");
  var result = lang === "vi" ? vi : en;
  return result[string] ?? string;
};
app.config.globalProperties.$setLanguage = (language) => {
    localStorage.setItem("lang", language);
};

app.mount("#app");

// createApp(App).use(store).use(router).mount('#app')
