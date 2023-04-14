import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import App from './App.vue'
const app = createApp(App)
app.use(router)
        .use(store)
// createApp({
//     // router,
//     // store,
//     render: (h) => h(App),
// }).mount('#app')
app.mount('#app')

