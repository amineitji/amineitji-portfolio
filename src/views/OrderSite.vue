<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4" v-for="(site, index) in sites" :key="index">
        <div 
          class="card mb-4 text-white bg-dark" 
          @mouseenter="toggleDetails(index)" 
          @mouseleave="toggleDetails(index)" 
          @click="toggleDetails(index)"
        >
          <img :src="site.image" class="card-img-top" :alt="site.title">
          <div class="card-body">
            <h5 class="card-title">{{ site.title }}</h5>
            <p class="card-text"><strong>{{ site.price }}</strong></p>
            <div v-if="expandedSite === index">
              <div v-html="site.description"></div>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" width="100%" height="200" src="https://www.youtube.com/embed/SX99LCO1OZI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="arrow-down" v-if="expandedSite !== index">⬇️</div>
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
            <div class="d-flex justify-content-around flex-column flex-md-row">
              <a href="mailto:amineitji@gmail.com" class="btn btn-outline-danger mb-2">
                <i class="bi bi-envelope-fill"></i> amineitji@gmail.com
              </a>
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
      expandedSite: null, // -1 signifie qu'aucune carte n'est sélectionnée
      sites: [
        {
          title: 'Site Vitrine Basic',
          description: `
            <p>💻 La formule Basic est parfaite pour ceux qui cherchent à obtenir rapidement un site vitrine fonctionnel et élégant. En moins d'une semaine, je vous propose :</p>
            <ul>
              <li>🗂️ Un menu de navigation clair pour guider vos visiteurs.</li>
              <li>🖼️ Des sections incluant des images attrayantes, des cartes informatives, et du texte bien structuré.</li>
              <li>🚀 Le déploiement du site sur un serveur de votre choix (achat du nom de domaine à votre charge).</li>
            </ul>
            <p>Cette formule est idéale pour les petites entreprises ou les projets nécessitant une présence en ligne rapide et efficace.</p>
          `,
          price: 'À partir de 200€',
          image: 'Basic.png',
          emailBody: 'Je souhaite commander la formule "Site Vitrine Basic". Veuillez me contacter pour discuter des détails.'
        },
        {
          title: 'Site Vitrine Avancé',
          description: `
            <p>🌟 La formule Avancé vous offre tout ce que propose la formule Basic, mais avec des fonctionnalités supplémentaires pour rendre votre site encore plus attractif :</p>
            <ul>
              <li>🎨 Un design plus sophistiqué avec une attention particulière aux détails esthétiques.</li>
              <li>📍 L'intégration d'une carte interactive pour situer facilement votre commerce ou bureau.</li>
              <li>🎥 Une section vidéo pour présenter vos produits ou services de manière dynamique.</li>
              <li>✨ Des fonctionnalités supplémentaires telles qu'une galerie d'images, des formulaires de contact personnalisés, et des animations subtiles.</li>
            </ul>
            <p>Ce site, prêt en environ deux semaines, est idéal pour les entreprises qui souhaitent se démarquer avec un site moderne et complet.</p>
          `,
          price: 'À partir de 300€',
          image: 'Avance.png',
          emailBody: 'Je souhaite commander la formule "Site Vitrine Avancé". Veuillez me contacter pour discuter des détails.'
        },
        {
          title: 'Site Vitrine Premium',
          description: `
            <p>🏆 La formule Premium est conçue pour ceux qui veulent le nec plus ultra en matière de site vitrine. En plus des avantages de la formule Avancé, vous bénéficierez de :</p>
            <ul>
              <li>🎨 Un style sur mesure qui correspond parfaitement à l'image de votre marque.</li>
              <li>💡 Des éléments innovants tels que des effets visuels, des animations, et des transitions fluides pour une expérience utilisateur exceptionnelle.</li>
              <li>🔗 Une interactivité accrue avec des fonctionnalités avancées comme des filtres de produits, des sliders personnalisés, ou des intégrations API spécifiques.</li>
              <li>👥 Un accompagnement personnalisé tout au long du processus de création pour s'assurer que le site répond à toutes vos attentes.</li>
            </ul>
            <p>Ce projet, qui peut prendre jusqu'à quatre semaines, est parfait pour les entreprises souhaitant un site unique, entièrement personnalisé, prêt à impressionner en ligne.</p>
          `,
          price: 'À partir de 500€',
          image: 'Premium.png',
          emailBody: 'Je souhaite commander la formule "Site Vitrine Premium". Veuillez me contacter pour discuter des détails.'
        }
      ]
    };
  },
  methods: {
    toggleDetails(index) {
      this.expandedSite = this.expandedSite === index ? null : index;
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques pour la page OrderSite */
.card {
  cursor: pointer;
  transition: transform 0.3s ease, border 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}
.card:hover {
  transform: scale(1.05);
  border-color: #42b883;
}

/* Fleche vers le bas */
.arrow-down {
  text-align: center;
  margin-top: 10px;
  font-size: 1.5rem;
  color: #42b883;
}

/* Specific card that should not have hover effects */
.no-hover-effect {
  cursor: default;
  transition: none;
  border: none;
}
.no-hover-effect:hover {
  transform: none;
  border-color: transparent;
}

.modal {
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-content {
  background-color: #343a40;
}

/* Custom close button */
.custom-close-button {
  border-radius: 10%;
  background-color: #ff5c5c;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-close-button:hover {
  background-color: #ff1c1c;
}

/* Center content */
.modal-header,
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Larger modal */
.modal-dialog.modal-xl {
  max-width: 90%;
}
</style>
