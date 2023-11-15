import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as VueRouter from "vue-router";
import Home from './components/HomePage.vue';
import Colwdvatn from './components/ColwdvatnPage.vue';
import AboutVue from './components/AboutPage.vue';
import WhaleWatchingVue from './components/WhaleWatching.vue';
import HotelsVue from './components/HotelsPage.vue';
import LoremvikVue from './components/LoremvikPage.vue';
import IpsumvatnVue from './components/IpsumvatnPage.vue';
import TravelVue from './components/TravelPage.vue';
import { i18n } from './i18n';

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
}, {
  path: "/travel",
  component: TravelVue
}];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
