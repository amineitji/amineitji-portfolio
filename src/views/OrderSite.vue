<template>
  <div class="order-page-container">
    <div class="section-header">
      <h2 class="section-title">Formules Sites Internet</h2>
      <div class="section-subtitle">Lancez votre activité avec un site professionnel</div>
      <div class="title-underline"></div>
    </div>
    
    <div class="pricing-cards">
      <div 
        v-for="(site, index) in sites" 
        :key="index"
        class="pricing-card"
        :class="{ 'expanded': expandedSite === index }"
        @click="toggleDetails(index)"
      >
        <div class="price-badge">
          <span class="price-text">{{ site.price }}</span>
          <div class="price-glow"></div>
        </div>
        
        <div class="card-header-wrapper">
          <img :src="site.image" class="card-image" :alt="site.title">
          <div class="card-image-overlay"></div>
          <h3 class="card-title">{{ site.title }}</h3>
        </div>
        
        <div class="card-content" :class="{ 'visible': expandedSite === index }">
          <div class="card-description" v-html="site.description"></div>
          
          <a :href="'mailto:amineitji@gmail.com?subject=Commande: ' + site.title" class="contact-button">
            <span class="button-text">Commander</span>
            <span class="button-icon">✉️</span>
          </a>
        </div>
        
        <div class="expand-indicator" v-if="expandedSite !== index">
          <span class="expand-text">Voir détails</span>
          <div class="expand-arrow"><span class="arrow-down"></span></div>
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
      expandedSite: null,
      sites: [
        {
          title: 'Pack Présence',
          price: '600€',
          image: 'Basic.png',
          description: `
            <p><strong>L'essentiel pour être visible.</strong></p>
            <ul>
              <li>Site vitrine One-Page ou jusqu'à 3 pages</li>
              <li>Design responsive adapté aux mobiles</li>
              <li>Formulaire de contact & Liens réseaux sociaux</li>
              <li>Mise en ligne incluse</li>
            </ul>
            <p>Délai moyen : 1 semaine.</p>
          `
        },
        {
          title: 'Pack Pro',
          price: '950€',
          image: 'Avance.png',
          description: `
            <p><strong>Pour présenter votre activité en détail.</strong></p>
            <ul>
              <li>Jusqu'à 7 pages avec design soigné</li>
              <li>Galerie photos, Blog ou Carte interactive</li>
              <li>Optimisation SEO pour le référencement Google</li>
              <li>Animations fluides pour une image moderne</li>
            </ul>
            <p>Délai moyen : 2 semaines.</p>
          `
        },
        {
          title: 'Pack Expert',
          price: 'Sur Devis',
          image: 'Premium.png',
          description: `
            <p><strong>Solutions complexes et sur mesure.</strong></p>
            <ul>
              <li>Site E-commerce ou Application Web (SaaS)</li>
              <li>Fonctionnalités avancées (Espace client, Réservations...)</li>
              <li>Intégration d'API ou d'Intelligence Artificielle</li>
              <li>Architecture technique robuste (Django/Vue.js)</li>
            </ul>
            <p>Délai : Selon le projet (dès 1500€).</p>
          `
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
/* Variables */
:root {
  --neon-green: #42b883;
  --neon-blue: #00d8ff;
  --neon-purple: #bd34fe;
  --dark-bg: #0a0b13;
  --card-bg: #12141f;
  --card-bg-lighter: #1a1d2a;
  --text-primary: #f0f0f0;
  --text-secondary: #b4b4b8;
  --border-color: #2a2d36;
  --transition-speed: 0.3s;
}

/* Container principal */
.order-page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
}

/* En-tête de section */
.section-header {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(90deg, var(--neon-green), var(--neon-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--neon-green), var(--neon-blue));
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.5);
}

/* Grille de cartes de tarification */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

/* Carte individuelle */
.pricing-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 380px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.pricing-card.expanded {
  height: auto;
  transform: translateY(-10px);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--neon-green), var(--neon-blue));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pricing-card:hover::before,
.pricing-card.expanded::before {
  opacity: 1;
}

/* Badge de prix */
.price-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  background: linear-gradient(135deg, #42b883, #00d8ff);
  padding: 10px 18px;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(66, 184, 131, 0.5);
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.pricing-card:hover .price-badge,
.pricing-card.expanded .price-badge {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 20px rgba(66, 184, 131, 0.7);
}

.price-text {
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 1rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.price-glow {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background: transparent;
  z-index: -1;
  transition: all 0.3s ease;
}

.pricing-card:hover .price-glow,
.pricing-card.expanded .price-glow {
  box-shadow: 0 0 15px rgba(66, 184, 131, 0.5);
}

/* En-tête de la carte */
.card-header-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.pricing-card:hover .card-image,
.pricing-card.expanded .card-image {
  transform: scale(1.1);
}

.card-image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(to top, var(--card-bg), transparent);
  z-index: 1;
}

.card-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: var(--text-primary);
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 2;
  transition: all 0.3s ease;
}

.pricing-card:hover .card-title,
.pricing-card.expanded .card-title {
  color: var(--neon-green);
  text-shadow: 0 0 5px rgba(66, 184, 131, 0.3);
}

/* Contenu de la carte */
.card-content {
  padding: 20px;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  background: var(--card-bg-lighter);
  border-top: 1px solid var(--border-color);
}

.card-content.visible {
  opacity: 1;
  max-height: 2000px;
  padding: 20px;
}

.card-description {
  color: var(--text-secondary);
}

.card-description p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.card-description ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.card-description li {
  margin-bottom: 8px;
  position: relative;
}

/* Conteneur vidéo */
.video-container {
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Bouton de contact */
.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, var(--neon-green), var(--neon-blue));
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(66, 184, 131, 0.3);
  z-index: 1;
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.5);
}

.button-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s ease;
}

.contact-button:hover .button-effect {
  left: 100%;
}

/* Indicateur d'expansion */
.expand-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom, transparent, var(--card-bg));
  z-index: 3;
  transition: all 0.3s ease;
}

.expand-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}

.expand-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
}

.arrow-down {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid var(--neon-green);
  border-right: 2px solid var(--neon-green);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
  40% { transform: rotate(45deg) translateY(-5px); }
  60% { transform: rotate(45deg) translateY(-3px); }
}

.pricing-card:hover .expand-text {
  color: var(--neon-green);
}

/* Carte de demande personnalisée */
.custom-request-card {
  background: rgba(18, 20, 31, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  padding: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-color);
  margin-top: 60px;
}

.custom-request-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--neon-purple), var(--neon-blue));
}

.custom-card-content {
  position: relative;
  z-index: 2;
}

.custom-card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.custom-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, rgba(189, 52, 254, 0.1), rgba(0, 216, 255, 0.1));
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(189, 52, 254, 0.2);
}

.custom-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.custom-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 25px;
}

.custom-contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(189, 52, 254, 0.3);
}

.custom-contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(189, 52, 254, 0.5);
}

.glow-effect {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(189, 52, 254, 0.1) 0%, rgba(189, 52, 254, 0) 70%);
  z-index: 1;
  filter: blur(30px);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.custom-glow {
  top: -150px;
  right: -150px;
}

.custom-request-card:hover .glow-effect {
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .pricing-cards {
    grid-template-columns: 1fr;
  }
  
  .pricing-card {
    height: 350px;
  }
  
  .custom-card-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>