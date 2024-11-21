<template>
  <div class="container mt-4">
    <div class="card shadow p-4">
      <h1 class="text-center text-pink mb-4">Vista Combinada de Tareas</h1>
      <p class="text-center mb-4">Aquí puedes agregar, marcar y borrar tareas, además de ver las tareas cargadas desde la API.</p>

      <!-- Espacio para ingresar nuevas tareas -->
      <div class="mb-3">
        <input
          v-model="newTask"
          type="text"
          class="form-control"
          placeholder="Agregar nueva tarea"
        />
        <button class="btn btn-pink mt-2" @click="addTask">Agregar Tarea</button>
      </div>

      <!-- Botones para filtrar las tareas -->
      <div class="d-flex justify-content-center mb-3">
        <button class="btn btn-pink me-2" @click="showPending = true">Tareas Pendientes</button>
        <button class="btn btn-pink me-2" @click="showPending = false">Tareas Completadas</button>
        <button class="btn btn-pink" @click="showAllTasks = true">Todas las Tareas</button>
      </div>

      <!-- Mostrar tareas pendientes -->
      <div v-if="showPending && !showAllTasks">
        <h3 class="text-center mb-3">Tareas Pendientes</h3>
        <div v-if="pendingTasks.length" class="list-group">
          <div v-for="task in pendingTasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
            <span>{{ task.todo }}</span>
            <div>
              <button class="btn btn-success btn-sm" @click="toggleTaskStatus(task)">Marcar Completada</button>
              <button class="btn btn-danger btn-sm ms-2" @click="deleteTask(task)">Borrar</button>
            </div>
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
            <div>
              <button class="btn btn-warning btn-sm" @click="toggleTaskStatus(task)">Marcar Pendiente</button>
              <button class="btn btn-danger btn-sm ms-2" @click="deleteTask(task)">Borrar</button>
            </div>
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
            <div>
              <button class="btn btn-sm" :class="task.completed ? 'btn-warning' : 'btn-success'" @click="toggleTaskStatus(task)">
                {{ task.completed ? 'Marcar Pendiente' : 'Marcar Completada' }}
              </button>
              <button class="btn btn-danger btn-sm ms-2" @click="deleteTask(task)">Borrar</button>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <p>No hay tareas.</p>
        </div>
      </div>

      <!-- Cargar tareas desde la API -->
      <div class="text-center mt-4">
        <button class="btn btn-pink" @click="fetchTasks">Cargar Tareas de la API</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '', // Tarea nueva a agregar
      showPending: true, // Para mostrar tareas pendientes
      showAllTasks: false, // Para mostrar todas las tareas
      tasks: [], // Lista de tareas (incluye las que traemos de la API)
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
    // Cargar tareas 
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

    // Agregar una nueva tarea
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          id: Date.now(), // Usar la hora actual como ID único
          todo: this.newTask,
          completed: false,
        });
        this.newTask = ''; // Limpiar el campo de entrada
      }
    },

    // Cambiar el estado de la tarea (completada o pendiente)
    toggleTaskStatus(task) {
      task.completed = !task.completed;
    },

    // Borrar tarea de la lista
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
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

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-warning {
  background-color: #ffc107;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-sm {
  font-size: 0.875rem;
}

.card {
  border-radius: 15px;
  border: none;
}
</style>
