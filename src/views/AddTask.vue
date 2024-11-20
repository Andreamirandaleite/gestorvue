<template>
  <div class="container mt-4">
    <div class="card shadow p-4">
      <h1 class="text-center text-pink mb-4">Añadir Tarea</h1>
      <form @submit.prevent="addTask" class="d-flex flex-column align-items-center">
        <div class="input-group mb-3 w-75">
          <input
            type="text"
            v-model="newTask"
            class="form-control"
            placeholder="Escribe una nueva tarea"
            aria-label="Nueva tarea"
          />
          <button class="btn btn-pink" type="submit">Añadir</button>
        </div>
      </form>
      <ul class="list-group list-group-flush mt-3">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ task }}
          <button class="btn btn-outline-danger btn-sm" @click="removeTask(index)">
            Eliminar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      const trimmedTask = this.newTask.trim();
      if (trimmedTask && !this.tasks.includes(trimmedTask)) {
        this.tasks.push(trimmedTask);
        this.newTask = '';
      } else {
        alert('La tarea ya existe o el campo está vacío.');
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
.text-pink {
  color: #e83e8c; /* Rosa femenino */
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

input:focus {
  box-shadow: 0 0 10px rgba(232, 62, 140, 0.5);
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
