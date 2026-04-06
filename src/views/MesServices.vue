<template>
  <div class="services-page">

    <header class="page-hero fu">
      <div class="status-pill">
        <span class="status-dot"></span>
        {{ t.status }}
      </div>
      <h1 class="s-title" style="margin-top:16px;">{{ t.title }}</h1>
      <p class="s-sub" style="margin-top:10px;">{{ t.sub }}</p>
      <p class="disclaimer">
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        {{ t.disclaimer }}
      </p>
    </header>

    <section class="section fu" style="animation-delay:.08s;">
      <div class="section-head">
        <span class="eyebrow">{{ t.web.eyebrow }}</span>
        <h2 class="s-title" style="margin-top:12px;">{{ t.web.title }}</h2>
        <p class="s-sub" style="margin-top:8px;">{{ t.web.sub }}</p>
      </div>

      <div class="packs-grid">
        <div
          class="pack-card"
          v-for="pack in t.web.packs"
          :key="pack.key"
          :class="{ featured: pack.featured }"
          @click="openModal(pack)"
        >
          <div v-if="pack.featured" class="featured-ribbon">{{ t.popularLabel }}</div>
          <div class="pack-badge" :class="`badge-${pack.key}`">{{ pack.badge }}</div>
          <div class="pack-name">{{ pack.name }}</div>
          <div class="pack-price">
            <span class="pack-amount">{{ pack.price }}</span>
            <span class="pack-delay">{{ pack.delay }}</span>
          </div>
          <p class="pack-pitch">{{ pack.pitch }}</p>
          <ul class="pack-list">
            <li v-for="f in pack.features" :key="f">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ f }}
            </li>
          </ul>
          <button class="pack-btn" :class="pack.featured ? 'btn-inv' : 'btn-soft'">
            {{ pack.featured ? t.quoteBtn : t.detailsBtn }} →
          </button>
        </div>
      </div>
    </section>

    <section class="section fu" style="animation-delay:.12s;">
      <div class="section-head">
        <span class="eyebrow">{{ t.ai.eyebrow }}</span>
        <h2 class="s-title" style="margin-top:12px;">{{ t.ai.title }}</h2>
        <p class="s-sub" style="margin-top:8px;">{{ t.ai.sub }}</p>
      </div>

      <div class="ai-grid">
        <div class="ai-card" v-for="item in t.ai.items" :key="item.name">
          <div class="ai-icon" :style="{ background: item.iconBg }">
            <span v-html="item.icon"></span>
          </div>
          <div class="ai-body">
            <div class="ai-name">{{ item.name }}</div>
            <p class="ai-desc">{{ item.desc }}</p>
            <div class="ai-price-row">
              <span class="ai-price">{{ item.price }}</span>
              <span class="ai-eta">{{ item.eta }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="ai-note">
        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        {{ t.ai.note }}
      </div>
    </section>

    <section class="section fu" style="animation-delay:.16s;">
      <div class="section-head">
        <span class="eyebrow">{{ t.tjm.eyebrow }}</span>
        <h2 class="s-title" style="margin-top:12px;">{{ t.tjm.title }}</h2>
        <p class="s-sub" style="margin-top:8px;">{{ t.tjm.sub }}</p>
      </div>

      <div class="tjm-block">
        <div class="tjm-left">
          <div class="tjm-rate">
            <span class="tjm-val">{{ t.tjm.rate }}</span>
            <span class="tjm-unit">{{ t.tjm.unit }}</span>
          </div>
          <p class="tjm-note">{{ t.tjm.note }}</p>
          <a :href="`mailto:${email}`" class="btn btn-dark" @click.prevent="openTjmComposer">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {{ t.tjm.cta }}
          </a>
        </div>

        <div class="tjm-right">
          <div class="tjm-domains">
            <div class="tjm-domain" v-for="d in t.tjm.domains" :key="d.title">
              <div class="domain-title">{{ d.title }}</div>
              <ul class="domain-list">
                <li v-for="i in d.items" :key="i">{{ i }}</li>
              </ul>
            </div>
          </div>
          <div class="tjm-indicatifs">
            <div class="indic" v-for="r in t.tjm.indicatifs" :key="r.label">
              <span class="indic-label">{{ r.label }}</span>
              <span class="indic-value">{{ r.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section fu" style="animation-delay:.2s;">
      <div class="section-head">
        <span class="eyebrow">{{ t.why.eyebrow }}</span>
        <h2 class="s-title" style="margin-top:12px;">{{ t.why.title }}</h2>
      </div>

      <div class="why-grid">
        <div class="why-card" v-for="(w, i) in t.why.items" :key="i">
          <span class="why-num">{{ String(i+1).padStart(2,'0') }}</span>
          <h4>{{ w.title }}</h4>
          <p>{{ w.desc }}</p>
        </div>
      </div>
    </section>

    <section class="cta-final fu" style="animation-delay:.24s;">
      <div class="cta-final-box">
        <div class="status-pill">
          <span class="status-dot"></span>
          {{ t.status }}
        </div>
        <h2>{{ t.cta.title }}</h2>
        <p>{{ t.cta.sub }}</p>
        <div class="cta-row">
          <a :href="`mailto:${email}`" class="btn btn-dark large" @click.prevent="openGeneralComposer">{{ t.cta.btn }}</a>
          <span class="cta-reassure">{{ t.cta.reassure }}</span>
        </div>
      </div>
    </section>

    <transition name="modal-fade">
      <div v-if="activeModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-panel">
          <button class="modal-close" @click="closeModal" aria-label="Fermer">
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div class="modal-head">
            <div class="modal-badge" :class="`badge-${activeModal.key}`">{{ activeModal.badge }}</div>
            <h3>{{ activeModal.name }}</h3>
            <div class="modal-price">{{ activeModal.price }}</div>
          </div>
          <div class="modal-body-section">
            <p class="modal-pitch">{{ activeModal.pitch }}</p>
            <div class="modal-label">{{ t.includedLabel }}</div>
            <ul class="modal-list">
              <li v-for="f in activeModal.features" :key="f">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ f }}
              </li>
            </ul>
            <div class="modal-meta">
              <div><span class="meta-k">{{ t.delayLabel }}</span><span class="meta-v">{{ activeModal.delay }}</span></div>
              <div v-if="activeModal.support"><span class="meta-k">Support</span><span class="meta-v">{{ activeModal.support }}</span></div>
            </div>
            <a
              :href="`mailto:${email}`"
              class="btn btn-dark"
              style="width:100%;justify-content:center;margin-top:4px;"
              @click.prevent="openPackComposer(activeModal)"
            >
              {{ t.orderBtn }} →
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// On centralise l'adresse email
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'ServicesPage',
  inject: ['getLang', 'openEmailComposer'],

  data() {
    return { 
      activeModal: null,
      email: CONTACT_EMAIL
    };
  },

  computed: {
    lang() { return this.getLang(); },

    t() {
      const data = {
        fr: {
          status: 'Disponible pour nouveaux projets',
          title: 'Solutions sur-mesure.\nROI mesurable.',
          sub: 'Développeur Full-Stack & Expert IA indépendant depuis 2023. Je conçois des applications performantes et des systèmes d\'automatisation intelligents.',
          disclaimer: 'Activité freelance distincte de mon poste d\'AI Project Manager chez Michelin.',
          popularLabel: 'Le plus demandé',
          detailsBtn: 'Voir le détail',
          quoteBtn: 'Demander un devis',
          includedLabel: 'Ce qui est inclus',
          delayLabel: 'Délai estimé',
          orderBtn: 'Commander / Demander un devis',
          web: {
            eyebrow: 'Sites Web & Applications',
            title: 'De la vitrine au SaaS\nclé en main.',
            sub: 'Django + Vue.js, paiements Stripe, déploiement AWS — je livre du code propre, documenté et scalable.',
            packs: [
              {
                key: 'vitrine', featured: false,
                badge: 'VITRINE', name: 'Pack Vitrine', price: 'Dès 700 €', delay: '~1-2 sem.',
                pitch: 'Site professionnel Django/Vue.js, responsive, SEO on-page, formulaire de contact.',
                features: [
                  'Site jusqu\'à 5 pages',
                  'Design responsive Mobile / Desktop',
                  'Formulaire de contact',
                  'SEO on-page + sitemap XML',
                  'Déploiement inclus',
                  'Code source livré',
                ],
                support: '2 semaines de corrections offertes',
              },
              {
                key: 'app', featured: true,
                badge: 'APP WEB', name: 'Pack App Web', price: 'Dès 1 800 €', delay: '~3-6 sem.',
                pitch: 'Application sur mesure SaaS ou e-commerce : auth, back-office, Stripe, AWS.',
                features: [
                  'Application SaaS / e-commerce complète',
                  'Authentification JWT & espace membres',
                  'Back-office d\'administration',
                  'Paiements Stripe & facturation auto',
                  'CI/CD GitHub Actions + AWS',
                  'Documentation + formation incluses',
                ],
                support: 'Accompagnement post-livraison inclus',
              },
              {
                key: 'ia', featured: false,
                badge: 'IA', name: 'Pack IA', price: 'Dès 1 500 €', delay: '~2-4 sem.',
                pitch: 'Agent IA, chatbot RAG, computer vision — intégration dans votre application existante.',
                features: [
                  'Agent LLM / chatbot RAG (LangChain)',
                  'Computer Vision (YOLO, OpenCV)',
                  'Intégration OpenAI / Anthropic / Mistral',
                  'API REST FastAPI/Django',
                  'Tests et documentation',
                  'Déploiement Docker/AWS',
                ],
                support: '1 mois de support inclus',
              },
              {
                key: 'data', featured: false,
                badge: 'DATA', name: 'Pack Data', price: 'Dès 500 €', delay: '~1-2 sem.',
                pitch: 'Scraping, ETL, pipeline de données — collecte, nettoyage et livraison prêt à l\'emploi.',
                features: [
                  'Web scraping (Selenium, Scrapy)',
                  'Pipeline ETL Python',
                  'Nettoyage & normalisation',
                  'Export CSV / PostgreSQL / API',
                  'Planification automatique',
                  'Documentation',
                ],
                support: '1 semaine de corrections offertes',
              },
            ],
          },
          ai: {
            eyebrow: 'Intelligence Artificielle',
            title: 'Automatisez ce qui\nvous coûte du temps.',
            sub: 'Agents IA 24h/24 · LLMs privés · Computer Vision · Pipelines ML.',
            note: 'Chaque mission IA comprend un cadrage gratuit de 30 minutes avant tout devis.',
            items: [
              {
                name: 'Agent IA / LLM sur mesure',
                desc: 'Chatbot RAG privé, agent autonome, intégration LangChain/OpenAI/Anthropic. Vos données ne quittent jamais votre infrastructure.',
                price: '1 500 – 3 500 €', eta: '2-4 semaines',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
              },
              {
                name: 'Computer Vision (YOLO, OpenCV)',
                desc: 'Détection d\'objets, tracking, analyse vidéo temps réel, homographie 2D. Expérience prouvée sur projets football et industrie.',
                price: '1 200 – 2 500 €', eta: '2-4 semaines',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
              },
              {
                name: 'Pipeline ML (Scikit-learn, PyTorch)',
                desc: 'Modélisation, entraînement, évaluation et déploiement de modèles ML/DL. Classification, régression, clustering, NLP.',
                price: '800 – 2 000 €', eta: '1-3 semaines',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
              },
              {
                name: 'Automatisation Python',
                desc: 'Scripts d\'automatisation, bots, workflows RPA. Gain de temps immédiat sur les tâches répétitives.',
                price: '400 – 1 200 €', eta: '3-10 jours',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
              },
            ],
          },
          tjm: {
            eyebrow: 'Missions Freelance',
            title: 'Renfort d\'équipe ou\nmission ponctuelle.',
            sub: 'Développeur senior pour un sprint, expert IA pour un projet critique — je m\'intègre rapidement.',
            rate: '350 €',
            unit: '/ jour (TJM base)',
            note: 'Négociable selon durée et scope. Facturation à la mission possible.',
            cta: 'Discuter de votre besoin',
            domains: [
              { title: 'IA & ML', items: ['PyTorch, Scikit-learn', 'LangChain, OpenAI', 'Computer Vision (YOLO)', 'RAG / Agents LLM'] },
              { title: 'Fullstack Web', items: ['Vue.js 3 / Django', 'FastAPI / PostgreSQL', 'Stripe / Auth JWT', 'AWS, Docker, CI/CD'] },
              { title: 'Data & Automatisation', items: ['Pandas, NumPy', 'Selenium, Scrapy', 'Pipelines ETL', 'Python scripts'] },
              { title: 'Consulting IA', items: ['Audit technique IA', 'Architecture LLM', 'POC & prototypage', 'Documentation'] },
            ],
            indicatifs: [
              { label: 'Développement IA/ML', value: '380–450 €/j' },
              { label: 'Fullstack Web (Django/Vue)', value: '300–350 €/j' },
              { label: 'Data & Automatisation', value: '320–380 €/j' },
              { label: 'Consulting IA', value: '400–500 €/j' },
            ],
          },
          why: {
            eyebrow: 'Différenciateurs',
            title: 'Pourquoi des clients B2B me font confiance.',
            items: [
              { title: 'Industrie + Startup', desc: 'AI PM chez Michelin + CTO d\'une SaaS B2B. Je comprends les enjeux des grandes entreprises ET la réactivité startup.' },
              { title: 'Référence SaaS en production', desc: 'DiagERP tourne en ce moment. Je ne vends pas du potentiel — je livre des produits qui scalent.' },
              { title: 'Double compétence IA + Dev', desc: 'La plupart des devs ne savent pas intégrer l\'IA. La plupart des data scientists ne savent pas construire des produits. Je fais les deux.' },
              { title: 'Transparence totale', desc: 'Devis détaillé, points bi-hebdomadaires, code documenté livré avec les sources. Zéro surprise.' },
            ],
          },
          cta: {
            title: 'Votre prochain projet commence\npar une conversation.',
            sub: 'Décrivez-moi votre défi en deux phrases. Réponse avec proposition claire sous 24h, sans engagement.',
            btn: 'Envoyer un message',
            reassure: '✓ Gratuit · ✓ Sans engagement · ✓ Réponse < 24h',
          },
        },

        en: {
          status: 'Available for new projects',
          title: 'Tailored solutions.\nMeasurable ROI.',
          sub: 'Independent Full-Stack Developer & AI Expert since 2023. I build high-performance applications and intelligent automation systems.',
          disclaimer: 'Freelance activity, separate from my AI Project Manager role at Michelin.',
          popularLabel: 'Most requested',
          detailsBtn: 'See details',
          quoteBtn: 'Request a quote',
          includedLabel: 'What\'s included',
          delayLabel: 'Timeline',
          orderBtn: 'Order / Request a quote',
          web: {
            eyebrow: 'Websites & Applications',
            title: 'From landing page to SaaS\nend to end.',
            sub: 'Django + Vue.js, Stripe payments, AWS deployment — clean, documented and scalable code.',
            packs: [
              {
                key: 'vitrine', featured: false,
                badge: 'SHOWCASE', name: 'Showcase Pack', price: 'From €700', delay: '~1-2 weeks',
                pitch: 'Professional Django/Vue.js website, responsive, on-page SEO, contact form.',
                features: [
                  'Up to 5 pages',
                  'Fully responsive (Mobile / Desktop)',
                  'Contact form',
                  'On-page SEO + XML sitemap',
                  'Deployment included',
                  'Full source code delivered',
                ],
                support: '2 weeks of revisions included',
              },
              {
                key: 'app', featured: true,
                badge: 'WEB APP', name: 'Web App Pack', price: 'From €1,800', delay: '~3-6 weeks',
                pitch: 'Custom SaaS or e-commerce application: auth, back-office, Stripe, AWS.',
                features: [
                  'Full SaaS / e-commerce application',
                  'JWT Authentication & member area',
                  'Admin back-office',
                  'Stripe payments & auto invoicing',
                  'CI/CD GitHub Actions + AWS',
                  'Documentation + training included',
                ],
                support: 'Post-delivery support included',
              },
              {
                key: 'ia', featured: false,
                badge: 'AI', name: 'AI Pack', price: 'From €1,500', delay: '~2-4 weeks',
                pitch: 'AI agent, RAG chatbot, computer vision — integrated into your existing application.',
                features: [
                  'LLM agent / RAG chatbot (LangChain)',
                  'Computer Vision (YOLO, OpenCV)',
                  'OpenAI / Anthropic / Mistral integration',
                  'FastAPI/Django REST API',
                  'Tests and documentation',
                  'Docker/AWS deployment',
                ],
                support: '1 month support included',
              },
              {
                key: 'data', featured: false,
                badge: 'DATA', name: 'Data Pack', price: 'From €500', delay: '~1-2 weeks',
                pitch: 'Scraping, ETL, data pipeline — collection, cleaning and ready-to-use delivery.',
                features: [
                  'Web scraping (Selenium, Scrapy)',
                  'Python ETL pipeline',
                  'Cleaning & normalization',
                  'CSV / PostgreSQL / API export',
                  'Automated scheduling',
                  'Documentation',
                ],
                support: '1 week of revisions included',
              },
            ],
          },
          ai: {
            eyebrow: 'Artificial Intelligence',
            title: 'Automate what costs\nyou time.',
            sub: 'AI agents 24/7 · Private LLMs · Computer Vision · ML pipelines.',
            note: 'Every AI mission includes a free 30-minute scoping call before any quote.',
            items: [
              {
                name: 'AI Agent / Custom LLM',
                desc: 'Private RAG chatbot, autonomous agent, LangChain/OpenAI/Anthropic integration. Your data never leaves your infrastructure.',
                price: '€1,500 – €3,500', eta: '2-4 weeks',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
              },
              {
                name: 'Computer Vision (YOLO, OpenCV)',
                desc: 'Object detection, tracking, real-time video analysis, 2D homography. Proven experience on football and industrial projects.',
                price: '€1,200 – €2,500', eta: '2-4 weeks',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
              },
              {
                name: 'ML Pipeline (Scikit-learn, PyTorch)',
                desc: 'Modelling, training, evaluation and deployment of ML/DL models. Classification, regression, clustering, NLP.',
                price: '€800 – €2,000', eta: '1-3 weeks',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
              },
              {
                name: 'Python Automation',
                desc: 'Automation scripts, bots, RPA workflows. Immediate time savings on repetitive tasks.',
                price: '€400 – €1,200', eta: '3-10 days',
                iconBg: 'rgba(197,154,69,0.10)',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
              },
            ],
          },
          tjm: {
            eyebrow: 'Freelance Missions',
            title: 'Team reinforcement or\npunctual mission.',
            sub: 'Senior developer for a sprint, AI expert for a critical project — I integrate quickly.',
            rate: '€350',
            unit: '/ day (base daily rate)',
            note: 'Negotiable based on duration and scope. Mission-based billing available.',
            cta: 'Discuss your needs',
            domains: [
              { title: 'AI & ML', items: ['PyTorch, Scikit-learn', 'LangChain, OpenAI', 'Computer Vision (YOLO)', 'RAG / LLM Agents'] },
              { title: 'Fullstack Web', items: ['Vue.js 3 / Django', 'FastAPI / PostgreSQL', 'Stripe / JWT Auth', 'AWS, Docker, CI/CD'] },
              { title: 'Data & Automation', items: ['Pandas, NumPy', 'Selenium, Scrapy', 'ETL Pipelines', 'Python scripts'] },
              { title: 'AI Consulting', items: ['AI technical audit', 'LLM architecture', 'POC & prototyping', 'Documentation'] },
            ],
            indicatifs: [
              { label: 'AI/ML Development', value: '€380–450/d' },
              { label: 'Fullstack Web (Django/Vue)', value: '€300–350/d' },
              { label: 'Data & Automation', value: '€320–380/d' },
              { label: 'AI Consulting', value: '€400–500/d' },
            ],
          },
          why: {
            eyebrow: 'Why me',
            title: 'Why B2B clients trust me.',
            items: [
              { title: 'Industry + Startup', desc: 'AI PM at Michelin + CTO of a B2B SaaS. I understand enterprise requirements AND startup agility.' },
              { title: 'Live SaaS proof of work', desc: 'DiagERP is running right now. I\'m not selling potential — I deliver products that scale.' },
              { title: 'AI + Dev dual expertise', desc: 'Most devs can\'t integrate AI. Most data scientists can\'t ship products. I do both — end to end.' },
              { title: 'Full transparency', desc: 'Detailed quote, bi-weekly updates, documented source code delivered. Zero surprises.' },
            ],
          },
          cta: {
            title: 'Your next project starts\nwith a conversation.',
            sub: 'Describe your challenge in two sentences. Reply with a clear proposal within 24h, no commitment.',
            btn: 'Send a message',
            reassure: '✓ Free · ✓ No commitment · ✓ Reply < 24h',
          },
        },
      };
      return data[this.lang];
    },
  },

  methods: {
    getPackService(packKey) {
      const packServices = {
        vitrine: 'showcase',
        app: 'webapp',
        ia: 'ai',
        data: 'data',
      };

      return packServices[packKey] || 'general';
    },

    openGeneralComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'Services final CTA' : 'Services - CTA final',
        intent: 'project',
        service: 'general',
      });
    },

    openTjmComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'Services daily rate' : 'Services - TJM',
        intent: 'mission',
        service: 'team-extension',
      });
    },

    openPackComposer(pack) {
      if (!pack) {
        return;
      }

      this.openEmailComposer({
        source: this.lang === 'en' ? 'Services pack modal' : 'Services - pack modal',
        intent: 'quote',
        service: this.getPackService(pack.key),
        offerName: pack.name,
        priceHint: pack.price,
        timelineHint: pack.delay,
        offerHighlights: pack.features,
      });
    },

    openModal(pack) {
      this.activeModal = pack;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.activeModal = null;
      document.body.style.overflow = '';
    },
  },

  beforeUnmount() {
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
.services-page { padding: 48px 0 80px; }

/* Hero */
.page-hero { max-width: 680px; margin-bottom: 72px; display: flex; flex-direction: column; gap: 0; }
.disclaimer {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.76rem; color: var(--text-muted);
  padding: 7px 12px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius);
  margin-top: 14px; width: fit-content;
}

/* Section scaffolding */
.section { margin-bottom: 80px; }
.section-head { margin-bottom: 40px; display: flex; flex-direction: column; gap: 0; }

/* ── PACKS ── */
.packs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: start;
}

.pack-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  cursor: pointer;
  display: flex; flex-direction: column; gap: 12px;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
}
.pack-card:hover { border-color: var(--border-dark); box-shadow: var(--shadow-lg); transform: translateY(-4px); }

.pack-card.featured { background: var(--ink); border-color: var(--ink); }
.pack-card.featured:hover { box-shadow: 0 18px 44px rgba(17,17,24,0.26); }

.featured-ribbon {
  position: absolute; top: -11px; left: 24px;
  background: var(--gold);
  color: var(--ink); font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 12px; border-radius: 5px;
  box-shadow: 0 2px 8px rgba(197,154,69,0.3);
}

.pack-badge {
  display: inline-flex; font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.1em; padding: 3px 10px; border-radius: 5px; width: fit-content;
}
.badge-vitrine  { background: var(--gray-100); color: var(--gray-600); }
.badge-app      { background: rgba(197,154,69,0.10); color: var(--gold); }
.badge-ia       { background: rgba(197,154,69,0.10); color: var(--gold); }
.badge-data     { background: var(--gray-100); color: var(--gray-600); }
.badge-starter  { background: var(--gray-100); color: var(--gray-600); }
.badge-business { background: rgba(197,154,69,0.10); color: var(--gold); }
.badge-premium  { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }

.pack-name { font-size: 1.1rem; font-weight: 800; letter-spacing: -0.03em; color: var(--ink); }
.pack-card.featured .pack-name { color: var(--bg); }

.pack-price { display: flex; align-items: baseline; gap: 8px; }
.pack-amount { font-size: 1.55rem; font-weight: 800; letter-spacing: -0.04em; color: var(--ink); }
.pack-card.featured .pack-amount { color: var(--gold); }
.pack-delay { font-size: 0.77rem; color: var(--text-muted); }
.pack-card.featured .pack-delay { color: rgba(255,255,255,0.38); }

.pack-pitch { font-size: 0.84rem; color: var(--text-muted); line-height: 1.55; }
.pack-card.featured .pack-pitch { color: rgba(255,255,255,0.5); }

.pack-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; flex: 1; }
.pack-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: var(--text-muted); line-height: 1.4; }
.pack-list li svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.pack-card.featured .pack-list li { color: rgba(255,255,255,0.65); }
.pack-card.featured .pack-list li svg { color: var(--gold); }

.pack-btn {
  width: 100%; padding: 11px; border-radius: var(--radius);
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  font-family: var(--font); text-align: center;
  border: 1px solid; transition: all 0.2s ease;
  background: transparent;
}
.btn-soft { color: var(--ink); border-color: var(--border); }
.btn-soft:hover { background: var(--bg); border-color: var(--border-dark); }
.btn-inv { color: var(--ink); border-color: var(--gold); background: var(--gold); }
.btn-inv:hover { background: transparent; color: var(--gold); border-color: var(--gold); }

/* ── AI GRID ── */
.ai-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 14px; }

.ai-card {
  display: flex; gap: 14px; padding: 20px;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); box-shadow: var(--shadow-sm);
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
}
.ai-card:hover { border-color: var(--border-dark); box-shadow: var(--shadow-md); transform: translateY(-3px); }

.ai-icon {
  width: 40px; height: 40px; border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  background: rgba(197,154,69,0.10); color: var(--gold);
}

.ai-body { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.ai-name { font-size: 0.92rem; font-weight: 700; color: var(--ink); }
.ai-desc { font-size: 0.81rem; color: var(--text-muted); line-height: 1.6; flex: 1; }
.ai-price-row { display: flex; align-items: center; gap: 12px; padding-top: 9px; border-top: 1px solid var(--border); }
.ai-price { font-size: 0.85rem; font-weight: 700; color: var(--ink); }
.ai-eta { font-size: 0.75rem; color: var(--text-muted); }

.ai-note {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.79rem; color: var(--text-muted);
  padding: 10px 14px; background: var(--surface);
  border-radius: var(--radius); border: 1px solid var(--border);
}

/* ── TJM ── */
.tjm-block {
  display: grid; grid-template-columns: 270px 1fr;
  border: 1px solid var(--border); border-radius: var(--radius);
  overflow: hidden; box-shadow: var(--shadow-sm);
}

.tjm-left {
  padding: 32px 26px; background: var(--ink);
  display: flex; flex-direction: column; gap: 12px;
}

.tjm-rate { display: flex; align-items: baseline; gap: 6px; }
.tjm-val { font-size: 2.6rem; font-weight: 800; letter-spacing: -0.05em; color: var(--gold); }
.tjm-unit { font-size: 0.82rem; color: rgba(255,255,255,0.38); }
.tjm-note { font-size: 0.77rem; color: rgba(255,255,255,0.35); line-height: 1.5; }

.tjm-right { padding: 24px 26px; background: var(--surface); display: flex; flex-direction: column; gap: 20px; }

.tjm-domains { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.domain-title {
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: var(--ink);
  margin-bottom: 8px; padding-bottom: 7px; border-bottom: 2px solid var(--border);
}
.domain-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
.domain-list li { font-size: 0.79rem; color: var(--text-muted); }

.tjm-indicatifs { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px; }
.indic {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 9px 13px; background: var(--bg);
  border-radius: var(--radius); border: 1px solid var(--border);
}
.indic-label { font-size: 0.77rem; color: var(--text-muted); }
.indic-value { font-size: 0.85rem; font-weight: 700; color: var(--ink); white-space: nowrap; }

/* ── WHY ── */
.why-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden;
}
.why-card {
  padding: 24px 20px; border-right: 1px solid var(--border);
  background: var(--surface); transition: background 0.2s;
}
.why-card:hover { background: var(--bg); }
.why-card:last-child { border-right: none; }
.why-num { font-size: 0.63rem; font-weight: 700; color: var(--border); letter-spacing: 0.1em; margin-bottom: 10px; }
.why-card h4 { font-size: 0.88rem; font-weight: 700; color: var(--ink); line-height: 1.3; margin-bottom: 7px; }
.why-card p { font-size: 0.79rem; color: var(--text-muted); line-height: 1.6; }

/* ── CTA final ── */
.cta-final { margin-bottom: 0; }
.cta-final-box {
  background: var(--ink); border-radius: var(--radius);
  padding: 56px 52px; display: flex; flex-direction: column; gap: 16px;
}
.cta-final-box h2 {
  font-size: clamp(1.7rem, 2.8vw, 2.4rem); font-weight: 800;
  letter-spacing: -0.04em; color: var(--bg); line-height: 1.1;
  white-space: pre-line;
}
.cta-final-box p { font-size: 0.97rem; color: rgba(240,234,217,0.5); max-width: 480px; line-height: 1.7; }
.cta-row { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.btn.large { padding: 14px 28px; font-size: 0.93rem; }
.cta-reassure { font-size: 0.75rem; color: rgba(240,234,217,0.3); }

/* ── MODAL ── */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.22s ease; }
.modal-fade-enter-active .modal-panel, .modal-fade-leave-active .modal-panel { transition: transform 0.28s var(--ease), opacity 0.22s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from .modal-panel { transform: translateY(16px) scale(0.97); opacity: 0; }

.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(17,17,24,0.5); backdrop-filter: blur(6px);
  z-index: 600; display: flex; align-items: center; justify-content: center; padding: 20px;
}

.modal-panel {
  position: relative; background: var(--bg);
  border-radius: var(--radius); width: 100%; max-width: 460px;
  max-height: 90vh; overflow-y: auto;
  box-shadow: var(--shadow-xl); border: 1px solid var(--border);
}

.modal-close {
  position: absolute; top: 14px; right: 14px;
  width: 28px; height: 28px; border-radius: var(--radius);
  background: var(--surface); border: none; color: var(--text-muted);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  z-index: 10; transition: all 0.18s;
}
.modal-close:hover { background: var(--border); color: var(--ink); }

.modal-head { padding: 28px 24px 20px; border-bottom: 1px solid var(--border); }
.modal-badge { display: inline-flex; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; padding: 3px 9px; border-radius: 5px; margin-bottom: 10px; }
.modal-head h3 { font-size: 1.45rem; font-weight: 800; letter-spacing: -0.03em; color: var(--ink); margin-bottom: 6px; }
.modal-price { font-size: 1.35rem; font-weight: 800; letter-spacing: -0.03em; color: var(--gold); }

.modal-body-section { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 16px; }
.modal-pitch { font-size: 0.87rem; color: var(--text-muted); line-height: 1.6; }
.modal-label { font-size: 0.67rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.11em; color: var(--text-muted); }
.modal-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
.modal-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.85rem; color: var(--ink); line-height: 1.4; }
.modal-list li svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.modal-meta {
  display: flex; gap: 18px; flex-wrap: wrap; padding: 12px 14px;
  background: var(--surface); border-radius: var(--radius); border: 1px solid var(--border);
}
.modal-meta div { display: flex; flex-direction: column; gap: 2px; }
.meta-k { font-size: 0.67rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: var(--text-muted); }
.meta-v { font-size: 0.85rem; font-weight: 600; color: var(--ink); }

/* Responsive */
@media (max-width: 1200px) {
  .packs-grid { grid-template-columns: repeat(2, 1fr); }
  .tjm-domains { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 1100px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .why-card:nth-child(2) { border-right: none; }
  .why-card:nth-child(1), .why-card:nth-child(2) { border-bottom: 1px solid var(--border); }
}

@media (max-width: 960px) {
  .tjm-block { grid-template-columns: 1fr; }
  .tjm-right { padding-top: 0; }
}

@media (max-width: 768px) {
  .services-page { padding: 32px 0 60px; }
  .packs-grid { grid-template-columns: 1fr; }
  .ai-grid { grid-template-columns: 1fr; }
  .tjm-domains { grid-template-columns: 1fr; }
  .tjm-indicatifs { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; border: none; gap: 10px; }
  .why-card { border: 1px solid var(--border); border-radius: var(--radius); }
  .cta-final-box { padding: 36px 24px; }
  .cta-row { flex-direction: column; align-items: flex-start; }
}
</style>
