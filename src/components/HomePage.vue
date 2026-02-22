<template>
  <div class="home">

    <section class="hero fu">
      <div class="hero-left">
        <div class="status-pill">
          <span class="status-dot"></span>
          {{ t.hero.status }}
        </div>

        <h1 class="hero-title">
          {{ t.hero.line1 }}<br>
          <span class="hero-accent">{{ t.hero.line2 }}</span>
        </h1>

        <p class="hero-sub">{{ t.hero.sub }}</p>

        <p class="hero-disclaimer">
          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {{ t.hero.disclaimer }}
        </p>

        <div class="hero-actions">
          <a :href="`mailto:${contactEmail}?subject=Nouveau projet`" class="btn btn-dark">
            {{ t.hero.cta1 }}
          </a>
          <router-link to="/projets" class="btn btn-outline">
            {{ t.hero.cta2 }}
          </router-link>
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-photo-wrap">
          <img src="pp.jpeg" alt="Portrait de Amine Itji" width="220" height="220" loading="lazy" class="hero-photo" />
          <div class="photo-ring"></div>
        </div>
        <div class="hero-badges">
          <div class="h-badge">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            Michelin
          </div>
          <div class="h-badge">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            M2 IA · Lyon 1
          </div>
          <div class="h-badge">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            DiagERP · CTO
          </div>
        </div>
      </div>
    </section>

    <div class="trust-bar fu" style="animation-delay:.1s;">
      <span class="trust-label">{{ t.trust.label }}</span>
      <div class="trust-items">
        <div class="trust-item" v-for="item in t.trust.items" :key="item.name">
          <span class="trust-name">{{ item.name }}</span>
          <span class="trust-role">{{ item.role }}</span>
        </div>
      </div>
    </div>

    <section class="section fu" style="animation-delay:.15s;">
      <div class="section-head">
        <span class="eyebrow">{{ t.services.eyebrow }}</span>
        <h2 class="s-title">{{ t.services.title }}</h2>
        <p class="s-sub">{{ t.services.sub }}</p>
      </div>

      <div class="bento">
        <div class="bento-card big">
          <div class="bento-icon ai-bg">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>
          </div>
          <span class="bento-tag">{{ t.services.ai.tag }}</span>
          <h3>{{ t.services.ai.title }}</h3>
          <p>{{ t.services.ai.desc }}</p>
          <div class="bento-chips">
            <span class="chip" v-for="c in t.services.ai.chips" :key="c">{{ c }}</span>
          </div>
        </div>

        <div class="bento-card">
          <div class="bento-icon web-bg">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3>{{ t.services.web.title }}</h3>
          <p>{{ t.services.web.desc }}</p>
        </div>

        <div class="bento-card">
          <div class="bento-icon data-bg">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <h3>{{ t.services.data.title }}</h3>
          <p>{{ t.services.data.desc }}</p>
        </div>

        <div class="bento-card stats-card">
          <div class="stats-grid">
            <div class="stat" v-for="s in t.stats" :key="s.value">
              <span class="stat-val">{{ s.value }}</span>
              <span class="stat-lbl">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section fu" style="animation-delay:.2s;">
      <div class="section-head">
        <span class="eyebrow">{{ t.projects.eyebrow }}</span>
        <h2 class="s-title">{{ t.projects.title }}</h2>
      </div>

      <div class="projects-row">
        <a href="https://diagerp.fr" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-visual erp-bg">
            <div class="project-logo-pill">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Diag<strong>ERP</strong>
            </div>
            <div class="project-hover">{{ t.projects.visit }}</div>
          </div>
          <div class="project-info">
            <div class="project-tags">
              <span class="chip">SaaS B2B</span>
              <span class="chip">{{ t.projects.cto }}</span>
            </div>
            <h3>DiagERP</h3>
            <p>{{ t.projects.erp }}</p>
          </div>
        </a>

        <a href="https://diagimmomarches.fr" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-visual immo-bg">
            <div class="project-logo-pill">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Diagimmo<strong>Marchés</strong>
            </div>
            <div class="project-hover">{{ t.projects.visit }}</div>
          </div>
          <div class="project-info">
            <div class="project-tags">
              <span class="chip">{{ t.projects.client }}</span>
              <span class="chip">SEO Premium</span>
            </div>
            <h3>DiagImmoMarchés</h3>
            <p>{{ t.projects.immo }}</p>
          </div>
        </a>
      </div>

      <div class="projects-more">
        <router-link to="/projets" class="btn btn-outline">
          {{ t.projects.more }}
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </router-link>
      </div>
    </section>

    <section class="cta-section fu" style="animation-delay:.25s;">
      <div class="cta-box">
        <div class="cta-left">
          <span class="status-pill">
            <span class="status-dot"></span>
            {{ t.hero.status }}
          </span>
          <h2>{{ t.cta.title }}</h2>
          <p>{{ t.cta.sub }}</p>
          <div class="cta-actions">
            <a :href="`mailto:${contactEmail}`" class="btn btn-dark">
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {{ t.cta.btn }}
            </a>
            <router-link to="/services" class="btn btn-outline">{{ t.cta.services }}</router-link>
          </div>
          <p class="cta-reassure">{{ t.cta.reassure }}</p>
        </div>
        <div class="cta-right">
          <div class="cta-card" v-for="item in t.cta.cards" :key="item.title">
            <div class="cta-card-icon" :style="{ background: item.bg }">
              <span v-html="item.icon"></span>
            </div>
            <div>
              <div class="cta-card-title">{{ item.title }}</div>
              <div class="cta-card-sub">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
// On centralise l'adresse mail pour ne la changer qu'à un seul endroit si besoin
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'HomePage',
  inject: ['getLang'],
  data() {
    return {
      contactEmail: CONTACT_EMAIL
    };
  },
  computed: {
    lang() { return this.getLang(); },
    t() {
      const data = {
        fr: {
          hero: {
            status: 'Disponible pour nouveaux projets',
            line1: 'Expert IA & Full-Stack.',
            line2: 'Je construis ce qui compte.',
            sub: 'Développeur indépendant depuis 2023 — je conçois des applications web performantes et des systèmes d\'IA qui créent une valeur tangible pour vos équipes.',
            disclaimer: 'Activité freelance distincte de mon poste d\'AI Project Manager chez Michelin.',
            cta1: 'Me parler de votre projet',
            cta2: 'Voir mes travaux',
          },
          trust: {
            label: 'ILS VALIDENT MON EXPERTISE',
            items: [
              { name: 'Michelin', role: 'AI Project Manager' },
              { name: 'DiagERP', role: 'Co-fondateur & CTO' },
              { name: 'Lyon 1', role: 'Master 2 Intelligence Artificielle' },
              { name: 'ALSTOM', role: 'Digitalisation & Web' },
            ],
          },
          services: {
            eyebrow: 'Expertises',
            title: 'Une stack technique\ncomprète, un seul interlocuteur.',
            sub: 'Du front-end au modèle d\'IA, je prends en charge l\'intégralité de la chaîne technique.',
            ai: {
              tag: 'Cœur d\'expertise',
              title: 'Intelligence Artificielle & Agents LLM',
              desc: 'Pipelines RAG pour vos données privées, agents autonomes, Computer Vision (YOLO), intégration GPT-4 / Claude. Je transforme vos données en actifs intelligents.',
              chips: ['LangChain', 'OpenAI', 'Anthropic', 'YOLO', 'RAG'],
            },
            web: {
              title: 'Développement Full-Stack',
              desc: 'Applications SaaS, plateformes B2B, sites premium — avec Vue.js 3 et Django. Architecture solide, code maintenable, performance optimale.',
            },
            data: {
              title: 'Data & Web Scraping',
              desc: 'Extraction massive de données web, pipelines ETL, visualisation. Vos concurrents n\'ont plus de secrets.',
            },
          },
          stats: [
            { value: '2 ans+', label: 'Freelance' },
            { value: '1 SaaS', label: 'En production' },
            { value: 'M2 IA', label: 'Lyon 1' },
            { value: '< 24h', label: 'Réponse garantie' },
          ],
          projects: {
            eyebrow: 'Réalisations',
            title: 'Cas d\'usages en production.',
            visit: 'Visiter →',
            cto: 'Co-fondateur',
            client: 'Projet client',
            erp: 'SaaS B2B pour diagnostiqueurs immobiliers. Gestion complète des missions, rapports réglementaires et facturation Stripe. Utilisé activement en production.',
            immo: 'Plateforme web premium optimisée pour l\'acquisition SEO et la conversion. Score Lighthouse 95+.',
            more: 'Voir tous les projets',
          },
          cta: {
            title: 'Votre prochain projet,\nlivré avec précision.',
            sub: 'Je réponds à chaque demande sous 24 heures avec une proposition claire et sans engagement.',
            btn: 'Envoyer un message',
            services: 'Voir les offres',
            reassure: '✓ Gratuit · ✓ Sans engagement · ✓ Réponse < 24h',
            cards: [
              { title: 'TJM', value: '380 € / jour', bg: '#eff6ff', icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
              { title: 'Site vitrine', value: 'Dès 700 €', bg: '#f0fdf4', icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>' },
              { title: 'Agent IA', value: '1 500 – 5 000 €', bg: '#f5f3ff', icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>' },
            ],
          },
        },
        en: {
          hero: {
            status: 'Available for new projects',
            line1: 'AI Expert & Full-Stack Dev.',
            line2: 'I build what matters.',
            sub: 'Independent developer since 2023 — I design high-performance web applications and AI systems that create tangible value for your teams.',
            disclaimer: 'Freelance activity, separate from my AI Project Manager role at Michelin.',
            cta1: 'Tell me about your project',
            cta2: 'View my work',
          },
          trust: {
            label: 'TRUSTED BY',
            items: [
              { name: 'Michelin', role: 'AI Project Manager' },
              { name: 'DiagERP', role: 'Co-founder & CTO' },
              { name: 'Lyon 1', role: 'M.Sc. Artificial Intelligence' },
              { name: 'ALSTOM', role: 'Digitalization & Web' },
            ],
          },
          services: {
            eyebrow: 'Expertise',
            title: 'A complete tech stack,\none point of contact.',
            sub: 'From front-end to AI model, I handle the entire technical chain.',
            ai: {
              tag: 'Core expertise',
              title: 'Artificial Intelligence & LLM Agents',
              desc: 'RAG pipelines for your private data, autonomous agents, Computer Vision (YOLO), GPT-4 / Claude integration. I turn your data into intelligent assets.',
              chips: ['LangChain', 'OpenAI', 'Anthropic', 'YOLO', 'RAG'],
            },
            web: {
              title: 'Full-Stack Development',
              desc: 'SaaS apps, B2B platforms, premium websites — with Vue.js 3 & Django. Solid architecture, maintainable code, optimal performance.',
            },
            data: {
              title: 'Data & Web Scraping',
              desc: 'Massive web data extraction, ETL pipelines, visualization. Your competitors will have no secrets.',
            },
          },
          stats: [
            { value: '2 yrs+', label: 'Freelance' },
            { value: '1 SaaS', label: 'Live in production' },
            { value: 'M.Sc. AI', label: 'Lyon 1' },
            { value: '< 24h', label: 'Guaranteed reply' },
          ],
          projects: {
            eyebrow: 'Work',
            title: 'Live production use cases.',
            visit: 'Visit →',
            cto: 'Co-founder',
            client: 'Client project',
            erp: 'B2B SaaS for real estate diagnosticians. Full mission management, regulatory reports, and Stripe billing. Actively used in production.',
            immo: 'Premium web platform optimized for SEO acquisition and conversion. Lighthouse score 95+.',
            more: 'View all projects',
          },
          cta: {
            title: 'Your next project,\ndelivered with precision.',
            sub: 'I respond to every request within 24 hours with a clear, no-commitment proposal.',
            btn: 'Send a message',
            services: 'View services',
            reassure: '✓ Free · ✓ No commitment · ✓ Reply < 24h',
            cards: [
              { title: 'Daily rate', value: '€380 / day', bg: '#eff6ff', icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
              { title: 'Website', value: 'From €700', bg: '#f0fdf4', icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>' },
              { title: 'AI Agent', value: '€1,500 – €5,000', bg: '#f5f3ff', icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>' },
            ],
          },
        },
      };
      return data[this.lang];
    },
  },
};
</script>

<style scoped>
/* Les styles restent identiques, ils étaient déjà parfaitement structurés ! */
.home { padding: 48px 0 80px; }

/* ── HERO ── */
.hero {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: center;
  padding-bottom: 72px;
  border-bottom: 1px solid var(--gray-100);
  margin-bottom: 72px;
}

.hero-left { display: flex; flex-direction: column; gap: 20px; max-width: 600px; }

.hero-title {
  font-size: clamp(2.6rem, 4.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.055em;
  line-height: 1.05;
  color: var(--gray-900);
}

.hero-accent {
  background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 60%, var(--cyan) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub {
  font-size: 1.05rem;
  color: var(--gray-500);
  line-height: 1.75;
  max-width: 520px;
}

.hero-disclaimer {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.77rem;
  color: var(--gray-400);
  padding: 7px 13px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  width: fit-content;
}

.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* Hero right — photo */
.hero-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.hero-photo-wrap {
  position: relative;
  width: 220px;
  height: 220px;
}

.hero-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--white);
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 1;
}

.photo-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(135deg, var(--blue), var(--purple), var(--cyan)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.hero-badges {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
}

.h-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--gray-600);
  padding: 5px 12px;
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: 100px;
}

/* ── Trust bar ── */
.trust-bar {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 20px 28px;
  background: var(--gray-50);
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  margin-bottom: 72px;
  flex-wrap: wrap;
}

.trust-label {
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--gray-300);
  text-transform: uppercase;
  white-space: nowrap;
}

.trust-items {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.trust-name { font-size: 0.88rem; font-weight: 700; color: var(--gray-800); }
.trust-role { font-size: 0.73rem; color: var(--gray-400); }

/* ── Section heading ── */
.section { margin-bottom: 80px; }
.section-head { margin-bottom: 40px; display: flex; flex-direction: column; gap: 12px; }

/* ── Bento grid ── */
.bento {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 16px;
}

.bento-card {
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
  box-shadow: var(--shadow-sm);
}

.bento-card:hover {
  border-color: var(--gray-300);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.bento-card.big {
  grid-row: span 2;
}

.bento-card.stats-card {
  grid-column: span 2;
  background: var(--gray-900);
  border-color: var(--gray-800);
}

.bento-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.ai-bg   { background: #f5f3ff; color: var(--purple); }
.web-bg  { background: #eff6ff; color: var(--blue); }
.data-bg { background: var(--green-light); color: var(--green); }

.bento-tag {
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--purple);
  background: #f5f3ff;
  padding: 4px 10px;
  border-radius: 100px;
  width: fit-content;
}

.bento-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--gray-900);
  line-height: 1.3;
}

.bento-card.big h3 { font-size: 1.4rem; }

.bento-card p { font-size: 0.875rem; color: var(--gray-500); line-height: 1.65; }

.bento-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }

/* Stats inside dark card */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
}

.stat { display: flex; flex-direction: column; gap: 2px; }
.stat-val { font-size: 1.4rem; font-weight: 800; letter-spacing: -0.04em; color: var(--white); }
.stat-lbl { font-size: 0.73rem; color: rgba(255,255,255,0.45); }

/* ── Projects ── */
.projects-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.project-card {
  display: block;
  text-decoration: none;
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
  box-shadow: var(--shadow-sm);
}

.project-card:hover {
  border-color: var(--gray-300);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.project-visual {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.erp-bg  { background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%); }
.immo-bg { background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%); }

.project-logo-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--white);
  border-radius: 100px;
  border: 1.5px solid var(--gray-200);
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--gray-800);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s var(--ease);
}

.project-card:hover .project-logo-pill { transform: scale(1.06); }

.project-hover {
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.28s ease;
  backdrop-filter: blur(2px);
}

.project-card:hover .project-hover { opacity: 1; }

.project-info { padding: 20px 22px; }
.project-tags { display: flex; gap: 6px; margin-bottom: 12px; }

.project-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.project-info p { font-size: 0.86rem; color: var(--gray-500); line-height: 1.6; }

.projects-more { display: flex; justify-content: center; margin-top: 8px; }

/* ── CTA section ── */
.cta-section { margin-bottom: 0; }

.cta-box {
  background: var(--gray-900);
  border-radius: 24px;
  padding: 56px 52px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}

.cta-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cta-left h2 {
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: var(--white);
  white-space: pre-line;
}

.cta-left p { font-size: 0.97rem; color: rgba(255,255,255,0.45); max-width: 460px; line-height: 1.7; }

.cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.cta-reassure { font-size: 0.76rem; color: rgba(255,255,255,0.3); }

.cta-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 220px;
}

.cta-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
}

.cta-card-icon {
  width: 36px; height: 36px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.cta-card-title { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
.cta-card-sub { font-size: 0.9rem; font-weight: 700; color: var(--white); }

/* Override btn colors for dark bg */
.cta-left .btn-outline {
  border-color: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.7);
  background: transparent;
}
.cta-left .btn-outline:hover {
  border-color: rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.06);
  color: white;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .bento { grid-template-columns: 1fr 1fr; }
  .bento-card.big { grid-row: span 1; grid-column: span 2; }
  .bento-card.stats-card { grid-column: span 2; }
  .stats-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .home { padding: 32px 0 60px; }
  .hero { grid-template-columns: 1fr; gap: 32px; margin-bottom: 48px; }
  .hero-right { order: -1; }
  .hero-photo-wrap { width: 140px; height: 140px; }
  .trust-bar { gap: 16px; }
  .trust-items { gap: 16px; }
  .bento { grid-template-columns: 1fr; }
  .bento-card.big, .bento-card.stats-card { grid-column: span 1; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .projects-row { grid-template-columns: 1fr; }
  .cta-box { grid-template-columns: 1fr; gap: 28px; padding: 36px 28px; }
  .cta-right { flex-direction: row; flex-wrap: wrap; min-width: unset; }
  .cta-card { flex: 1; min-width: 140px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 2.2rem; }
  .cta-actions { flex-direction: column; }
}
</style>