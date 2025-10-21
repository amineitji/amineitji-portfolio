<template>
  <div class="services-container">
    <!-- Effet de particules -->
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>

    <!-- Header Section -->
    <div class="services-header animated-entry">
      <h1 class="main-title">
        <span class="title-icon">🎨</span>
        Mes Services Web
      </h1>
      <p class="main-subtitle">
        Solutions clés en main pour votre présence en ligne<br/>
        <strong>Sites Vitrines • Applications Web • Déploiement professionnel</strong>
      </p>
    </div>

    <!-- Templates Vitrines -->
    <div class="templates-section animated-entry" style="animation-delay: 0.2s;">
      <h2 class="section-title">
        <span class="section-icon">🌐</span>
        Sites Vitrines Vue.js
      </h2>
      
      <div class="templates-grid">
        
        <!-- Template Basic -->
        <div class="template-card basic-theme" @click="openPreview('basic')">
          <div class="card-glow basic-glow"></div>
          
          <div class="template-header">
            <div class="template-level">
              <span class="level-badge basic-badge">🟩 BASIC</span>
            </div>
            <h2 class="template-name">Essentiel</h2>
            <div class="template-price">200€</div>
            <p class="template-tagline">Rapide et efficace</p>
          </div>

          <div class="preview-mockup">
            <div class="browser-chrome">
              <div class="chrome-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="chrome-url">monsite.fr</div>
              <div class="theme-toggle">
                <span class="theme-icon">☀️</span>
              </div>
            </div>
            
            <div class="pages-container">
              <div class="pages-scroll">
                <div v-for="(page, idx) in ['Accueil', 'À propos', 'Services', 'Contact']" 
                     :key="idx" 
                     class="page-slide light-theme">
                  <div class="page-label">{{ page }}</div>
                  <div class="page-content">
                    <div v-if="idx === 0" class="hero-mini">
                      <div class="hero-logo"></div>
                      <div class="hero-title"></div>
                      <div class="hero-subtitle"></div>
                      <div class="hero-cta"></div>
                    </div>
                    <div v-else-if="idx === 2" class="services-grid">
                      <div v-for="i in 3" :key="i" class="service-item">
                        <div class="service-icon"></div>
                        <div class="service-title"></div>
                        <div class="service-desc"></div>
                      </div>
                    </div>
                    <div v-else-if="idx === 3" class="contact-form">
                      <div class="form-input"></div>
                      <div class="form-input"></div>
                      <div class="form-input large"></div>
                      <div class="form-submit"></div>
                    </div>
                    <div v-else class="about-content">
                      <div class="about-text">
                        <div class="text-bar"></div>
                        <div class="text-bar"></div>
                        <div class="text-bar short"></div>
                      </div>
                      <div class="about-img"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="page-dots">
                <span v-for="i in 4" :key="i" 
                      :class="['dot', { active: i === 1 }]"></span>
              </div>
            </div>
          </div>

          <div class="template-features">
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">4 pages (Accueil, À propos, Services, Contact)</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Configuration JSON simple</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Design responsive & SEO basique</span>
            </div>
          </div>

          <div class="template-meta">
            <div class="meta-item">
              <span class="meta-icon">⏱️</span>
              <span class="meta-text">3-5 jours</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📄</span>
              <span class="meta-text">4 pages</span>
            </div>
          </div>

          <button class="template-cta basic-cta">
            <span class="cta-text">Voir en détail</span>
            <span class="cta-arrow">→</span>
          </button>
        </div>

        <!-- Template Avancé -->
        <div class="template-card avance-theme" @click="openPreview('avance')">
          <div class="card-glow avance-glow"></div>
          
          <div class="template-header">
            <div class="template-level">
              <span class="level-badge avance-badge">🟦 AVANCÉ</span>
            </div>
            <h2 class="template-name">Performance</h2>
            <div class="template-price">350€</div>
            <p class="template-tagline">Élégant et dynamique</p>
          </div>

          <div class="preview-mockup">
            <div class="browser-chrome">
              <div class="chrome-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="chrome-url">monsite.fr</div>
              <div class="theme-toggle">
                <span class="theme-icon">🌙</span>
              </div>
            </div>
            
            <div class="pages-container">
              <div class="pages-scroll">
                <div v-for="(page, idx) in ['Accueil', 'Services', 'Projets', 'Galerie', 'Localisation', 'Contact']" 
                     :key="idx" 
                     class="page-slide dark-theme">
                  <div class="page-label dark">{{ page }}</div>
                  <div class="page-content">
                    <div v-if="idx === 0" class="hero-mini">
                      <div class="hero-logo shimmer"></div>
                      <div class="hero-title shimmer"></div>
                      <div class="hero-cta pulse"></div>
                    </div>
                    <div v-else-if="idx === 3" class="gallery-grid">
                      <div class="gallery-item large"></div>
                      <div v-for="i in 3" :key="i" class="gallery-item"></div>
                    </div>
                    <div v-else-if="idx === 4" class="map-container">
                      <div class="map-marker"></div>
                    </div>
                    <div v-else-if="idx === 5" class="contact-form">
                      <div class="form-input"></div>
                      <div class="form-input"></div>
                      <div class="form-submit"></div>
                    </div>
                    <div v-else class="services-grid">
                      <div v-for="i in 3" :key="i" class="service-item">
                        <div class="service-icon"></div>
                        <div class="service-title"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="page-dots">
                <span v-for="i in 6" :key="i" 
                      :class="['dot', { active: i === 1 }]"></span>
              </div>
            </div>
          </div>

          <div class="template-features">
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Tout du Basic + Galerie & Maps</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Animations & transitions</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Thème personnalisable & SEO avancé</span>
            </div>
          </div>

          <div class="template-meta">
            <div class="meta-item">
              <span class="meta-icon">⏱️</span>
              <span class="meta-text">7-10 jours</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📄</span>
              <span class="meta-text">6+ pages</span>
            </div>
          </div>

          <button class="template-cta avance-cta">
            <span class="cta-text">Voir en détail</span>
            <span class="cta-arrow">→</span>
          </button>
        </div>

        <!-- Template Premium -->
        <div class="template-card premium-theme featured" @click="openPreview('premium')">
          <div class="popular-ribbon">POPULAIRE</div>
          <div class="card-glow premium-glow"></div>
          
          <div class="template-header">
            <div class="template-level">
              <span class="level-badge premium-badge">🟥 PREMIUM</span>
            </div>
            <h2 class="template-name">Excellence</h2>
            <div class="template-price">500€+</div>
            <p class="template-tagline">Complet et modulaire</p>
          </div>

          <div class="preview-mockup">
            <div class="browser-chrome">
              <div class="chrome-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="chrome-url">monsite.fr</div>
              <div class="theme-toggle">
                <span class="theme-icon">☀️</span>
              </div>
            </div>
            
            <div class="pages-container">
              <div class="pages-scroll">
                <div v-for="(page, idx) in ['Accueil', 'Services', 'Équipe', 'Blog', 'FAQ', 'Contact']" 
                     :key="idx" 
                     class="page-slide light-theme premium">
                  <div class="page-label">{{ page }}</div>
                  <div class="page-content">
                    <div v-if="idx === 0" class="hero-mini premium">
                      <div class="hero-gradient"></div>
                      <div class="hero-logo shimmer"></div>
                      <div class="hero-title shimmer"></div>
                      <div class="hero-cta pulse"></div>
                    </div>
                    <div v-else-if="idx === 1" class="modules-grid">
                      <div v-for="i in 6" :key="i" class="module-item">
                        <div class="module-icon"></div>
                        <div class="module-title"></div>
                      </div>
                    </div>
                    <div v-else-if="idx === 2" class="team-grid">
                      <div v-for="i in 3" :key="i" class="team-member">
                        <div class="member-avatar"></div>
                        <div class="member-name"></div>
                      </div>
                    </div>
                    <div v-else class="services-grid">
                      <div v-for="i in 3" :key="i" class="service-item">
                        <div class="service-icon"></div>
                        <div class="service-title"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="page-dots">
                <span v-for="i in 6" :key="i" 
                      :class="['dot', { active: i === 1 }]"></span>
              </div>
            </div>
          </div>

          <div class="template-features">
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Architecture modulaire • 7+ pages activables</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">Blog Markdown • Analytics • SEO complet</span>
            </div>
          </div>

          <div class="template-meta">
            <div class="meta-item">
              <span class="meta-icon">⏱️</span>
              <span class="meta-text">2-3 semaines</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📄</span>
              <span class="meta-text">7+ pages</span>
            </div>
          </div>

          <button class="template-cta premium-cta">
            <span class="cta-text">Voir en détail</span>
            <span class="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </div>

    <!-- WebApp Django + Vue.js -->
    <div class="webapp-section animated-entry" style="animation-delay: 0.4s;">
      <h2 class="section-title">
        <span class="section-icon">🚀</span>
        Application Web Full-Stack
      </h2>
      
      <div class="webapp-card">
        <div class="webapp-header">
          <div class="webapp-badge">Django + Vue.js</div>
          <h3 class="webapp-title">Solutions Web Sur Mesure</h3>
          <div class="webapp-price">150€/jour TJM</div>
        </div>

        <div class="webapp-preview">
          <div class="browser-chrome">
            <div class="chrome-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="chrome-url">votre-app.fr</div>
          </div>
          <div class="webapp-mockup">
            <div class="webapp-sidebar">
              <div class="sidebar-item"></div>
              <div class="sidebar-item"></div>
              <div class="sidebar-item"></div>
              <div class="sidebar-item"></div>
            </div>
            <div class="webapp-main">
              <div class="dashboard-header"></div>
              <div class="dashboard-stats">
                <div class="stat-card"></div>
                <div class="stat-card"></div>
                <div class="stat-card"></div>
              </div>
              <div class="dashboard-chart"></div>
            </div>
          </div>
        </div>

        <div class="webapp-content">
          <div class="webapp-features">
            <div class="webapp-col">
              <h4>Backend</h4>
              <ul>
                <li>API REST Django</li>
                <li>Auth JWT</li>
                <li>PostgreSQL</li>
                <li>Tests auto</li>
              </ul>
            </div>
            <div class="webapp-col">
              <h4>Frontend</h4>
              <ul>
                <li>Vue.js moderne</li>
                <li>Interface réactive</li>
                <li>State management</li>
                <li>PWA possible</li>
              </ul>
            </div>
            <div class="webapp-col">
              <h4>Déploiement</h4>
              <ul>
                <li>AWS (EC2, RDS, S3)</li>
                <li>HTTPS & sécurité</li>
                <li>CI/CD Pipeline</li>
                <li>Gestion DNS</li>
              </ul>
            </div>
          </div>
          
          <div class="webapp-pricing">
            <div class="pricing-item">
              <span class="pricing-duration">MVP (1 mois)</span>
              <span class="pricing-amount">~2000€</span>
            </div>
            <div class="pricing-item">
              <span class="pricing-duration">App complète (2 mois)</span>
              <span class="pricing-amount">~4000€</span>
            </div>
            <div class="pricing-item">
              <span class="pricing-duration">Solution enterprise (3 mois)</span>
              <span class="pricing-amount">~6000€</span>
            </div>
          </div>
          
          <a :href="getWebAppMailto()" class="webapp-cta">
            <span class="btn-icon">📧</span>
            <span class="btn-text">Demander un devis</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Réalisations -->
    <div class="portfolio-section animated-entry" style="animation-delay: 0.6s;">
      <h2 class="section-title">
        <span class="section-icon">💼</span>
        Réalisations
      </h2>
      
      <div class="portfolio-grid">
        <a v-for="(project, index) in portfolioProjects" 
           :key="index" 
           :href="project.url" 
           target="_blank" 
           class="portfolio-item">
          <div class="portfolio-content">
            <h4 class="portfolio-title">{{ project.title }}</h4>
            <p class="portfolio-type">{{ project.type }}</p>
            <div class="portfolio-tags">
              <span v-for="tag in project.tags" :key="tag" class="portfolio-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="portfolio-link">
            <span>Visiter →</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Modal Preview -->
    <div v-if="selectedTemplate" class="modal-backdrop" @click="closePreview"></div>
    <div v-if="selectedTemplate" class="template-modal">
      <div class="modal-wrapper">
        <button class="modal-close" @click="closePreview">
          <span>✕</span>
        </button>
        
        <div class="modal-content">
          <div class="modal-header" :class="`${selectedTemplate}-theme`">
            <h2 class="modal-title">{{ getTemplateData().title }}</h2>
            <div class="modal-price">{{ getTemplateData().price }}</div>
          </div>
          
          <div class="modal-body">
            <div class="modal-section">
              <h3>📋 Fonctionnalités incluses</h3>
              <ul class="modal-features">
                <li v-for="(feature, idx) in getTemplateData().features" :key="idx">
                  <span class="check">✓</span> {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="modal-section">
              <h3>🛠️ Technologies</h3>
              <div class="modal-tech">
                <span v-for="tech in getTemplateData().tech" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="modal-grid">
              <div class="modal-info-item">
                <div class="info-label">⏱️ Délai</div>
                <div class="info-value">{{ getTemplateData().timeline }}</div>
              </div>
              <div class="modal-info-item">
                <div class="info-label">📄 Pages</div>
                <div class="info-value">{{ getTemplateData().pages }}</div>
              </div>
            </div>
            
            <div class="modal-cta">
              <a :href="getVitrineMailto()" class="modal-btn" :class="`${selectedTemplate}-btn`">
                <span class="btn-icon">📧</span>
                <span class="btn-text">Commander ce template</span>
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
  name: 'ServicesTemplatesMixed',
  data() {
    return {
      selectedTemplate: null,
      portfolioProjects: [
        {
          title: 'DIAGERP',
          type: 'Django + Vue.js',
          tags: ['Django', 'Vue.js', 'Stripe', 'AWS'],
          url: 'https://diagerp.fr/'
        },
        {
          title: 'DiagImmoMarches',
          type: 'Django + Vue.js',
          tags: ['Django', 'PostgreSQL', 'REST API'],
          url: 'https://diagimmomarches.fr/'
        },
        {
          title: 'CC2 Dynamique',
          type: 'Site Vitrine Vue.js',
          tags: ['Vue.js', 'Vite', 'Render'],
          url: 'https://cc2-dynamique-des-connaissances.onrender.com/'
        }
      ],
      templatesData: {
        basic: {
          title: 'Template Basic - Essentiel',
          price: '200€',
          timeline: '3-5 jours',
          pages: '4',
          features: [
            'Structure 4 pages (Accueil, À propos, Services, Contact)',
            'Configuration via fichier content.json unique',
            'Formulaire de contact Formspree.io intégré',
            'SEO basique (meta title + description)',
            'Design 100% responsive',
            'Déploiement gratuit sur Render ou Vercel',
            'Documentation complète incluse'
          ],
          tech: ['Vue 3', 'Vite', 'Bootstrap 5', 'Formspree']
        },
        avance: {
          title: 'Template Avancé - Performance',
          price: '350€',
          timeline: '7-10 jours',
          pages: '7',
          features: [
            'Toutes les fonctionnalités du Basic',
            'Pages Projets & Galerie dynamiques',
            'Google Map intégrée via iframe',
            'Animations Bootstrap et transitions CSS',
            'Carrousel et galerie photo interactive',
            'Personnalisation des couleurs via theme.json',
            'SEO avancé avec meta tags dynamiques',
            'Documentation détaillée'
          ],
          tech: ['Vue 3', 'Vite', 'Bootstrap 5', 'Google Maps', 'Animations CSS']
        },
        premium: {
          title: 'Template Premium - Excellence',
          price: '500€+',
          timeline: '2-3 semaines',
          pages: '7+',
          features: [
            'Architecture modulaire avec config.json',
            '7+ pages activables à la demande',
            'Blog statique avec fichiers Markdown',
            'Gestion complète du contenu via JSON/Markdown',
            'Thème complet (couleurs + polices personnalisables)',
            'Sitemap automatique et SEO avancé',
            'Google Analytics intégré (optionnel)',
            'Formulaire de contact dynamique personnalisable',
            'Documentation complète et support'
          ],
          tech: ['Vue 3', 'Vite', 'Bootstrap 5', 'Vue Router', 'Markdown', 'SEO Tools']
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
      const subject = `Commande Template - ${templateName}`;
      const body = `Bonjour Amine,

Je souhaite commander le template "${templateName}".

Informations sur mon projet:
- Nom de l'entreprise: 
- Type d'activité: 
- Fonctionnalités souhaitées: 
- Date de livraison souhaitée: 

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

Cordialement`;
      
      return `mailto:amineitji@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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