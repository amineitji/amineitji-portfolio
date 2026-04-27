<template>
  <div class="profile-page">

    <!-- ══ HERO (DARK) ══ -->
    <section class="hero-section">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-left fu">
            <span class="label-dark">{{ t.eyebrow }}</span>
            <h1 class="display-dark" style="margin-top:14px;">{{ t.title }}</h1>
            <p class="hero-sub">{{ t.sub }}</p>
            <div class="hero-tags">
              <span class="htag" v-for="tag in heroTags" :key="tag">{{ tag }}</span>
            </div>
            <div class="hero-ctas">
              <a href="#" class="btn btn-white" @click.prevent="openProfileContactComposer">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {{ t.ctaContact }}
              </a>
              <a :href="`/${lang === 'en' ? 'Amine_ITJI_Resume_EN.pdf' : 'Amine_ITJI_CV_FR.pdf'}`" download class="btn btn-ghost-dark">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {{ t.ctaCV }}
              </a>
            </div>
          </div>
          <div class="hero-right fu" style="animation-delay:.12s;">
            <div class="float-card fc-main">
              <div class="fc-dot fc-dot-green"></div>
              <div class="fc-body">
                <div class="fc-val">Michelin</div>
                <div class="fc-sub">AI Project Manager · Lyon</div>
              </div>
              <span class="fc-badge">{{ lang === 'en' ? 'Active' : 'En cours' }}</span>
            </div>
            <div class="float-card">
              <div class="fc-dot fc-dot-blue"></div>
              <div class="fc-body">
                <div class="fc-val">Master IA</div>
                <div class="fc-sub">Université Lyon 1 · 2026</div>
              </div>
            </div>
            <div class="float-card">
              <div class="fc-dot fc-dot-amber"></div>
              <div class="fc-body">
                <div class="fc-val">Freelance</div>
                <div class="fc-sub">Vue.js · Django · IA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TIMELINES ══ -->
    <section class="timelines-section">
      <div class="container">
        <div class="timelines-grid">

          <div class="tl-card fu" style="animation-delay:.05s;">
            <div class="tl-card-head">
              <div class="tl-icon work-icon">
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

          <div class="tl-card fu" style="animation-delay:.1s;">
            <div class="tl-card-head">
              <div class="tl-icon edu-icon">
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
      </div>
    </section>

    <!-- ══ MAP ══ -->
    <section class="map-section">
      <div class="container">
        <div class="map-intro fu">
          <span class="label">{{ lang === 'en' ? 'Geography' : 'Géographie' }}</span>
          <h2 class="s-title" style="margin-top:8px;">{{ t.mapTitle }}</h2>
          <p class="s-sub" style="margin-top:10px;max-width:540px;">{{ t.mapSub }}</p>
        </div>
        <FranceMap />
      </div>
    </section>

    <!-- ══ SKILLS (DARK) ══ -->
    <section class="skills-section">
      <div class="container">
        <div class="skills-head fu">
          <span class="label-dark">{{ t.skills.eyebrow }}</span>
          <h2 class="skills-title">{{ t.skills.title }}</h2>
        </div>
        <div class="skills-bento fu" style="animation-delay:.08s;">
          <div class="sb-group" v-for="g in t.skills.groups" :key="g.name">
            <div class="sb-head">
              <div class="sb-icon"><span v-html="g.icon"></span></div>
              <span class="sb-name">{{ g.name }}</span>
            </div>
            <div class="sb-chips">
              <span class="dark-chip" v-for="c in g.items" :key="c">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ VALUES (FOREST) ══ -->
    <section class="values-section">
      <div class="container">
        <div class="values-inner fu">
          <div class="values-left">
            <span class="label-dark">{{ t.values.eyebrow }}</span>
            <h2 class="values-title">{{ t.values.title }}</h2>
            <p class="values-sub">{{ t.values.sub }}</p>
            <a href="#" class="btn btn-white" style="margin-top:20px;width:fit-content;" @click.prevent="openValuesComposer">
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
      </div>
    </section>

  </div>
</template>

<script>
import FranceMap from '@/components/FranceMap.vue';

const MICHELIN_END = new Date('2026-08-01');

export default {
  name: 'UserProfile',
  components: { FranceMap },
  inject: ['getLang', 'openEmailComposer'],

  computed: {
    lang() { return this.getLang(); },
    isMichelinActive() { return new Date() < MICHELIN_END; },

    heroTags() {
      return this.lang === 'en'
        ? ['Master AI · Lyon 1', 'AI Project Manager @ Michelin', 'Freelance Developer', 'SaaS Co-Founder']
        : ['Master IA · Lyon 1', 'AI Project Manager @ Michelin', 'Développeur Freelance', 'Co-Fondateur SaaS'];
    },

    t() {
      const isMichelinActive = this.isMichelinActive;
      const data = {
        fr: {
          eyebrow: 'À propos',
          title: 'Parcours & Expertise.',
          sub: 'Double compétence académique et professionnelle au service de l\'innovation technologique.',
          ctaContact: 'Me contacter',
          ctaCV: 'Télécharger mon CV',
          mapTitle: 'Mes expériences en France.',
          mapSub: 'De Paris à Lyon, une trajectoire professionnelle ancrée dans des environnements exigeants.',
          pro: {
            title: 'Parcours Professionnel',
            items: [
              { current: isMichelinActive, date: 'Fév. 2026 – Juil. 2026', role: 'Stage — AI Project Manager', company: 'Michelin · Lyon',
                bullets: ['Pilotage et déploiement de projets IA au sein de l\'équipe ISPARK.', 'Déploiement de solutions Data innovantes en environnement industriel.'] },
              { current: true, date: 'Depuis Juin 2023', role: 'Développeur Full-Stack & Expert IA — Freelance', company: 'Indépendant',
                bullets: ['Applications web et SaaS sur-mesure (Vue.js / Django).', 'Agents IA, LLMs, RAG et automatisation de processus métiers.', 'Web scraping massif et pipelines data (Python).'] },
              { current: false, date: 'Jan. – Mars 2025', role: 'Stage — Digitalisation des Inspections', company: 'ALSTOM — Villeurbanne',
                bullets: ['Digitalisation des processus d\'inspection (KIZEO).', 'Développement d\'outils internes et reporting analytique.'] },
              { current: false, date: 'Mai – Juin 2023', role: 'Stage — Développeur Django/Vue.js', company: 'ANEQQIS — Paris',
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
              { name: 'Front-end',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
                items: ['Vue.js 3', 'HTML/CSS', 'TypeScript', 'Nuxt.js'] },
              { name: 'Back-end',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>',
                items: ['Django', 'FastAPI', 'PostgreSQL', 'REST API'] },
              { name: 'Intelligence Artificielle',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
                items: ['PyTorch', 'Scikit-learn', 'OpenCV', 'YOLO', 'LangChain', 'Anthropic'] },
              { name: 'Data & Cloud',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
                items: ['AWS', 'Docker', 'GitHub Actions', 'Pandas', 'NumPy', 'Selenium'] },
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
          title: 'Background & Expertise.',
          sub: 'A dual academic and professional expertise at the service of technological innovation.',
          ctaContact: 'Contact me',
          ctaCV: 'Download my CV',
          mapTitle: 'My experiences across France.',
          mapSub: 'From Paris to Lyon, a professional trajectory rooted in demanding environments.',
          pro: {
            title: 'Professional Experience',
            items: [
              { current: isMichelinActive, date: 'Feb. 2026 – Jul. 2026', role: 'Intern — AI Project Manager', company: 'Michelin · Lyon',
                bullets: ['Driving and deploying AI projects within the ISPARK team.', 'Deployment of innovative Data solutions in an industrial environment.'] },
              { current: true, date: 'Since June 2023', role: 'Full-Stack Developer & AI Expert — Freelance', company: 'Independent',
                bullets: ['Custom web and SaaS applications (Vue.js / Django).', 'AI agents, LLMs, RAG and business process automation.', 'Massive web scraping and data pipelines (Python).'] },
              { current: false, date: 'Jan. – Mar. 2025', role: 'Internship — Inspection Digitalisation', company: 'ALSTOM — Villeurbanne',
                bullets: ['Digitalisation of inspection processes (KIZEO).', 'Development of internal tools and analytical reporting.'] },
              { current: false, date: 'May – Jun. 2023', role: 'Internship — Django/Vue.js Developer', company: 'ANEQQIS — Paris',
                bullets: ['Full SaaS architecture from scratch (Django / Vue.js).', 'Stripe payment integration and complex PDF generation.'] },
            ],
          },
          edu: {
            title: 'Academic Background',
            items: [
              { current: true, date: 'Graduated 2026', degree: 'Master Intelligence Artificielle', school: 'Université Claude Bernard Lyon 1',
                bullets: ['Machine Learning, Deep Learning, NLP, Computer Vision.', 'Data Science and applied AI research.'] },
              { current: false, date: '2020 – 2023', degree: 'B.Sc. Computer Science', school: 'Université Claude Bernard Lyon 1',
                bullets: ['Algorithms, software architecture, databases.'] },
            ],
          },
          skills: {
            eyebrow: 'Technologies',
            title: 'Technical stack.',
            groups: [
              { name: 'Front-end',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
                items: ['Vue.js 3', 'HTML/CSS', 'TypeScript', 'Nuxt.js'] },
              { name: 'Back-end',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>',
                items: ['Django', 'FastAPI', 'PostgreSQL', 'REST API'] },
              { name: 'Artificial Intelligence',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
                items: ['PyTorch', 'Scikit-learn', 'OpenCV', 'YOLO', 'LangChain', 'Anthropic'] },
              { name: 'Data & Cloud',
                icon: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
                items: ['AWS', 'Docker', 'GitHub Actions', 'Pandas', 'NumPy', 'Selenium'] },
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

  methods: {
    openProfileContactComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'About hero' : 'Profil - hero',
        intent: 'collaboration',
        service: 'general',
      });
    },
    openValuesComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'About values' : 'Profil - valeurs',
        intent: 'collaboration',
        service: 'consulting',
      });
    },
  },
};
</script>

<style scoped>
/* ══ HERO ══ */
.hero-section {
  background: var(--dark);
  position: relative;
  overflow: hidden;
  padding: 80px 0 72px;
}
.hero-glow {
  position: absolute;
  top: -100px; right: -60px;
  width: 560px; height: 560px;
  background: radial-gradient(circle, rgba(27,67,50,0.28) 0%, transparent 65%);
  pointer-events: none;
}
.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 48px;
  align-items: center;
  position: relative;
}
.hero-left { display: flex; flex-direction: column; }
.hero-sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.52);
  line-height: 1.7;
  margin-top: 14px;
  max-width: 520px;
}
.hero-tags {
  display: flex; gap: 8px; flex-wrap: wrap;
  margin-top: 20px;
}
.htag {
  font-family: var(--mono);
  font-size: 0.67rem;
  font-weight: 500;
  color: rgba(255,255,255,0.5);
  padding: 4px 10px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  letter-spacing: 0.04em;
  background: rgba(255,255,255,0.04);
}
.hero-ctas { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }

/* Float cards */
.hero-right { display: flex; flex-direction: column; gap: 10px; position: relative; }
.float-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 14px 16px;
  display: flex; align-items: center; gap: 12px;
  backdrop-filter: blur(8px);
  transition: background 0.2s, border-color 0.2s;
}
.float-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); }
.fc-main { background: rgba(27,67,50,0.28); border-color: rgba(45,106,79,0.45); }
.fc-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
.fc-dot-green { background: #4ADE80; box-shadow: 0 0 6px #4ADE80; animation: pulse-green 2s infinite; }
.fc-dot-blue  { background: #60A5FA; }
.fc-dot-amber { background: #FCD34D; }
.fc-body { flex: 1; }
.fc-val { font-size: 0.88rem; font-weight: 700; color: #fff; }
.fc-sub { font-size: 0.71rem; color: rgba(255,255,255,0.45); margin-top: 2px; }
.fc-badge {
  font-size: 0.62rem; font-weight: 700;
  padding: 3px 8px; border-radius: 100px;
  background: rgba(74,222,128,0.15);
  color: #4ADE80;
  border: 1px solid rgba(74,222,128,0.3);
  white-space: nowrap;
}

/* ══ TIMELINES ══ */
.timelines-section { padding: 72px 0; background: var(--surface); }
.timelines-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.tl-card {
  padding: 28px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}
.tl-card-head {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px; padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.tl-icon {
  width: 38px; height: 38px; border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.work-icon { background: var(--forest-lt); color: var(--forest); }
.edu-icon  { background: #DBEAFE; color: #1D4ED8; }
.tl-card-head h2 { font-size: 1rem; font-weight: 700; color: var(--ink); }

.timeline { position: relative; padding-left: 20px; }
.timeline::before {
  content: '';
  position: absolute; top: 6px; bottom: 0; left: 5px;
  width: 1px;
  background: linear-gradient(to bottom, var(--border), transparent);
}
.tl-item { position: relative; margin-bottom: 28px; }
.tl-item:last-child { margin-bottom: 0; }
.tl-marker { position: absolute; left: -20px; top: 3px; }
.tl-dot { display: block; border-radius: 50%; }
.current-dot {
  width: 10px; height: 10px;
  background: var(--forest);
  box-shadow: 0 0 0 3px var(--forest-lt);
  animation: blink-forest 2s ease-in-out infinite;
}
@keyframes blink-forest {
  0%,100% { box-shadow: 0 0 0 3px var(--forest-lt); }
  50%      { box-shadow: 0 0 0 6px rgba(27,67,50,0.08); }
}
.past-dot {
  width: 8px; height: 8px; margin-top: 1px;
  background: #D1D5DB; border: 2px solid var(--surface);
  box-shadow: 0 0 0 1px var(--border);
}
.tl-content { padding-left: 8px; }
.tl-date {
  display: inline-flex;
  font-size: 0.68rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: var(--muted);
  padding: 3px 8px;
  background: var(--bg); border: 1px solid var(--border); border-radius: 4px;
  margin-bottom: 7px; font-family: var(--mono);
}
.tl-date.highlight { color: var(--forest); background: var(--forest-lt); border-color: var(--forest-border); }
.tl-content h3 { font-size: 0.93rem; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
.tl-company { font-size: 0.78rem; color: var(--forest-md); font-weight: 600; margin-bottom: 8px; }
.tl-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px; }
.tl-list li {
  position: relative; padding-left: 12px;
  font-size: 0.81rem; color: var(--muted); line-height: 1.55;
}
.tl-list li::before {
  content: ''; position: absolute; left: 0; top: 8px;
  width: 4px; height: 4px; border-radius: 50%; background: var(--border);
}

/* ══ MAP ══ */
.map-section {
  padding: 72px 0 80px;
  background: var(--bg);
  border-top: 1px solid var(--border);
}
.map-intro { margin-bottom: 32px; }

/* ══ SKILLS (DARK) ══ */
.skills-section {
  background: var(--dark);
  padding: 72px 0 80px;
  position: relative; overflow: hidden;
}
.skills-section::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}
.skills-head { margin-bottom: 28px; }
.skills-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800; letter-spacing: -0.03em;
  color: #fff; margin-top: 10px; line-height: 1.15;
}
.skills-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  position: relative;
}
.sb-group {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 20px;
  display: flex; flex-direction: column; gap: 14px;
  transition: background 0.2s, border-color 0.2s;
}
.sb-group:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.15); }
.sb-head { display: flex; align-items: center; gap: 10px; }
.sb-icon {
  width: 32px; height: 32px; border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.06);
}
.sb-name { font-size: 0.8rem; font-weight: 700; color: rgba(255,255,255,0.85); }
.sb-chips { display: flex; flex-wrap: wrap; gap: 5px; }
.dark-chip {
  display: inline-flex; align-items: center;
  padding: 3px 9px; border-radius: 4px;
  font-size: 0.67rem; font-weight: 500; letter-spacing: 0.04em;
  font-family: var(--mono);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.55);
}

/* ══ VALUES (FOREST) ══ */
.values-section {
  background: var(--forest);
  padding: 72px 0 80px;
  position: relative; overflow: hidden;
}
.values-section::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}
.values-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 56px; align-items: start; position: relative;
}
.values-left { display: flex; flex-direction: column; }
.values-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800; letter-spacing: -0.03em;
  color: #fff; margin-top: 12px; line-height: 1.15;
}
.values-sub { font-size: 1rem; color: rgba(255,255,255,0.58); line-height: 1.75; margin-top: 14px; }
.values-right { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.value-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius); padding: 20px;
  display: flex; flex-direction: column; gap: 7px;
  transition: background 0.2s;
}
.value-card:hover { background: rgba(255,255,255,0.1); }
.value-num { font-family: var(--mono); font-size: 0.62rem; font-weight: 700; color: rgba(255,255,255,0.22); letter-spacing: 0.08em; }
.value-card h4 { font-size: 0.88rem; font-weight: 700; color: #fff; line-height: 1.3; }
.value-card p { font-size: 0.78rem; color: rgba(255,255,255,0.52); line-height: 1.6; }

/* ══ RESPONSIVE ══ */
@media (max-width: 1024px) {
  .skills-bento { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-right { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
}
@media (max-width: 768px) {
  .hero-section { padding: 56px 0 48px; }
  .timelines-section { padding: 48px 0; }
  .map-section { padding: 48px 0 56px; }
  .skills-section { padding: 56px 0; }
  .values-section { padding: 56px 0; }
  .timelines-grid { grid-template-columns: 1fr; }
  .values-inner { grid-template-columns: 1fr; gap: 32px; }
  .values-right { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .hero-right { grid-template-columns: 1fr 1fr; }
  .hero-right .float-card:last-child { grid-column: span 2; }
  .skills-bento { grid-template-columns: 1fr 1fr; }
  .values-right { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .hero-section { padding: 40px 0 36px; }
  .hero-sub { font-size: 0.92rem; }
  .hero-ctas { flex-direction: column; align-items: stretch; }
  .hero-ctas .btn { justify-content: center; }
  .hero-right { grid-template-columns: 1fr; }
  .hero-right .float-card:last-child { grid-column: span 1; }
  .skills-bento { grid-template-columns: 1fr; }
  .values-right { gap: 10px; }
  .tl-card { padding: 16px; }
  .map-section { padding: 36px 0 48px; }
}
</style>
