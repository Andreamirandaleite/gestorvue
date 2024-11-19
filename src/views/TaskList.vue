<template>
  <div>
    <h1>Lista de Tareas</h1>
    <button @click="fetchTasks">Cargar Tareas</button>

    <!-- Mostrar las tareas si hay alguna -->
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <!-- Título de la tarea con estilo basado en su estado -->
        <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.todo }}
        </h5>
        <span>{{ task.completed ? 'Completada' : 'Pendiente' }}</span>

        <!-- Marcador visual de color según estado -->
        <div
          class="status-marker"
          :style="{
            backgroundColor: task.completed ? 'yellow' : 'red',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginLeft: '10px'
          }">
        </div>

        <!-- Botón para cambiar el estado de la tarea -->
        <button
          :style="{
            backgroundColor: task.completed ? 'yellow' : 'red',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '5px'
          }"
          @click="toggleTaskStatus(task)">
          {{ task.completed ? 'Marcar Pendiente' : 'Marcar Completada' }}
        </button>
      </div>
    </div>

    <!-- Mensaje cuando no hay tareas -->
    <div v-else>
      <p>No hay tareas para mostrar.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [], // Arreglo de tareas
    };
  },
  methods: {
    // Función para cargar las tareas desde la API
    async fetchTasks() {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        if (response.ok) {
          const data = await response.json();
          this.tasks = data.todos; // Asignar la lista de tareas a la variable tasks
        } else {
          console.error("Error al obtener las tareas:", response.status);
        }
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
      }
    },

    // Función para alternar el estado de la tarea (completada o pendiente)
    toggleTaskStatus(task) {
      task.completed = !task.completed; // Cambiar el estado de la tarea
    },
  },
};
</script>

<style scoped>
.task-item {
  margin-bottom: 20px;
}

button {
  font-size: 14px;
  border-radius: 5px;
  margin-left: 10px;
}

.status-marker {
  display: inline-block;
  margin-left: 10px;
}
</style>
