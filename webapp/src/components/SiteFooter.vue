<template>
  <footer class="footer text-center p-3 bg-dark text-white">
    &copy; {{ currentYear }}
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #0a0a12; /* Assorti au fond sombre de l'application */
  color: #f0f0f0; /* Assorti au texte légèrement gris pour le thème sombre */
  border-top: 1px solid #1a1a1f; /* Bordure supérieure pour séparer le footer du contenu */
}
</style>
