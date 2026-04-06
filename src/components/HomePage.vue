<template>
  <div class="ph">

    <!-- ══ PROFILE CARD ══ -->
    <div class="pcard fu">

      <!-- Cover banner — dark with gold grid -->
      <div class="pcard-cover">
        <span class="cover-tag tl">AMINE·ITJI · PORTFOLIO</span>
        <span class="cover-tag br">AI · DEV · CONSULTANT</span>
        <div class="cover-hline"></div>
      </div>

      <!-- Photo row overlapping cover -->
      <div class="pcard-photo-row">
        <div class="photo-ring">
          <img src="pp.jpeg" alt="Amine ITJI" class="pphoto" loading="eager" />
        </div>
        <div class="pbadges">
          <div v-if="isMichelinActive" class="pbadge pbadge-stage">
            <span class="bdot"></span>
            AI PM · Michelin
            <span class="pbadge-until">→ juil. 2026</span>
          </div>
          <div class="pbadge pbadge-free">
            <span class="bdot bdot-g"></span>
            {{ lang === 'en' ? 'Freelance · Open' : 'Freelance · Disponible' }}
          </div>
        </div>
      </div>

      <!-- Profile info -->
      <div class="pcard-body">
        <div class="pname-row">
          <h1 class="pname">Amine ITJI</h1>
          <div class="pcard-actions">
            <a
              :href="`mailto:${contactEmail}?subject=Mission`"
              class="btn btn-ink"
              @click.prevent="openHeroComposer"
            >
              {{ lang === 'en' ? 'Contact' : 'Me contacter' }}
            </a>
            <a href="/CV.pdf" download="CV_Amine_ITJI.pdf" class="btn btn-ghost">CV ↓</a>
          </div>
        </div>

        <p class="ptitle">{{ t.ptitle }}</p>

        <div class="pmeta">
          <span class="pmeta-item">
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Lyon · Paris · Genève
          </span>
          <span class="pmeta-sep" aria-hidden="true">·</span>
          <span class="pmeta-item">
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Master 2 IA · Lyon 1
          </span>
          <span class="pmeta-sep" aria-hidden="true">·</span>
          <span class="pmeta-item">
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Freelance · 2023–présent
          </span>
        </div>

        <p class="pbio">{{ t.bio }}</p>

        <div class="socials-row">
          <a href="https://linkedin.com/in/amine-itji" target="_blank" rel="noopener noreferrer" class="slink">
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn ↗
          </a>
          <a href="https://github.com/amineitji" target="_blank" rel="noopener noreferrer" class="slink">
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub ↗
          </a>
          <a :href="`mailto:${contactEmail}`" class="slink" @click.prevent="openEmailLinkComposer">
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            amineitji@gmail.com
          </a>
        </div>
      </div>
    </div>

    <!-- ══ STATS BAR ══ -->
    <div class="stats-bar fu" style="animation-delay:.07s;">
      <div class="stat" v-for="s in t.stats" :key="s.label">
        <span class="stat-val">{{ s.value }}</span>
        <span class="stat-lbl">{{ s.label }}</span>
      </div>
    </div>

    <!-- ══ SKILLS ══ -->
    <section class="section fu" style="animation-delay:.12s;">
      <div class="sec-label">// {{ t.skills.label }}</div>
      <div class="skill-groups">
        <div class="skg" v-for="g in t.skills.groups" :key="g.name">
          <span class="skg-name">{{ g.name }}</span>
          <div class="skg-chips">
            <span class="skchip" v-for="c in g.items" :key="c">{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ EXPERIENCE ══ -->
    <section class="section fu" style="animation-delay:.16s;">
      <div class="sec-label">// {{ t.exp.label }}</div>
      <div class="timeline">
        <div class="tl-item" v-for="item in expItems" :key="item.role" :class="{active: item.current}">
          <div class="tl-left">
            <span class="tl-date">{{ item.date }}</span>
            <div class="tl-bar"></div>
          </div>
          <div class="tl-right">
            <div class="tl-head">
              <h3 class="tl-role">{{ item.role }}</h3>
              <span v-if="item.current" class="tl-now-tag">{{ t.exp.now }}</span>
            </div>
            <p class="tl-co">{{ item.company }}</p>
            <p class="tl-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ PROJECTS ══ -->
    <section class="section fu" style="animation-delay:.2s;">
      <div class="sec-label">// {{ t.projects.label }}</div>
      <div class="proj-grid">
        <component
          :is="p.url ? 'a' : 'div'"
          v-for="p in t.projects.items"
          :key="p.name"
          class="proj-card"
          :href="p.url || undefined"
          :target="p.url ? '_blank' : undefined"
          rel="noopener noreferrer"
        >
          <div class="proj-top">
            <span class="proj-type">{{ p.type }}</span>
            <span v-if="p.url" class="proj-arrow">↗</span>
          </div>
          <h3 class="proj-name">{{ p.name }}</h3>
          <p class="proj-desc">{{ p.desc }}</p>
          <div class="proj-stack">
            <span class="skchip" v-for="c in p.stack" :key="c">{{ c }}</span>
          </div>
        </component>
      </div>
      <div class="section-more">
        <router-link to="/projets" class="btn btn-ghost">{{ t.projects.more }} →</router-link>
      </div>
    </section>

    <!-- ══ CTA FREELANCE ══ -->
    <section class="cta-band fu" style="animation-delay:.24s;">
      <div class="cta-inner">
        <div class="cta-avail">
          <span class="bdot bdot-g"></span>
          {{ t.cta.badge }}
        </div>
        <h2 class="cta-title">{{ t.cta.title }}</h2>
        <p class="cta-sub">{{ t.cta.sub }}</p>
        <div class="cta-actions">
          <a
            :href="`mailto:${contactEmail}?subject=Mission freelance`"
            class="btn btn-ink"
            @click.prevent="openFreelanceComposer"
          >
            {{ t.cta.btn }}
          </a>
          <router-link to="/services" class="btn btn-ghost">{{ t.cta.services }}</router-link>
        </div>
        <p class="cta-note">{{ t.cta.note }}</p>
      </div>
    </section>

  </div>
</template>

<script>
const CONTACT_EMAIL = 'amineitji@gmail.com';
const MICHELIN_END = new Date('2026-08-01'); // Stage ends July 31, 2026

export default {
  name: 'HomePage',
  inject: ['getLang', 'openEmailComposer'],

  data() {
    return {
      contactEmail: CONTACT_EMAIL,
    };
  },

  computed: {
    lang() { return this.getLang(); },

    isMichelinActive() {
      return new Date() < MICHELIN_END;
    },

    expItems() {
      return this.t.exp.items.map(item => ({
        ...item,
        current: item.isMichelin ? this.isMichelinActive : !!item.current,
      }));
    },

    t() {
      const isEn = this.lang === 'en';

      return {
        ptitle: isEn
          ? 'MSc Artificial Intelligence · Developer & AI Consultant'
          : 'Master Intelligence Artificielle · Développeur & Consultant IA',

        bio: isEn
          ? 'Graduate in AI, currently AI Project Manager intern at Michelin (until July 2026). Alongside, I offer freelance missions in AI development, consulting, full-stack web, data engineering, and automation.'
          : 'Jeune diplômé en IA, actuellement en stage AI Project Manager chez Michelin (jusqu\'en juillet 2026). En parallèle, je propose des missions freelance en développement IA, consulting, fullstack web, data et automatisation.',

        stats: isEn
          ? [
              { value: '2 ans+', label: 'Freelance' },
              { value: '1 SaaS', label: 'In production' },
              { value: 'M2 IA', label: 'Lyon 1' },
              { value: '< 24h', label: 'Response time' },
            ]
          : [
              { value: '2 ans+', label: 'Freelance' },
              { value: '1 SaaS', label: 'En production' },
              { value: 'M2 IA', label: 'Lyon 1' },
              { value: '< 24h', label: 'Réponse garantie' },
            ],

        skills: {
          label: isEn ? 'TECH STACK' : 'STACK TECHNIQUE',
          groups: [
            { name: 'Langages', items: ['Python', 'C/C++', 'SQL', 'R'] },
            { name: 'IA / ML', items: ['PyTorch', 'Scikit-learn', 'OpenCV', 'YOLO', 'LangChain'] },
            { name: 'Frameworks', items: ['Django', 'Vue.js', 'Pandas', 'NumPy'] },
            { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Git', 'GitHub Actions', 'Nginx'] },
          ],
        },

        exp: {
          label: isEn ? 'EXPERIENCE' : 'EXPÉRIENCES',
          now: isEn ? 'current' : 'en cours',
          items: [
            {
              date: '2026',
              role: isEn ? 'Intern – AI Project Manager' : 'Stage – AI Project Manager',
              company: 'Michelin · Lyon',
              desc: isEn
                ? 'Driving and deploying AI projects within the ISPARK team.'
                : 'Pilotage et déploiement de projets d\'IA au sein de l\'équipe ISPARK.',
              isMichelin: true,
            },
            {
              date: '2024–présent',
              role: isEn ? 'Freelance Web Developer' : 'Développeur Web Freelance',
              company: isEn ? 'Self-employed' : 'Travailleur Indépendant',
              desc: isEn
                ? 'Full-stack web apps (Django/Vue.js), Stripe integration, CI/CD, AWS deployment.'
                : 'Applications full-stack Django/Vue.js, intégration Stripe, pipelines CI/CD, déploiement AWS.',
              current: false,
            },
            {
              date: '2024',
              role: isEn ? 'Intern – Inspection Digitalisation' : 'Stage – Digitalisation des Inspections',
              company: 'Alstom · Lyon',
              desc: isEn
                ? 'Implementation of inspection forms using KIZEO.'
                : 'Implémentation de formulaires d\'inspection avec KIZEO.',
            },
            {
              date: '2023',
              role: isEn ? 'Intern – Django/Vue.js Developer' : 'Stage – Développeur Django/Vue.js',
              company: 'Aneqqis · Paris',
              desc: isEn
                ? 'E-commerce web application with integrated online payment module.'
                : 'Application web e-commerce avec intégration d\'un module de paiement en ligne.',
            },
          ],
        },

        projects: {
          label: isEn ? 'PROJECTS' : 'PROJETS',
          more: isEn ? 'All projects' : 'Tous les projets',
          items: [
            {
              name: 'DiagERP',
              type: isEn ? 'SaaS B2B · Co-founder & CTO' : 'SaaS B2B · Co-fondateur & CTO',
              desc: isEn
                ? 'Platform for real estate diagnosticians. Full mission management, regulatory reports, Stripe billing, GitHub CI/CD, AWS deployment.'
                : 'Plateforme pour diagnostiqueurs immobiliers. Gestion des missions, rapports réglementaires, facturation Stripe, CI/CD GitHub, déploiement AWS.',
              stack: ['Django', 'Vue.js', 'Stripe', 'AWS', 'CI/CD'],
              url: 'https://diagerp.fr',
            },
            {
              name: 'Football Vision Analysis',
              type: 'Computer Vision · Python',
              desc: isEn
                ? 'Player detection with YOLO, jersey color clustering via KMeans, pitch line extraction (HoughLines), homographic projection for 2D mapping. Real-time tactical analysis.'
                : 'Détection de joueurs YOLO, regroupement couleur maillot KMeans, extraction lignes terrain HoughLines, projection homographique 2D. Analyse tactique temps réel.',
              stack: ['YOLO', 'KMeans', 'OpenCV', 'PyTorch', 'HoughLines'],
              url: null,
            },
          ],
        },

        cta: {
          badge: isEn ? 'Open to freelance missions' : 'Disponible pour missions freelance',
          title: isEn ? 'Let\'s build your next project.' : 'Construisons votre prochain projet.',
          sub: isEn
            ? 'AI development, consulting, full-stack web, data pipelines, automation — I respond to every request within 24 hours with a clear, no-commitment proposal.'
            : 'Développement IA, consulting, fullstack web, data, automatisation — Je réponds sous 24h avec une proposition claire et sans engagement.',
          btn: isEn ? 'Send a message' : 'Envoyer un message',
          services: isEn ? 'View services' : 'Voir les offres',
          note: isEn
            ? '✓ Free · ✓ No commitment · ✓ Response < 24h'
            : '✓ Gratuit · ✓ Sans engagement · ✓ Réponse < 24h',
        },
      };
    },
  },

  methods: {
    openHeroComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'Home hero' : 'Accueil - hero',
        intent: 'mission',
        service: 'general',
      });
    },

    openEmailLinkComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'Home contact block' : 'Accueil - bloc contact',
        intent: 'project',
        service: 'general',
      });
    },

    openFreelanceComposer() {
      this.openEmailComposer({
        source: this.lang === 'en' ? 'Home freelance CTA' : 'Accueil - CTA freelance',
        intent: 'mission',
        service: 'general',
      });
    },
  },
};
</script>

<style scoped>
/* ── Page container ── */
.ph {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px 0 0;
}

/* ══════════════════════════════════════
   PROFILE CARD
══════════════════════════════════════ */
.pcard {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
  width: 100%;
}

/* ── Cover banner ── */
.pcard-cover {
  height: 180px;
  background: var(--ink);
  background-image:
    linear-gradient(rgba(197,154,69,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,154,69,0.1) 1px, transparent 1px);
  background-size: 36px 36px;
  position: relative;
  overflow: hidden;
}

.cover-tag {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(197,154,69,0.5);
  text-transform: uppercase;
}
.cover-tag.tl { top: 16px; left: 20px; }
.cover-tag.br { bottom: 16px; right: 20px; }

.cover-hline {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 0.5;
}

/* ── Photo row ── */
.pcard-photo-row {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding: 0 28px;
  margin-top: -46px;
  position: relative;
  z-index: 2;
}

.photo-ring {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 3px solid var(--surface);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--ink);
  box-shadow: 0 0 0 1px var(--border);
}

.pphoto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Status badges ── */
.pbadges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-bottom: 6px;
}

.pbadge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid;
}

.pbadge-stage {
  color: var(--gold);
  border-color: rgba(197,154,69,0.4);
  background: rgba(197,154,69,0.06);
}
.pbadge-free {
  color: var(--ink);
  border-color: rgba(17,17,24,0.25);
  background: rgba(17,17,24,0.04);
}

.pbadge-until {
  opacity: 0.65;
  font-size: 0.6rem;
}

/* ── Status dots ── */
.bdot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
}
.bdot-g {
  background: #4BAF6E;
  box-shadow: 0 0 0 2px rgba(75,175,110,0.2);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
}

/* ── Profile body ── */
.pcard-body {
  padding: 18px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pname-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.pname {
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1.1;
}

.pcard-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.ptitle {
  font-size: 0.88rem;
  color: var(--text-muted);
  font-weight: 500;
  line-height: 1.4;
  margin-top: -6px;
}

/* ── Meta row ── */
.pmeta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pmeta-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.pmeta-sep {
  color: var(--border-dark);
  font-size: 0.7rem;
}

/* ── Bio ── */
.pbio {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
  border-left: 2px solid var(--border);
  padding-left: 14px;
}

/* ── Social links ── */
.socials-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding-top: 4px;
}

.slink {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 2px;
  background: transparent;
  transition: all 0.18s ease;
  letter-spacing: 0.01em;
}
.slink:hover {
  color: var(--ink);
  border-color: var(--ink);
  background: rgba(17,17,24,0.04);
}

/* ══════════════════════════════════════
   BUTTONS
══════════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
}

.btn-ink {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}
.btn-ink:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}

.btn-ghost {
  background: transparent;
  color: var(--ink);
  border-color: var(--border-dark);
}
.btn-ghost:hover {
  border-color: var(--ink);
  background: rgba(17,17,24,0.06);
}

/* ══════════════════════════════════════
   STATS BAR
══════════════════════════════════════ */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
  width: 100%;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 18px 12px;
  border-right: 1px solid var(--border);
}
.stat:last-child { border-right: none; }

.stat-val {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--ink);
  letter-spacing: -0.03em;
}

.stat-lbl {
  font-family: 'Courier New', monospace;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ══════════════════════════════════════
   SECTIONS
══════════════════════════════════════ */
.section {
  width: 100%;
}

.sec-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 20px;
}

/* ── Skills ── */
.skill-groups {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.skg {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 18px;
  background: var(--surface);
}

.skg-name {
  font-family: 'Courier New', monospace;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
  margin-bottom: 10px;
}

.skg-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skchip {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 9px;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--ink);
  background: transparent;
  letter-spacing: 0.01em;
}

/* ── Timeline ── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.tl-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0;
  min-height: 80px;
}

.tl-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 24px;
  padding-top: 2px;
  position: relative;
}

.tl-date {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-muted);
  white-space: nowrap;
  letter-spacing: 0.04em;
}

.tl-bar {
  width: 1px;
  flex: 1;
  background: var(--border);
  margin: 8px 0 0;
}

.tl-item.active .tl-date { color: var(--gold); }
.tl-item.active .tl-bar { background: var(--gold); opacity: 0.5; }

.tl-right {
  border-left: 1px solid var(--border);
  padding: 2px 0 28px 24px;
}
.tl-item.active .tl-right { border-left-color: rgba(197,154,69,0.4); }

.tl-head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tl-role {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
}

.tl-now-tag {
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid rgba(197,154,69,0.4);
  padding: 2px 7px;
  border-radius: 1px;
}

.tl-co {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 600;
  margin: 3px 0 6px;
}

.tl-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ── Projects ── */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.proj-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px;
  background: var(--surface);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s ease;
}
a.proj-card:hover {
  border-color: var(--gold);
}

.proj-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.proj-type {
  font-family: 'Courier New', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.proj-arrow {
  font-size: 0.9rem;
  color: var(--gold);
}

.proj-name {
  font-size: 1rem;
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.proj-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  flex: 1;
}

.proj-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.section-more {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

/* ══════════════════════════════════════
   CTA BAND
══════════════════════════════════════ */
.cta-band {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  background-image:
    linear-gradient(rgba(17,17,24,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17,17,24,0.03) 1px, transparent 1px);
  background-size: 32px 32px;
  width: 100%;
  margin-bottom: 20px;
}

.cta-inner {
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.cta-avail {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'Courier New', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.cta-title {
  font-size: clamp(1.4rem, 3vw, 2.1rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1.15;
}

.cta-sub {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 560px;
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.cta-note {
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 700px) {
  .ph { gap: 28px; padding: 20px 0 0; }

  .pcard-photo-row { padding: 0 18px; margin-top: -40px; }
  .pcard-body { padding: 14px 18px 22px; }
  .photo-ring { width: 76px; height: 76px; }

  .pname-row { flex-direction: column; align-items: flex-start; }
  .pcard-actions { width: 100%; }
  .btn { flex: 1; justify-content: center; }

  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .stat:nth-child(2) { border-right: none; }
  .stat { padding: 14px 10px; }

  .skill-groups { grid-template-columns: repeat(2, 1fr); }
  .proj-grid { grid-template-columns: 1fr; }

  .tl-item { grid-template-columns: 80px 1fr; }
  .tl-left { padding-right: 16px; }
  .tl-right { padding-left: 16px; }

  .cta-inner { padding: 32px 20px; }
  .cta-actions { flex-direction: column; }
  .cta-actions .btn { width: 100%; justify-content: center; }

  .socials-row { gap: 5px; }
  .slink { font-size: 0.68rem; padding: 4px 8px; }
}

@media (max-width: 400px) {
  .pbadges { flex-direction: column; }
}
</style>
