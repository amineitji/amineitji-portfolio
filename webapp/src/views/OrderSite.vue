<template>
      <SiteHeader menuTitle="Projets Personnels" />
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Site Vitrine Basic</h5>
            <p class="card-text">Formule de base pour un site vitrine simple.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Site Vitrine Avancé</h5>
            <p class="card-text">Formule avancée pour un site vitrine plus complexe.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Site Vitrine Premium</h5>
            <p class="card-text">Formule premium pour un site vitrine haut de gamme.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</template>

<script>
    import SiteHeader from '@/components/SiteHeader.vue';
    import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'OrderSite',
  components: {
      SiteHeader,
      SiteFooter
    }
};
</script>

<style scoped>
/* Styles spécifiques pour la page Commandez */
</style>
