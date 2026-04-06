<template>
  <div class="projects-page">

    <header class="page-hero fu">
      <span class="eyebrow">{{ t.eyebrow }}</span>
      <h1 class="s-title" style="margin-top:12px;">{{ t.title }}</h1>
      <p class="s-sub" style="margin-top:10px;max-width:540px;">{{ t.sub }}</p>
    </header>

    <section class="featured-section fu" style="animation-delay:.08s;">
      <div class="featured-grid">
        <a
          v-for="p in featuredProjects"
          :key="p.name"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          class="featured-card"
        >
          <div class="fc-visual" :style="{ background: p.gradient }">
            <div class="fc-logo">
              <span v-html="p.icon"></span>
              <strong>{{ p.name }}</strong>
            </div>
            <div class="fc-hover">{{ t.visit }} →</div>
          </div>
          <div class="fc-body">
            <div class="fc-tags">
              <span class="chip" v-for="tag in p.tags" :key="tag">{{ tag }}</span>
              <span class="chip chip-live">{{ t.live }}</span>
            </div>
            <h3>{{ p.name }}</h3>
            <p>{{ p.desc }}</p>
            <div class="fc-stack">
              <span class="chip chip-tech" v-for="s in p.stack" :key="s">{{ s }}</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <section class="other-section fu" style="animation-delay:.15s;">
      <div class="other-header">
        <h2 class="s-title">{{ t.otherTitle }}</h2>
        <div class="filter-bar">
          <button
            v-for="cat in categories"
            :key="cat.key"
            class="filter-btn"
            :class="{ active: activeFilter === cat.key }"
            @click="activeFilter = cat.key"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <div class="other-grid">
        <div
          v-for="p in filteredProjects"
          :key="p.name"
          class="other-card"
          :class="{ open: openCard === p.name }"
          @click="toggleCard(p.name)"
          :aria-expanded="openCard === p.name"
        >
          <div class="oc-top">
            <div class="oc-icon" :style="{ background: p.iconBg, color: p.iconColor }">
              <span v-html="p.icon"></span>
            </div>
            <div class="oc-meta">
              <span class="oc-cat">{{ p.cat }}</span>
              <h3>{{ p.name }}</h3>
              <p class="oc-short">{{ p.short }}</p>
            </div>
            <div class="oc-chevron" :class="{ rotated: openCard === p.name }">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          <transition name="expand">
            <div class="oc-expand" v-if="openCard === p.name">
              <div class="oc-expand-inner">
                <p class="oc-desc">{{ p.desc }}</p>
                <div class="oc-stack">
                  <span class="chip chip-tech" v-for="s in p.stack" :key="s">{{ s }}</span>
                </div>
                <div class="oc-links" v-if="p.github || p.demo">
                  <a v-if="p.github" :href="p.github" target="_blank" rel="noopener noreferrer" class="oc-link" @click.stop>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener noreferrer" class="oc-link demo" @click.stop>
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ProjetsPage',
  inject: ['getLang'],

  data() {
    return {
      activeFilter: 'all',
      openCard: null,
    };
  },

  computed: {
    lang() { return this.getLang(); },

    t() {
      const fr = {
        eyebrow: 'Réalisations',
        title: 'Projets & Travaux.',
        sub: 'De la recherche académique aux SaaS en production — chaque projet illustre une compétence concrète.',
        visit: 'Visiter',
        live: 'En production',
        otherTitle: 'Projets & Recherche',
        filterAll: 'Tous',
        filterAI: 'IA & ML',
        filterWeb: 'Web & SaaS',
        filterData: 'Data',
      };
      const en = {
        eyebrow: 'Work',
        title: 'Projects & Work.',
        sub: 'From academic research to live SaaS — each project illustrates a concrete skill.',
        visit: 'Visit',
        live: 'Live',
        otherTitle: 'Projects & Research',
        filterAll: 'All',
        filterAI: 'AI & ML',
        filterWeb: 'Web & SaaS',
        filterData: 'Data',
      };
      return this.lang === 'en' ? en : fr;
    },

    categories() {
      return [
        { key: 'all',  label: this.t.filterAll },
        { key: 'ai',   label: this.t.filterAI },
        { key: 'web',  label: this.t.filterWeb },
        { key: 'data', label: this.t.filterData },
      ];
    },

    featuredProjects() {
      const fr = [
        {
          name: 'DiagERP',
          url: 'https://diagerp.fr/',
          gradient: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
          icon: '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
          tags: ['SaaS B2B', 'Co-fondateur & CTO'],
          desc: 'ERP complet pour diagnostiqueurs immobiliers. Gestion des missions et des rapports réglementaires, Stripe, facturation automatique. Utilisé activement en production par des professionnels.',
          stack: ['Vue.js 3', 'Django', 'PostgreSQL', 'Stripe', 'AWS'],
        },
        {
          name: 'DiagImmoMarchés',
          url: 'https://diagimmomarches.fr/',
          gradient: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
          icon: '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
          tags: ['Projet client', 'SEO Premium'],
          desc: 'Plateforme web premium pour un client du secteur immobilier. Optimisée pour l\'acquisition SEO et la conversion. Score Lighthouse 95+, temps de chargement < 1s.',
          stack: ['Vue.js', 'Django', 'SEO', 'Docker'],
        },
      ];
      const en = [
        {
          name: 'DiagERP',
          url: 'https://diagerp.fr/',
          gradient: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
          icon: '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
          tags: ['B2B SaaS', 'Co-founder & CTO'],
          desc: 'Full ERP for real estate diagnosticians. Mission and regulatory report management, Stripe billing, automated invoicing. Actively used in production by professionals.',
          stack: ['Vue.js 3', 'Django', 'PostgreSQL', 'Stripe', 'AWS'],
        },
        {
          name: 'DiagImmoMarchés',
          url: 'https://diagimmomarches.fr/',
          gradient: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
          icon: '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
          tags: ['Client project', 'Premium SEO'],
          desc: 'Premium web platform for a real estate client. Optimized for SEO acquisition and conversion. Lighthouse score 95+, load time < 1s.',
          stack: ['Vue.js', 'Django', 'SEO', 'Docker'],
        },
      ];
      return this.lang === 'en' ? en : fr;
    },

    allOtherProjects() {
      const fr = [
        { cat: 'IA & ML', name: 'Analyse Vidéo Football (IA)', catKey: 'ai',
          short: 'Détection et tracking de joueurs en temps réel.',
          desc: 'Pipeline Computer Vision avec YOLO v8 pour détecter et tracker des joueurs, arbitres et ballon en temps réel. Homographie pour mapper les positions sur un terrain 2D. Calcul de métriques de performance (distance, vitesse, possession).',
          stack: ['Python', 'YOLO v8', 'OpenCV', 'NumPy', 'Homography'],
          iconBg: '#f5f3ff', iconColor: '#8b5cf6',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'IA & ML', name: 'Prédiction de Penalty (ML)', catKey: 'ai',
          short: 'Modèle ML à 77% de précision sur Kaggle.',
          desc: 'Modèle Random Forest pour prédire l\'issue de tirs aux buts à partir de données de position, timing et comportementales. Atteint 77% de précision sur un dataset Kaggle de 15 000+ tirs.',
          stack: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'Matplotlib'],
          iconBg: '#fff7ed', iconColor: '#f59e0b',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'IA & ML', name: 'RAG & Agents LLM', catKey: 'ai',
          short: 'Pipeline RAG privé sur base documentaire client.',
          desc: 'Architecture RAG complète avec LangChain + OpenAI pour interroger des bases documentaires privées. Agent autonome capable de chaîner des outils (recherche web, calcul, API). Intégration avec des workflows Notion.',
          stack: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Python'],
          iconBg: '#eff6ff', iconColor: '#3b82f6',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'Data', name: 'Web Scraping Football', catKey: 'data',
          short: 'Extraction de 50 000+ stats de joueurs.',
          desc: 'Pipeline de scraping massif sur FBRef et Transfermarkt avec Selenium + BeautifulSoup. Extraction de plus de 50 000 entrées de statistiques joueurs sur 5 saisons. Nettoyage, normalisation et export CSV/PostgreSQL.',
          stack: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'PostgreSQL'],
          iconBg: '#f0fdf4', iconColor: '#10b981',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'Data', name: 'CDlib — Contribution Open Source', catKey: 'data',
          short: 'Contribution à une librairie Python de détection de communautés.',
          desc: 'Contribution à CDlib (bibliothèque Python pour la détection de communautés dans les graphes). Implémentation de nouveaux algorithmes de clustering avec NetworkX. Code mergé dans la version officielle.',
          stack: ['Python', 'NetworkX', 'CDlib', 'Graph Theory'],
          iconBg: '#f5f3ff', iconColor: '#8b5cf6',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'Web & SaaS', name: 'App Bilan Carbone (Django)', catKey: 'web',
          short: 'Application métier REST pour le suivi d\'empreinte carbone.',
          desc: 'Application Django REST API complète pour calculer et suivre l\'empreinte carbone d\'une entreprise. Authentification JWT, dashboard analytics, export PDF des bilans. Déployée sur AWS avec Docker.',
          stack: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Docker', 'AWS'],
          iconBg: '#f0fdf4', iconColor: '#10b981',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
          github: 'https://github.com/amineitji',
        },
      ];
      const en = [
        { cat: 'AI & ML', name: 'Football Video Analysis (AI)', catKey: 'ai',
          short: 'Real-time player detection and tracking.',
          desc: 'Computer Vision pipeline with YOLO v8 to detect and track players, referees and the ball in real-time. Homography to map positions onto a 2D pitch. Performance metrics calculation (distance, speed, possession).',
          stack: ['Python', 'YOLO v8', 'OpenCV', 'NumPy', 'Homography'],
          iconBg: '#f5f3ff', iconColor: '#8b5cf6',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'AI & ML', name: 'Penalty Prediction (ML)', catKey: 'ai',
          short: '77% accuracy ML model on Kaggle.',
          desc: 'Random Forest model to predict the outcome of penalty kicks from position, timing and behavioral data. Achieves 77% accuracy on a Kaggle dataset of 15,000+ shots.',
          stack: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'Matplotlib'],
          iconBg: '#fff7ed', iconColor: '#f59e0b',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'AI & ML', name: 'RAG & LLM Agents', catKey: 'ai',
          short: 'Private RAG pipeline on client document base.',
          desc: 'Full RAG architecture with LangChain + OpenAI to query private document bases. Autonomous agent capable of chaining tools (web search, computation, API). Integration with Notion workflows.',
          stack: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Python'],
          iconBg: '#eff6ff', iconColor: '#3b82f6',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'Data', name: 'Football Web Scraping', catKey: 'data',
          short: 'Extraction of 50,000+ player stats.',
          desc: 'Massive scraping pipeline on FBRef and Transfermarkt with Selenium + BeautifulSoup. Extraction of 50,000+ player stat entries over 5 seasons. Cleaning, normalization, and CSV/PostgreSQL export.',
          stack: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'PostgreSQL'],
          iconBg: '#f0fdf4', iconColor: '#10b981',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'Data', name: 'CDlib — Open Source Contribution', catKey: 'data',
          short: 'Contribution to a Python community detection library.',
          desc: 'Contribution to CDlib (Python library for community detection in graphs). Implementation of new clustering algorithms with NetworkX. Code merged into the official release.',
          stack: ['Python', 'NetworkX', 'CDlib', 'Graph Theory'],
          iconBg: '#f5f3ff', iconColor: '#8b5cf6',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
          github: 'https://github.com/amineitji',
        },
        { cat: 'Web & SaaS', name: 'Carbon Footprint App (Django)', catKey: 'web',
          short: 'Business REST application for carbon footprint tracking.',
          desc: 'Full Django REST API to calculate and track a company\'s carbon footprint. JWT auth, analytics dashboard, PDF report export. Deployed on AWS with Docker.',
          stack: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Docker', 'AWS'],
          iconBg: '#f0fdf4', iconColor: '#10b981',
          icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
          github: 'https://github.com/amineitji',
        },
      ];
      return this.lang === 'en' ? en : fr;
    },

    filteredProjects() {
      if (this.activeFilter === 'all') return this.allOtherProjects;
      return this.allOtherProjects.filter(p => p.catKey === this.activeFilter);
    },
  },

  methods: {
    toggleCard(name) {
      this.openCard = this.openCard === name ? null : name;
    },
  },
};
</script>

<style scoped>
.projects-page { padding: 48px 0 80px; }

/* Hero */
.page-hero { max-width: 680px; margin-bottom: 64px; }

/* Featured grid */
.featured-section { margin-bottom: 72px; }

.featured-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.featured-card {
  display: block;
  text-decoration: none;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
}

.featured-card:hover {
  border-color: var(--gold);
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.fc-visual {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.fc-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 26px;
  background: var(--bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  font-size: 1.15rem;
  font-weight: 300;
  color: var(--ink);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s var(--ease);
}

.featured-card:hover .fc-logo { transform: scale(1.06); }

.fc-hover {
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0.55);
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 0.95rem; font-weight: 600;
  opacity: 0; transition: opacity 0.28s; backdrop-filter: blur(3px);
}
.featured-card:hover .fc-hover { opacity: 1; }

.fc-body { padding: 22px 24px; }

.fc-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }

.fc-body h3 { font-size: 1.3rem; font-weight: 700; letter-spacing: -0.03em; color: var(--gray-900); margin-bottom: 8px; }

.fc-body p { font-size: 0.875rem; color: var(--gray-500); line-height: 1.65; margin-bottom: 14px; }

.fc-stack { display: flex; flex-wrap: wrap; gap: 6px; }

/* Other section */
.other-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.filter-bar { display: flex; gap: 6px; flex-wrap: wrap; }

.filter-btn {
  padding: 7px 16px;
  border-radius: var(--radius);
  font-family: var(--font);
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.18s ease;
}
.filter-btn:hover { border-color: var(--border-dark); color: var(--ink); }
.filter-btn.active { background: var(--ink); border-color: var(--ink); color: var(--bg); }

.other-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

/* Expandable card */
.other-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.25s;
  box-shadow: var(--shadow-sm);
}
.other-card:hover { border-color: var(--border-dark); box-shadow: var(--shadow-md); }
.other-card.open { border-color: var(--gold); }

.oc-top {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px 22px;
}

.oc-icon {
  width: 40px; height: 40px; border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.oc-meta { flex: 1; min-width: 0; }

.oc-cat {
  display: inline-flex;
  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--gray-400); margin-bottom: 4px;
}

.oc-meta h3 {
  font-size: 0.95rem; font-weight: 700; color: var(--gray-900);
  margin-bottom: 3px; letter-spacing: -0.01em;
}

.oc-short { font-size: 0.8rem; color: var(--gray-500); line-height: 1.4; }

.oc-chevron {
  flex-shrink: 0;
  color: var(--gray-400);
  margin-top: 2px;
  transition: transform 0.25s var(--ease);
}
.oc-chevron.rotated { transform: rotate(180deg); }

/* Expand content */
.oc-expand {}
.oc-expand-inner {
  padding: 0 22px 20px;
  display: flex; flex-direction: column; gap: 12px;
  border-top: 1px solid var(--gray-100);
  padding-top: 16px;
}

.oc-desc { font-size: 0.85rem; color: var(--gray-600); line-height: 1.65; }
.oc-stack { display: flex; flex-wrap: wrap; gap: 5px; }

.oc-links { display: flex; gap: 10px; }

.oc-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.78rem; font-weight: 600; color: var(--text-muted);
  padding: 5px 12px;
  background: var(--bg); border: 1px solid var(--border);
  border-radius: var(--radius); text-decoration: none;
  transition: all 0.18s ease;
}
.oc-link:hover { background: var(--ink); color: var(--bg); border-color: var(--ink); }
.oc-link.demo { color: var(--gold); border-color: rgba(197,154,69,0.3); background: rgba(197,154,69,0.08); }
.oc-link.demo:hover { background: var(--gold); border-color: var(--gold); color: var(--ink); }

/* Chips */
.chip-live {
  background: rgba(197,154,69,0.10); border-color: rgba(197,154,69,0.3); color: var(--gold);
}
.chip-tech {
  background: var(--surface); color: var(--text-muted); border-color: var(--border);
}

/* Transition */
.expand-enter-active { transition: max-height 0.35s var(--ease), opacity 0.3s ease; max-height: 0; overflow: hidden; }
.expand-leave-active { transition: max-height 0.25s ease, opacity 0.2s ease; overflow: hidden; }
.expand-enter-to     { max-height: 400px; opacity: 1; }
.expand-leave-from   { max-height: 400px; opacity: 1; }
.expand-enter-from   { opacity: 0; }
.expand-leave-to     { max-height: 0; opacity: 0; }

/* Responsive */
@media (max-width: 768px) {
  .featured-grid { grid-template-columns: 1fr; }
  .other-grid { grid-template-columns: 1fr; }
  .other-header { flex-direction: column; align-items: flex-start; }
}
</style>