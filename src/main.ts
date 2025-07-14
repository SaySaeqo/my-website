import { createApp } from "vue";
import App from "./App.vue";
import Tooltip from "@programic/vue3-tooltip";
import "@programic/vue3-tooltip/dist/index.css";
import type { TooltipConfiguration } from "@programic/vue3-tooltip";
import router from "./router";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  locale: "pl",
  fallbackLocale: "en",
  messages
});

const tooltipOptions: TooltipConfiguration = {
    placement: "right", // it is not working
};

createApp(App).use(router).use(Tooltip, tooltipOptions).use(i18n).mount("#app");