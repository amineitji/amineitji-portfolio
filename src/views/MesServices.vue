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
          <a :href="tjmMailto" class="btn btn-dark">
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
          <a :href="contactMailto" class="btn btn-dark large">{{ t.cta.btn }}</a>
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
            <a :href="activeModal.mailto" class="btn btn-dark" style="width:100%;justify-content:center;margin-top:4px;">
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
  inject: ['getLang'],

  data() {
    return { 
      activeModal: null,
      email: CONTACT_EMAIL
    };
  },

  computed: {
    lang() { return this.getLang(); },

    contactMailto() {
      return this.lang === 'en'
        ? `mailto:${this.email}?subject=New freelance project&body=Hi Amine,`
        : `mailto:${this.email}?subject=Nouveau projet freelance&body=Bonjour Amine,`;
    },

    tjmMailto() {
      return this.lang === 'en'
        ? `mailto:${this.email}?subject=Freelance mission&body=Hi Amine,`
        : `mailto:${this.email}?subject=Mission freelance&body=Bonjour Amine,`;
    },

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
            eyebrow: 'Sites Web & Landing Pages',
            title: 'Votre présence en ligne,\noptimisée pour convertir.',
            sub: 'Chaque euro investi doit travailler pour vous. Sites SEO-first et conversion-first.',
            packs: [
              {
                key: 'starter', featured: false,
                badge: 'STARTER', name: 'Vitrine Essentielle', price: '700 €', delay: '~1 semaine',
                pitch: 'Établissez une présence professionnelle crédible, rapidement et sans compromis.',
                features: [
                  'Site One-Page ou jusqu\'à 3 pages',
                  'Design responsive Mobile / Desktop',
                  'Formulaire de contact fonctionnel',
                  'Google Maps + réseaux sociaux',
                  'SEO on-page + sitemap XML',
                  'Code source livré',
                ],
                support: '2 semaines de corrections offertes',
                mailto: `mailto:${this.email}?subject=Devis Vitrine Essentielle&body=Bonjour,`,
              },
              {
                key: 'business', featured: false,
                badge: 'BUSINESS', name: 'Site Pro Optimisé', price: '1 200 €', delay: '~2 semaines',
                pitch: 'Pour les entreprises qui veulent être trouvées sur Google et convertir.',
                features: [
                  'Tout du pack Vitrine + jusqu\'à 8 pages',
                  'Design premium avec animations fluides',
                  'Blog / Actualités dynamique',
                  'SEO avancé — Score Lighthouse 90+',
                  'Intégration CRM ou formulaires avancés',
                  '1 mois de maintenance inclus',
                ],
                support: '1 mois de maintenance inclus',
                mailto: `mailto:${this.email}?subject=Devis Site Pro&body=Bonjour,`,
              },
              {
                key: 'premium', featured: true,
                badge: 'SUR MESURE', name: 'Application & SaaS', price: 'Dès 2 500 €', delay: 'Selon scope',
                pitch: 'Applications web complètes, évolutives et prêtes à scaler.',
                features: [
                  'Application SaaS ou Web App complète',
                  'Authentification & espace membres',
                  'Back-office d\'administration',
                  'Paiements Stripe & facturation auto',
                  'Intégration IA / agents LLM',
                  'Architecture cloud (AWS / Docker / CI-CD)',
                  'Documentation + formation incluses',
                ],
                support: 'Accompagnement post-livraison inclus',
                mailto: `mailto:${this.email}?subject=Projet SaaS sur mesure&body=Bonjour,`,
              },
            ],
          },
          ai: {
            eyebrow: 'Intelligence Artificielle',
            title: 'Automatisez ce qui\nvous coûte du temps.',
            sub: 'Agents IA 24h/24 · LLMs privés · Computer Vision · Data pipelines.',
            note: 'Chaque mission IA comprend un cadrage gratuit de 30 minutes avant tout devis.',
            items: [
              {
                name: 'Chatbot IA sur vos données (RAG)',
                desc: 'Interrogez vos PDF et bases documentaires via un assistant IA privé. Vos données ne quittent jamais votre infrastructure.',
                price: '1 500 – 3 500 €', eta: '2-4 semaines',
                iconBg: '#eff6ff',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
              },
              {
                name: 'Agent IA autonome & Automation',
                desc: 'Automatisez vos processus répétitifs : qualification de leads, génération de rapports, traitement d\'emails. Un agent qui agit.',
                price: '2 000 – 5 000 €', eta: '3-6 semaines',
                iconBg: '#f5f3ff',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
              },
              {
                name: 'Web Scraping & Pipeline Data',
                desc: 'Extraction massive de données web (concurrents, marchés). Pipeline complet : collecte → nettoyage → CSV/API prête à l\'emploi.',
                price: '800 – 2 500 €', eta: '1-3 semaines',
                iconBg: '#f0fdf4',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
              },
              {
                name: 'Prompt Engineering & Intégration LLM',
                desc: 'Optimisation de vos prompts pour GPT-4 / Claude / Mistral. Intégration d\'API IA dans vos workflows. Résultats typiques : 3x moins de corrections.',
                price: '500 – 1 500 €', eta: '3-10 jours',
                iconBg: '#fff7ed',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
              },
            ],
          },
          tjm: {
            eyebrow: 'Missions Freelance',
            title: 'Renfort d\'équipe ou\nmission ponctuelle.',
            sub: 'Senior developer pour un sprint, expert IA pour un projet critique — je m\'intègre rapidement.',
            rate: '380 €',
            unit: '/ jour (TJM)',
            note: 'Tarif dégressif dès 15 jours. Facturation à la mission possible.',
            cta: 'Discuter de votre besoin',
            domains: [
              { title: 'Full-Stack', items: ['Vue.js 3 / Nuxt', 'Django / FastAPI', 'PostgreSQL, Redis', 'AWS, Docker, CI/CD'] },
              { title: 'Intelligence Artificielle', items: ['LangChain, LlamaIndex', 'OpenAI, Anthropic', 'Computer Vision (YOLO)', 'Prompt Engineering'] },
              { title: 'Data & Scraping', items: ['Selenium, Scrapy', 'Pandas, NumPy', 'Pipelines ETL', 'Visualisation (Plotly)'] },
            ],
            indicatifs: [
              { label: 'Audit technique IA (demi-journée)', value: '250 €' },
              { label: 'MVP — Prototype fonctionnel', value: '~2 800 €' },
              { label: 'Application métier complète', value: '~5 500 €+' },
              { label: 'Retainer mensuel (10j/mois)', value: '~3 200 €' },
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
            eyebrow: 'Websites & Landing Pages',
            title: 'Your online presence,\nbuilt to convert.',
            sub: 'Every euro invested must work for you. SEO-first and conversion-first websites.',
            packs: [
              {
                key: 'starter', featured: false,
                badge: 'STARTER', name: 'Essential Website', price: '€700', delay: '~1 week',
                pitch: 'Establish a credible, professional online presence — fast and without quality compromise.',
                features: [
                  'One-page or up to 3 pages',
                  'Fully responsive (Mobile / Desktop)',
                  'Working contact form',
                  'Google Maps + social links',
                  'On-page SEO + XML sitemap',
                  'Full source code delivered',
                ],
                support: '2 weeks of revisions included',
                mailto: `mailto:${this.email}?subject=Quote - Essential Website&body=Hi Amine,`,
              },
              {
                key: 'business', featured: false,
                badge: 'BUSINESS', name: 'Pro SEO Website', price: '€1,200', delay: '~2 weeks',
                pitch: 'For businesses that want to rank on Google and convert visitors into leads.',
                features: [
                  'Everything in Starter + up to 8 pages',
                  'Premium design with smooth animations',
                  'Dynamic blog / news section',
                  'Advanced SEO — Lighthouse 90+ guaranteed',
                  'CRM or advanced form integration',
                  '1 month maintenance included',
                ],
                support: '1 month maintenance included',
                mailto: `mailto:${this.email}?subject=Quote - Pro SEO Website&body=Hi Amine,`,
              },
              {
                key: 'premium', featured: true,
                badge: 'CUSTOM', name: 'App & SaaS', price: 'From €2,500', delay: 'Based on scope',
                pitch: 'Complete, scalable web applications ready to handle thousands of users.',
                features: [
                  'Full SaaS or Web Application',
                  'Auth & member area',
                  'Admin back-office',
                  'Stripe payments & auto invoicing',
                  'Custom AI / LLM agent integration',
                  'Cloud infra (AWS / Docker / CI-CD)',
                  'Documentation + training included',
                ],
                support: 'Post-delivery support included',
                mailto: `mailto:${this.email}?subject=Quote - Custom SaaS&body=Hi Amine,`,
              },
            ],
          },
          ai: {
            eyebrow: 'Artificial Intelligence',
            title: 'Automate what costs\nyou time.',
            sub: 'AI agents 24/7 · Private LLMs · Computer Vision · Data pipelines.',
            note: 'Every AI mission includes a free 30-minute scoping call before any quote.',
            items: [
              {
                name: 'AI Chatbot on your data (RAG)',
                desc: 'Query your PDFs and document bases via a private AI assistant. Your data never leaves your infrastructure.',
                price: '€1,500 – €3,500', eta: '2-4 weeks',
                iconBg: '#eff6ff',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
              },
              {
                name: 'Autonomous AI Agent & Automation',
                desc: 'Automate repetitive processes: lead qualification, report generation, email processing. An agent that acts.',
                price: '€2,000 – €5,000', eta: '3-6 weeks',
                iconBg: '#f5f3ff',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
              },
              {
                name: 'Web Scraping & Data Pipeline',
                desc: 'Massive web data extraction (competitors, markets). Full pipeline: collection → cleaning → CSV/API delivery.',
                price: '€800 – €2,500', eta: '1-3 weeks',
                iconBg: '#f0fdf4',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
              },
              {
                name: 'Prompt Engineering & LLM Integration',
                desc: 'Optimize your prompts for GPT-4 / Claude / Mistral. Integrate AI APIs into your workflows. Typical results: 3x fewer corrections.',
                price: '€500 – €1,500', eta: '3-10 days',
                iconBg: '#fff7ed',
                icon: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
              },
            ],
          },
          tjm: {
            eyebrow: 'Freelance Missions',
            title: 'Team reinforcement or\npunctual mission.',
            sub: 'Senior developer for a sprint, AI expert for a critical project — I integrate quickly.',
            rate: '€380',
            unit: '/ day (daily rate)',
            note: 'Discounted from 15 days. Mission-based billing available.',
            cta: 'Discuss your needs',
            domains: [
              { title: 'Full-Stack', items: ['Vue.js 3 / Nuxt', 'Django / FastAPI', 'PostgreSQL, Redis', 'AWS, Docker, CI/CD'] },
              { title: 'Artificial Intelligence', items: ['LangChain, LlamaIndex', 'OpenAI, Anthropic', 'Computer Vision (YOLO)', 'Prompt Engineering'] },
              { title: 'Data & Scraping', items: ['Selenium, Scrapy', 'Pandas, NumPy', 'ETL Pipelines', 'Visualisation (Plotly)'] },
            ],
            indicatifs: [
              { label: 'AI Technical Audit (half-day)', value: '€250' },
              { label: 'MVP — Functional prototype', value: '~€2,800' },
              { label: 'Full business application', value: '~€5,500+' },
              { label: 'Monthly retainer (10d/mo)', value: '~€3,200' },
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
/* Les styles restent inchangés car ils correspondent parfaitement à l'UI design system du site */
.services-page { padding: 48px 0 80px; }

/* Hero */
.page-hero { max-width: 680px; margin-bottom: 72px; display: flex; flex-direction: column; gap: 0; }
.disclaimer {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.76rem; color: var(--gray-400);
  padding: 7px 12px; background: var(--gray-50);
  border: 1px solid var(--gray-200); border-radius: 8px;
  margin-top: 14px; width: fit-content;
}

/* Section scaffolding */
.section { margin-bottom: 80px; }
.section-head { margin-bottom: 40px; display: flex; flex-direction: column; gap: 0; }

/* ── PACKS ── */
.packs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: start;
}

.pack-card {
  position: relative;
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 20px;
  padding: 26px;
  cursor: pointer;
  display: flex; flex-direction: column; gap: 12px;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
}
.pack-card:hover { border-color: var(--gray-300); box-shadow: var(--shadow-lg); transform: translateY(-4px); }

.pack-card.featured { background: var(--gray-900); border-color: var(--gray-800); }
.pack-card.featured:hover { box-shadow: 0 18px 44px rgba(15,23,42,0.26); }

.featured-ribbon {
  position: absolute; top: -11px; left: 24px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: white; font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 12px; border-radius: 100px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.3);
}

.pack-badge {
  display: inline-flex; font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.1em; padding: 3px 10px; border-radius: 100px; width: fit-content;
}
.badge-starter { background: var(--gray-100); color: var(--gray-600); }
.badge-business { background: var(--blue-light); color: var(--blue-dark); }
.badge-premium  { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }

.pack-name { font-size: 1.25rem; font-weight: 800; letter-spacing: -0.03em; color: var(--gray-900); }
.pack-card.featured .pack-name { color: var(--white); }

.pack-price { display: flex; align-items: baseline; gap: 8px; }
.pack-amount { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.04em; color: var(--gray-900); }
.pack-card.featured .pack-amount { color: var(--white); }
.pack-delay { font-size: 0.77rem; color: var(--gray-400); }
.pack-card.featured .pack-delay { color: rgba(255,255,255,0.38); }

.pack-pitch { font-size: 0.84rem; color: var(--gray-500); line-height: 1.55; }
.pack-card.featured .pack-pitch { color: rgba(255,255,255,0.5); }

.pack-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; flex: 1; }
.pack-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: var(--gray-500); line-height: 1.4; }
.pack-list li svg { color: var(--green); flex-shrink: 0; margin-top: 2px; }
.pack-card.featured .pack-list li { color: rgba(255,255,255,0.65); }
.pack-card.featured .pack-list li svg { color: #34d399; }

.pack-btn {
  width: 100%; padding: 11px; border-radius: 11px;
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  font-family: var(--font); text-align: center;
  border: 1.5px solid; transition: all 0.2s ease;
  background: transparent;
}
.btn-soft { color: var(--gray-900); border-color: var(--gray-200); }
.btn-soft:hover { background: var(--gray-100); border-color: var(--gray-300); }
.btn-inv { color: var(--gray-900); border-color: var(--white); background: var(--white); }
.btn-inv:hover { background: var(--gray-100); }

/* ── AI GRID ── */
.ai-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 14px; }

.ai-card {
  display: flex; gap: 14px; padding: 20px;
  background: var(--white); border: 1.5px solid var(--gray-200);
  border-radius: 16px; box-shadow: var(--shadow-sm);
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
}
.ai-card:hover { border-color: var(--gray-300); box-shadow: var(--shadow-md); transform: translateY(-3px); }

.ai-icon {
  width: 40px; height: 40px; border-radius: 11px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.ai-body { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.ai-name { font-size: 0.92rem; font-weight: 700; color: var(--gray-900); }
.ai-desc { font-size: 0.81rem; color: var(--gray-500); line-height: 1.6; flex: 1; }
.ai-price-row { display: flex; align-items: center; gap: 12px; padding-top: 9px; border-top: 1px solid var(--gray-100); }
.ai-price { font-size: 0.85rem; font-weight: 700; color: var(--gray-900); }
.ai-eta { font-size: 0.75rem; color: var(--gray-400); }

.ai-note {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.79rem; color: var(--gray-400);
  padding: 10px 14px; background: var(--gray-50);
  border-radius: 10px; border: 1px solid var(--gray-100);
}

/* ── TJM ── */
.tjm-block {
  display: grid; grid-template-columns: 250px 1fr;
  border: 1.5px solid var(--gray-200); border-radius: 20px;
  overflow: hidden; box-shadow: var(--shadow-sm);
}

.tjm-left {
  padding: 32px 26px; background: var(--gray-900);
  display: flex; flex-direction: column; gap: 12px;
}

.tjm-rate { display: flex; align-items: baseline; gap: 6px; }
.tjm-val { font-size: 2.6rem; font-weight: 800; letter-spacing: -0.05em; color: var(--white); }
.tjm-unit { font-size: 0.82rem; color: rgba(255,255,255,0.38); }
.tjm-note { font-size: 0.77rem; color: rgba(255,255,255,0.35); line-height: 1.5; }

.tjm-right { padding: 24px 26px; display: flex; flex-direction: column; gap: 20px; }

.tjm-domains { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.domain-title {
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: var(--gray-900);
  margin-bottom: 8px; padding-bottom: 7px; border-bottom: 2px solid var(--gray-100);
}
.domain-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
.domain-list li { font-size: 0.79rem; color: var(--gray-500); }

.tjm-indicatifs { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px; }
.indic {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 9px 13px; background: var(--gray-50);
  border-radius: 10px; border: 1px solid var(--gray-100);
}
.indic-label { font-size: 0.77rem; color: var(--gray-500); }
.indic-value { font-size: 0.85rem; font-weight: 700; color: var(--gray-900); white-space: nowrap; }

/* ── WHY ── */
.why-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border: 1.5px solid var(--gray-200); border-radius: 20px; overflow: hidden;
}
.why-card {
  padding: 24px 20px; border-right: 1px solid var(--gray-200);
  background: var(--white); transition: background 0.2s;
}
.why-card:hover { background: var(--gray-50); }
.why-card:last-child { border-right: none; }
.why-num { font-size: 0.63rem; font-weight: 700; color: var(--gray-200); letter-spacing: 0.1em; margin-bottom: 10px; }
.why-card h4 { font-size: 0.88rem; font-weight: 700; color: var(--gray-900); line-height: 1.3; margin-bottom: 7px; }
.why-card p { font-size: 0.79rem; color: var(--gray-500); line-height: 1.6; }

/* ── CTA final ── */
.cta-final { margin-bottom: 0; }
.cta-final-box {
  background: var(--gray-900); border-radius: 22px;
  padding: 56px 52px; display: flex; flex-direction: column; gap: 16px;
}
.cta-final-box h2 {
  font-size: clamp(1.7rem, 2.8vw, 2.4rem); font-weight: 800;
  letter-spacing: -0.04em; color: var(--white); line-height: 1.1;
  white-space: pre-line;
}
.cta-final-box p { font-size: 0.97rem; color: rgba(255,255,255,0.4); max-width: 480px; line-height: 1.7; }
.cta-row { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.btn.large { padding: 14px 28px; font-size: 0.93rem; }
.cta-reassure { font-size: 0.75rem; color: rgba(255,255,255,0.28); }

/* ── MODAL ── */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.22s ease; }
.modal-fade-enter-active .modal-panel, .modal-fade-leave-active .modal-panel { transition: transform 0.28s var(--ease), opacity 0.22s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from .modal-panel { transform: translateY(16px) scale(0.97); opacity: 0; }

.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.45); backdrop-filter: blur(6px);
  z-index: 600; display: flex; align-items: center; justify-content: center; padding: 20px;
}

.modal-panel {
  position: relative; background: var(--white);
  border-radius: 22px; width: 100%; max-width: 460px;
  max-height: 90vh; overflow-y: auto;
  box-shadow: var(--shadow-xl);
}

.modal-close {
  position: absolute; top: 14px; right: 14px;
  width: 28px; height: 28px; border-radius: 7px;
  background: var(--gray-100); border: none; color: var(--gray-500);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  z-index: 10; transition: all 0.18s;
}
.modal-close:hover { background: var(--gray-200); color: var(--gray-900); }

.modal-head { padding: 28px 24px 20px; border-bottom: 1px solid var(--gray-100); }
.modal-badge { display: inline-flex; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; padding: 3px 9px; border-radius: 100px; margin-bottom: 10px; }
.modal-head h3 { font-size: 1.45rem; font-weight: 800; letter-spacing: -0.03em; color: var(--gray-900); margin-bottom: 6px; }
.modal-price { font-size: 1.35rem; font-weight: 800; letter-spacing: -0.03em; color: var(--blue); }

.modal-body-section { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 16px; }
.modal-pitch { font-size: 0.87rem; color: var(--gray-500); line-height: 1.6; }
.modal-label { font-size: 0.67rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.11em; color: var(--gray-400); }
.modal-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
.modal-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.85rem; color: var(--gray-700); line-height: 1.4; }
.modal-list li svg { color: var(--green); flex-shrink: 0; margin-top: 2px; }
.modal-meta {
  display: flex; gap: 18px; flex-wrap: wrap; padding: 12px 14px;
  background: var(--gray-50); border-radius: 11px; border: 1px solid var(--gray-100);
}
.modal-meta div { display: flex; flex-direction: column; gap: 2px; }
.meta-k { font-size: 0.67rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: var(--gray-400); }
.meta-v { font-size: 0.85rem; font-weight: 600; color: var(--gray-900); }

/* Responsive */
@media (max-width: 1100px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .why-card:nth-child(2) { border-right: none; }
  .why-card:nth-child(1), .why-card:nth-child(2) { border-bottom: 1px solid var(--gray-200); }
}

@media (max-width: 960px) {
  .packs-grid { grid-template-columns: repeat(2, 1fr); }
  .tjm-block { grid-template-columns: 1fr; }
  .tjm-right { padding-top: 0; }
  .tjm-domains { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .services-page { padding: 32px 0 60px; }
  .packs-grid { grid-template-columns: 1fr; }
  .ai-grid { grid-template-columns: 1fr; }
  .tjm-domains { grid-template-columns: 1fr; }
  .tjm-indicatifs { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; border: none; gap: 10px; }
  .why-card { border: 1.5px solid var(--gray-200); border-radius: 14px; }
  .cta-final-box { padding: 36px 24px; }
  .cta-row { flex-direction: column; align-items: flex-start; }
}
</style>