<template>
  <div>
    <h1>Lista de Tareas</h1>
    <button @click="fetchTasks">Cargar Tareas</button>

    <div v-if="tasks.length > 0">
      <div v-for="task in tasks" :key="task.id">
        <div>
          <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
            {{ task.todo }}
          </h5>
          <span>{{ task.completed ? 'Completada' : 'Pendiente' }}</span>

          <button @click="toggleTaskCompletion(task)">
            {{ task.completed ? 'Desmarcar' : 'Completar' }}
          </button>
          <button @click="deleteTask(task)">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      tasks: [], // Aquí almacenaremos las tareas obtenidas de la API
    };
  },
  methods: {
    // Este método hace una llamada real a la API
    async fetchTasks() {
      try {
        const response = await fetch("https://dummyjson.com/todos"); // Hacemos la solicitud GET
        const data = await response.json(); // Convertimos la respuesta a JSON
        this.tasks = data.todos; // Asignamos las tareas a la variable 'tasks'
      } catch (error) {
        console.error("Error al cargar tareas:", error); // Mostramos cualquier error en la consola
      }
    },

    // Cambiar el estado de una tarea (completada/no completada)
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },

    // Eliminar la tarea seleccionada
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
  },
};
</script>

<style scoped>
/* Aquí puedes agregar tus estilos personalizados */
</style>
