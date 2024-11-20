<template>
  <div class="container mt-4">
    <div class="card shadow p-4">
      <h1 class="text-center text-pink mb-4">Vista Combinada</h1>
      <p class="text-center">Aquí puedes ver una vista combinada de todas las tareas.</p>
      <div class="d-flex justify-content-center mb-3">
        <!-- Botones para mostrar tareas pendientes, completadas y todas -->
        <button class="btn btn-pink me-2" @click="showPending = true">
          Tareas Pendientes
        </button>
        <button class="btn btn-pink me-2" @click="showPending = false">
          Tareas Completadas
        </button>
        <button class="btn btn-pink" @click="showAllTasks = true">
          Tareas Combinadas
        </button>
      </div>

      <!-- Mostrar tareas pendientes -->
      <div v-if="showPending && !showAllTasks">
        <h3 class="text-center mb-3">Tareas Pendientes</h3>
        <div v-if="pendingTasks.length" class="list-group">
          <div v-for="task in pendingTasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
            {{ task.todo }}
            <button class="btn btn-success btn-sm" @click="toggleTaskStatus(task)">
              Marcar Completada
            </button>
          </div>
        </div>
        <div v-else class="text-center">
          <p>No hay tareas pendientes.</p>
        </div>
      </div>

      <!-- Mostrar tareas completadas -->
      <div v-else-if="!showPending && !showAllTasks">
        <h3 class="text-center mb-3">Tareas Completadas</h3>
        <div v-if="completedTasks.length" class="list-group">
          <div v-for="task in completedTasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
            <span class="text-decoration-line-through">{{ task.todo }}</span>
            <button class="btn btn-warning btn-sm" @click="toggleTaskStatus(task)">
              Marcar Pendiente
            </button>
          </div>
        </div>
        <div v-else class="text-center">
          <p>No hay tareas completadas.</p>
        </div>
      </div>

      <!-- Mostrar todas las tareas -->
      <div v-else-if="showAllTasks">
        <h3 class="text-center mb-3">Todas las Tareas</h3>
        <div v-if="allTasks.length" class="list-group">
          <div v-for="task in allTasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
            <span :class="{'text-decoration-line-through': task.completed}">{{ task.todo }}</span>
            <button class="btn btn-sm" :class="task.completed ? 'btn-warning' : 'btn-success'" @click="toggleTaskStatus(task)">
              {{ task.completed ? 'Marcar Pendiente' : 'Marcar Completada' }}
            </button>
          </div>
        </div>
        <div v-else class="text-center">
          <p>No hay tareas.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPending: true, // Controla si se muestran tareas pendientes
      showAllTasks: false, // Controla si se muestran todas las tareas
      tasks: [
        { id: 1, todo: 'Estudiar Vue.js', completed: false },
        { id: 2, todo: 'Finalizar el proyecto', completed: true },
        { id: 3, todo: 'Cocinar algo rico', completed: false },
      ],
    };
  },
  computed: {
    // Filtrar tareas pendientes
    pendingTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    // Filtrar tareas completadas
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
    // Mostrar todas las tareas
    allTasks() {
      return this.tasks;
    },
  },
  methods: {
    // Cambiar el estado de la tarea (completada o pendiente)
    toggleTaskStatus(task) {
      task.completed = !task.completed;
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

.btn-warning {
  background-color: #ffc107;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-warning:hover,
.btn-success:hover {
  background-color: #e0a800;
  color: white;
}
</style>
