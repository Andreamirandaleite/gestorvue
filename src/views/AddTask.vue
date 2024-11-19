<template>
  <div>
    <h1>Añadir Tarea</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Escribe una nueva tarea" />
      <button type="submit">Añadir Tarea</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        console.log('Nueva tarea:', this.newTask);
        this.newTask = '';
      }
    },
  },
};
</script>
