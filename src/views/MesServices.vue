<template>
  <div class="services-page">

    <!-- ══ HERO (DARK) ══ -->
    <section class="hero-section">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="container">
        <div class="page-hero fu">
          <div class="hero-status">
            <span class="hero-status-dot"></span>
            {{ t.status }}
          </div>
          <h1 class="display-dark" style="margin-top:16px;white-space:pre-line;">{{ t.title }}</h1>
          <p class="hero-sub">{{ t.sub }}</p>
          <p class="disclaimer">
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {{ t.disclaimer }}
          </p>
        </div>
      </div>
    </section>

    <!-- ══ SERVICES GRID ══ -->
    <section class="services-section fu" style="animation-delay:.08s;">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="s in t.services" :key="s.id" :class="{ featured: s.featured }">
            <div class="service-icon" :style="{ background: s.iconBg }">
              <span v-html="s.icon"></span>
            </div>
            <div class="service-body">
              <h3 class="service-name">{{ s.name }}</h3>
              <p class="service-desc">{{ s.desc }}</p>
              <ul class="service-list">
                <li v-for="item in s.items" :key="item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="service-footer">
              <span class="service-price">{{ s.price }}</span>
              <button class="btn btn-forest service-cta" @click="openServiceComposer(s)">
                {{ t.ctaBtn }} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ HOW I WORK (DARK) ══ -->
    <section class="process-section fu" style="animation-delay:.14s;">
      <div class="container">
        <div class="section-head">
          <span class="label-dark">{{ t.process.eyebrow }}</span>
          <h2 class="process-title">{{ t.process.title }}</h2>
        </div>
        <div class="process-steps">
          <div class="step" v-for="(step, i) in t.process.steps" :key="step.title">
            <div class="step-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="step-body">
              <h4 class="step-title">{{ step.title }}</h4>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ STACK ══ -->
    <section class="stack-section fu" style="animation-delay:.18s;">
      <div class="container">
        <div class="section-head">
          <span class="label">{{ t.stack.eyebrow }}</span>
          <h2 class="s-title" style="margin-top:10px;font-size:1.6rem;">{{ t.stack.title }}</h2>
        </div>
        <div class="stack-grid">
          <div class="stack-group" v-for="g in t.stack.groups" :key="g.name">
            <span class="stack-group-name">{{ g.name }}</span>
            <div class="stack-chips">
              <span class="chip" v-for="c in g.items" :key="c">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CTA CONTACT ══ -->
    <section class="cta-section fu" style="animation-delay:.22s;">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-left">
            <div class="cta-avail">
              <span class="avail-dot-green"></span>
              {{ t.cta.available }}
            </div>
            <h2 class="cta-title">{{ t.cta.title }}</h2>
            <p class="cta-sub">{{ t.cta.sub }}</p>
            <div class="cta-actions">
              <a :href="`mailto:${email}`" class="btn btn-white" @click.prevent="openGeneralComposer">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {{ t.cta.btn }}
              </a>
              <router-link to="/projets" class="btn btn-ghost-dark">{{ t.cta.seeWork }}</router-link>
            </div>
          </div>
          <div class="cta-facts">
            <div class="fact" v-for="f in t.cta.facts" :key="f.label">
              <span class="fact-val">{{ f.val }}</span>
              <span class="fact-lbl">{{ f.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'MesServices',
  inject: ['getLang', 'openEmailComposer'],

  data() {
    return { email: CONTACT_EMAIL };
  },

  computed: {
    lang() { return this.getLang(); },

    t() {
      const isEn = this.lang === 'en';

      const iconAI = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>';
      const iconWeb = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
      const iconData = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>';
      const iconConsult = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
      const iconCV = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';

      return {
        status: isEn ? 'Open to freelance missions' : 'Disponible pour missions freelance',
        title: isEn ? 'What I build\nfor you.' : 'Ce que je construis\npour vous.',
        sub: isEn
          ? 'AI engineer and full-stack developer with 3+ years of experience delivering production-ready systems. I cover the full scope: ideation, architecture, code, deployment.'
          : 'Ingénieur IA et développeur full-stack avec 3+ ans d\'expérience à livrer des systèmes en production. Je couvre l\'ensemble du spectre : idéation, architecture, code, déploiement.',
        disclaimer: isEn
          ? 'Currently on internship at Michelin until July 2026. Available for freelance missions in parallel, with response guaranteed within 24h.'
          : 'Actuellement en stage chez Michelin jusqu\'en juillet 2026. Disponible pour des missions freelance en parallèle, avec réponse garantie sous 24h.',

        ctaBtn: isEn ? 'Get a quote' : 'Demander un devis',

        services: [
          {
            id: 'ai',
            featured: true,
            name: isEn ? 'AI & LLM Development' : 'Développement IA & LLM',
            icon: iconAI,
            iconBg: '#EFF6FF',
            desc: isEn
              ? 'Build production-grade AI systems: RAG pipelines, autonomous agents, chatbots, or LLM integration into existing applications.'
              : 'Conception de systèmes IA en production : pipelines RAG, agents autonomes, chatbots métier ou intégration LLM dans des applications existantes.',
            items: isEn
              ? ['RAG pipelines (ingestion, embeddings, retrieval)', 'Autonomous AI agents (LangChain, multi-agent)', 'Custom chatbots with business knowledge base', 'OpenAI / Gemini / Mistral API integration', 'Prompt engineering & optimization']
              : ['Pipelines RAG (ingestion, embeddings, retrieval)', 'Agents autonomes (LangChain, multi-agents)', 'Chatbots métier avec base de connaissance', 'Intégration API OpenAI / Gemini / Mistral', 'Prompt engineering & optimisation'],
            price: isEn ? 'From €800 / project' : 'À partir de 800€ / projet',
          },
          {
            id: 'web',
            featured: false,
            name: isEn ? 'Full-Stack Web Development' : 'Développement Full-Stack Web',
            icon: iconWeb,
            iconBg: '#F0FDF4',
            desc: isEn
              ? 'Complete web applications, SaaS, or REST APIs — from architecture to cloud deployment. I build what you need, nothing more.'
              : 'Applications web complètes, SaaS ou APIs REST — de l\'architecture au déploiement cloud. Je construis ce dont vous avez besoin, rien de plus.',
            items: isEn
              ? ['Django + Vue.js full-stack applications', 'REST APIs and microservices', 'Stripe / payment integration', 'AWS + Docker + CI/CD deployment', 'PostgreSQL, JWT auth, OAuth2']
              : ['Applications full-stack Django + Vue.js', 'APIs REST et microservices', 'Intégration Stripe / paiement en ligne', 'Déploiement AWS + Docker + CI/CD', 'PostgreSQL, authentification JWT, OAuth2'],
            price: isEn ? 'From €600 / project' : 'À partir de 600€ / projet',
          },
          {
            id: 'data',
            featured: false,
            name: isEn ? 'Automation & Data Engineering' : 'Automatisation & Data Engineering',
            icon: iconData,
            iconBg: '#FFF7ED',
            desc: isEn
              ? 'Web scraping, ETL pipelines, automated workflows. Transform raw data into clean, exploitable datasets and dashboards.'
              : 'Web scraping, pipelines ETL, workflows automatisés. Transformer des données brutes en datasets propres et exploitables.',
            items: isEn
              ? ['Web scraping (Selenium, BeautifulSoup, Playwright)', 'ETL pipelines and data transformation', 'Automated business workflows', 'Data cleaning and normalization', 'Dashboards and reporting (Power BI, custom)']
              : ['Web scraping (Selenium, BeautifulSoup, Playwright)', 'Pipelines ETL et transformation de données', 'Workflows métier automatisés', 'Nettoyage et normalisation de données', 'Dashboards et reporting (Power BI, custom)'],
            price: isEn ? 'From €300 / project' : 'À partir de 300€ / projet',
          },
          {
            id: 'consult',
            featured: false,
            name: isEn ? 'AI Consulting & Prototyping' : 'Consulting IA & Prototypage',
            icon: iconConsult,
            iconBg: '#F5F3FF',
            desc: isEn
              ? 'Help your team identify automation opportunities, rapidly prototype an AI proof-of-concept, or upskill on GenAI tools.'
              : 'Identifier les opportunités d\'automatisation, prototyper rapidement un PoC IA, ou accompagner votre équipe dans l\'adoption des outils GenAI.',
            items: isEn
              ? ['Automation opportunity audit', 'Rapid AI prototyping (PoC in 1–2 weeks)', 'GenAI adoption and team onboarding', 'Tech spec and architecture review', 'AI tools training sessions']
              : ['Audit d\'opportunités d\'automatisation', 'Prototypage IA rapide (PoC en 1–2 semaines)', 'Accompagnement adoption GenAI en équipe', 'Cadrage technique et revue d\'architecture', 'Formations outils IA'],
            price: isEn ? '€350 / day' : '350€ / jour',
          },
          {
            id: 'cv',
            featured: false,
            name: isEn ? 'Computer Vision' : 'Computer Vision',
            icon: iconCV,
            iconBg: '#FFF1F2',
            desc: isEn
              ? 'Object detection, real-time video analysis, image processing. From YOLO-based detection to custom vision models.'
              : 'Détection d\'objets, analyse vidéo temps réel, traitement d\'images. De la détection YOLO aux modèles de vision personnalisés.',
            items: isEn
              ? ['Object detection with YOLO (v8, v10)', 'Real-time video analysis pipelines', 'Image classification and segmentation', 'Custom dataset annotation and training', 'Integration with existing systems']
              : ['Détection d\'objets avec YOLO (v8, v10)', 'Pipelines d\'analyse vidéo en temps réel', 'Classification et segmentation d\'images', 'Annotation de dataset et entraînement custom', 'Intégration dans des systèmes existants'],
            price: isEn ? 'On quote' : 'Sur devis',
          },
        ],

        process: {
          eyebrow: isEn ? 'How it works' : 'Comment ça marche',
          title: isEn ? 'Simple, fast, delivered.' : 'Simple, rapide, livré.',
          steps: isEn
            ? [
                { title: 'Contact & Scoping', desc: 'You describe your project in a few lines. I respond within 24h with questions and a first estimate — no commitment.' },
                { title: 'Architecture & Proposal', desc: 'We align on the scope, timeline, and tech stack. I send a detailed written proposal.' },
                { title: 'Development & Updates', desc: 'I build iteratively with regular updates. You stay in the loop without getting lost in technical details.' },
                { title: 'Delivery & Handover', desc: 'Clean code, deployment, documentation. The product is yours — I make sure you can maintain it.' },
              ]
            : [
                { title: 'Contact & Cadrage', desc: 'Vous décrivez votre projet en quelques lignes. Je réponds sous 24h avec des questions et une première estimation — sans engagement.' },
                { title: 'Architecture & Proposition', desc: 'On s\'aligne sur le périmètre, le délai et la stack. J\'envoie une proposition détaillée par écrit.' },
                { title: 'Développement & Mises à jour', desc: 'Je construis itérativement avec des points réguliers. Vous restez dans la boucle sans vous perdre dans les détails techniques.' },
                { title: 'Livraison & Passation', desc: 'Code propre, déploiement, documentation. Le produit vous appartient — je m\'assure que vous pouvez le maintenir.' },
              ],
        },

        stack: {
          eyebrow: isEn ? 'Technical stack' : 'Stack technique',
          title: isEn ? 'Tools I work with.' : 'Les outils avec lesquels je travaille.',
          groups: [
            { name: isEn ? 'Languages' : 'Langages', items: ['Python', 'JavaScript', 'SQL', 'C/C++'] },
            { name: 'IA & GenAI', items: ['LLM', 'RAG', 'LangChain', 'PyTorch', 'YOLO', 'Agents', 'OpenAI', 'Gemini'] },
            { name: isEn ? 'Web & Backend' : 'Web & Backend', items: ['Django', 'Vue.js', 'FastAPI', 'REST API', 'PostgreSQL'] },
            { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'] },
            { name: 'Data', items: ['Pandas', 'Selenium', 'BeautifulSoup', 'NumPy', 'Power BI'] },
          ],
        },

        cta: {
          available: isEn ? 'Available now' : 'Disponible maintenant',
          title: isEn ? 'Let\'s talk about\nyour project.' : 'Parlons de\nvotre projet.',
          sub: isEn
            ? 'Send me a brief description of your project. I\'ll get back to you within 24h with a concrete proposal — no commitment, no sales pitch.'
            : 'Envoyez-moi une description de votre projet. Je reviens vers vous sous 24h avec une proposition concrète — sans engagement, sans jargon.',
          btn: isEn ? 'Send a message' : 'Envoyer un message',
          seeWork: isEn ? 'See my work' : 'Voir mes projets',
          facts: isEn
            ? [{ val: '< 24h', label: 'Response time' }, { val: '3+', label: 'Years experience' }, { val: '1 SaaS', label: 'Live in production' }]
            : [{ val: '< 24h', label: 'Temps de réponse' }, { val: '3+', label: 'Ans d\'expérience' }, { val: '1 SaaS', label: 'En production' }],
        },
      };
    },
  },

  methods: {
    openServiceComposer(service) {
      this.openEmailComposer({
        source: `Services – ${service.id}`,
        intent: 'mission',
        service: service.id,
      });
    },
    openGeneralComposer() {
      this.openEmailComposer({
        source: 'Services – CTA',
        intent: 'mission',
        service: 'general',
      });
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
  position: absolute; top: -60px; right: -40px;
  width: 500px; height: 400px;
  background: radial-gradient(ellipse, rgba(27,67,50,0.25) 0%, transparent 65%);
  pointer-events: none;
}
.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}
.page-hero { position: relative; max-width: 680px; }
.hero-sub {
  font-size: 1rem; color: rgba(255,255,255,0.52);
  line-height: 1.7; margin-top: 14px; max-width: 580px;
}
.disclaimer {
  display: flex; align-items: flex-start; gap: 7px;
  font-size: 0.78rem; color: rgba(255,255,255,0.45);
  margin-top: 16px; padding: 10px 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius); max-width: 560px;
}
.disclaimer svg { flex-shrink: 0; margin-top: 2px; }

.hero-status {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.72rem; font-weight: 600;
  color: rgba(255,255,255,0.8);
  padding: 5px 12px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 100px;
}
.hero-status-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #4ADE80;
  animation: pulse-dot 2s infinite;
  flex-shrink: 0;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

/* ── Services grid ── */
.services-section {
  padding: 64px 0;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.2s, box-shadow 0.22s;
}
.service-card:hover {
  border-color: var(--forest-border);
  box-shadow: var(--shadow-md);
}
.service-card.featured {
  border-color: var(--forest-border);
  background: linear-gradient(to bottom right, var(--surface), var(--forest-lt));
}

.service-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--forest);
}

.service-body { flex: 1; }

.service-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.service-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 12px;
}

.service-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.service-list li {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.4;
}
.service-list svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--forest-md);
}

.service-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.service-price {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--forest);
}

.service-cta {
  font-size: 0.75rem;
  padding: 6px 14px;
}

/* ── Process (DARK) ── */
.process-section {
  padding: 64px 0 72px;
  background: var(--dark);
  position: relative; overflow: hidden;
}
.process-section::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}

.section-head { margin-bottom: 28px; position: relative; }

.process-title {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 800; letter-spacing: -0.03em;
  color: #fff; margin-top: 8px; line-height: 1.2;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px; position: relative;
}

.step {
  display: flex; flex-direction: column; gap: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  transition: background 0.2s, border-color 0.2s;
}
.step:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.15); }

.step-num {
  font-size: 2rem; font-weight: 900;
  letter-spacing: -0.04em; line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255,255,255,0.18);
}

.step-title {
  font-size: 0.88rem; font-weight: 700;
  color: rgba(255,255,255,0.9); margin-bottom: 4px;
}

.step-desc { font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.65; }

/* ── Stack ── */
.stack-section { padding: 64px 0 72px; background: var(--bg); }

.stack-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.stack-group {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.stack-group-name {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  min-width: 100px;
  flex-shrink: 0;
  padding-top: 3px;
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* ── CTA ── */
.cta-section {
  background: var(--forest);
  padding: 64px 0 80px;
  position: relative; overflow: hidden;
}
.cta-section::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}

.cta-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
  position: relative;
}

.cta-avail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 12px;
}

.avail-dot-green {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ADE80;
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.cta-title {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 12px;
  white-space: pre-line;
}

.cta-sub {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 20px;
}

.cta-actions { display: flex; gap: 10px; flex-wrap: wrap; }


.cta-facts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 32px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius);
  min-width: 160px;
}

.fact {
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: center;
}

.fact-val {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
}

.fact-lbl {
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Responsive */
@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .process-steps { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .hero-section { padding: 52px 0 44px; }
  .services-section { padding: 48px 0; }
  .process-section { padding: 48px 0 56px; }
  .stack-section { padding: 48px 0 56px; }
  .cta-section { padding: 48px 0 64px; }
  .services-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
  .cta-inner { grid-template-columns: 1fr; gap: 24px; }
  .cta-facts { flex-direction: row; justify-content: space-around; min-width: unset; padding: 16px 20px; }
  .cta-actions { flex-direction: column; }
  .cta-actions .btn { justify-content: center; }
  .stack-group { flex-direction: column; gap: 10px; }
  .stack-group-name { min-width: unset; }
}
@media (max-width: 480px) {
  .hero-section { padding: 40px 0 36px; }
  .hero-sub { font-size: 0.92rem; }
  .service-card { padding: 18px; }
  .service-footer { flex-direction: column; gap: 10px; align-items: flex-start; }
  .service-footer .btn { width: 100%; justify-content: center; }
  .cta-facts { flex-direction: column; gap: 12px; align-items: center; }
  .cta-title { font-size: 1.5rem; }
}
</style>
