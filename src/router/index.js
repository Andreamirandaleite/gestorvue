import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '../views/AddTask.vue';
import TaskList from '../views/TaskList.vue';
import CombinedView from '../views/CombinedView.vue';
Vue.use(Router);

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/addtask', component: AddTask, name: 'AddTask' },
  { path: '/tasklist', component: TaskList, name: 'TaskList' },
  { path: '/combinedview', component: CombinedView, name: 'CombinedView' }, // Ruta para Tareas Combinadas
];
const router = new Router({
  routes,
});

export default router;
