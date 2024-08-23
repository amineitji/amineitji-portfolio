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
            <button @click="showDetails(index)" class="btn btn-primary">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional Card for Custom Requests -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card mb-4 bg-dark text-white">
          <div class="card-body">
            <h5 class="card-title">Demande spécifique</h5>
            <p class="card-text">
              Pour des projets sur mesure, avec des fonctionnalités avancées comme la gestion de bases de données, des API, et des sites très interactifs, je suis également disponible pour répondre à vos besoins spécifiques.
            </p>
            <div class="d-flex justify-content-around">
              <a href="mailto:example@example.com?subject=Demande%20spécifique" class="btn btn-primary">Contactez-moi par email</a>
              <a href="https://wa.me/1234567890" class="btn btn-success">Contactez-moi sur WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for detailed information -->
    <div v-if="selectedSite !== null" class="modal fade show d-block" tabindex="-1" role="dialog" @click.self="closeDetails">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header justify-content-center">
            <h5 class="modal-title">{{ sites[selectedSite].title }}</h5>
            <button type="button" class="close custom-close-button" aria-label="Close" @click="closeDetails">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              {{ sites[selectedSite].description }}. Pour commander ce site, vous pouvez me contacter par email ou WhatsApp. Nous pourrons discuter de vos besoins spécifiques, du temps nécessaire pour réaliser votre projet, ainsi que des exigences particulières que vous pourriez avoir.
            </p>
            <div class="d-flex justify-content-around mt-3">
              <a :href="`mailto:example@example.com?subject=Commande%20${sites[selectedSite].title}&body=${sites[selectedSite].emailBody}`" class="btn btn-primary">Contactez-moi par email</a>
              <a href="https://wa.me/1234567890" class="btn btn-success">Contactez-moi sur WhatsApp</a>
            </div>
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
          image: 'https://via.placeholder.com/300x200',
          emailBody: 'Je souhaite commander la formule "Site Vitrine Basic". Veuillez me contacter pour discuter des détails.'
        },
        {
          title: 'Site Vitrine Avancé',
          description: 'Formule avancée pour un site vitrine plus complexe avec des fonctionnalités supplémentaires.',
          price: 'À partir de 1000€',
          image: 'https://via.placeholder.com/300x200',
          emailBody: 'Je souhaite commander la formule "Site Vitrine Avancé". Veuillez me contacter pour discuter des détails.'
        },
        {
          title: 'Site Vitrine Premium',
          description: 'Formule premium pour un site vitrine haut de gamme avec des personnalisations avancées.',
          price: 'À partir de 2000€',
          image: 'https://via.placeholder.com/300x200',
          emailBody: 'Je souhaite commander la formule "Site Vitrine Premium". Veuillez me contacter pour discuter des détails.'
        }
      ],
      selectedSite: null,
    };
  },
  methods: {
    showDetails(index) {
      this.selectedSite = index;
    },
    closeDetails() {
      this.selectedSite = null;
    }
  }
};
</script>

<style scoped>
.main-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
}

.row {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.modal-content {
  background-color: #343a40;
}

.custom-close-button {
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: white;
}
</style>
