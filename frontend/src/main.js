import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TodoListComponent from './components/TodoListComponent.vue';
import AddTodoComponent from './components/AddTodoComponent.vue';

const routes = [
  { path: '/', component: TodoListComponent },
  { path: '/add-todo', component: AddTodoComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');