<template>
  <div id="app">
    <SiteHeader />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <SiteFooter />
    <EmailComposerModal
      :visible="emailComposer.isOpen"
      :context="emailComposer.context"
      :lang="lang"
      :contact-email="contactEmail"
      @close="closeEmailComposer"
    />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import EmailComposerModal from './components/EmailComposerModal.vue';
import { CONTACT_EMAIL } from './utils/emailComposer';

export default {
  name: 'App',
  components: { SiteHeader, SiteFooter, EmailComposerModal },
  data() {
    return {
      lang: localStorage.getItem('ai_lang') || 'fr',
      contactEmail: CONTACT_EMAIL,
      emailComposer: { isOpen: false, context: {} },
      previousBodyOverflow: '',
    };
  },
  provide() {
    return {
      getLang: () => this.lang,
      setLang: (l) => {
        this.lang = l;
        localStorage.setItem('ai_lang', l);
        document.documentElement.lang = l;
      },
      openEmailComposer: (context = {}) => this.openEmailComposer(context),
    };
  },
  methods: {
    openEmailComposer(context = {}) {
      this.previousBodyOverflow = document.body.style.overflow;
      this.emailComposer = { isOpen: true, context: { ...context } };
      document.body.style.overflow = 'hidden';
    },
    closeEmailComposer() {
      this.emailComposer = { isOpen: false, context: {} };
      document.body.style.overflow = this.previousBodyOverflow;
    },
  },
  mounted() {
    document.documentElement.lang = this.lang;
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* ═══════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════ */
:root {
  /* Light */
  --bg:           #F7F6F3;
  --surface:      #FFFFFF;
  --surface-2:    #F0EFEb;

  /* Dark sections */
  --dark:         #0C0F0A;
  --dark-surface: #131710;
  --dark-border:  rgba(255,255,255,0.08);
  --dark-muted:   rgba(255,255,255,0.45);

  /* Forest green */
  --forest:       #1B4332;
  --forest-md:    #2D6A4F;
  --forest-lt:    #D1FAE5;
  --forest-dim:   rgba(27,67,50,0.08);
  --forest-border:rgba(27,67,50,0.18);

  /* Text */
  --ink:          #0F1612;
  --muted:        #6B7280;
  --subtle:       #9CA3AF;

  /* UI */
  --border:       #E5E7EB;
  --border-dark:  rgba(15,22,18,0.12);

  /* Accents */
  --green:        #16A34A;
  --green-light:  #DCFCE7;
  --amber:        #D97706;
  --amber-light:  #FEF3C7;
  --blue:         #1D4ED8;
  --blue-light:   #DBEAFE;

  /* Typography */
  --font:         'Inter', system-ui, -apple-system, sans-serif;
  --mono:         'JetBrains Mono', 'Courier New', monospace;

  /* Layout */
  --max-w:        1160px;
  --px:           28px;
  --nav-h:        64px;
  --radius:       10px;
  --radius-lg:    16px;

  /* Shadows */
  --shadow-sm:    0 1px 3px rgba(12,15,10,0.06), 0 1px 2px rgba(12,15,10,0.04);
  --shadow-md:    0 4px 16px rgba(12,15,10,0.08);
  --shadow-lg:    0 12px 40px rgba(12,15,10,0.10);
  --shadow-xl:    0 24px 64px rgba(12,15,10,0.12);

  /* Animation */
  --ease:         cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in:      cubic-bezier(0.55, 0, 1, 0.45);
}

/* ═══════════════════════════════════════════
   RESET
═══════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  font-family: var(--font);
  background: var(--bg);
  color: var(--ink);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: clip; /* clip avoids creating a scroll container (fixes iOS fixed positioning) */
}

#app { display: flex; flex-direction: column; min-height: 100vh; }

main {
  flex: 1;
  isolation: isolate; /* scopes stacking contexts of page content below the navbar */
  position: relative;
  z-index: 0;
}

/* ═══════════════════════════════════════════
   LAYOUT SYSTEM
   .container = constrained + padded
   sections dark/light go full width via bg
═══════════════════════════════════════════ */
.container {
  width: 100%;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--px);
}

/* ═══════════════════════════════════════════
   SCROLLBAR
═══════════════════════════════════════════ */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #94A3B8; }

/* ═══════════════════════════════════════════
   GLOBAL BUTTONS
═══════════════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 22px;
  font-family: var(--font);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.btn-forest {
  background: var(--forest);
  color: #fff;
  border-color: var(--forest);
}
.btn-forest:hover {
  background: var(--forest-md);
  border-color: var(--forest-md);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(27,67,50,0.3);
  color: #fff;
}

.btn-outline {
  background: transparent;
  color: var(--ink);
  border-color: var(--border);
}
.btn-outline:hover {
  border-color: var(--forest-border);
  color: var(--forest);
  background: var(--forest-dim);
}

.btn-ghost-dark {
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.85);
  border-color: rgba(255,255,255,0.15);
}
.btn-ghost-dark:hover {
  background: rgba(255,255,255,0.14);
  border-color: rgba(255,255,255,0.3);
  color: #fff;
}

.btn-white {
  background: #fff;
  color: var(--forest);
  border-color: #fff;
}
.btn-white:hover {
  background: var(--forest-lt);
  border-color: var(--forest-lt);
  color: var(--forest);
  transform: translateY(-1px);
  box-shadow: none;
}

/* ── Status pill ── */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--green);
  padding: 5px 12px;
  background: var(--green-light);
  border: 1px solid rgba(22,163,74,0.2);
  border-radius: 100px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.6; }
}

/* ── Typography helpers ── */
.label {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--forest-md);
}

.label-dark {
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.display {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--ink);
}

.display-dark {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: #fff;
}

.s-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--ink);
  line-height: 1.15;
}

.s-sub {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.75;
  max-width: 580px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--muted);
  font-family: var(--mono);
  letter-spacing: 0.02em;
}

.chip-forest {
  background: var(--forest-lt);
  border-color: var(--forest-border);
  color: var(--forest);
}

/* ── Focus ── */
:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 2px;
  border-radius: 4px;
}

/* ═══════════════════════════════════════════
   VUE ROUTER TRANSITIONS
═══════════════════════════════════════════ */
.page-enter-active, .page-leave-active {
  transition: opacity 0.2s ease;
}
.page-enter-from, .page-leave-to { opacity: 0; }

/* Fade-up utility */
.fu { animation: fadeUp 0.5s var(--ease) both; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 768px) {
  :root { --px: 18px; --nav-h: 58px; }
}
@media (max-width: 480px) {
  :root { --px: 14px; }
}
</style>
