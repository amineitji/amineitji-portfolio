<template>
  <div class="services-container">
    <!-- Effet de particules et d'illumination -->
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>

    <!-- Services principaux -->
    <div class="services-grid animated-entry">
      <!-- Effets de flou -->
      <div class="blur-effect purple" style="top: 15%; left: 10%;"></div>
      <div class="blur-effect green" style="bottom: 25%; right: 15%;"></div>
      <div class="blur-effect cyan" style="top: 60%; left: 60%;"></div>

      <!-- Service 1: Site Vitrine -->
      <div class="service-card featured neon-border" @click="toggleDetails(0)">
        <div class="card-header-line"></div>
        <div class="card-header">
          <div class="service-icon">🌐</div>
          <div class="header-info">
            <h3 class="service-title">Site Vitrine Vue.js</h3>
            <div class="service-price">500€ TTC</div>
          </div>
          <button class="expand-btn" :class="{ 'expanded': expandedService === 0 }">
            <span class="expand-icon">▼</span>
          </button>
        </div>
        
        <div class="service-preview">
          <div class="tech-stack">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Responsive</span>
            <span class="tech-tag">Render.com</span>
            <span class="tech-tag">SEO</span>
          </div>
        </div>

        <div class="service-details" v-show="expandedService === 0">
          <div class="details-content">
            <h4 class="details-title">Spécifications techniques</h4>
            <ul class="features-list">
              <li>✅ Développement avec Vue.js moderne</li>
              <li>✅ Design responsive et adaptatif</li>
              <li>✅ Plusieurs pages avec navigation fluide</li>
              <li>✅ Intégration carte interactive (Google Maps)</li>
              <li>✅ Formulaire de contact fonctionnel</li>
              <li>✅ Optimisation SEO de base</li>
              <li>✅ Déploiement sur Render.com</li>
              <li>✅ Guide de gestion DNS pour le client</li>
              <li>✅ Support technique pendant 1 mois</li>
            </ul>
            
            <div class="delivery-info">
              <div class="delivery-item">
                <span class="delivery-label">Délai de livraison:</span>
                <span class="delivery-value">7-10 jours ouvrés</span>
              </div>
              <div class="delivery-item">
                <span class="delivery-label">Révisions incluses:</span>
                <span class="delivery-value">3 cycles de modifications</span>
              </div>
            </div>
            
            <div class="cta-section">
              <a 
                :href="getVitrineMailto()"
                class="contact-btn primary"
              >
                <span class="btn-icon">📧</span>
                <span class="btn-text">Commander maintenant</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Service 2: Application Web -->
      <div class="service-card premium neon-border" @click="toggleDetails(1)">
        <div class="card-header-line"></div>
        <div class="card-header">
          <div class="service-icon">⚡</div>
          <div class="header-info">
            <h3 class="service-title">Application Web Django + Vue.js</h3>
            <div class="service-price">200€ TJM</div>
          </div>
          <button class="expand-btn" :class="{ 'expanded': expandedService === 1 }">
            <span class="expand-icon">▼</span>
          </button>
        </div>
        
        <div class="service-preview">
          <div class="duration-range">
            <span class="duration-label">Durée:</span>
            <span class="duration-value">1-3 mois</span>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Django</span>
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">AWS</span>
            <span class="tech-tag">PostgreSQL</span>
          </div>
        </div>

        <div class="service-details" v-show="expandedService === 1">
          <div class="details-content">
            <h4 class="details-title">Solution complète fullstack</h4>
            <ul class="features-list">
              <li>🔧 Architecture Django REST API</li>
              <li>🎨 Interface Vue.js moderne et réactive</li>
              <li>🔐 Système d'authentification sécurisé</li>
              <li>🗄️ Base de données PostgreSQL</li>
              <li>☁️ Déploiement sur AWS (EC2, RDS, S3)</li>
              <li>🔒 Configuration HTTPS et sécurité</li>
              <li>🌐 Gestion nom de domaine et DNS</li>
              <li>📊 Interface d'administration</li>
              <li>📄 API REST documentée</li>
              <li>🧪 Tests automatisés</li>
            </ul>
            
            <div class="pricing-breakdown">
              <h5 class="breakdown-title">Estimation budgétaire</h5>
              <div class="pricing-table">
                <div class="pricing-row">
                  <span class="pricing-duration">1 mois (MVP)</span>
                  <span class="pricing-amount">~4000€</span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-duration">2 mois (Application complète)</span>
                  <span class="pricing-amount">~8000€</span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-duration">3 mois (Solution enterprise)</span>
                  <span class="pricing-amount">~12000€</span>
                </div>
              </div>
              <p class="pricing-note">
                * Coûts AWS à la charge du client (~50-200€/mois selon usage)
              </p>
            </div>
            
            <div class="cta-section">
              <a 
                :href="getWebAppMailto()"
                class="contact-btn secondary"
              >
                <span class="btn-icon">🚀</span>
                <span class="btn-text">Demander un devis</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Service 3: Missions IA & Automatisation -->
      <div class="service-card specialist neon-border" @click="toggleDetails(2)">
        <div class="card-header-line"></div>
        <div class="card-header">
          <div class="service-icon">🤖</div>
          <div class="header-info">
            <h3 class="service-title">IA & Automatisation</h3>
            <div class="service-price">Sur devis</div>
          </div>
          <button class="expand-btn" :class="{ 'expanded': expandedService === 2 }">
            <span class="expand-icon">▼</span>
          </button>
        </div>
        
        <div class="service-preview">
          <div class="tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">ML/AI</span>
            <span class="tech-tag">Web Scraping</span>
            <span class="tech-tag">Automation</span>
          </div>
        </div>

        <div class="service-details" v-show="expandedService === 2">
          <div class="details-content">
            <h4 class="details-title">Solutions d'intelligence artificielle</h4>
            
            <div class="service-categories">
              <div class="category-item">
                <h5 class="category-title">🔍 Web Scraping & Data Mining</h5>
                <ul class="category-features">
                  <li>Extraction de données automatisée</li>
                  <li>Surveillance de prix et concurrence</li>
                  <li>Collecte d'informations publiques</li>
                </ul>
                <div class="category-price">À partir de 150€</div>
              </div>
              
              <div class="category-item">
                <h5 class="category-title">🧠 Machine Learning</h5>
                <ul class="category-features">
                  <li>Modèles de prédiction personnalisés</li>
                  <li>Classification et clustering</li>
                  <li>Analyse de sentiment</li>
                </ul>
                <div class="category-price">À partir de 300€</div>
              </div>
              
              <div class="category-item">
                <h5 class="category-title">👁️ Vision par ordinateur</h5>
                <ul class="category-features">
                  <li>Détection et reconnaissance d'objets</li>
                  <li>Analyse d'images et vidéos</li>
                  <li>OCR et traitement de documents</li>
                </ul>
                <div class="category-price">À partir de 400€</div>
              </div>
              
              <div class="category-item">
                <h5 class="category-title">⚙️ Automatisation de processus</h5>
                <ul class="category-features">
                  <li>Scripts d'automatisation</li>
                  <li>Intégration d'APIs</li>
                  <li>Workflows personnalisés</li>
                </ul>
                <div class="category-price">À partir de 100€</div>
              </div>
            </div>
            
            <div class="consultation-offer">
              <h5 class="consultation-title">💡 Consultation gratuite</h5>
              <p class="consultation-text">
                Première consultation de 30 minutes offerte pour évaluer la faisabilité 
                de votre projet et estimer le budget nécessaire.
              </p>
            </div>
            
            <div class="cta-section">
              <a 
                :href="getIAMailto()"
                class="contact-btn specialist"
              >
                <span class="btn-icon">🎯</span>
                <span class="btn-text">Consultation gratuite</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section informations complémentaires -->
    <div class="additional-info animated-entry" style="animation-delay: 0.3s;">
      <div class="info-grid">
        <div class="info-card neon-border">
          <div class="card-header-line"></div>
          <div class="info-icon">⏱️</div>
          <h4 class="info-title">Disponibilité</h4>
          <p class="info-text">
            Actuellement en Master 2 IA avec un emploi du temps allégé. 
            Disponible pour des missions de stage ou freelance.
          </p>
        </div>
        
        <div class="info-card neon-border">
          <div class="card-header-line"></div>
          <div class="info-icon">🎓</div>
          <h4 class="info-title">Recherche de stage</h4>
          <p class="info-text">
            À la recherche d'un stage de fin d'études (5-6 mois) 
            à partir de mars 2026 en IA ou développement.
          </p>
        </div>
        
        <div class="info-card neon-border">
          <div class="card-header-line"></div>
          <div class="info-icon">🤝</div>
          <h4 class="info-title">Approche collaborative</h4>
          <p class="info-text">
            Méthodologie agile, communication régulière, 
            et accompagnement technique tout au long du projet.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      expandedService: null
    };
  },
  methods: {
    toggleDetails(index) {
      this.expandedService = this.expandedService === index ? null : index;
    },
    
    getVitrineMailto() {
      const subject = 'Commande Site Vitrine Vue.js';
      const body = `Bonjour Amine,

Je souhaite commander un site vitrine Vue.js pour mon entreprise.

Informations sur mon projet:
- Nom de l'entreprise: 
- Type d'activité: 
- Nombre de pages souhaitées: 
- Fonctionnalités spéciales: 

Merci de me recontacter pour discuter des détails.

Cordialement`;
      
      return `mailto:amineitji@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    
    getWebAppMailto() {
      const subject = 'Projet Application Web Django + Vue.js';
      const body = `Bonjour Amine,

Je souhaite développer une application web sur mesure.

Description de mon projet:
- Objectif de l'application: 
- Fonctionnalités principales: 
- Nombre d'utilisateurs attendus: 
- Budget approximatif: 
- Délai souhaité: 

Je serais intéressé par un appel pour discuter des détails techniques.

Cordialement`;
      
      return `mailto:amineitji@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    
    getIAMailto() {
      const subject = 'Mission IA et Automatisation';
      const body = `Bonjour Amine,

J'ai un projet nécessitant de l'IA ou de l'automatisation.

Description de mon besoin:
- Type de mission: 
- Objectif: 
- Données disponibles: 
- Budget approximatif: 
- Délai souhaité: 

Je souhaiterais planifier une consultation pour évaluer la faisabilité.

Cordialement`;
      
      return `mailto:amineitji@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }
};
</script>

<style scoped>
/* Variables harmonisées avec HomePage */
:root {
  --primary-blue: #2563eb;
  --accent-cyan: #06b6d4;
  --success-green: #10b981;
  --warning-amber: #f59e0b;
  --premium-purple: #7c3aed;
  --dark-bg: #030712;
  --card-bg: #111827;
  --border-color: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --gradient-primary: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  --gradient-premium: linear-gradient(135deg, var(--premium-purple), var(--primary-blue));
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Styles */
.services-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
}

/* Particles Background - identique à HomePage */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="none"/><circle cx="10%" cy="20%" r="1.5" fill="%2342b883" opacity="0.7"/><circle cx="15%" cy="25%" r="0.8" fill="%2342b883" opacity="0.8"/><circle cx="20%" cy="15%" r="1.2" fill="%2300d8ff" opacity="0.7"/><circle cx="25%" cy="10%" r="0.5" fill="%2342b883" opacity="0.8"/></svg>');
  animation: moveParticles 150s linear infinite;
}

@keyframes moveParticles {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(3, 7, 18, 0.5) 0%, rgba(3, 7, 18, 0.95) 100%);
  z-index: 1;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-entry {
  animation: fadeInUp 0.8s ease forwards;
}

/* Grille des services */
.services-grid {
  display: grid;
  gap: 32px;
  margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

/* Cartes de service */
.service-card {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  padding: 40px;
}

.neon-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--primary-blue), var(--accent-cyan), var(--success-green), var(--primary-blue));
  background-size: 400% 400%;
  z-index: -1;
  border-radius: 26px;
  animation: glowingBorder 8s ease infinite;
  opacity: 0.8;
}

@keyframes glowingBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.card-header-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--gradient-primary);
  opacity: 0.8;
}

.service-card:hover {
  border-color: var(--primary-blue);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}

.service-card.featured {
  border-color: var(--success-green);
}

.service-card.featured:hover {
  border-color: var(--success-green);
  box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.2);
}

.service-card.premium {
  border-color: var(--premium-purple);
}

.service-card.premium:hover {
  border-color: var(--premium-purple);
  box-shadow: 0 20px 25px -5px rgba(124, 58, 237, 0.2);
}

.service-card.specialist {
  border-color: var(--warning-amber);
}

.service-card.specialist:hover {
  border-color: var(--warning-amber);
  box-shadow: 0 20px 25px -5px rgba(245, 158, 11, 0.2);
}

/* Header de carte */
.card-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
}

.service-icon {
  font-size: 2rem;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.1);
}

.service-card.featured .service-icon {
  background: rgba(16, 185, 129, 0.1);
}

.service-card.premium .service-icon {
  background: rgba(124, 58, 237, 0.1);
}

.service-card.specialist .service-icon {
  background: rgba(245, 158, 11, 0.1);
}

.header-info {
  flex: 1;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.service-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-cyan);
  font-family: monospace;
}

.expand-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  margin-left: 16px;
}

.expand-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.expand-icon {
  transition: transform 0.3s ease;
  font-size: 0.8rem;
}

.expand-btn.expanded .expand-icon {
  transform: rotate(180deg);
}

/* Prévisualisation du service */
.service-preview {
  margin-bottom: 20px;
}

.duration-range {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.duration-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.duration-value {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

/* Détails du service */
.service-details {
  border-top: 1px solid var(--border-color);
  margin-top: 20px;
  padding-top: 24px;
}

.details-content {
  /* padding supprimé car déjà dans service-card */
}

.details-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
}

.features-list li {
  padding: 6px 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.delivery-info {
  background: rgba(3, 7, 18, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
}

.delivery-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.delivery-item:last-child {
  margin-bottom: 0;
}

.delivery-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.delivery-value {
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 600;
}

/* Breakdown des prix */
.pricing-breakdown {
  background: rgba(3, 7, 18, 0.5);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.breakdown-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pricing-table {
  margin-bottom: 12px;
}

.pricing-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.pricing-row:last-child {
  border-bottom: none;
}

.pricing-duration {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.pricing-amount {
  font-size: 0.875rem;
  color: var(--accent-cyan);
  font-weight: 600;
  font-family: monospace;
}

.pricing-note {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-style: italic;
  margin: 0;
}

/* Catégories de services IA */
.service-categories {
  display: grid;
  gap: 16px;
  margin: 20px 0;
}

.category-item {
  background: rgba(3, 7, 18, 0.3);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  transition: var(--transition);
}

.category-item:hover {
  border-color: var(--warning-amber);
  background: rgba(245, 158, 11, 0.05);
}

.category-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.category-features {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
}

.category-features li {
  font-size: 0.8rem;
  color: var(--text-secondary);
  padding: 2px 0;
  padding-left: 16px;
  position: relative;
}

.category-features li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--warning-amber);
}

.category-price {
  font-size: 0.8rem;
  color: var(--warning-amber);
  font-weight: 600;
  font-family: monospace;
}

/* Offre de consultation */
.consultation-offer {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
}

.consultation-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--success-green);
  margin-bottom: 8px;
}

.consultation-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

/* Boutons CTA */
.cta-section {
  margin-top: 24px;
  text-align: center;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  border: 1px solid;
  z-index: 1;
}

.contact-btn:hover {
  transform: translateY(-3px);
}

.contact-btn.primary {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

.contact-btn.primary:hover {
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
}

.contact-btn.secondary {
  background: var(--gradient-premium);
  color: white;
  border-color: transparent;
}

.contact-btn.secondary:hover {
  box-shadow: 0 8px 16px rgba(124, 58, 237, 0.3);
}

.contact-btn.specialist {
  background: linear-gradient(135deg, var(--warning-amber), #f97316);
  color: white;
  border-color: transparent;
}

.contact-btn.specialist:hover {
  box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);
}

/* Informations additionnelles */
.additional-info {
  margin-top: 60px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.info-card {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  transition: var(--transition);
  backdrop-filter: blur(10px);
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.info-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
}

.info-icon {
  font-size: 2rem;
  margin-bottom: 16px;
  display: block;
}

.info-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.info-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* Blur effects - identiques à HomePage */
.blur-effect {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: -1;
  opacity: 0.2;
}

.blur-effect.green {
  background: var(--success-green);
  animation: floatAnimation 8s ease-in-out infinite;
}

.blur-effect.purple {
  background: var(--primary-blue);
  animation: floatAnimation 10s ease-in-out infinite reverse;
}

.blur-effect.cyan {
  background: var(--accent-cyan);
  animation: floatAnimation 12s ease-in-out infinite;
}

@keyframes floatAnimation {
  0% { transform: translate(0, 0); }
  50% { transform: translate(30px, 20px); }
  100% { transform: translate(0, 0); }
}

/* Responsive */
@media (max-width: 768px) {
  .services-container {
    padding: 16px;
  }
  
  .service-card {
    padding: 20px;
  }
  
  .card-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .service-icon {
    align-self: center;
  }
  
  .expand-btn {
    align-self: center;
    margin-left: 0;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .delivery-item,
  .pricing-row {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .service-card {
    padding: 16px;
  }
}
</style>