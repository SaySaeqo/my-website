import { createApp } from "vue";
import App from "./App.vue";
import Tooltip from "@programic/vue3-tooltip";
import "@programic/vue3-tooltip/dist/index.css";
import type { TooltipConfiguration } from "@programic/vue3-tooltip";
import router from "./router";

const tooltipOptions: TooltipConfiguration = {
    placement: "right", // it is not working
};

createApp(App).use(router).use(Tooltip, tooltipOptions).mount("#app");