import { createApp } from "vue";
import App from "./App.vue";
import Tooltip from "@programic/vue3-tooltip";
import "@programic/vue3-tooltip/dist/index.css";
import type { TooltipConfiguration } from "@programic/vue3-tooltip";
import router from "./router";
import { createI18n } from "vue-i18n";
import pl from "./locales/pl.json"
import en from "./locales/en.json"

const i18n = createI18n({
  locale: "pl",
  fallbackLocale: "pl",
  messages: {
    pl, en
  }
});

const tooltipOptions: TooltipConfiguration = {
    placement: "right", // it is not working
};

createApp(App).use(router).use(Tooltip, tooltipOptions).use(i18n).mount("#app");