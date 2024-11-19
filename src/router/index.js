import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '../views/AddTask.vue';
import TaskList from '../views/TaskList.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: HomeView },
  { path: '/addtask', component: AddTask },
  { path: '/tasklist', component: TaskList },
];

const router = new Router({
  routes,
});

export default router;
