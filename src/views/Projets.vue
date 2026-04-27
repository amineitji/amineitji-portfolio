<template>
  <div class="projects-page">

    <!-- ══ HERO (DARK) ══ -->
    <section class="hero-section">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="container">
        <div class="page-hero fu">
          <span class="label-dark">{{ t.eyebrow }}</span>
          <h1 class="display-dark" style="margin-top:14px;">{{ t.title }}</h1>
          <p class="hero-sub">{{ t.sub }}</p>
          <div class="hero-stats">
            <div class="hstat">
              <span class="hstat-val">8+</span>
              <span class="hstat-label">{{ lang === 'en' ? 'Projects' : 'Projets' }}</span>
            </div>
            <div class="hstat-sep" aria-hidden="true"></div>
            <div class="hstat">
              <span class="hstat-val">3</span>
              <span class="hstat-label">{{ lang === 'en' ? 'Live demos' : 'Démos live' }}</span>
            </div>
            <div class="hstat-sep" aria-hidden="true"></div>
            <div class="hstat">
              <span class="hstat-val">1</span>
              <span class="hstat-label">{{ lang === 'en' ? 'SaaS in prod' : 'SaaS en prod' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FEATURED ══ -->
    <section class="featured-section">
      <div class="container">
        <div class="section-label fu" style="animation-delay:.04s;">
          <span class="label">{{ lang === 'en' ? 'Featured' : 'À la une' }}</span>
        </div>
        <div class="featured-grid fu" style="animation-delay:.08s;">
          <div v-for="p in featuredProjects" :key="p.name" class="featured-card">
            <div class="fc-cover" :style="p.coverImg ? {} : { background: p.coverBg }">
              <img v-if="p.coverImg" :src="p.coverImg" :alt="p.name" class="fc-screenshot" />
              <div v-if="!p.coverImg" class="fc-cover-inner">
                <div class="fc-icon-wrap">
                  <span class="fc-emoji">{{ p.emoji }}</span>
                  <strong class="fc-name-cover">{{ p.name }}</strong>
                </div>
              </div>
              <div class="fc-badges">
                <span class="fc-badge" v-for="tag in p.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <div class="fc-body">
              <h3 class="fc-title">{{ p.name }}</h3>
              <p class="fc-desc">{{ p.desc }}</p>
              <div class="fc-stack">
                <span class="chip" v-for="s in p.stack" :key="s">{{ s }}</span>
              </div>
              <div class="fc-links">
                <a v-if="p.url" :href="p.url" target="_blank" rel="noopener noreferrer" class="fc-link fc-link-primary">
                  {{ t.visit }} ↗
                </a>
                <button v-if="p.demo" class="fc-link fc-link-demo" @click="openDemo(p)">
                  ▶ {{ t.demo }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ ALL PROJECTS ══ -->
    <section class="all-section">
      <div class="container">
        <div class="all-header fu" style="animation-delay:.04s;">
          <div>
            <span class="label">{{ lang === 'en' ? 'All work' : 'Tous les projets' }}</span>
            <h2 class="all-title">{{ t.allTitle }}</h2>
          </div>
          <div class="filter-bar">
            <button
              v-for="cat in categories"
              :key="cat.key"
              class="filter-btn"
              :class="{ active: activeFilter === cat.key }"
              @click="activeFilter = cat.key"
            >{{ cat.label }}</button>
          </div>
        </div>

        <div class="cards-grid fu" style="animation-delay:.1s;">
          <div
            v-for="p in filteredProjects"
            :key="p.name"
            class="pcard"
            :class="{ open: openCard === p.name }"
            @click="toggleCard(p.name)"
          >
            <div class="pcard-top">
              <div class="pcard-icon" :style="{ background: p.iconBg, color: p.iconColor }">
                <span v-html="p.icon"></span>
              </div>
              <div class="pcard-meta">
                <span class="pcard-cat">{{ p.cat }}</span>
                <h3 class="pcard-name">{{ p.name }}</h3>
                <p class="pcard-short">{{ p.short }}</p>
              </div>
              <div class="pcard-chevron" :class="{ rotated: openCard === p.name }">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>

            <transition name="expand">
              <div class="pcard-expand" v-if="openCard === p.name">
                <div class="pcard-expand-inner" @click.stop>
                  <p class="pcard-desc">{{ p.desc }}</p>
                  <div class="pcard-stack">
                    <span class="chip" v-for="s in p.stack" :key="s">{{ s }}</span>
                  </div>
                  <div class="pcard-links">
                    <a v-if="p.github" :href="p.github" target="_blank" rel="noopener noreferrer" class="plink plink-gh">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                    <button v-if="p.demo" class="plink plink-demo" @click="openDemo(p)">▶ Démo</button>
                    <a v-if="p.url" :href="p.url" target="_blank" rel="noopener noreferrer" class="plink plink-url">Voir ↗</a>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ VIDEO MODAL ══ -->
    <VideoModal
      :visible="!!activeDemo"
      :video-id="activeDemo ? activeDemo.videoId : ''"
      :title="activeDemo ? activeDemo.name : ''"
      :tag="activeDemo ? activeDemo.cat : 'Démo'"
      :description="activeDemo ? activeDemo.demoDesc : ''"
      @close="activeDemo = null"
    />

  </div>
</template>

<script>
import VideoModal from '@/components/VideoModal.vue';

export default {
  name: 'ProjetsPage',
  components: { VideoModal },
  inject: ['getLang'],

  data() {
    return {
      activeFilter: 'all',
      openCard: null,
      activeDemo: null,
    };
  },

  computed: {
    lang() { return this.getLang(); },

    t() {
      return this.lang === 'en'
        ? { eyebrow: 'Work', title: 'Projects & Work.', sub: 'From academic research to live SaaS — each project illustrates a concrete, measurable skill.', visit: 'Visit', demo: 'Watch demo', allTitle: 'All projects', filterAll: 'All', filterAI: 'AI & GenAI', filterWeb: 'Web & SaaS', filterData: 'Data' }
        : { eyebrow: 'Réalisations', title: 'Projets & Travaux.', sub: 'De la recherche académique aux SaaS en production — chaque projet illustre une compétence concrète et mesurable.', visit: 'Visiter', demo: 'Voir la démo', allTitle: 'Tous les projets', filterAll: 'Tous', filterAI: 'IA & GenAI', filterWeb: 'Web & SaaS', filterData: 'Data' };
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
      const isEn = this.lang === 'en';
      return [
        {
          name: 'DiagERP',
          emoji: '🏠',
          coverImg: '/diagERP.png',
          coverBg: null,
          tags: [isEn ? 'B2B SaaS · Live' : 'SaaS B2B · En production', isEn ? 'Co-Founder & CTO' : 'Co-Fondateur & CTO'],
          desc: isEn
            ? 'Platform automating ERP compliance reports for French real estate professionals. Built end-to-end: Django backend, Vue.js frontend, PostgreSQL, Stripe, AWS + Docker + CI/CD. Report generation reduced from hours to minutes.'
            : 'Plateforme automatisant la génération de rapports ERP pour les professionnels de l\'immobilier. Développé de A à Z : backend Django, frontend Vue.js, PostgreSQL, Stripe, AWS + Docker + CI/CD. Génération réduite de plusieurs heures à quelques minutes.',
          stack: ['Django', 'Vue.js 3', 'PostgreSQL', 'Stripe', 'AWS', 'Docker', 'CI/CD'],
          url: 'https://diagerp.fr',
          demo: null,
        },
        {
          name: isEn ? 'AInsights @ Michelin' : 'AInsights @ Michelin',
          emoji: '🔍',
          coverImg: null,
          coverBg: 'linear-gradient(135deg, #0C0F0A 0%, #1B4332 100%)',
          tags: ['RAG · GenAI', 'Michelin – DOTI/ISPARK'],
          desc: isEn
            ? 'Strategic intelligence system designed and shipped at Michelin. Full RAG pipeline: Tavily-based web ingestion, vector embeddings, semantic retrieval, LLM-powered automated report generation. Also developed an AI-powered Dunning Rules webapp with dynamic email tone adaptation per customer profile.'
            : 'Système de veille stratégique conçu et déployé chez Michelin. Pipeline RAG complet : ingestion web via Tavily, vector embeddings, recherche sémantique et génération automatisée de contenu par LLM. Développement d\'une webapp Dunning Rules avec adaptation dynamique du ton des e-mails selon le profil client.',
          stack: ['RAG', 'LLM', 'Tavily', 'Embeddings', 'Python', 'FastAPI'],
          url: null,
          demo: null,
        },
      ];
    },

    allProjects() {
      const isEn = this.lang === 'en';
      const gh = 'https://github.com/amineitji';
      return [
        {
          cat: isEn ? 'AI & GenAI' : 'IA & GenAI', catKey: 'ai',
          name: isEn ? 'Educational LLM – Python Tutor' : 'LLM Éducatif – Tuteur Python',
          short: isEn ? 'LLM teaching Python through adaptive conversation.' : 'LLM enseignant Python par conversation adaptative.',
          desc: isEn
            ? 'Educational LLM system that teaches Python programming through interactive conversations. Adaptive feedback, RAG-based knowledge base with Python documentation, exercises graded in real time.'
            : 'Système LLM pédagogique qui enseigne la programmation Python par conversation interactive. Feedback adaptatif, base de connaissance RAG sur la doc Python, exercices corrigés en temps réel.',
          stack: ['Python', 'LLM', 'RAG', 'LangChain', 'OpenAI'],
          iconBg: '#EFF6FF', iconColor: '#2563EB',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
          github: gh,
          demo: 'hfNYvwSKEj8',
          demoDesc: isEn ? 'Demo of the educational LLM system teaching Python through adaptive conversation.' : 'Démonstration du LLM éducatif enseignant la programmation Python par conversation adaptative.',
        },
        {
          cat: isEn ? 'AI & GenAI' : 'IA & GenAI', catKey: 'ai',
          name: isEn ? 'Multi-Agent Tourist Guide System' : 'Système Multi-Agents Guide Touristique',
          short: isEn ? 'Multi-agent architecture for intelligent museum visitor guidance.' : 'Architecture multi-agents pour le guidage intelligent de visiteurs.',
          desc: isEn
            ? 'Multi-agent system orchestrating specialized AI agents: a museum guide agent, a tourist group manager, and a planning/scheduling agent. Collaborative decision-making for intelligent visitor routing inside a museum.'
            : 'Système multi-agents orchestrant des agents IA spécialisés : agent guide de musée, agent gestionnaire de groupes touristiques, agent planification et scheduling. Prise de décision collaborative pour le guidage intelligent des visiteurs.',
          stack: ['Python', 'Multi-Agents', 'LLM', 'LangChain', 'OpenAI'],
          iconBg: '#F5F3FF', iconColor: '#7C3AED',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
          github: gh,
          demo: 'cBz44VUF8AM',
          demoDesc: isEn ? 'Demo of the multi-agent system for intelligent museum visitor management and guidance.' : 'Démonstration du système multi-agents pour la gestion et le guidage intelligent de visiteurs de musée.',
        },
        {
          cat: isEn ? 'AI & GenAI' : 'IA & GenAI', catKey: 'ai',
          name: isEn ? 'Skeleton-Guided Image Generation (GAN)' : 'Génération d\'Images Guidée par Squelette (GAN)',
          short: isEn ? 'Conditional WGAN-GP replacing random noise with skeleton pose.' : 'WGAN-GP conditionnel remplaçant le bruit aléatoire par la pose squelette.',
          desc: isEn
            ? 'Progressive exploration of posture-guided image synthesis: nearest-neighbor baseline, two vanilla neural architectures, and a conditional WGAN-GP where the target skeleton replaces random noise. Architecture: U-Net encoder, PatchGAN discriminator, composite loss (Adversarial + L1 + VGG perceptual). Dataset: Taichi videos (4,989 skeleton-image pairs).'
            : 'Exploration progressive de la synthèse d\'images guidée par la posture : baseline nearest-neighbor, deux architectures neuronales vanilla, puis un GAN conditionnel (WGAN-GP) où le squelette cible remplace le bruit aléatoire. Architecture U-Net, discriminateur PatchGAN, loss composite (Adversarial + L1 + VGG perceptual). Dataset : vidéos Taichi (4 989 paires squelette-image).',
          stack: ['PyTorch', 'WGAN-GP', 'U-Net', 'PatchGAN', 'Computer Vision', 'Python'],
          iconBg: '#FFF7ED', iconColor: '#EA580C',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
          github: 'https://github.com/amineitji/Posture-guided_image_synthesis_of_a_person',
          demo: 'y5_ZFsp0C6I',
          demoDesc: isEn ? 'Demo of the conditional GAN system generating realistic human images guided by skeleton pose.' : 'Démonstration du GAN conditionnel générant des images humaines réalistes guidées par la pose squelette.',
        },
        {
          cat: isEn ? 'AI & GenAI' : 'IA & GenAI', catKey: 'ai',
          name: isEn ? 'Football Video Analysis (Computer Vision)' : 'Analyse Vidéo Football (Computer Vision)',
          short: isEn ? 'Real-time player detection, tracking and tactical mapping.' : 'Détection, tracking et cartographie tactique en temps réel.',
          desc: isEn
            ? 'Computer Vision pipeline: YOLOv8/v10 for real-time player, referee and ball detection. Jersey color clustering (KMeans) for team assignment. Pitch line extraction (HoughLines) and homographic projection to map positions onto a 2D pitch. Performance metrics: distance, speed, ball possession.'
            : 'Pipeline Computer Vision : détection temps réel de joueurs, arbitres et ballon avec YOLOv8/v10. Clustering couleur maillot (KMeans) pour l\'attribution des équipes. Extraction des lignes de terrain (HoughLines) et projection homographique 2D. Calcul de métriques : distance, vitesse, possession du ballon.',
          stack: ['YOLOv8', 'YOLOv10', 'OpenCV', 'KMeans', 'Python', 'Homography'],
          iconBg: '#ECFDF5', iconColor: '#16A34A',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
          github: 'https://github.com/amineitji/football-video-detection',
          demo: null,
        },
        {
          cat: 'Data', catKey: 'data',
          name: isEn ? 'Football Web Scraping – WhoScored & SofaScore' : 'Web Scraping Football – WhoScored & SofaScore',
          short: isEn ? 'Automated extraction of 50,000+ player stats from major football analytics platforms.' : 'Extraction automatisée de 50 000+ stats joueurs sur les plateformes d\'analyse football.',
          desc: isEn
            ? 'Automated scraping pipelines for WhoScored and SofaScore (JavaScript-heavy SPAs). Selenium + BeautifulSoup for dynamic content extraction, anti-bot evasion, and session management. Data: player ratings, match stats, heat maps, passing networks — across 5+ seasons. Cleaning, normalization, and export to CSV/PostgreSQL for downstream ML analysis.'
            : 'Pipelines de scraping automatisés sur WhoScored et SofaScore (SPAs JavaScript-heavy). Selenium + BeautifulSoup pour l\'extraction de contenu dynamique, gestion anti-bot et sessions. Données : notes joueurs, statistiques de match, heat maps, réseaux de passes — sur 5+ saisons. Nettoyage, normalisation et export CSV/PostgreSQL pour analyses ML.',
          stack: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'PostgreSQL'],
          iconBg: '#F0FDF4', iconColor: '#16A34A',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
          github: gh,
          demo: null,
        },
        {
          cat: isEn ? 'AI & GenAI' : 'IA & GenAI', catKey: 'ai',
          name: isEn ? 'Penalty Outcome Prediction (ML)' : 'Prédiction de l\'Issue d\'un Penalty (ML)',
          short: isEn ? '77% accuracy Random Forest on 15,000+ penalty kicks.' : 'Random Forest 77% de précision sur 15 000+ tirs au but.',
          desc: isEn
            ? 'Random Forest model predicting penalty kick outcomes from position, run-up angle, goalkeeper behavior, and timing features. 77% accuracy on a Kaggle dataset of 15,000+ shots. Feature engineering, cross-validation, and SHAP-based explainability.'
            : 'Modèle Random Forest prédisant l\'issue des tirs au but à partir de features de position, angle de course, comportement du gardien et timing. 77% de précision sur 15 000+ tirs (Kaggle). Feature engineering, cross-validation et explainabilité SHAP.',
          stack: ['Python', 'Scikit-learn', 'Random Forest', 'SHAP', 'Pandas'],
          iconBg: '#FFF7ED', iconColor: '#F59E0B',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
          github: gh,
          demo: null,
        },
        {
          cat: 'Web & SaaS', catKey: 'web',
          name: 'DiagImmoMarchés',
          short: isEn ? 'Premium SEO web platform for a real estate client.' : 'Plateforme web premium SEO pour client immobilier.',
          desc: isEn
            ? 'Premium web platform for a real estate professional. Optimized for SEO acquisition and conversion. Lighthouse score 95+, load time < 1s. Django backend, Vue.js frontend, Docker deployment.'
            : 'Plateforme web premium pour un professionnel de l\'immobilier. Optimisée pour l\'acquisition SEO et la conversion. Score Lighthouse 95+, temps de chargement < 1s. Backend Django, frontend Vue.js, déploiement Docker.',
          stack: ['Vue.js', 'Django', 'SEO', 'Docker', 'Nginx'],
          iconBg: '#F0FDF4', iconColor: '#16A34A',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
          url: 'https://diagimmomarches.fr/',
          github: null,
          demo: null,
        },
        {
          cat: 'Data', catKey: 'data',
          name: isEn ? 'CDlib – Open Source Contribution' : 'CDlib – Contribution Open Source',
          short: isEn ? 'Contribution to a community detection library for graph analysis.' : 'Contribution à une librairie de détection de communautés dans les graphes.',
          desc: isEn
            ? 'Contribution to CDlib, a Python library for community detection in graphs. Implementation of new clustering algorithms using NetworkX. Code merged into the official release.'
            : 'Contribution à CDlib, bibliothèque Python pour la détection de communautés dans les graphes. Implémentation de nouveaux algorithmes de clustering avec NetworkX. Code mergé dans la version officielle.',
          stack: ['Python', 'NetworkX', 'CDlib', 'Graph Theory'],
          iconBg: '#F5F3FF', iconColor: '#7C3AED',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
          github: 'https://github.com/amineitji/cdlib',
          demo: null,
        },
      ];
    },

    filteredProjects() {
      if (this.activeFilter === 'all') return this.allProjects;
      return this.allProjects.filter(p => p.catKey === this.activeFilter);
    },
  },

  methods: {
    toggleCard(name) {
      this.openCard = this.openCard === name ? null : name;
    },
    openDemo(project) {
      this.activeDemo = {
        videoId: project.demo,
        name: project.name,
        cat: project.cat,
        demoDesc: project.demoDesc || '',
      };
    },
  },
};
</script>

<style scoped>
/* ══ HERO ══ */
.hero-section {
  background: var(--dark);
  position: relative; overflow: hidden;
  padding: 72px 0 60px;
}
.hero-glow {
  position: absolute; top: -80px; left: 50%;
  transform: translateX(-50%);
  width: 700px; height: 400px;
  background: radial-gradient(ellipse, rgba(27,67,50,0.22) 0%, transparent 65%);
  pointer-events: none;
}
.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}
.page-hero { position: relative; max-width: 720px; }
.hero-sub {
  font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.7;
  margin-top: 14px; max-width: 560px;
}
.hero-stats {
  display: flex; align-items: center; gap: 24px;
  margin-top: 28px; flex-wrap: wrap;
}
.hstat { display: flex; flex-direction: column; gap: 2px; }
.hstat-val { font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: -0.04em; line-height: 1; }
.hstat-label { font-size: 0.7rem; color: rgba(255,255,255,0.4); font-family: var(--mono); letter-spacing: 0.05em; text-transform: uppercase; }
.hstat-sep { width: 1px; height: 36px; background: rgba(255,255,255,0.12); }

/* ══ FEATURED ══ */
.featured-section {
  padding: 64px 0 56px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}
.section-label { margin-bottom: 20px; }
.featured-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.featured-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s var(--ease);
}
.featured-card:hover { box-shadow: var(--shadow-lg); border-color: var(--forest-border); transform: translateY(-2px); }

.fc-cover {
  height: 180px;
  position: relative;
  overflow: hidden;
  display: flex; flex-direction: column;
  align-items: flex-start; justify-content: space-between;
  padding: 20px;
}
.fc-screenshot {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
  opacity: 0.92;
}
.fc-cover-inner {
  display: flex; align-items: center; gap: 10px;
  position: relative; z-index: 1;
}
.fc-emoji { font-size: 2rem; }
.fc-name-cover { font-size: 1.1rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
.fc-badges {
  display: flex; gap: 6px; flex-wrap: wrap;
  position: relative; z-index: 1; margin-top: auto;
}
.fc-badge {
  font-size: 0.63rem; font-weight: 700;
  padding: 3px 8px; border-radius: 4px;
  background: rgba(0,0,0,0.55); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.9); letter-spacing: 0.02em;
}
.fc-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
.fc-title { font-size: 1rem; font-weight: 700; color: var(--ink); letter-spacing: -0.01em; }
.fc-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.7; }
.fc-stack { display: flex; flex-wrap: wrap; gap: 5px; }
.fc-links { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px; }
.fc-link {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.78rem; font-weight: 600;
  padding: 6px 14px; border-radius: 6px;
  text-decoration: none; cursor: pointer;
  border: 1px solid transparent; transition: all 0.18s ease;
}
.fc-link-primary { background: var(--forest); color: #fff; border-color: var(--forest); }
.fc-link-primary:hover { background: var(--forest-md); border-color: var(--forest-md); }
.fc-link-demo { background: transparent; color: var(--forest); border-color: var(--forest-border); }
.fc-link-demo:hover { background: var(--forest-lt); }

/* ══ ALL PROJECTS ══ */
.all-section {
  padding: 64px 0 80px;
  background: var(--bg);
}
.all-header {
  display: flex; align-items: flex-end;
  justify-content: space-between; gap: 16px;
  margin-bottom: 28px; flex-wrap: wrap;
}
.all-title {
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 800; letter-spacing: -0.03em;
  color: var(--ink); margin-top: 6px;
}
.filter-bar { display: flex; gap: 6px; flex-wrap: wrap; }
.filter-btn {
  padding: 6px 14px; border-radius: 6px;
  font-family: var(--mono); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
  border: 1px solid var(--border); background: var(--surface); color: var(--muted);
  cursor: pointer; transition: all 0.18s ease;
}
.filter-btn:hover { border-color: var(--forest-border); color: var(--forest); }
.filter-btn.active { background: var(--forest); border-color: var(--forest); color: #fff; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.pcard {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); overflow: hidden;
  cursor: pointer; transition: border-color 0.2s, box-shadow 0.22s;
}
.pcard:hover { border-color: var(--forest-border); box-shadow: var(--shadow-md); }
.pcard.open { border-color: var(--forest-border); }
.pcard-top { display: flex; align-items: flex-start; gap: 12px; padding: 18px 20px; }
.pcard-icon {
  width: 38px; height: 38px; border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.pcard-meta { flex: 1; min-width: 0; }
.pcard-cat {
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted);
  display: block; margin-bottom: 3px; font-family: var(--mono);
}
.pcard-name { font-size: 0.9rem; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
.pcard-short { font-size: 0.78rem; color: var(--muted); line-height: 1.45; }
.pcard-chevron { flex-shrink: 0; color: var(--muted); margin-top: 2px; transition: transform 0.22s var(--ease); }
.pcard-chevron.rotated { transform: rotate(180deg); }

.pcard-expand-inner {
  padding: 0 20px 18px; border-top: 1px solid var(--border);
  padding-top: 14px; display: flex; flex-direction: column; gap: 10px;
}
.pcard-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.7; }
.pcard-stack { display: flex; flex-wrap: wrap; gap: 5px; }
.pcard-links { display: flex; gap: 8px; flex-wrap: wrap; }
.plink {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.75rem; font-weight: 600;
  padding: 5px 12px; border-radius: 6px;
  text-decoration: none; cursor: pointer;
  border: 1px solid var(--border); background: var(--bg); color: var(--muted);
  transition: all 0.18s ease;
}
.plink:hover { background: var(--surface); color: var(--ink); border-color: #9CA3AF; }
.plink-demo { color: var(--forest); border-color: var(--forest-border); background: var(--forest-lt); }
.plink-demo:hover { background: var(--forest); color: #fff; border-color: var(--forest); }
.plink-url { color: var(--forest); }
.plink-url:hover { background: var(--forest-lt); border-color: var(--forest-border); }

/* Expand transition */
.expand-enter-active { transition: max-height 0.32s var(--ease), opacity 0.28s ease; max-height: 0; overflow: hidden; }
.expand-leave-active { transition: max-height 0.22s ease, opacity 0.18s ease; overflow: hidden; }
.expand-enter-to     { max-height: 500px; opacity: 1; }
.expand-leave-from   { max-height: 500px; opacity: 1; }
.expand-enter-from   { opacity: 0; }
.expand-leave-to     { max-height: 0; opacity: 0; }

/* ══ RESPONSIVE ══ */
@media (max-width: 768px) {
  .hero-section { padding: 52px 0 44px; }
  .featured-section { padding: 48px 0 40px; }
  .all-section { padding: 48px 0 64px; }
  .featured-grid { grid-template-columns: 1fr; }
  .cards-grid { grid-template-columns: 1fr; }
  .all-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .hstat-sep { display: none; }
  /* horizontal scroll on filter bar — easier to tap than wrapped rows */
  .filter-bar { flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }
  .filter-bar::-webkit-scrollbar { display: none; }
  .filter-btn { flex-shrink: 0; }
}
@media (max-width: 480px) {
  .hero-section { padding: 40px 0 36px; }
  .hero-sub { font-size: 0.92rem; }
  .hero-stats { gap: 16px; flex-wrap: wrap; }
  .hstat-val { font-size: 1.3rem; }
  .filter-btn { padding: 6px 12px; font-size: 0.7rem; }
  .fc-body { padding: 14px; }
  .fc-cover { height: 160px; }
  .fc-links { flex-direction: column; }
  .fc-link { justify-content: center; }
  .pcard-top { padding: 13px 14px; }
  .pcard-expand-inner { padding: 0 14px 13px; padding-top: 12px; }
  .pcard-name { font-size: 0.85rem; }
}
</style>
