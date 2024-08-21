<template>
  <div>
    <SiteHeader menuTitle="Profil" />
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <img src="cv_portfolio_fr.png" class="card-img-top" alt="CV Image" />
          </div>
        </div>
        <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <img src="pp.jpeg" alt="Profile Picture" class="rounded-circle mb-3" style="width: 150px; height: 150px;">
            <h5 class="card-title">Votre Profil</h5>
            <p class="card-text">
              Master 1 en Informatique avec une spécialisation en [votre spécialité]. Passionné par [vos centres d'intérêt ou domaines d'expertise], j'ai travaillé sur divers projets incluant [projets clés]. Je suis toujours à la recherche de nouvelles opportunités pour approfondir mes compétences et contribuer à des projets innovants.
            </p>
            <div>
              <a href="https://www.linkedin.com/in/amine-itji-5a8696268/" class="btn btn-primary mx-1">
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://www.google.com" class="btn btn-danger mx-1">
                <i class="fab fa-google"></i> Google
              </a>
              <a href="https://github.com/amineitji" class="btn btn-dark mx-1">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'UserProfile',
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style scoped>
/* Styles spécifiques pour la page Profil */
</style>
