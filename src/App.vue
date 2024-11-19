<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a las diferentes vistas -->
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/addtask">Añadir Tarea</router-link>
      <router-link to="/tasklist">Lista de Tareas</router-link>
    </nav>

    <!-- Aquí se renderizarán las vistas de acuerdo a la ruta seleccionada -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Estilos para la barra de navegación */
nav {
  padding: 10px;
  font-size: 18px;
  background-color: #f0f0f0;
  border-bottom: 2px solid #ddd;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #35495e;
  font-weight: bold;
}
</style>
