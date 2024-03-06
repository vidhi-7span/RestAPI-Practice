import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";
import router from "./router/index.js";
import { register as registerGlobal, iconAutoRegister } from "./global";
import { registerPlugins } from "./plugins";
import { register as registerPrototype } from "@/prototype/index.js";
import vClickOutside from "click-outside-vue3"
// Pinia Instance
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

// Create Vue App Instance
const app = createApp(App);

// Register Global Component
registerGlobal(app); // Global Components
iconAutoRegister(app); //Auto Register Icons
registerPlugins(app); // Register Plugin Components
registerPrototype(app);

// V-Click Outside
app.use(vClickOutside);
// Router
app.use(router);

app.use(pinia);

// Mount App
app.mount("#app");
