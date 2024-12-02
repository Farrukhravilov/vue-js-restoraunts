import "./style.css";
import { createApp } from "vue";
import util from "./server/util";
import baseurl from "./server/baseurl";
import store from "./store";
import router from './router';
// import './styles.css'; // Подключаем Tailwind CSS
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$util = util;
app.config.globalProperties.$baseurl = baseurl;
app.config.globalProperties.$store = store;

app.mount
    ("#app");
