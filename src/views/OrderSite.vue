<template>
  <div class="order-page-container fu">
    
    <div class="section-head">
      <span class="eyebrow">{{ t.eyebrow }}</span>
      <h2 class="s-title" style="margin-top:12px;">{{ t.title }}</h2>
      <p class="s-sub" style="margin-top:10px;">{{ t.subtitle }}</p>
    </div>
    
    <div class="pricing-cards">
      <div 
        v-for="(site, index) in t.sites" 
        :key="index"
        class="pack-card"
        :class="{ 'expanded': expandedSite === index, 'featured': site.featured }"
        @click="toggleDetails(index)"
      >
        <div v-if="site.featured" class="featured-ribbon">{{ t.popular }}</div>
        
        <div class="pack-badge" :class="site.badgeClass">{{ site.badge }}</div>
        <h3 class="pack-name">{{ site.title }}</h3>
        
        <div class="pack-price">
          <span class="pack-amount">{{ site.price }}</span>
        </div>
        
        <div class="pack-content" :class="{ 'visible': expandedSite === index }">
          <div class="pack-desc" v-html="site.description"></div>
          
          <div class="pack-delay">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ site.delay }}
          </div>
          
          <a :href="`mailto:${contactEmail}?subject=${encodeURIComponent('Commande : ' + site.title)}`" 
             class="btn pack-btn" 
             :class="site.featured ? 'btn-inv' : 'btn-dark'" 
             @click.stop>
            {{ t.cta }} →
          </a>
        </div>
        
        <div class="expand-indicator" v-if="expandedSite !== index">
          <span class="expand-text">{{ t.seeDetails }}</span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'OrderSite',
  inject: ['getLang'],
  data() {
    return {
      expandedSite: null,
      contactEmail: CONTACT_EMAIL
    };
  },
  computed: {
    lang() { return this.getLang(); },
    t() {
      const data = {
        fr: {
          eyebrow: 'Création Web',
          title: 'Formules Sites Internet',
          subtitle: 'Lancez votre activité avec un site professionnel, performant et optimisé pour la conversion.',
          popular: 'Le plus demandé',
          seeDetails: 'Voir détails',
          cta: 'Commander',
          sites: [
            {
              badge: 'STARTER',
              badgeClass: 'badge-starter',
              title: 'Pack Présence',
              price: '600 €',
              delay: 'Délai moyen : 1 semaine',
              featured: false,
              description: `
                <p><strong>L'essentiel pour être visible.</strong></p>
                <ul class="pack-list">
                  <li>Site vitrine One-Page ou jusqu'à 3 pages</li>
                  <li>Design responsive adapté aux mobiles</li>
                  <li>Formulaire de contact & Liens réseaux sociaux</li>
                  <li>Mise en ligne incluse</li>
                </ul>
              `
            },
            {
              badge: 'BUSINESS',
              badgeClass: 'badge-business',
              title: 'Pack Pro',
              price: '950 €',
              delay: 'Délai moyen : 2 semaines',
              featured: false,
              description: `
                <p><strong>Pour présenter votre activité en détail.</strong></p>
                <ul class="pack-list">
                  <li>Jusqu'à 7 pages avec design soigné</li>
                  <li>Galerie photos, Blog ou Carte interactive</li>
                  <li>Optimisation SEO pour le référencement Google</li>
                  <li>Animations fluides pour une image moderne</li>
                </ul>
              `
            },
            {
              badge: 'SUR MESURE',
              badgeClass: 'badge-premium',
              title: 'Pack Expert',
              price: 'Sur Devis',
              delay: 'Délai : Selon le projet (dès 1500€)',
              featured: true,
              description: `
                <p><strong>Solutions complexes et sur mesure.</strong></p>
                <ul class="pack-list">
                  <li>Site E-commerce ou Application Web (SaaS)</li>
                  <li>Fonctionnalités avancées (Espace client, Réservations...)</li>
                  <li>Intégration d'API ou d'Intelligence Artificielle</li>
                  <li>Architecture technique robuste (Django/Vue.js)</li>
                </ul>
              `
            }
          ]
        },
        en: {
          eyebrow: 'Web Development',
          title: 'Website Packages',
          subtitle: 'Launch your business with a professional, high-performance, and conversion-optimized website.',
          popular: 'Most requested',
          seeDetails: 'See details',
          cta: 'Order now',
          sites: [
            {
              badge: 'STARTER',
              badgeClass: 'badge-starter',
              title: 'Presence Pack',
              price: '€600',
              delay: 'Average timeline: 1 week',
              featured: false,
              description: `
                <p><strong>The essentials to be visible.</strong></p>
                <ul class="pack-list">
                  <li>One-Page or up to 3 pages website</li>
                  <li>Fully responsive design for mobile</li>
                  <li>Contact form & Social media links</li>
                  <li>Deployment included</li>
                </ul>
              `
            },
            {
              badge: 'BUSINESS',
              badgeClass: 'badge-business',
              title: 'Pro Pack',
              price: '€950',
              delay: 'Average timeline: 2 weeks',
              featured: false,
              description: `
                <p><strong>To present your business in detail.</strong></p>
                <ul class="pack-list">
                  <li>Up to 7 pages with premium design</li>
                  <li>Photo gallery, Blog, or Interactive map</li>
                  <li>SEO optimization for Google ranking</li>
                  <li>Smooth animations for a modern look</li>
                </ul>
              `
            },
            {
              badge: 'CUSTOM',
              badgeClass: 'badge-premium',
              title: 'Expert Pack',
              price: 'Custom Quote',
              delay: 'Timeline: Based on scope (from €1500)',
              featured: true,
              description: `
                <p><strong>Complex and tailor-made solutions.</strong></p>
                <ul class="pack-list">
                  <li>E-commerce Site or Web Application (SaaS)</li>
                  <li>Advanced features (Client portal, Bookings...)</li>
                  <li>API or Artificial Intelligence integration</li>
                  <li>Robust technical architecture (Django/Vue.js)</li>
                </ul>
              `
            }
          ]
        }
      };
      return data[this.lang];
    }
  },
  methods: {
    toggleDetails(index) {
      this.expandedSite = this.expandedSite === index ? null : index;
    }
  }
};
</script>

<style scoped>
.order-page-container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 40px 0 80px;
}

.section-head {
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.s-sub {
  text-align: center;
  max-width: 600px;
}

/* Grille de cartes */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

/* Carte individuelle */
.pack-card {
  position: relative;
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 20px;
  padding: 32px 26px;
  cursor: pointer;
  display: flex; 
  flex-direction: column; 
  gap: 12px;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.25s, box-shadow 0.3s, transform 0.3s var(--ease);
  overflow: hidden;
}

.pack-card:hover { 
  border-color: var(--gray-300); 
  box-shadow: var(--shadow-lg); 
  transform: translateY(-4px); 
}

/* Version mise en avant (Featured) */
.pack-card.featured { 
  background: var(--gray-900); 
  border-color: var(--gray-800); 
}
.pack-card.featured:hover { 
  box-shadow: 0 18px 44px rgba(15,23,42,0.26); 
}

.featured-ribbon {
  position: absolute; top: -11px; left: 24px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: white; font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 12px; border-radius: 100px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.3);
}

/* Badges */
.pack-badge {
  display: inline-flex; font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.1em; padding: 4px 12px; border-radius: 100px; width: fit-content;
}
.badge-starter { background: var(--gray-100); color: var(--gray-600); }
.badge-business { background: var(--blue-light); color: var(--blue-dark); }
.badge-premium  { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }

/* Textes de la carte */
.pack-name { font-size: 1.35rem; font-weight: 800; letter-spacing: -0.03em; color: var(--gray-900); margin-top: 8px;}
.pack-card.featured .pack-name { color: var(--white); }

.pack-amount { font-size: 2rem; font-weight: 800; letter-spacing: -0.04em; color: var(--gray-900); }
.pack-card.featured .pack-amount { color: var(--white); }

/* Contenu extensible */
.pack-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pack-content.visible {
  opacity: 1;
  max-height: 500px;
  margin-top: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--gray-100);
}
.pack-card.featured .pack-content.visible {
  border-color: rgba(255,255,255,0.1);
}

:deep(.pack-desc p) {
  font-size: 0.9rem;
  color: var(--gray-700);
  margin-bottom: 12px;
}
.pack-card.featured :deep(.pack-desc p) { color: rgba(255,255,255,0.8); }

:deep(.pack-list) {
  list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;
}
:deep(.pack-list li) {
  display: flex; align-items: flex-start; gap: 8px; font-size: 0.85rem; color: var(--gray-500); line-height: 1.4;
  position: relative; padding-left: 14px;
}
:deep(.pack-list li::before) {
  content: '→';
  position: absolute; left: 0; top: 0;
  color: var(--blue); font-weight: bold;
}
.pack-card.featured :deep(.pack-list li) { color: rgba(255,255,255,0.6); }
.pack-card.featured :deep(.pack-list li::before) { color: var(--purple); }

.pack-delay {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.75rem; font-weight: 600; color: var(--gray-500);
  padding: 8px 12px; background: var(--gray-50); border-radius: 8px;
  width: fit-content; margin-bottom: 8px;
}
.pack-card.featured .pack-delay { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.6); }

.pack-btn { width: 100%; justify-content: center; padding: 14px; margin-top: 4px;}

/* Indicateur pour ouvrir */
.expand-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  padding-top: 16px;
  border-top: 1px solid transparent;
  transition: all 0.3s ease;
}

.expand-text {
  color: var(--gray-400);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
  transition: color 0.3s ease;
}
.pack-card.featured .expand-text { color: rgba(255,255,255,0.4); }

.chevron {
  width: 16px; height: 16px;
  color: var(--gray-400);
  animation: bounce 2s infinite;
}
.pack-card.featured .chevron { color: rgba(255,255,255,0.4); }

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-4px); }
  60% { transform: translateY(-2px); }
}

.pack-card:hover .expand-text { color: var(--blue); }
.pack-card:hover .chevron { color: var(--blue); }

.pack-card.featured:hover .expand-text,
.pack-card.featured:hover .chevron { color: var(--white); }


/* Responsive */
@media (max-width: 960px) {
  .pricing-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .pricing-cards { grid-template-columns: 1fr; }
  .section-head { align-items: flex-start; text-align: left; }
  .s-sub { text-align: left; }
}
</style>