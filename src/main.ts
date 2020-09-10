import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/bootstrap.min.css';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './App.vue';
import Articles from './components/Articles.vue';
import ArticleComponent from './components/Article.vue';
import Projects from './components/Projects.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', component: Articles, name: 'Articles' },
  { path: '/projects', component: Projects, name: 'Projects' },
  {
    path: '/articles/:title',
    component: ArticleComponent,
    name: 'Article',
    props: (route) => ({ title: route.params.title }),
  },
];

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
