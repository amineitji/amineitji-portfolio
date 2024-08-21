<template>
    <SiteHeader menuTitle="Projets Personnels" />
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Projet Personnel 1</h5>
              <p class="card-text">Description du projet personnel.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Projet Personnel 2</h5>
              <p class="card-text">Description du projet personnel.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">Projet Personnel 3</h5>
              <p class="card-text">Description du projet personnel.</p>
            </div>
          </div>
        </div>
        <!-- Ajoutez plus de cartes pour d'autres projets -->
      </div>
    </div>
    <SiteFooter />
  </template>
  
  <script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from '@/components/SiteFooter.vue';
  export default {
    name: 'ProjetsPersonnels',
    components: {
      SiteHeader,
      SiteFooter
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques pour la page Projets Personnels */
  </style>
  