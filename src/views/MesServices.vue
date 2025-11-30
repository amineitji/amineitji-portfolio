<template>
  <div class="services-container">
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>

    <div class="services-header animated-entry">
      <h1 class="main-title">
        <span class="title-icon">🛠️</span>
        Mes Services & Tarifs
      </h1>
      <p class="main-subtitle">
        Des solutions web professionnelles adaptées à votre budget.<br/>
        <strong>Développement sur mesure • Qualité Freelance • Suivi personnalisé</strong>
      </p>
    </div>

    <div class="templates-section animated-entry" style="animation-delay: 0.2s;">
      <h2 class="section-title">
        <span class="section-icon">🌐</span>
        Création de Sites Web
      </h2>
      
      <div class="templates-grid">
        
        <div class="template-card basic-theme" @click="openPreview('basic')">
          <div class="card-glow basic-glow"></div>
          
          <div class="template-header">
            <div class="template-level">
              <span class="level-badge basic-badge">STARTER</span>
            </div>
            <h2 class="template-name">Pack Présence</h2>
            <div class="template-price">600€</div>
            <p class="template-tagline">Idéal pour démarrer</p>
          </div>

          <div class="preview-mockup">
             <div class="browser-chrome"><div class="chrome-url">votre-site.fr</div></div>
             <div style="padding:20px; text-align:center; color:#888;">Aperçu du site vitrine</div>
          </div>

          <div class="template-features">
            <div class="feature-item"><span class="feature-icon">✓</span> Site One-Page ou jusqu'à 3 pages</div>
            <div class="feature-item"><span class="feature-icon">✓</span> Design Responsive (Mobile/PC)</div>
            <div class="feature-item"><span class="feature-icon">✓</span> Formulaire de contact + Maps</div>
          </div>

          <div class="template-meta">
            <div class="meta-item"><span class="meta-icon">⏱️</span> 1 semaine</div>
          </div>

          <button class="template-cta basic-cta">
            <span class="cta-text">Voir les détails</span>
            <span class="cta-arrow">→</span>
          </button>
        </div>

        <div class="template-card avance-theme" @click="openPreview('avance')">
          <div class="card-glow avance-glow"></div>
          
          <div class="template-header">
            <div class="template-level">
              <span class="level-badge avance-badge">BUSINESS</span>
            </div>
            <h2 class="template-name">Pack Pro</h2>
            <div class="template-price">950€</div>
            <p class="template-tagline">Pour les entreprises exigeantes</p>
          </div>

          <div class="preview-mockup">
             <div class="browser-chrome"><div class="chrome-url">votre-entreprise.com</div></div>
             <div style="padding:20px; text-align:center; color:#888;">Aperçu du site complet</div>
          </div>

          <div class="template-features">
            <div class="feature-item"><span class="feature-icon">✓</span> Jusqu'à 7 pages personnalisées</div>
            <div class="feature-item"><span class="feature-icon">✓</span> Animations & Design Premium</div>
            <div class="feature-item"><span class="feature-icon">✓</span> Optimisation SEO Avancée</div>
          </div>

          <div class="template-meta">
            <div class="meta-item"><span class="meta-icon">⏱️</span> 2 semaines</div>
          </div>

          <button class="template-cta avance-cta">
            <span class="cta-text">Voir les détails</span>
            <span class="cta-arrow">→</span>
          </button>
        </div>

        <div class="template-card premium-theme featured" @click="openPreview('premium')">
          <div class="popular-ribbon">SUR MESURE</div>
          <div class="card-glow premium-glow"></div>
          
          <div class="template-header">
            <div class="template-level">
              <span class="level-badge premium-badge">EXCELLENCE</span>
            </div>
            <h2 class="template-name">Pack Expert</h2>
            <div class="template-price">Sur Devis</div>
            <p class="template-tagline">Applications & Besoins complexes</p>
          </div>

          <div class="preview-mockup">
             <div class="browser-chrome"><div class="chrome-url">app.votre-startup.io</div></div>
             <div style="padding:20px; text-align:center; color:#888;">Aperçu application web</div>
          </div>

          <div class="template-features">
            <div class="feature-item"><span class="feature-icon">✓</span> Développement Web App (SaaS)</div>
            <div class="feature-item"><span class="feature-icon">✓</span> E-commerce / Espace membre</div>
            <div class="feature-item"><span class="feature-icon">✓</span> Intégration IA / API</div>
          </div>

          <div class="template-meta">
            <div class="meta-item"><span class="meta-icon">⏱️</span> 3+ semaines</div>
            <div class="meta-item"><span class="meta-icon">💰</span> Dès 1500€</div>
          </div>

          <button class="template-cta premium-cta">
            <span class="cta-text">Demander un devis</span>
            <span class="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </div>

    <div class="webapp-section animated-entry" style="animation-delay: 0.4s;">
      <h2 class="section-title">
        <span class="section-icon">💼</span>
        Missions Freelance & TJM
      </h2>
      
      <div class="webapp-card">
        <div class="webapp-header">
          <div class="webapp-badge">Expertise Technique</div>
          <h3 class="webapp-title">Développement Full-Stack & Data</h3>
          <div class="webapp-price">350€ / Jour</div>
          <p style="color:var(--text-secondary); margin-top:5px; font-size:0.9rem;">Tarif Journalier Moyen (TJM) • Facturation à la mission possible</p>
        </div>

        <div class="webapp-content">
          <div class="webapp-features">
            <div class="webapp-col">
              <h4>Développement Back-end</h4>
              <ul>
                <li>API REST Django / Python</li>
                <li>Base de données PostgreSQL</li>
                <li>Architecture Cloud (AWS)</li>
              </ul>
            </div>
            <div class="webapp-col">
              <h4>Développement Front-end</h4>
              <ul>
                <li>Vue.js 3 / JavaScript</li>
                <li>Interfaces Réactives</li>
                <li>Intégration Maquettes</li>
              </ul>
            </div>
            <div class="webapp-col">
              <h4>Intelligence Artificielle</h4>
              <ul>
                <li>Scripts d'analyse de données</li>
                <li>Computer Vision (YOLO, OpenCV)</li>
                <li>Intégration de modèles ML</li>
              </ul>
            </div>
          </div>
          
          <div class="webapp-pricing">
            <div class="pricing-item">
              <span class="pricing-duration">MVP (Prototype rapide)</span>
              <span class="pricing-amount">Sur devis (~2500€)</span>
            </div>
            <div class="pricing-item">
              <span class="pricing-duration">Application Métier Complète</span>
              <span class="pricing-amount">Sur devis (~4500€+)</span>
            </div>
          </div>
          
          <a :href="getWebAppMailto()" class="webapp-cta">
            <span class="btn-icon">🤝</span>
            <span class="btn-text">Discuter de votre projet</span>
          </a>
        </div>
      </div>
    </div>

    <div v-if="selectedTemplate" class="modal-backdrop" @click="closePreview"></div>
    <div v-if="selectedTemplate" class="template-modal">
      <div class="modal-wrapper">
        <button class="modal-close" @click="closePreview"><span>✕</span></button>
        
        <div class="modal-content">
          <div class="modal-header" :class="`${selectedTemplate}-theme`">
            <h2 class="modal-title">{{ getTemplateData().title }}</h2>
            <div class="modal-price">{{ getTemplateData().price }}</div>
          </div>
          
          <div class="modal-body">
            <div class="modal-section">
              <h3>📋 Ce qui est inclus</h3>
              <ul class="modal-features">
                <li v-for="(feature, idx) in getTemplateData().features" :key="idx">
                  <span class="check">✓</span> {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="modal-cta">
              <a :href="getVitrineMailto()" class="modal-btn" :class="`${selectedTemplate}-btn`">
                <span class="btn-icon">📩</span>
                <span class="btn-text">Commander ce pack</span>
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
  name: 'ServicesPage',
  data() {
    return {
      selectedTemplate: null,
      templatesData: {
        basic: {
          title: 'Pack Présence - Starter',
          price: '600€',
          features: [
            'Site Vitrine jusqu\'à 3 pages (Accueil, Services, Contact)',
            'Design moderne et responsive (Mobile Friendly)',
            'Formulaire de contact fonctionnel',
            'Intégration Google Maps et Réseaux Sociaux',
            'Hébergement et nom de domaine configurés',
            'Optimisation SEO de base'
          ]
        },
        avance: {
          title: 'Pack Pro - Business',
          price: '950€',
          features: [
            'Tout du Pack Présence + jusqu\'à 7 pages',
            'Design Premium avec animations fluides',
            'Galerie photos/projets dynamique',
            'Blog ou section actualités simple',
            'Optimisation SEO avancée et performances',
            'Maintenance technique offerte 1 mois'
          ]
        },
        premium: {
          title: 'Pack Expert - Sur Mesure',
          price: 'Sur Devis (dès 1500€)',
          features: [
            'Application Web complète ou Site complexe',
            'Fonctionnalités sur mesure (Espace membre, Réservation...)',
            'Back-office d\'administration',
            'Intégration API ou Intelligence Artificielle',
            'Architecture évolutive et sécurisée',
            'Accompagnement et formation complets'
          ]
        }
      }
    };
  },
  methods: {
    openPreview(template) {
      this.selectedTemplate = template;
      document.body.style.overflow = 'hidden';
    },
    closePreview() {
      this.selectedTemplate = null;
      document.body.style.overflow = '';
    },
    getTemplateData() {
      return this.templatesData[this.selectedTemplate];
    },
    getVitrineMailto() {
      const templateName = this.selectedTemplate ? this.getTemplateData().title : '';
      return `mailto:amineitji@gmail.com?subject=Devis - ${templateName}&body=Bonjour Amine, je suis intéressé par le ${templateName}...`;
    },
    getWebAppMailto() {
      return `mailto:amineitji@gmail.com?subject=Projet Freelance&body=Bonjour Amine, j'ai un projet de développement...`;
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
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
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Styles */
.services-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 40px 20px;
}

.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
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

/* Header */
.services-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.title-icon {
  font-size: 2.5rem;
}

.main-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.section-icon {
  font-size: 2rem;
}

/* Templates Section */
.templates-section {
  max-width: 1400px;
  margin: 0 auto 100px;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
}

/* Template Card */
.template-card {
  background: rgba(17, 24, 39, 0.9);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  cursor: pointer;
  transition: var(--transition);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.template-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.template-card.featured {
  border-color: var(--premium-purple);
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
  border-radius: 24px;
}

.template-card:hover .card-glow {
  opacity: 0.1;
}

.basic-glow {
  background: radial-gradient(circle at 50% 50%, var(--success-green), transparent 70%);
}

.avance-glow {
  background: radial-gradient(circle at 50% 50%, var(--primary-blue), transparent 70%);
}

.premium-glow {
  background: radial-gradient(circle at 50% 50%, var(--premium-purple), transparent 70%);
}

.popular-ribbon {
  position: absolute;
  top: 20px;
  right: -30px;
  background: linear-gradient(135deg, var(--premium-purple), var(--warning-amber));
  color: white;
  padding: 4px 40px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transform: rotate(45deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

/* Template Header */
.template-header {
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
  text-align: center;
}

.template-level {
  margin-bottom: 12px;
}

.level-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.basic-badge {
  background: rgba(16, 185, 129, 0.2);
  color: var(--success-green);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.avance-badge {
  background: rgba(37, 99, 235, 0.2);
  color: var(--primary-blue);
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.premium-badge {
  background: rgba(124, 58, 237, 0.2);
  color: var(--premium-purple);
  border: 1px solid rgba(124, 58, 237, 0.3);
}

.template-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.template-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-cyan);
  margin-bottom: 8px;
  font-family: monospace;
}

.template-tagline {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

/* Preview Mockup */
.preview-mockup {
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
  background: #1a1d2a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.browser-chrome {
  background: #0a0b13;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.chrome-dots {
  display: flex;
  gap: 6px;
}

.chrome-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-muted);
}

.chrome-dots span:nth-child(1) { background: #ff5f56; }
.chrome-dots span:nth-child(2) { background: #ffbd2e; }
.chrome-dots span:nth-child(3) { background: #27c93f; }

.chrome-url {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: center;
}

.theme-toggle {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 0.9rem;
}

/* Pages Container - Horizontal Scroll */
.pages-container {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.pages-scroll {
  display: flex;
  gap: 0;
  height: 100%;
  animation: slidePages 20s ease-in-out infinite;
}

@keyframes slidePages {
  0%, 15% { transform: translateX(0); }
  20%, 35% { transform: translateX(-100%); }
  40%, 55% { transform: translateX(-200%); }
  60%, 75% { transform: translateX(-300%); }
  80%, 95% { transform: translateX(-400%); }
  100% { transform: translateX(0); }
}

.template-card:hover .pages-scroll {
  animation-play-state: paused;
}

/* Page Slide */
.page-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.page-label {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(37, 99, 235, 0.9);
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.page-label.dark {
  background: rgba(6, 182, 212, 0.9);
}

.page-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}

/* Light & Dark Themes */
.light-theme {
  background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
}

.light-theme.premium {
  background: linear-gradient(135deg, #dbeafe 0%, #fef3c7 100%);
}

.dark-theme {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

/* Page Dots */
.page-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: var(--transition);
}

.dot.active {
  background: rgba(255, 255, 255, 0.9);
  width: 24px;
  border-radius: 4px;
}

/* Hero Mini */
.hero-mini {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 20px;
  position: relative;
  z-index: 2;
}

.hero-mini.premium {
  position: relative;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(245, 158, 11, 0.1));
  z-index: 1;
}

.hero-logo {
  width: 40px;
  height: 40px;
  background: rgba(37, 99, 235, 0.3);
  border-radius: 8px;
  border: 2px solid rgba(37, 99, 235, 0.5);
}

.hero-title {
  width: 60%;
  height: 24px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 4px;
}

.hero-subtitle {
  width: 70%;
  height: 14px;
  background: rgba(37, 99, 235, 0.15);
  border-radius: 4px;
}

.hero-cta {
  width: 120px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  border-radius: 8px;
  margin-top: 8px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.dark-theme .hero-logo {
  background: rgba(6, 182, 212, 0.3);
  border-color: rgba(6, 182, 212, 0.5);
}

.dark-theme .hero-title {
  background: rgba(249, 250, 251, 0.2);
}

.dark-theme .hero-subtitle {
  background: rgba(249, 250, 251, 0.15);
}

/* About Content */
.about-content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.text-bar {
  height: 8px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 4px;
}

.text-bar.short {
  width: 70%;
}

.about-img {
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 8px;
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.dark-theme .text-bar {
  background: rgba(249, 250, 251, 0.15);
}

.dark-theme .about-img {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2));
  border-color: rgba(6, 182, 212, 0.3);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
}

.service-item {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(37, 99, 235, 0.2);
  transition: var(--transition);
}

.service-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 32px;
  height: 32px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(37, 99, 235, 0.4);
}

.service-title {
  width: 80%;
  height: 10px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 4px;
}

.service-desc {
  width: 100%;
  height: 6px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 4px;
}

.dark-theme .service-item {
  background: rgba(31, 41, 55, 0.8);
  border-color: rgba(6, 182, 212, 0.3);
}

.dark-theme .service-icon {
  background: rgba(6, 182, 212, 0.2);
  border-color: rgba(6, 182, 212, 0.4);
}

.dark-theme .service-title {
  background: rgba(249, 250, 251, 0.2);
}

.dark-theme .service-desc {
  background: rgba(249, 250, 251, 0.1);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
}

.gallery-item {
  height: 70px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 6px;
  border: 1px solid rgba(37, 99, 235, 0.3);
  transition: var(--transition);
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
  height: 150px;
}

.gallery-item:hover {
  transform: scale(1.05);
}

/* Map Container */
.map-container {
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.3);
  position: relative;
  overflow: hidden;
}

.map-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #ef4444;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg) translate(-50%, -50%);
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Contact Form */
.contact-form {
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-input {
  height: 36px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 6px;
}

.form-input.large {
  height: 70px;
}

.form-submit {
  height: 40px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  border-radius: 6px;
  margin-top: 4px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.dark-theme .form-input {
  background: rgba(31, 41, 55, 0.9);
  border-color: rgba(6, 182, 212, 0.3);
}

/* Modules Grid (Premium) */
.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
}

.module-item {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(124, 58, 237, 0.2);
  transition: var(--transition);
}

.module-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
}

.module-icon {
  width: 28px;
  height: 28px;
  background: rgba(124, 58, 237, 0.2);
  border-radius: 6px;
  border: 2px solid rgba(124, 58, 237, 0.4);
}

.module-title {
  width: 70%;
  height: 8px;
  background: rgba(124, 58, 237, 0.2);
  border-radius: 4px;
}

/* Team Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

.team-member {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.member-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  border: 2px solid rgba(37, 99, 235, 0.4);
}

.member-name {
  width: 70%;
  height: 10px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 4px;
}

/* Animations */
.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2.5s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Template Features */
.template-features {
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.feature-icon {
  color: var(--success-green);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.feature-text {
  flex: 1;
}

/* Template Meta */
.template-meta {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(3, 7, 18, 0.5);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.meta-icon {
  font-size: 1.2rem;
}

/* Template CTA */
.template-cta {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  z-index: 1;
}

.basic-cta {
  background: linear-gradient(135deg, var(--success-green), var(--accent-cyan));
  color: white;
}

.avance-cta {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
}

.premium-cta {
  background: linear-gradient(135deg, var(--premium-purple), var(--warning-amber));
  color: white;
}

.template-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.template-cta:hover .cta-arrow {
  transform: translateX(4px);
}

/* WebApp Section */
.webapp-section {
  max-width: 1200px;
  margin: 0 auto 100px;
}

.webapp-card {
  background: rgba(17, 24, 39, 0.9);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.webapp-header {
  padding: 40px 40px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1));
  border-bottom: 1px solid var(--border-color);
}

.webapp-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(37, 99, 235, 0.2);
  color: var(--primary-blue);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.webapp-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-weight: 700;
}

.webapp-price {
  font-size: 1.8rem;
  color: var(--accent-cyan);
  font-weight: 700;
  font-family: monospace;
}

/* WebApp Preview */
.webapp-preview {
  margin: 0;
}

.webapp-mockup {
  height: 300px;
  background: #0a0b13;
  display: flex;
}

.webapp-sidebar {
  width: 80px;
  background: #0f172a;
  border-right: 1px solid var(--border-color);
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-item {
  height: 40px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.webapp-main {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dashboard-header {
  height: 40px;
  background: rgba(249, 250, 251, 0.1);
  border-radius: 8px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.stat-card {
  height: 80px;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 12px;
}

.dashboard-chart {
  flex: 1;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
}

/* WebApp Content */
.webapp-content {
  padding: 40px;
}

.webapp-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.webapp-col h4 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.webapp-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.webapp-col li {
  padding: 6px 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.webapp-col li::before {
  content: '▸';
  color: var(--accent-cyan);
  margin-right: 8px;
  font-weight: bold;
}

.webapp-pricing {
  background: rgba(3, 7, 18, 0.5);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  border: 1px solid var(--border-color);
}

.pricing-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}

.pricing-item:last-child {
  border-bottom: none;
}

.pricing-duration {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.pricing-amount {
  color: var(--accent-cyan);
  font-weight: 700;
  font-size: 1.1rem;
  font-family: monospace;
}

.webapp-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: var(--transition);
}

.webapp-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.4);
}

/* Portfolio Section */
.portfolio-section {
  max-width: 1200px;
  margin: 0 auto 80px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.portfolio-item {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.portfolio-item:hover {
  transform: translateY(-4px);
  border-color: var(--primary-blue);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.portfolio-content {
  position: relative;
  z-index: 2;
}

.portfolio-title {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-weight: 600;
}

.portfolio-type {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.portfolio-tag {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.portfolio-link {
  position: absolute;
  bottom: 32px;
  right: 32px;
  color: var(--accent-cyan);
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-link {
  opacity: 1;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(3, 7, 18, 0.95);
  backdrop-filter: blur(10px);
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.template-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001;
  padding: 20px;
}

.modal-wrapper {
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  background: rgba(17, 24, 39, 0.98);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  position: relative;
  animation: slideUp 0.4s ease;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 10;
}

.modal-close:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  color: #ef4444;
  transform: rotate(90deg);
}

.modal-content {
  overflow-y: auto;
  max-height: 90vh;
}

.modal-header {
  padding: 40px 40px 20px;
  border-bottom: 1px solid var(--border-color);
}

.modal-header.basic-theme {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
}

.modal-header.avance-theme {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1));
}

.modal-header.premium-theme {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(245, 158, 11, 0.1));
}

.modal-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-weight: 700;
}

.modal-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-cyan);
  font-family: monospace;
}

.modal-body {
  padding: 40px;
}

.modal-section {
  margin-bottom: 32px;
}

.modal-section h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 600;
}

.modal-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.modal-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.check {
  color: var(--success-green);
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-badge {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.modal-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.modal-info-item {
  background: rgba(3, 7, 18, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.info-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.info-value {
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: 600;
}

.modal-cta {
  text-align: center;
}

.modal-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: var(--transition);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.basic-btn {
  background: linear-gradient(135deg, var(--success-green), var(--accent-cyan));
}

.avance-btn {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
}

.premium-btn {
  background: linear-gradient(135deg, var(--premium-purple), var(--warning-amber));
}

.modal-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 16px;
}

.mini-card {
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border: 1px solid rgba(37, 99, 235, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.mini-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dark-theme .mini-card {
  background: rgba(31, 41, 55, 0.8);
  border-color: rgba(6, 182, 212, 0.3);
}

/* Responsive */
@media (max-width: 1200px) {
  .templates-grid {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
}

@media (max-width: 768px) {
  .services-container {
    padding: 20px 16px;
  }
  
  .main-title {
    font-size: 2rem;
    flex-direction: column;
  }
  
  .main-subtitle {
    font-size: 1rem;
  }
  
  .templates-grid {
    grid-template-columns: 1fr;
  }
  
  .pages-container {
    height: 280px;
  }
  
  .cards-grid,
  .services-grid,
  .modules-grid,
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-item.large {
    grid-column: span 1;
    grid-row: span 1;
    height: 70px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .page-label {
    font-size: 0.7rem;
    padding: 3px 12px;
  }
  
  .webapp-features {
    grid-template-columns: 1fr;
  }
  
  .webapp-header,
  .webapp-content {
    padding: 24px;
  }
  
  .webapp-sidebar {
    width: 60px;
    padding: 16px 8px;
  }
  
  .webapp-main {
    padding: 16px;
  }
  
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
  
  .modal-header {
    padding: 30px 20px 20px;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .modal-grid {
    grid-template-columns: 1fr;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .template-card {
    padding: 24px;
  }
  
  .template-name {
    font-size: 1.5rem;
  }
  
  .template-price {
    font-size: 2rem;
  }
  
  .pages-container {
    height: 250px;
  }
  
  .cards-grid,
  .services-grid,
  .modules-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .page-content {
    padding: 12px;
  }
  
  .hero-mini {
    padding: 24px 12px;
  }
  
  .webapp-title {
    font-size: 1.5rem;
  }
  
  .webapp-price {
    font-size: 1.4rem;
  }
  
  .modal-wrapper {
    border-radius: 16px;
  }
}
</style>