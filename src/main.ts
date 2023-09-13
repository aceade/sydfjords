import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as VueRouter from "vue-router";
import Home from './components/Home.vue';
import Colwdvatn from './components/Colwdvatn.vue';
import AboutVue from './components/About.vue';

const routes = [{
  path: "/",
  component: Home
}, {
  path: "/colwdvatn",
  component: Colwdvatn
}, {
  path: "/about",
  component: AboutVue
}];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
