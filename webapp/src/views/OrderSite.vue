<template>
  <div class="container mt-4 main-content text-white">
    <div class="row">
      <div class="col-md-4" v-for="(site, index) in sites" :key="index">
        <div class="card mb-4 bg-dark text-white">
          <img :src="site.image" class="card-img-top" :alt="site.title">
          <div class="card-body">
            <h5 class="card-title">{{ site.title }}</h5>
            <p class="card-text">{{ site.description }}</p>
            <p class="card-text"><strong>{{ site.price }}</strong></p>
            <a :href="`mailto:example@example.com?subject=Commande%20${site.title}&body=${site.emailBody}`" class="btn btn-primary">Commandez</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSite',
  data() {
    return {
      sites: [
        {
          title: 'Site Vitrine Basic',
          description: 'Formule de base pour un site vitrine simple. Parfait pour les petites entreprises.',
          price: 'À partir de 500€',
          image: 'https://via.placeholder.com/300x200', // Remplacez par une URL réelle de votre image
          emailBody: 'Je souhaite commander la formule "Site Vitrine Basic". Veuillez me contacter pour discuter des détails.'
        },
        {
          title: 'Site Vitrine Avancé',
          description: 'Formule avancée pour un site vitrine plus complexe avec des fonctionnalités supplémentaires.',
          price: 'À partir de 1000€',
          image: 'https://via.placeholder.com/300x200', // Remplacez par une URL réelle de votre image
          emailBody: 'Je souhaite commander la formule "Site Vitrine Avancé". Veuillez me contacter pour discuter des détails.'
        },
        {
          title: 'Site Vitrine Premium',
          description: 'Formule premium pour un site vitrine haut de gamme avec des personnalisations avancées.',
          price: 'À partir de 2000€',
          image: 'https://via.placeholder.com/300x200', // Remplacez par une URL réelle de votre image
          emailBody: 'Je souhaite commander la formule "Site Vitrine Premium". Veuillez me contacter pour discuter des détails.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-content {
  min-height: 100vh; /* Assure que le contenu principal occupe au moins la hauteur de l'écran */
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1; /* Permet au contenu de grandir et de prendre tout l'espace disponible */
}

.row {
  flex: 1;
  display: flex;
  justify-content: space-around; /* Répartit les colonnes de manière égale sur l'écran */
  align-items: center; /* Centrage vertical des cartes */
}

.card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.card-img-top {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.btn-primary {
  background-color: #1e88e5;
  border-color: #1e88e5;
}

.btn-primary:hover {
  background-color: #1565c0;
  border-color: #1565c0;
}
</style>
