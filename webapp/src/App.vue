<template>
  <div id="app">
    <SiteHeader />
    <div class="main-content">
      <router-view />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #141419; /* Couleur de fond très sombre, quasi noire avec une légère teinte bleutée */
  color: #f0f0f0; /* Texte en blanc légèrement gris pour un meilleur contraste */
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  padding-bottom: 50px;
  background-color: #141419; /* Fond très sombre pour la zone de contenu */
  border-radius: 8px;
}

a {
  color: #42b883; /* Vert Vue.js pour les liens */
}

a:hover {
  color: #38a076; /* Vert légèrement plus sombre au survol */
}

button {
  background-color: #42b883; /* Vert Vue.js pour les boutons */
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #38a076; /* Vert légèrement plus sombre au survol */
}

input, textarea {
  background-color: #1a1a1f; /* Fond extrêmement sombre pour les champs de saisie */
  color: #ffffff;
  border: 1px solid #2a2a2f;
  padding: 10px;
  border-radius: 5px;
}

input::placeholder, textarea::placeholder {
  color: #777777; /* Placeholder encore plus sombre pour une intégration parfaite */
}
</style>
