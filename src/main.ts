import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as VueRouter from "vue-router";
import Home from './components/Home.vue';
import Colwdvatn from './components/Colwdvatn.vue';
import AboutVue from './components/About.vue';
import WhaleWatchingVue from './components/WhaleWatching.vue';

const routes = [{
  path: "/",
  component: Home
}, {
  path: "/colwdvatn",
  component: Colwdvatn
}, {
  path: "/about",
  component: AboutVue
}, {
  path: "/whales",
  component: WhaleWatchingVue
}];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
