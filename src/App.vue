<template>
  <div id="app">
    <SiteHeader />
    
    <main class="main-content">
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
  components: { 
    SiteHeader, 
    SiteFooter,
    EmailComposerModal,
  },

  data() {
    return {
      // Récupération de la langue sauvegardée, ou 'fr' par défaut
      lang: localStorage.getItem('ai_lang') || 'fr',
      contactEmail: CONTACT_EMAIL,
      emailComposer: {
        isOpen: false,
        context: {},
      },
      previousBodyOverflow: '',
    };
  },

  provide() {
    return {
      // Fournit la langue et la méthode pour la changer à tous les composants enfants
      getLang: () => this.lang,
      setLang: (l) => {
        this.lang = l;
        localStorage.setItem('ai_lang', l);
        // Optionnel : modifier l'attribut lang de la balise HTML pour le SEO et l'accessibilité
        document.documentElement.lang = l;
      },
      openEmailComposer: (context = {}) => this.openEmailComposer(context),
    };
  },

  methods: {
    openEmailComposer(context = {}) {
      this.previousBodyOverflow = document.body.style.overflow;
      this.emailComposer = {
        isOpen: true,
        context: { ...context },
      };
      document.body.style.overflow = 'hidden';
    },

    closeEmailComposer() {
      this.emailComposer = {
        isOpen: false,
        context: {},
      };
      document.body.style.overflow = this.previousBodyOverflow;
      this.previousBodyOverflow = '';
    },
  },

  mounted() {
    // S'assurer que la balise <html> a le bon attribut lang au chargement
    document.documentElement.lang = this.lang;
  },

  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>

<style>
/* Importation de la police Inter pour un rendu très propre et pro */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* ══════════════════════════════════
   DESIGN TOKENS — Palette Crème/Cyberpunk
   3 couleurs : Crème (#F0EAD9) · Encre (#111118) · Or (#C59A45)
══════════════════════════════════ */
:root {
  /* ── Palette principale ── */
  --bg:           #F0EAD9;   /* crème/beige (fond page) */
  --surface:      #EDE7D6;   /* surface légèrement plus sombre (cartes) */
  --ink:          #111118;   /* encre foncée (texte, boutons dark) */
  --gold:         #C59A45;   /* or ambré (accent cyberpunk) */

  /* ── Compatibilité variables existantes ── */
  --white:        #F0EAD9;
  --gray-50:      #F5EFE4;
  --gray-100:     #EDE7D6;
  --gray-200:     #DDD5C2;
  --gray-300:     #C5B9A4;
  --gray-400:     #988E7C;
  --gray-500:     #786E60;
  --gray-600:     #5A5248;
  --gray-700:     #3C3630;
  --gray-800:     #252018;
  --gray-900:     #111118;

  --blue:         #C59A45;
  --blue-dark:    #A87B2E;
  --blue-light:   #F5EDD5;

  --purple:       #8b5cf6;
  --cyan:         #C59A45;

  --green:        #4BAF6E;
  --green-light:  #EEF8F3;

  /* ── Tokens sémantiques ── */
  --border:       #D8D0BE;
  --border-dark:  rgba(17,17,24,0.25);
  --text-muted:   #786E60;

  /* ── Typographie & Layout ── */
  --font:         'Inter', system-ui, -apple-system, sans-serif;
  --max-w:        1140px;
  --px:           24px;
  --nav-h:        72px;

  /* ── Ombres ── */
  --shadow-sm:    0 1px 2px rgba(17,17,24,0.06);
  --shadow-md:    0 4px 12px rgba(17,17,24,0.08);
  --shadow-lg:    0 10px 30px rgba(17,17,24,0.10);
  --shadow-xl:    0 20px 48px rgba(17,17,24,0.12);

  /* ── Radius ── */
  --radius:       10px;

  /* ── Animation ── */
  --ease:         cubic-bezier(0.23, 1, 0.32, 1);
}

/* ══════════════════════════════════
   RESET & BASE STYLES
══════════════════════════════════ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font);
  background-color: var(--bg);
  background-image:
    linear-gradient(rgba(17,17,24,0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17,17,24,0.045) 1px, transparent 1px);
  background-size: 40px 40px;
  color: var(--ink);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  /* overflow-x ici, pas sur body — évite de casser position:sticky sur iOS Safari */
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--px);
  padding-bottom: 60px;
}

/* ══════════════════════════════════
   ACCESSIBILITÉ GLOBALE (A11Y)
══════════════════════════════════ */
/* Focus ring pour la navigation au clavier */
:focus-visible {
  outline: 3px solid rgba(59, 130, 246, 0.5); /* var(--blue) avec opacité */
  outline-offset: 2px;
  border-radius: 4px;
}

/* ══════════════════════════════════
   SCROLLBAR PERSONNALISÉE
══════════════════════════════════ */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--gray-50);
}
::-webkit-scrollbar-thumb {
  background: var(--gray-300);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--gray-400);
}

/* ══════════════════════════════════
   GLOBAL UI COMPONENTS (Boutons, Tags)
══════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-family: var(--font);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.25s var(--ease);
}

.btn-dark {
  background: var(--gray-900);
  color: var(--white);
}

.btn-dark:hover {
  background: var(--gray-800);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.22);
  color: var(--white);
}

.btn-outline {
  background: transparent;
  color: var(--gray-700);
  border: 1.5px solid var(--gray-200);
}

.btn-outline:hover {
  border-color: var(--gray-400);
  background: var(--gray-50);
  color: var(--gray-900);
  transform: translateY(-2px);
}

.btn-blue {
  background: var(--blue);
  color: var(--white);
}

.btn-blue:hover {
  background: var(--blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.28);
  color: var(--white);
}

/* ── Status pill ── */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--green);
  padding: 5px 12px;
  background: var(--green-light);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 100px;
  width: fit-content;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

/* ── Typographie Globale ── */
.eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray-400);
  display: flex;
  align-items: center;
  gap: 12px;
}
.eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
}

.s-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--gray-900);
  line-height: 1.1;
  white-space: pre-line;
}

.s-sub {
  font-size: 1.05rem;
  color: var(--gray-500);
  line-height: 1.7;
  max-width: 580px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--white);
  border: 1px solid var(--gray-200);
  color: var(--gray-600);
}

/* ══════════════════════════════════
   TRANSITIONS VUE-ROUTER
══════════════════════════════════ */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s var(--ease);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* ══════════════════════════════════
   ANIMATIONS D'ENTRÉE (Fade-up)
══════════════════════════════════ */
.fu {
  animation: fadeUp 0.6s var(--ease) both;
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ══════════════════════════════════
   RESPONSIVE GLOBALES
══════════════════════════════════ */
@media (max-width: 768px) {
  :root {
    --px: 20px;
    --nav-h: 64px;
  }
}
</style>
