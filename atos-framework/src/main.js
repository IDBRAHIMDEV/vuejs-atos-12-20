import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Post from './components/Post.vue';
import NewPost from './components/Newpost.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Post },
  {path: '/post/new', component: NewPost }
];

const router = new VueRouter({
  routes: routes
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
