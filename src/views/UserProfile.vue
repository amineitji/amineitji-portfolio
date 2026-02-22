<template>
  <div class="profile-page">

    <header class="profile-hero fu">
      <span class="eyebrow">{{ t.eyebrow }}</span>
      <h1 class="s-title" style="margin-top:12px;">{{ t.title }}</h1>
      <p class="s-sub" style="margin-top:10px;">{{ t.sub }}</p>
      <div class="profile-ctas">
        <a :href="`mailto:${contactEmail}?subject=Mission freelance`" class="btn btn-dark">
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          {{ t.ctaContact }}
        </a>
        <a href="/CV.pdf" download="CV_Amine_ITJI.pdf" class="btn btn-outline">
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          {{ t.ctaCV }}
        </a>
      </div>
    </header>

    <div class="timelines-grid fu" style="animation-delay:.1s;">

      <div class="card">
        <div class="card-heading">
          <div class="card-icon work-icon">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h2>{{ t.pro.title }}</h2>
        </div>
        <div class="timeline">
          <div class="tl-item" v-for="item in t.pro.items" :key="item.role" :class="{ current: item.current }">
            <div class="tl-marker">
              <span v-if="item.current" class="tl-dot current-dot"></span>
              <span v-else class="tl-dot past-dot"></span>
            </div>
            <div class="tl-content">
              <span class="tl-date" :class="{ highlight: item.current }">{{ item.date }}</span>
              <h3>{{ item.role }}</h3>
              <p class="tl-company">{{ item.company }}</p>
              <ul class="tl-list">
                <li v-for="b in item.bullets" :key="b">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-heading">
          <div class="card-icon edu-icon">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h2>{{ t.edu.title }}</h2>
        </div>
        <div class="timeline">
          <div class="tl-item" v-for="item in t.edu.items" :key="item.degree" :class="{ current: item.current }">
            <div class="tl-marker">
              <span v-if="item.current" class="tl-dot current-dot"></span>
              <span v-else class="tl-dot past-dot"></span>
            </div>
            <div class="tl-content">
              <span class="tl-date" :class="{ highlight: item.current }">{{ item.date }}</span>
              <h3>{{ item.degree }}</h3>
              <p class="tl-company">{{ item.school }}</p>
              <ul class="tl-list">
                <li v-for="b in item.bullets" :key="b">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="skills-section fu" style="animation-delay:.2s;">
      <span class="eyebrow">{{ t.skills.eyebrow }}</span>
      <h2 class="s-title" style="margin-top:12px;margin-bottom:32px;">{{ t.skills.title }}</h2>
      <div class="skills-grid">
        <div class="skill-group" v-for="g in t.skills.groups" :key="g.name">
          <div class="sg-head">
            <div class="sg-icon" :style="{ background: g.bg, color: g.color }">
              <span v-html="g.icon"></span>
            </div>
            <span class="sg-name">{{ g.name }}</span>
          </div>
          <div class="sg-chips">
            <span class="chip" v-for="c in g.items" :key="c">{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section fu" style="animation-delay:.25s;">
      <div class="values-inner">
        <div class="values-left">
          <span class="eyebrow">{{ t.values.eyebrow }}</span>
          <h2 class="s-title" style="margin-top:12px;">{{ t.values.title }}</h2>
          <p class="s-sub" style="margin-top:10px;">{{ t.values.sub }}</p>
          <a :href="`mailto:${contactEmail}?subject=${encodeURIComponent(t.values.subject)}`" class="btn btn-dark" style="margin-top:16px;width:fit-content;">
            {{ t.values.cta }}
          </a>
        </div>
        <div class="values-right">
          <div class="value-card" v-for="v in t.values.items" :key="v.title">
            <span class="value-num">{{ String(v.n).padStart(2,'0') }}</span>
            <h4>{{ v.title }}</h4>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'UserProfile',
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
          eyebrow: 'À propos',
          title: 'Parcours & Expertise',
          sub: 'Une double compétence académique et professionnelle au service de l\'innovation technologique.',
          ctaContact: 'Me contacter pour un projet',
          ctaCV: 'Télécharger mon CV',
          pro: {
            title: 'Parcours Professionnel',
            items: [
              { current: true, date: 'Depuis Fév. 2026', role: 'AI Project Manager', company: 'Michelin',
                bullets: ['Pilotage stratégique de projets IA à grande échelle.', 'Déploiement de solutions Data innovantes en environnement industriel.'] },
              { current: true, date: 'Depuis Juin 2023', role: 'Développeur Full-Stack & Expert IA — Freelance', company: 'Indépendant',
                bullets: ['Applications web et SaaS sur-mesure (Vue.js / Django).', 'Agents IA, LLMs, RAG et automatisation de processus métiers.', 'Web scraping massif et pipelines data (Python).'] },
              { current: false, date: 'Jan. – Mars 2025', role: 'Stage — Digitalisation & Web', company: 'ALSTOM — Villeurbanne',
                bullets: ['Digitalisation des processus d\'inspection (KIZEO).', 'Développement d\'outils internes et reporting analytique.'] },
              { current: false, date: 'Mai – Juin 2023', role: 'Stage — Développeur Full-Stack', company: 'ANEQQIS — Paris',
                bullets: ['Architecture SaaS de zéro (Django / Vue.js).', 'Intégration paiements Stripe et génération de PDF complexes.'] },
            ],
          },
          edu: {
            title: 'Parcours Académique',
            items: [
              { current: true, date: 'Diplômé 2026', degree: 'Master 2 Intelligence Artificielle', school: 'Université Claude Bernard Lyon 1',
                bullets: ['Machine Learning, Deep Learning, NLP, Computer Vision.', 'Data Science et recherche appliquée en IA.'] },
              { current: false, date: '2020 – 2023', degree: 'Licence Informatique', school: 'Université Claude Bernard Lyon 1',
                bullets: ['Algorithmique, architecture logicielle, bases de données.'] },
            ],
          },
          skills: {
            eyebrow: 'Technologies',
            title: 'Stack technique.',
            groups: [
              { name: 'Front-end', bg: '#eff6ff', color: '#3b82f6',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
                items: ['Vue.js 3', 'Nuxt.js', 'TypeScript', 'Tailwind', 'HTML/CSS'] },
              { name: 'Back-end', bg: '#f0fdf4', color: '#10b981',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>',
                items: ['Django', 'FastAPI', 'PostgreSQL', 'Redis', 'REST API'] },
              { name: 'Intelligence Artificielle', bg: '#f5f3ff', color: '#8b5cf6',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
                items: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic', 'YOLO', 'Scikit-learn'] },
              { name: 'Data & Cloud', bg: '#fff7ed', color: '#f59e0b',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
                items: ['AWS', 'Docker', 'CI/CD', 'Selenium', 'Scrapy', 'Pandas'] },
            ],
          },
          values: {
            eyebrow: 'Mon approche',
            title: 'Pourquoi travailler avec moi.',
            sub: 'Je ne suis pas juste un développeur. Je suis un partenaire technique qui comprend vos enjeux business.',
            subject: 'Demande de collaboration freelance',
            cta: 'Discutons de votre projet',
            items: [
              { n:1, title: 'Livraison, pas promesses', desc: 'DiagERP est en production et utilisé activement. Mon track record parle avant mes mots.' },
              { n:2, title: 'Vision produit + technique', desc: 'Ancien stage dans une startup, CTO d\'une SaaS B2B, PM chez Michelin. Je code ET je pense produit.' },
              { n:3, title: 'Transparence totale', desc: 'Devis détaillé, points réguliers, code documenté et livré avec les sources. Zéro mauvaise surprise.' },
              { n:4, title: 'Réactivité garantie', desc: 'Chaque message reçoit une réponse sous 24h. Parce que votre temps a une valeur.' },
            ],
          },
        },
        en: {
          eyebrow: 'About',
          title: 'Background & Expertise',
          sub: 'A dual academic and professional expertise at the service of technological innovation.',
          ctaContact: 'Contact me for a project',
          ctaCV: 'Download my CV',
          pro: {
            title: 'Professional Experience',
            items: [
              { current: true, date: 'Since Feb. 2026', role: 'AI Project Manager', company: 'Michelin',
                bullets: ['Strategic management of large-scale AI projects.', 'Deployment of innovative Data solutions in an industrial environment.'] },
              { current: true, date: 'Since June 2023', role: 'Full-Stack Developer & AI Expert — Freelance', company: 'Independent',
                bullets: ['Custom web and SaaS applications (Vue.js / Django).', 'AI agents, LLMs, RAG and business process automation.', 'Massive web scraping and data pipelines (Python).'] },
              { current: false, date: 'Jan. – Mar. 2025', role: 'Internship — Digitalization & Web', company: 'ALSTOM — Villeurbanne',
                bullets: ['Digitalization of inspection processes (KIZEO).', 'Development of internal tools and analytical reporting.'] },
              { current: false, date: 'May – Jun. 2023', role: 'Internship — Full-Stack Developer', company: 'ANEQQIS — Paris',
                bullets: ['Full SaaS architecture from scratch (Django / Vue.js).', 'Stripe payment integration and complex PDF generation.'] },
            ],
          },
          edu: {
            title: 'Academic Background',
            items: [
              { current: true, date: 'Graduating 2026', degree: 'M.Sc. Artificial Intelligence', school: 'Université Claude Bernard Lyon 1',
                bullets: ['Machine Learning, Deep Learning, NLP, Computer Vision.', 'Data Science and applied AI research.'] },
              { current: false, date: '2020 – 2023', degree: 'B.Sc. Computer Science', school: 'Université Claude Bernard Lyon 1',
                bullets: ['Algorithms, software architecture, databases.'] },
            ],
          },
          skills: {
            eyebrow: 'Technologies',
            title: 'Technical stack.',
            groups: [
              { name: 'Front-end', bg: '#eff6ff', color: '#3b82f6',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
                items: ['Vue.js 3', 'Nuxt.js', 'TypeScript', 'Tailwind', 'HTML/CSS'] },
              { name: 'Back-end', bg: '#f0fdf4', color: '#10b981',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>',
                items: ['Django', 'FastAPI', 'PostgreSQL', 'Redis', 'REST API'] },
              { name: 'Artificial Intelligence', bg: '#f5f3ff', color: '#8b5cf6',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
                items: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic', 'YOLO', 'Scikit-learn'] },
              { name: 'Data & Cloud', bg: '#fff7ed', color: '#f59e0b',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
                items: ['AWS', 'Docker', 'CI/CD', 'Selenium', 'Scrapy', 'Pandas'] },
            ],
          },
          values: {
            eyebrow: 'My approach',
            title: 'Why work with me.',
            sub: 'I\'m not just a developer. I\'m a technical partner who understands your business challenges.',
            subject: 'Freelance collaboration request',
            cta: 'Let\'s discuss your project',
            items: [
              { n:1, title: 'Delivery, not promises', desc: 'DiagERP is in production and actively used. My track record speaks before my words.' },
              { n:2, title: 'Product + technical vision', desc: 'Former startup intern, CTO of a B2B SaaS, PM at Michelin. I code AND think product.' },
              { n:3, title: 'Full transparency', desc: 'Detailed quote, regular updates, documented code delivered with sources. Zero nasty surprises.' },
              { n:4, title: 'Guaranteed responsiveness', desc: 'Every message gets a reply within 24h. Because your time has value.' },
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
/* Les styles restent inchangés ! */
.profile-page { padding: 48px 0 80px; }

/* Hero */
.profile-hero {
  max-width: 680px;
  margin-bottom: 64px;
  display: flex; flex-direction: column; gap: 0;
}
.profile-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }

/* Timelines grid */
.timelines-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 64px;
}

.card { padding: 32px; }

.card-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.card-icon {
  width: 40px; height: 40px;
  border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.work-icon { background: #eff6ff; color: var(--blue); }
.edu-icon  { background: #f5f3ff; color: var(--purple); }

.card-heading h2 { font-size: 1.1rem; font-weight: 700; color: var(--gray-900); }

/* Timeline */
.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 6px; bottom: 0; left: 5px;
  width: 1px;
  background: linear-gradient(to bottom, var(--gray-200), transparent);
}

.tl-item {
  position: relative;
  margin-bottom: 32px;
}
.tl-item:last-child { margin-bottom: 0; }

.tl-marker {
  position: absolute;
  left: -20px; top: 3px;
}

.tl-dot {
  display: block;
  border-radius: 50%;
}

.current-dot {
  width: 10px; height: 10px;
  background: var(--blue);
  box-shadow: 0 0 0 3px rgba(59,130,246,0.18);
  animation: blink-blue 2s ease-in-out infinite;
}

@keyframes blink-blue {
  0%,100% { box-shadow: 0 0 0 3px rgba(59,130,246,0.18); }
  50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0.07); }
}

.past-dot {
  width: 8px; height: 8px;
  background: var(--gray-300);
  border: 2px solid var(--white);
  box-shadow: 0 0 0 1px var(--gray-200);
  margin-top: 1px;
}

.tl-content { padding-left: 8px; }

.tl-date {
  display: inline-flex;
  font-size: 0.73rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--gray-400);
  padding: 3px 9px;
  background: var(--gray-100);
  border-radius: 100px;
  margin-bottom: 8px;
}

.tl-date.highlight {
  color: var(--blue);
  background: var(--blue-light);
}

.tl-content h3 {
  font-size: 1rem; font-weight: 700; color: var(--gray-900); margin-bottom: 3px;
}

.tl-company {
  font-size: 0.82rem; color: var(--cyan); font-weight: 600; margin-bottom: 10px;
}

.tl-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 5px;
}

.tl-list li {
  position: relative;
  padding-left: 12px;
  font-size: 0.845rem;
  color: var(--gray-500);
  line-height: 1.5;
}

.tl-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 8px;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--gray-300);
}

/* Skills */
.skills-section { margin-bottom: 64px; }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.skill-group {
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 16px;
  padding: 20px;
  display: flex; flex-direction: column; gap: 14px;
  transition: border-color 0.22s, box-shadow 0.28s, transform 0.28s var(--ease);
  box-shadow: var(--shadow-sm);
}
.skill-group:hover { border-color: var(--gray-300); box-shadow: var(--shadow-md); transform: translateY(-3px); }

.sg-head { display: flex; align-items: center; gap: 10px; }

.sg-icon {
  width: 34px; height: 34px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.sg-name { font-size: 0.82rem; font-weight: 700; color: var(--gray-900); }

.sg-chips { display: flex; flex-wrap: wrap; gap: 5px; }

/* Values */
.values-section { }

.values-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
  background: var(--gray-900);
  border-radius: 24px;
  padding: 56px;
}

.values-left { display: flex; flex-direction: column; gap: 0; }
.values-left .eyebrow::before { background: linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2)); }
.values-left .eyebrow { color: rgba(255,255,255,0.35); }
.values-left .s-title { color: var(--white); }
.values-left .s-sub { color: rgba(255,255,255,0.45); }

.values-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.value-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background 0.22s;
}
.value-card:hover { background: rgba(255,255,255,0.07); }

.value-num {
  font-size: 0.65rem;
  font-weight: 700;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.08em;
}

.value-card h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.3;
}

.value-card p { font-size: 0.8rem; color: rgba(255,255,255,0.45); line-height: 1.6; }

/* Responsive */
@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .profile-page { padding: 32px 0 60px; }
  .timelines-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .values-inner { grid-template-columns: 1fr; gap: 32px; padding: 32px 24px; }
  .values-right { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .skills-grid { grid-template-columns: 1fr; }
  .values-right { grid-template-columns: 1fr; }
}
</style>