<template>
    <div>
      <SiteHeader menuTitle="Projets Universitaires" />
      <div class="container mt-4">
        <!-- Contenu spécifique à cette vue -->
      </div>
      <SiteFooter />
    </div>
  </template>
  
  <script>
  import SiteHeader from '@/components/SiteHeader.vue';
  import SiteFooter from '@/components/SiteFooter.vue';
  
  export default {
    name: 'ProjetsUniversitaires',
    components: {
      SiteHeader,
      SiteFooter
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques pour la page Projets Universitaires */
  </style>
  