<template>
  <div class="home">

    <!-- ══════════════════════════════
         HERO — dark section
    ══════════════════════════════ -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-gradient"></div>
      </div>
      <div class="container hero-inner">
        <div class="hero-left fu">
          <div class="hero-badges">
            <span class="label-dark">{{ lang === 'en' ? 'AI Engineer · Full-Stack Developer' : 'Ingénieur IA · Développeur Full-Stack' }}</span>
            <div class="hero-avail" v-if="isMichelinActive">
              <span class="avail-dot"></span>
              <span>{{ lang === 'en' ? 'Michelin · until Jul. 2026' : 'Michelin · jusqu\'en juil. 2026' }}</span>
            </div>
          </div>
          <h1 class="hero-name">Amine<br/>ITJI<span class="hero-dot">.</span></h1>
          <p class="hero-bio">{{ t.heroBio }}</p>
          <div class="hero-actions">
            <a :href="`mailto:${email}`" class="btn btn-white" @click.prevent="openHeroComposer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {{ lang === 'en' ? 'Contact me' : 'Me contacter' }}
            </a>
            <a :href="lang === 'en' ? '/Amine_ITJI_Resume_EN.pdf' : '/Amine_ITJI_CV_FR.pdf'" download class="btn btn-ghost-dark">
              CV ↓ {{ lang === 'en' ? 'EN' : 'FR' }}
            </a>
            <div class="cv-both">
              <a :href="lang === 'en' ? '/Amine_ITJI_CV_FR.pdf' : '/Amine_ITJI_Resume_EN.pdf'" download class="cv-alt">
                {{ lang === 'en' ? '+ FR' : '+ EN' }}
              </a>
            </div>
          </div>
          <div class="hero-links">
            <a href="https://linkedin.com/in/amine-itji" target="_blank" rel="noopener noreferrer" class="hero-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/amineitji" target="_blank" rel="noopener noreferrer" class="hero-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a :href="`mailto:${email}`" class="hero-link" @click.prevent="openHeroComposer">
              amineitji@gmail.com
            </a>
          </div>
        </div>

        <div class="hero-right fu" style="animation-delay:.12s;">
          <div class="hero-photo-wrap">
            <img src="pp.jpeg" alt="Amine ITJI" class="hero-photo"/>
            <div class="photo-ring-outer"></div>
          </div>
          <!-- Floating stat cards -->
          <div class="float-card float-top">
            <span class="float-val">1 SaaS</span>
            <span class="float-lbl">{{ lang === 'en' ? 'in production' : 'en production' }}</span>
          </div>
          <div class="float-card float-bot">
            <span class="float-val">Master IA</span>
            <span class="float-lbl">Lyon 1 · 2026</span>
          </div>
        </div>
      </div>

      <!-- Tech ticker -->
      <div class="ticker-wrap">
        <div class="ticker-track">
          <span v-for="(t, i) in tickerItems" :key="i" class="ticker-item">{{ t }}</span>
          <span v-for="(t, i) in tickerItems" :key="'b'+i" class="ticker-item" aria-hidden="true">{{ t }}</span>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
         BENTO STATS
    ══════════════════════════════ -->
    <section class="bento-section">
      <div class="container">
        <div class="bento-grid">
          <!-- Large card: Quick about -->
          <div class="bento-card bento-main">
            <div class="bento-label label">{{ t.aboutLabel }}</div>
            <p class="bento-text">{{ t.aboutText }}</p>
            <div class="bento-chips">
              <span class="chip chip-forest" v-for="c in mainChips" :key="c">{{ c }}</span>
            </div>
          </div>

          <!-- Stat cards -->
          <div class="bento-card bento-stat" v-for="s in t.stats" :key="s.label">
            <span class="stat-val">{{ s.value }}</span>
            <span class="stat-lbl">{{ s.label }}</span>
          </div>

          <!-- Disponibilité card -->
          <div class="bento-card bento-avail">
            <div class="avail-pulse">
              <span class="avail-dot avail-dot-green"></span>
            </div>
            <div class="bento-avail-text">
              <span class="bento-label label">{{ t.availLabel }}</span>
              <span class="bento-avail-sub">{{ t.availSub }}</span>
            </div>
          </div>

          <!-- Lyon card -->
          <div class="bento-card bento-location">
            <div class="location-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span class="bento-label label">{{ t.locationLabel }}</span>
            <span class="location-cities">Lyon · Paris · Genève</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
         EXPERIENCE MAP
    ══════════════════════════════ -->
    <section class="map-section">
      <div class="container">
        <div class="section-head">
          <span class="label">{{ t.mapLabel }}</span>
          <h2 class="s-title" style="margin-top:8px;">{{ t.mapTitle }}</h2>
          <p class="s-sub" style="margin-top:8px;">{{ t.mapSub }}</p>
        </div>
        <FranceMap />
      </div>
    </section>

    <!-- ══════════════════════════════
         FEATURED PROJECTS
    ══════════════════════════════ -->
    <section class="projects-section">
      <div class="container">
        <div class="section-head-row">
          <div>
            <span class="label">{{ t.projLabel }}</span>
            <h2 class="s-title" style="margin-top:8px;">{{ t.projTitle }}</h2>
          </div>
          <router-link to="/projets" class="btn btn-outline see-all">
            {{ t.projMore }} →
          </router-link>
        </div>

        <div class="proj-bento">
          <!-- DiagERP - featured large -->
          <a href="https://diagerp.fr" target="_blank" rel="noopener noreferrer" class="proj-card proj-featured">
            <div class="proj-cover proj-cover-green">
              <div class="proj-cover-content">
                <img src="diagERP.png" alt="DiagERP" class="proj-screenshot" loading="lazy"/>
              </div>
            </div>
            <div class="proj-body">
              <div class="proj-meta">
                <span class="proj-tag">{{ lang === 'en' ? 'SaaS B2B · Live' : 'SaaS B2B · En production' }}</span>
                <span class="proj-arrow">↗</span>
              </div>
              <h3 class="proj-name">DiagERP</h3>
              <p class="proj-desc">{{ t.diagDesc }}</p>
              <div class="proj-stack">
                <span class="chip" v-for="s in ['Django', 'Vue.js', 'Stripe', 'AWS']" :key="s">{{ s }}</span>
              </div>
            </div>
          </a>

          <!-- AInsights - Michelin -->
          <div class="proj-card">
            <div class="proj-cover proj-cover-dark">
              <div class="proj-cover-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>
                <span>AInsights</span>
              </div>
              <span class="proj-cover-org">Michelin · ISPARK</span>
            </div>
            <div class="proj-body">
              <div class="proj-meta">
                <span class="proj-tag">RAG · GenAI</span>
              </div>
              <h3 class="proj-name">AInsights @ Michelin</h3>
              <p class="proj-desc">{{ t.ainsightsDesc }}</p>
              <div class="proj-stack">
                <span class="chip" v-for="s in ['RAG', 'LLM', 'Tavily', 'Python']" :key="s">{{ s }}</span>
              </div>
            </div>
          </div>

          <!-- LLM Educatif -->
          <div class="proj-card proj-demo" @click="openYoutube('hfNYvwSKEj8')">
            <div class="proj-body" style="height:100%;display:flex;flex-direction:column;gap:10px;">
              <div class="proj-meta">
                <span class="proj-tag">AI · LLM</span>
                <span class="proj-play-btn">▶ {{ lang === 'en' ? 'Demo' : 'Démo' }}</span>
              </div>
              <h3 class="proj-name">{{ lang === 'en' ? 'Educational LLM' : 'LLM Éducatif' }}</h3>
              <p class="proj-desc">{{ t.llmDesc }}</p>
              <div class="proj-stack" style="margin-top:auto;">
                <span class="chip" v-for="s in ['LLM', 'RAG', 'Python']" :key="s">{{ s }}</span>
              </div>
            </div>
          </div>

          <!-- Multi-Agents -->
          <div class="proj-card proj-demo" @click="openYoutube('cBz44VUF8AM')">
            <div class="proj-body" style="height:100%;display:flex;flex-direction:column;gap:10px;">
              <div class="proj-meta">
                <span class="proj-tag">Multi-Agents</span>
                <span class="proj-play-btn">▶ {{ lang === 'en' ? 'Demo' : 'Démo' }}</span>
              </div>
              <h3 class="proj-name">{{ lang === 'en' ? 'Tourist Guide System' : 'Guide Touristique' }}</h3>
              <p class="proj-desc">{{ t.agentDesc }}</p>
              <div class="proj-stack" style="margin-top:auto;">
                <span class="chip" v-for="s in ['Multi-Agents', 'LLM']" :key="s">{{ s }}</span>
              </div>
            </div>
          </div>

          <!-- GAN -->
          <div class="proj-card proj-demo" @click="openYoutube('y5_ZFsp0C6I')">
            <div class="proj-body" style="height:100%;display:flex;flex-direction:column;gap:10px;">
              <div class="proj-meta">
                <span class="proj-tag">Computer Vision · GAN</span>
                <span class="proj-play-btn">▶ {{ lang === 'en' ? 'Demo' : 'Démo' }}</span>
              </div>
              <h3 class="proj-name">{{ lang === 'en' ? 'Skeleton GAN' : 'GAN Squelette' }}</h3>
              <p class="proj-desc">{{ t.ganDesc }}</p>
              <div class="proj-stack" style="margin-top:auto;">
                <span class="chip" v-for="s in ['PyTorch', 'WGAN-GP']" :key="s">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
         SKILLS VISUALIZATION
    ══════════════════════════════ -->
    <section class="skills-section">
      <div class="container">
        <div class="section-head-row" style="margin-bottom:28px;">
          <div>
            <span class="label">{{ t.skillsLabel }}</span>
            <h2 class="s-title" style="margin-top:8px;">{{ t.skillsTitle }}</h2>
          </div>
        </div>
        <div class="skills-bento">
          <div class="skill-group-card" v-for="g in skillGroups" :key="g.name">
            <div class="sg-header">
              <div class="sg-icon" :style="{ background: g.bg, color: g.color }" v-html="g.icon"></div>
              <span class="sg-name">{{ g.name }}</span>
            </div>
            <div class="sg-tags">
              <span class="skill-tag" v-for="item in g.items" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
         CTA FREELANCE — dark section
    ══════════════════════════════ -->
    <section class="cta-dark-section">
      <div class="cta-dark-bg">
        <div class="cta-dark-grid"></div>
      </div>
      <div class="container cta-dark-inner">
        <div class="cta-dark-left">
          <div class="cta-avail-pill">
            <span class="avail-dot avail-dot-green"></span>
            {{ t.ctaBadge }}
          </div>
          <h2 class="display-dark" style="margin-top:16px;">{{ t.ctaTitle }}</h2>
          <p class="cta-dark-sub">{{ t.ctaSub }}</p>
          <div class="cta-dark-actions">
            <a :href="`mailto:${email}`" class="btn btn-white" @click.prevent="openCtaComposer">
              {{ t.ctaBtn }}
            </a>
            <router-link to="/services" class="btn btn-ghost-dark">{{ t.ctaServices }}</router-link>
          </div>
          <p class="cta-dark-note">{{ t.ctaNote }}</p>
        </div>
        <div class="cta-dark-right">
          <div class="cta-fact" v-for="f in t.ctaFacts" :key="f.label">
            <span class="cta-fact-val">{{ f.val }}</span>
            <span class="cta-fact-lbl">{{ f.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- YouTube quick modal -->
    <VideoModal
      :visible="!!activeVideo"
      :video-id="activeVideo || ''"
      :title="activeVideoTitle"
      tag="Démo"
      @close="activeVideo = null"
    />
  </div>
</template>

<script>
import FranceMap from './FranceMap.vue';
import VideoModal from './VideoModal.vue';

const EMAIL = 'amineitji@gmail.com';
const MICHELIN_END = new Date('2026-08-01');

export default {
  name: 'HomePage',
  components: { FranceMap, VideoModal },
  inject: ['getLang', 'openEmailComposer'],

  data() {
    return {
      email: EMAIL,
      activeVideo: null,
      activeVideoTitle: '',
      tickerItems: ['Python', 'LLM', 'RAG', 'Vue.js', 'Django', 'PyTorch', 'YOLO', 'AWS', 'Docker', 'LangChain', 'FastAPI', 'PostgreSQL', 'CI/CD', 'Multi-Agents', 'Computer Vision'],
    };
  },

  computed: {
    lang() { return this.getLang(); },
    isMichelinActive() { return new Date() < MICHELIN_END; },

    mainChips() {
      return this.lang === 'en'
        ? ['GenAI', 'RAG', 'Full-Stack', 'SaaS B2B', 'Freelance']
        : ['GenAI', 'RAG', 'Full-Stack', 'SaaS B2B', 'Freelance'];
    },

    skillGroups() {
      return [
        {
          name: 'IA & GenAI',
          bg: '#EFF6FF', color: '#1D4ED8',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
          items: ['LLM', 'RAG', 'LangChain', 'Agents', 'PyTorch', 'YOLO', 'OpenAI', 'Gemini', 'Prompt Eng.'],
        },
        {
          name: 'Web & Backend',
          bg: '#F0FDF4', color: '#16A34A',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
          items: ['Django', 'Vue.js 3', 'FastAPI', 'REST API', 'PostgreSQL', 'Stripe'],
        },
        {
          name: 'Cloud & DevOps',
          bg: '#FFF7ED', color: '#D97706',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
          items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'],
        },
        {
          name: 'Data & Scraping',
          bg: '#F5F3FF', color: '#7C3AED',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
          items: ['Pandas', 'Selenium', 'BeautifulSoup', 'NumPy', 'Power BI', 'SQL'],
        },
      ];
    },

    t() {
      const isEn = this.lang === 'en';
      return {
        heroBio: isEn
          ? 'AI Engineer who builds — RAG pipelines, autonomous agents, Computer Vision, SaaS products. From research to production.'
          : 'Ingénieur IA qui construit — pipelines RAG, agents autonomes, Computer Vision, produits SaaS. De la recherche à la production.',

        aboutLabel: isEn ? 'At a glance' : 'En bref',
        aboutText: isEn
          ? 'Master of Science in AI at Lyon 1. Currently AI Project Manager at Michelin. Co-founder of DiagERP (B2B SaaS, live). Freelance developer since 2023.'
          : 'Master Intelligence Artificielle Lyon 1. Actuellement AI Project Manager chez Michelin. Co-fondateur DiagERP (SaaS B2B, live). Développeur freelance depuis 2023.',

        availLabel: isEn ? 'Availability' : 'Disponibilité',
        availSub: isEn ? 'Open to missions' : 'Ouvert aux missions',

        locationLabel: isEn ? 'Based in' : 'Localisation',

        stats: isEn
          ? [{ value: '3+', label: 'Years dev' }, { value: '1 SaaS', label: 'Live in prod' }, { value: '< 24h', label: 'Response' }]
          : [{ value: '3+', label: 'Ans de dev' }, { value: '1 SaaS', label: 'En prod' }, { value: '< 24h', label: 'Réponse' }],

        mapLabel: isEn ? 'Experience map' : 'Carte des expériences',
        mapTitle: isEn ? 'Where I built things.' : 'Où j\'ai construit des choses.',
        mapSub: isEn
          ? 'From university to industry — a journey through French tech and innovation.'
          : 'De l\'université à l\'industrie — un parcours au cœur de la tech et de l\'innovation française.',

        projLabel: isEn ? 'Selected work' : 'Projets sélectionnés',
        projTitle: isEn ? 'What I shipped.' : 'Ce que j\'ai livré.',
        projMore: isEn ? 'All projects' : 'Tous les projets',

        diagDesc: isEn
          ? 'SaaS automating ERP compliance reports for real estate pros. Django, Vue.js, Stripe, AWS. Live.'
          : 'SaaS automatisant les rapports ERP réglementaires pour l\'immobilier. Django, Vue.js, Stripe, AWS. En production.',
        ainsightsDesc: isEn
          ? 'RAG-based strategic intelligence system at Michelin: Tavily ingestion, embeddings, LLM content generation.'
          : 'Système de veille RAG chez Michelin : ingestion Tavily, embeddings, génération LLM.',
        llmDesc: isEn
          ? 'Interactive Python tutor using RAG and adaptive LLM feedback.'
          : 'Tuteur Python interactif par RAG et feedback LLM adaptatif.',
        agentDesc: isEn
          ? 'Multi-agent system for intelligent museum visitor guidance.'
          : 'Système multi-agents pour le guidage de visiteurs de musée.',
        ganDesc: isEn
          ? 'Conditional WGAN-GP: skeleton pose replaces random noise to generate realistic images.'
          : 'WGAN-GP conditionnel : pose squelette remplace le bruit aléatoire.',

        skillsLabel: isEn ? 'Technical skills' : 'Compétences techniques',
        skillsTitle: isEn ? 'My stack.' : 'Mon stack.',

        ctaBadge: isEn ? 'Open to freelance missions' : 'Disponible pour missions freelance',
        ctaTitle: isEn ? "Let's build\nsomething." : 'Construisons\nquelque chose.',
        ctaSub: isEn
          ? 'AI development, full-stack web, data pipelines, automation. I reply within 24h with a concrete proposal.'
          : 'Développement IA, fullstack web, data, automatisation. Je réponds sous 24h avec une proposition concrète.',
        ctaBtn: isEn ? 'Get in touch' : 'Prendre contact',
        ctaServices: isEn ? 'See services' : 'Voir les services',
        ctaNote: isEn ? '✓ Free · ✓ No commitment · ✓ < 24h' : '✓ Gratuit · ✓ Sans engagement · ✓ < 24h',
        ctaFacts: isEn
          ? [{ val: '< 24h', label: 'Response time' }, { val: '3+', label: 'Years exp.' }, { val: '100%', label: 'Delivery rate' }]
          : [{ val: '< 24h', label: 'Réponse' }, { val: '3+', label: 'Ans exp.' }, { val: '100%', label: 'Livrés' }],
      };
    },
  },

  methods: {
    openHeroComposer() {
      this.openEmailComposer({ source: 'Home hero', intent: 'mission', service: 'general' });
    },
    openCtaComposer() {
      this.openEmailComposer({ source: 'Home CTA', intent: 'mission', service: 'general' });
    },
    openYoutube(id) {
      this.activeVideo = id;
    },
  },
};
</script>

<style scoped>
.home { display: flex; flex-direction: column; }

/* ═══════════ HERO ═══════════ */
.hero-section {
  background: var(--dark);
  position: relative;
  overflow: hidden;
  padding: 80px 0 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(27,67,50,0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(27,67,50,0.15) 1px, transparent 1px);
  background-size: 48px 48px;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(27,67,50,0.3) 0%, transparent 70%);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 60px;
  align-items: center;
  padding-bottom: 80px;
  position: relative;
  z-index: 1;
}

.hero-left { display: flex; flex-direction: column; gap: 20px; }

.hero-badges {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-avail {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.06em;
}

.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.avail-dot-green {
  background: #4ADE80;
  box-shadow: 0 0 0 2px rgba(74,222,128,0.2);
  animation: pulse-green-dark 2s infinite;
}

@keyframes pulse-green-dark {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 2px rgba(74,222,128,0.2); }
  50% { opacity: 0.7; box-shadow: 0 0 0 5px rgba(74,222,128,0.05); }
}

.hero-name {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.95;
  color: #fff;
}

.hero-dot { color: var(--forest-md); }

.hero-bio {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.75;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.cv-both { display: flex; align-items: center; }

.cv-alt {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: rgba(255,255,255,0.35);
  text-decoration: none;
  letter-spacing: 0.06em;
  padding: 4px 8px;
  transition: color 0.2s;
}
.cv-alt:hover { color: rgba(255,255,255,0.7); }

.hero-links {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px;
  transition: all 0.18s ease;
  letter-spacing: 0.02em;
}
.hero-link:hover {
  color: rgba(255,255,255,0.85);
  border-color: rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.06);
}

/* Hero right — photo */
.hero-right { position: relative; display: flex; justify-content: center; }

.hero-photo-wrap {
  position: relative;
  width: 280px;
  height: 280px;
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  position: relative;
  z-index: 2;
  filter: grayscale(15%) contrast(1.05);
}

.photo-ring-outer {
  position: absolute;
  inset: -8px;
  border-radius: 26px;
  border: 1px solid rgba(27,67,50,0.4);
  z-index: 1;
}

/* Float cards */
.float-card {
  position: absolute;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 3;
}

.float-top { top: -16px; right: -20px; }
.float-bot { bottom: -16px; left: -20px; }

.float-val {
  font-size: 0.95rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
}
.float-lbl {
  font-family: var(--mono);
  font-size: 0.6rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Ticker */
.ticker-wrap {
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 14px 0;
  position: relative;
  z-index: 1;
}

.ticker-wrap::before, .ticker-wrap::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.ticker-wrap::before { left: 0; background: linear-gradient(90deg, var(--dark), transparent); }
.ticker-wrap::after  { right: 0; background: linear-gradient(-90deg, var(--dark), transparent); }

.ticker-track {
  display: flex;
  gap: 0;
  animation: ticker-scroll 28s linear infinite;
  width: max-content;
}

.ticker-item {
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0 28px;
  white-space: nowrap;
  position: relative;
}
.ticker-item::after {
  content: '·';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(27,67,50,0.6);
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ═══════════ BENTO ═══════════ */
.bento-section { padding: 56px 0; }

.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  gap: 14px;
}

.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 22px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.bento-card:hover {
  border-color: var(--forest-border);
  box-shadow: var(--shadow-md);
}

.bento-main {
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bento-text {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
}

.bento-chips { display: flex; flex-wrap: wrap; gap: 6px; }

.bento-stat {
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4px;
}

.stat-val {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--ink);
  letter-spacing: -0.04em;
}

.stat-lbl {
  font-family: var(--mono);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.bento-avail {
  grid-column: span 2;
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, var(--forest-lt) 0%, #fff 100%);
  border-color: var(--forest-border);
}

.avail-pulse {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(74,222,128,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  animation: pulse-ring 2.5s ease-in-out infinite;
}

@keyframes pulse-ring {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.2); }
  50% { box-shadow: 0 0 0 10px rgba(74,222,128,0); }
}

.avail-dot-green {
  background: #16A34A;
}

.bento-avail-text { display: flex; flex-direction: column; gap: 3px; }
.bento-avail-sub { font-size: 0.85rem; font-weight: 700; color: var(--forest); }

.bento-location {
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.location-icon {
  width: 36px;
  height: 36px;
  background: var(--bg);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--forest);
}

.location-cities {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink);
}

/* ═══════════ MAP ═══════════ */
.map-section { padding: 56px 0; background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

.section-head { margin-bottom: 36px; }

/* ═══════════ PROJECTS ═══════════ */
.projects-section { padding: 56px 0; }

.section-head-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.see-all { font-size: 0.8rem; }

.proj-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 14px;
}

.proj-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.22s, transform 0.22s var(--ease);
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
.proj-card:hover {
  border-color: var(--forest-border);
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

/* Featured card spans 2 columns */
.proj-featured {
  grid-column: span 2;
  grid-row: span 1;
}

.proj-demo {
  cursor: pointer;
  min-height: 180px;
}

.proj-cover {
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.proj-cover-green {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
}

.proj-screenshot {
  width: 85%;
  height: 90%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  box-shadow: var(--shadow-lg);
  margin-top: 20px;
}

.proj-cover-dark {
  background: linear-gradient(135deg, #0F1612 0%, #1B4332 100%);
  flex-direction: column;
  gap: 8px;
}

.proj-cover-icon {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.8);
  font-size: 1.1rem;
  font-weight: 700;
}

.proj-cover-org {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.08em;
}

.proj-body {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.proj-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.proj-tag {
  font-family: var(--mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.proj-arrow { font-size: 0.9rem; color: var(--forest-md); }

.proj-play-btn {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--forest);
  background: var(--forest-lt);
  border: 1px solid var(--forest-border);
  padding: 3px 9px;
  border-radius: 4px;
  letter-spacing: 0.02em;
  transition: all 0.18s ease;
}
.proj-card:hover .proj-play-btn {
  background: var(--forest);
  color: #fff;
  border-color: var(--forest);
}

.proj-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.01em;
}

.proj-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.65;
}

.proj-stack { display: flex; flex-wrap: wrap; gap: 4px; }

/* ═══════════ SKILLS ═══════════ */
.skills-section { padding: 56px 0; background: var(--dark); }

.skills-section .label { color: rgba(255,255,255,0.35); }
.skills-section .s-title { color: #fff; }

.skills-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.skill-group-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-lg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background 0.2s, border-color 0.2s;
}
.skill-group-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.15);
}

.sg-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sg-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sg-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: rgba(255,255,255,0.8);
}

.sg-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.skill-tag {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 500;
  padding: 4px 9px;
  border-radius: 5px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.02em;
  transition: all 0.15s ease;
}
.skill-group-card:hover .skill-tag {
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.75);
}

/* ═══════════ CTA DARK ═══════════ */
.cta-dark-section {
  background: var(--forest);
  position: relative;
  overflow: hidden;
  padding: 80px 0;
}

.cta-dark-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-dark-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 48px 48px;
}

.cta-dark-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: center;
}

.cta-dark-left { display: flex; flex-direction: column; gap: 16px; }

.cta-avail-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
}

.display-dark { white-space: pre-line; }

.cta-dark-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.75;
  max-width: 500px;
}

.cta-dark-actions { display: flex; gap: 10px; flex-wrap: wrap; }

.cta-dark-note {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.06em;
}

.cta-dark-right {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 1px solid rgba(255,255,255,0.12);
  padding-left: 60px;
}

.cta-fact {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.cta-fact:last-child { border-bottom: none; }

.cta-fact-val {
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.04em;
}

.cta-fact-lbl {
  font-family: var(--mono);
  font-size: 0.62rem;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 1100px) {
  .bento-grid { grid-template-columns: repeat(4, 1fr); }
  .bento-main { grid-column: span 4; }
  .bento-stat { grid-column: span 1; }
  .bento-avail { grid-column: span 2; }
  .bento-location { grid-column: span 2; }
  .skills-bento { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 40px; padding-bottom: 60px; }
  .hero-right { display: none; }
  .proj-bento { grid-template-columns: repeat(2, 1fr); }
  .proj-featured { grid-column: span 2; }
  .cta-dark-inner { grid-template-columns: 1fr; }
  .cta-dark-right { border-left: none; padding-left: 0; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 32px; flex-direction: row; gap: 40px; flex-wrap: wrap; }
  .cta-fact { border-bottom: none; padding: 0; }
}

@media (max-width: 640px) {
  .hero-section { padding: 48px 0 0; }
  .hero-name { font-size: 3.2rem; }
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .bento-main { grid-column: span 2; }
  .bento-avail { grid-column: span 2; }
  .bento-location { grid-column: span 2; }
  .proj-bento { grid-template-columns: 1fr; }
  .proj-featured { grid-column: span 1; }
  .skills-bento { grid-template-columns: 1fr; }
  .section-head-row { flex-direction: column; align-items: flex-start; gap: 12px; }
}
@media (max-width: 480px) {
  .hero-section { padding: 36px 0 0; }
  .hero-name { font-size: 2.5rem; line-height: 0.92; }
  .hero-bio { font-size: 0.93rem; }
  .hero-left { gap: 16px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions .btn { justify-content: center; }
  .cv-both { justify-content: flex-start; }
  .hero-links { flex-wrap: wrap; gap: 4px; }
  .hero-link { font-size: 0.7rem; padding: 4px 10px; }
  /* bento: keep 2-col for stats, stretch wide items */
  .bento-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .bento-main { grid-column: span 2; padding: 18px; }
  .bento-avail { grid-column: span 2; padding: 16px; }
  .bento-location { grid-column: span 2; }
  .bento-stat { padding: 16px 10px; }
  .stat-val { font-size: 1.4rem; }
  .bento-card { border-radius: var(--radius); }
  .cta-dark-right { flex-direction: column; gap: 20px; }
  .section-head { margin-bottom: 24px; }
}
</style>
