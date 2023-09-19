import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as VueRouter from "vue-router";
import Home from './components/Home.vue';
import Colwdvatn from './components/Colwdvatn.vue';
import AboutVue from './components/About.vue';
import WhaleWatchingVue from './components/WhaleWatching.vue';
import HotelsVue from './components/Hotels.vue';
import LoremvikVue from './components/Loremvik.vue';
import IpsumvatnVue from './components/Ipsumvatn.vue';

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
}, {
  path: "/hotels",
  component: HotelsVue
}, {
  path: "/loremvik",
  component: LoremvikVue
}, {
  path: "/ipsumvatn",
  component: IpsumvatnVue
}];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
