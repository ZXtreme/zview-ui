import { createApp } from 'vue'
import App from './App.vue'
import ZviewPlus from "zview-ui";
import "@zview-plus/theme-chalk";

const app = createApp(App)
app.use(ZviewPlus);
app.mount('#app')
