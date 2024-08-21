<template>
  <div id="app">
    <AppSidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    AppSidebar,
  },
};
</script>

<style>
/* Reset des marges et de la hauteur */
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Configuration du layout principal */
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Styles pour la sidebar */
#app > *:first-child {
  flex-shrink: 0;
}

/* Styles pour le contenu principal */
.content {
  flex-grow: 1;
  background-color: #d7d3d3;
}
</style>
