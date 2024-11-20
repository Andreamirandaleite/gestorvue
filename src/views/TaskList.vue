<template>
  <div class="container mt-4">
    <div class="card shadow p-4">
      <!-- Sección para mostrar las tareas cargadas desde la API -->
      <h1 class="text-center text-pink mb-4">Lista de Tareas</h1>
      <button class="btn btn-pink mb-4" @click="fetchTasks">Cargar Tareas</button>
      
      <!-- Mostrar las tareas si hay alguna -->
      <div v-if="tasks.length" class="list-group">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5
              :class="{ 'text-decoration-line-through': task.completed }"
              class="mb-1"
            >
              {{ task.todo }}
            </h5>
            <span
              :class="task.completed ? 'badge bg-success' : 'badge bg-danger'"
            >
              {{ task.completed ? 'Completada' : 'Pendiente' }}
            </span>
          </div>

          <button
            :class="task.completed ? 'btn btn-warning btn-sm' : 'btn btn-danger btn-sm'"
            @click="toggleTaskStatus(task)"
          >
            {{ task.completed ? 'Marcar Pendiente' : 'Marcar Completada' }}
          </button>
        </div>
      </div>

      <!-- Mensaje cuando no hay tareas -->
      <div v-else class="text-center">
        <p>No hay tareas para mostrar.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],   // Lista de tareas
    };
  },
  methods: {
    // Función para cargar tareas desde una API
    async fetchTasks() {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        if (response.ok) {
          const data = await response.json();
          this.tasks = data.todos; // Asignar las tareas obtenidas
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
.text-pink {
  color: #e83e8c;
}

.btn-pink {
  background-color: #e83e8c;
  color: white;
}

.btn-pink:hover {
  background-color: #c82362;
  color: white;
}

.card {
  border-radius: 15px;
  border: none;
}

.text-decoration-line-through {
  text-decoration: line-through;
}

.list-group-item {
  border: none;
  background-color: #f8f9fa;
}

.list-group-item:hover {
  background-color: #f1f3f5;
}

.btn-outline-danger:hover {
  color: white;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
