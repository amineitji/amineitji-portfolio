<template>
  <div class="map-wrapper">

    <!-- ── Left: SVG map ── -->
    <div class="map-col">
      <svg
        class="france-svg"
        viewBox="0 0 410 440"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Carte de France avec expériences professionnelles"
      >
        <defs>
          <filter id="glow-green" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-blue" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="lyon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1B4332" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#1B4332" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="paris-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0"/>
          </radialGradient>
          <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(27,67,50,0.10)"/>
          </pattern>
        </defs>

        <rect width="410" height="440" fill="url(#dot-grid)" pointer-events="none" opacity="0.6"/>

        <!--
          France mainland — Mercator-like projection
          x = 5 + (lon + 5) × 30    y = 5 + (51.5 − lat) × 46
          Verified: Paris(226,127) · Lyon(300,270) · Brest(20,148) · Dunkerque(226,26)
          Clockwise from Dunkerque: Channel coast → Brittany → Atlantic → Pyrenees → Med → borders
        -->
        <path class="france-path" d="
          M 226,26
          L 211,30
          C 206,36 204,39 203,41
          C 200,53 197,62 196,71
          L 187,78
          C 179,82 173,86 166,85
          C 163,90 162,96 162,101
          L 148,107
          C 138,107 128,107 120,106
          C 120,100 118,94 117,89
          C 113,88 109,89 106,90
          C 103,95 102,99 102,103
          C 103,112 104,121 107,127
          C 101,132 98,134 95,136
          C 90,135 87,135 85,135
          C 76,138 61,139 40,139
          C 31,142 24,145 20,148
          L 13,164
          C 18,170 28,173 35,175
          C 43,176 49,177 54,178
          L 61,190
          C 73,195 81,197 89,200
          C 103,220 113,237 121,251
          C 122,261 123,269 124,276
          C 122,295 121,307 120,320
          C 114,343 108,361 102,379
          C 118,388 148,405 185,419
          C 212,422 232,422 250,421
          C 247,418 244,414 242,410
          C 244,404 248,397 247,393
          C 251,387 257,382 266,377
          C 268,371 270,369 271,368
          C 283,371 298,376 316,382
          C 323,385 329,388 333,390
          C 346,383 360,372 373,364
          L 380,361
          C 376,344 369,327 362,309
          L 361,266
          C 355,258 348,252 340,249
          C 342,236 344,226 346,217
          C 356,207 368,196 383,186
          C 385,170 386,155 388,139
          L 394,118
          C 381,109 365,103 346,98
          C 325,92 309,88 297,85
          C 283,73 275,64 270,57
          C 262,51 254,46 247,45
          C 241,38 233,30 226,26
          Z
        "/>

        <!-- Corsica (lon≈9.1°E, lat≈42.1°N) -->
        <path class="france-path corsica" d="
          M 389,367
          C 391,360 397,364 399,372
          L 397,386
          C 395,395 391,401 386,404
          L 382,390
          C 382,377 386,368 389,367 Z
        "/>

        <!-- Region glows -->
        <ellipse cx="301" cy="272" rx="52" ry="46" fill="url(#lyon-glow)" class="region-glow lyon-region"/>
        <ellipse cx="226" cy="127" rx="42" ry="37" fill="url(#paris-glow)" class="region-glow paris-region"/>

        <!-- Connection line Paris → Lyon -->
        <line class="connection-line"
          x1="226" y1="131" x2="299" y2="264"
          stroke="rgba(27,67,50,0.22)" stroke-width="1.2" stroke-dasharray="5 4"/>

        <!-- Paris / Aneqqis (lon 2.35, lat 48.85) → (226,127) -->
        <g class="city-marker" :class="{ active: activeCity === 'paris' }"
          @mouseenter="activeCity = 'paris'" @mouseleave="activeCity = null"
          @click="toggleCity('paris')" style="cursor:pointer;">
          <circle cx="226" cy="127" r="22" fill="rgba(29,78,216,0.08)" class="marker-ring"/>
          <circle cx="226" cy="127" r="6" fill="#1D4ED8" class="marker-dot" filter="url(#glow-blue)"/>
          <circle cx="226" cy="127" r="6" fill="none" stroke="#1D4ED8" stroke-width="1.5" opacity="0.5" class="marker-pulse"/>
          <text x="226" y="114" text-anchor="middle" class="city-label">PARIS</text>
        </g>

        <!-- Lyon / Michelin (lon 4.83, lat 45.75) → (300,270) -->
        <g class="city-marker" :class="{ active: activeCity === 'michelin' }"
          @mouseenter="activeCity = 'michelin'" @mouseleave="activeCity = null"
          @click="toggleCity('michelin')" style="cursor:pointer;">
          <circle cx="300" cy="270" r="26" fill="rgba(27,67,50,0.12)" class="marker-ring"/>
          <circle cx="300" cy="270" r="8" fill="#1B4332" class="marker-dot" filter="url(#glow-green)"/>
          <circle cx="300" cy="270" r="8" fill="none" stroke="#1B4332" stroke-width="1.5" opacity="0.5" class="marker-pulse"/>
          <text x="300" y="256" text-anchor="middle" class="city-label">LYON</text>
        </g>

        <!-- UCBL (lon 4.87, lat 45.72) — slightly SE of Lyon -->
        <g class="city-marker" :class="{ active: activeCity === 'ucbl' }"
          @mouseenter="activeCity = 'ucbl'" @mouseleave="activeCity = null"
          @click="toggleCity('ucbl')" style="cursor:pointer;">
          <circle cx="309" cy="281" r="5.5" fill="#059669" class="marker-dot"/>
          <circle cx="309" cy="281" r="5.5" fill="none" stroke="#059669" stroke-width="1.2" opacity="0.4" class="marker-pulse marker-pulse-slow"/>
        </g>

        <!-- Alstom / Villeurbanne (lon 4.89, lat 45.77) — NE of Lyon -->
        <g class="city-marker" :class="{ active: activeCity === 'alstom' }"
          @mouseenter="activeCity = 'alstom'" @mouseleave="activeCity = null"
          @click="toggleCity('alstom')" style="cursor:pointer;">
          <circle cx="308" cy="261" r="5" fill="#D97706" class="marker-dot"/>
          <circle cx="308" cy="261" r="5" fill="none" stroke="#D97706" stroke-width="1" opacity="0.4" class="marker-pulse marker-pulse-slow"/>
        </g>

      </svg>
    </div>

    <!-- ── Right: experience cards (always visible) ── -->
    <div class="exp-panel">
      <div
        v-for="place in places"
        :key="place.id"
        class="exp-card"
        :class="{ active: activeCity === place.id }"
        @mouseenter="activeCity = place.id"
        @mouseleave="activeCity = null"
        @click="toggleCity(place.id)"
      >
        <div class="ec-top">
          <span class="ec-dot" :style="{ background: place.color }"></span>
          <div class="ec-name">{{ place.name }}</div>
          <span class="ec-period">{{ cityData[place.id].period }}</span>
        </div>
        <div class="ec-role">{{ lang === 'en' ? cityData[place.id].roleEn : cityData[place.id].roleFr }}</div>
        <div class="ec-place">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {{ place.sub }}
        </div>
        <div class="ec-desc">{{ lang === 'en' ? cityData[place.id].descEn : cityData[place.id].descFr }}</div>
        <div class="ec-tags">
          <span class="chip" v-for="tag in cityData[place.id].tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FranceMap',
  inject: ['getLang'],

  data() {
    return {
      activeCity: null,
      places: [
        { id: 'michelin', name: 'Michelin – DOTI/ISPARK',    sub: 'Lyon · 2026',          color: '#1B4332' },
        { id: 'ucbl',     name: 'Université Claude Bernard', sub: 'Lyon 1 · 2020–2026',   color: '#059669' },
        { id: 'alstom',   name: 'Alstom',                    sub: 'Villeurbanne · 2025',  color: '#D97706' },
        { id: 'paris',    name: 'Aneqqis',                   sub: 'Paris · 2023',          color: '#1D4ED8' },
      ],
      cityData: {
        michelin: {
          period: 'Fév–Juil 2026', color: '#1B4332',
          roleFr: 'AI Project Manager',
          roleEn: 'AI Project Manager',
          descFr: 'Conception et déploiement d\'AInsights (pipeline RAG), webapp Dunning Rules augmentée par IA, consulting IA au sein de l\'équipe DOTI/ISPARK.',
          descEn: 'Designed and shipped AInsights (RAG pipeline), AI-powered Dunning Rules webapp, internal AI consulting in DOTI/ISPARK.',
          tags: ['GenAI', 'RAG', 'LLM', 'Python', 'Azure'],
        },
        ucbl: {
          period: '2020–2026', color: '#059669',
          roleFr: 'Master Intelligence Artificielle',
          roleEn: 'Master Intelligence Artificielle',
          descFr: 'Licence Informatique puis Master Intelligence Artificielle. Machine Learning, Deep Learning, NLP, Computer Vision, Data Science.',
          descEn: 'BSc Computer Science then Master Intelligence Artificielle. Machine Learning, Deep Learning, NLP, Computer Vision, Data Science.',
          tags: ['ML', 'Deep Learning', 'NLP', 'Computer Vision'],
        },
        alstom: {
          period: 'Jan–Mar 2025', color: '#D97706',
          roleFr: 'Stagiaire Digitalisation',
          roleEn: 'Digitalisation Intern',
          descFr: 'Digitalisation des inspections avec KIZEO, développement d\'outils internes et reporting analytique.',
          descEn: 'Inspection digitalisation with KIZEO, internal tools development and analytical reporting.',
          tags: ['KIZEO', 'Digitalisation', 'Power BI'],
        },
        paris: {
          period: 'Mai–Juin 2023', color: '#1D4ED8',
          roleFr: 'Développeur Django/Vue.js',
          roleEn: 'Django/Vue.js Developer',
          descFr: 'Architecture SaaS de zéro, intégration paiements Stripe, génération de PDF complexes.',
          descEn: 'Full SaaS architecture from scratch, Stripe payment integration, complex PDF generation.',
          tags: ['Django', 'Vue.js', 'Stripe', 'SaaS'],
        },
      },
    };
  },

  computed: {
    lang() { return this.getLang(); },
  },

  methods: {
    toggleCity(id) {
      this.activeCity = this.activeCity === id ? null : id;
    },
  },
};
</script>

<style scoped>
.map-wrapper {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
  align-items: start;
  margin-top: 32px;
}

/* ── Left col ── */
.map-col { display: flex; justify-content: center; }

.france-svg {
  width: 100%;
  max-width: 460px;
  height: auto;
  display: block;
}

/* ── France path ── */
.france-path {
  fill: rgba(27, 67, 50, 0.07);
  stroke: rgba(27, 67, 50, 0.30);
  stroke-width: 1.4;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.corsica {
  fill: rgba(27, 67, 50, 0.05);
  stroke: rgba(27, 67, 50, 0.20);
  stroke-width: 1;
}

/* ── Glows ── */
.region-glow { transition: opacity 0.4s ease; }
.lyon-region  { opacity: 1; }
.paris-region { opacity: 0.7; }

/* ── City labels ── */
.city-label {
  font-family: var(--mono);
  font-size: 8px;
  font-weight: 700;
  fill: rgba(15, 22, 18, 0.58);
  letter-spacing: 0.12em;
  pointer-events: none;
}

/* ── Markers ── */
.marker-dot { transition: r 0.2s ease; }
.city-marker:hover .marker-dot,
.city-marker.active .marker-dot { r: 11; }

.marker-ring { opacity: 0; transition: opacity 0.22s ease; }
.city-marker:hover .marker-ring,
.city-marker.active .marker-ring { opacity: 1; }

.marker-pulse {
  animation: pulse-marker 2.5s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}
.marker-pulse-slow { animation-duration: 3.5s; animation-delay: 0.6s; }

@keyframes pulse-marker {
  0%, 100% { r: 9; opacity: 0.5; }
  50%       { r: 20; opacity: 0; }
}

.connection-line { animation: dash-flow 3s linear infinite; }
@keyframes dash-flow { to { stroke-dashoffset: -18; } }

/* ── Experience panel ── */
.exp-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid transparent;
  border-radius: var(--radius);
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.exp-card:hover {
  border-left-color: var(--forest);
  background: var(--forest-lt);
  box-shadow: var(--shadow-sm);
}
.exp-card.active {
  border-color: var(--forest-border);
  border-left-color: var(--forest);
  background: var(--forest-lt);
  box-shadow: var(--shadow-md);
}

.ec-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ec-dot {
  width: 9px; height: 9px;
  border-radius: 50%; flex-shrink: 0;
}
.ec-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--ink);
  flex: 1;
  line-height: 1.2;
}
.ec-period {
  font-family: var(--mono);
  font-size: 0.58rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex-shrink: 0;
}

.ec-role {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--forest);
}

.ec-place {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.ec-place svg { flex-shrink: 0; }

.ec-desc {
  font-size: 0.76rem;
  color: var(--muted);
  line-height: 1.65;
  margin-top: 2px;
  display: none;
}
.exp-card.active .ec-desc,
.exp-card:hover .ec-desc { display: block; }

.ec-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 3px;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .map-wrapper {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .map-col { justify-content: flex-start; }
  .france-svg { max-width: 380px; }
  .exp-panel { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
}

@media (max-width: 580px) {
  .france-svg { max-width: 100%; }
  .exp-panel { grid-template-columns: 1fr; }
}
</style>
