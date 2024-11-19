<template>
    <div>
      <h1>Añadir Tarea</h1>
      <input v-model="newTask" placeholder="Nueva tarea" />
      <button @click="addTask">Añadir</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '', // Almacenar la nueva tarea
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          // Agregar la nueva tarea al listado, o llamarla a la API si es necesario
          console.log("Tarea añadida:", this.newTask);
          this.newTask = ''; // Limpiar el campo de entrada
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Agregar estilos personalizados si lo necesitas */
  </style>
  