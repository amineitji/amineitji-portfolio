<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <router-link to="/" class="logo" @click="closeMenu">
        Amine<span class="logo-dot">.</span>
      </router-link>

      <nav class="nav-links-wrap" aria-label="Menu principal">
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.to">
            <router-link :to="item.to" class="nav-link" active-class="active" @click="closeMenu">
              {{ lang === 'en' ? item.en : item.fr }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="nav-right">
        <div class="lang-toggle">
          <button @click="setLang('fr')" :class="{ on: lang === 'fr' }" aria-label="Passer en Français">FR</button>
          <span class="sep" aria-hidden="true">|</span>
          <button @click="setLang('en')" :class="{ on: lang === 'en' }" aria-label="Switch to English">EN</button>
        </div>
        <div class="avail">
          <span class="avail-dot"></span>
          <span>{{ lang === 'en' ? 'Available' : 'Disponible' }}</span>
        </div>
        <a :href="`mailto:${contactEmail}`" class="nav-cta" @click.prevent="openContactComposer">
          Contact
        </a>
      </div>

      <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen" aria-label="Ouvrir le menu">
        <span></span><span></span><span></span>
      </button>
    </div>

  </header>

  <Teleport to="body">
    <transition name="mobile-nav">
      <div v-if="menuOpen" class="mobile-panel">
        <nav aria-label="Menu mobile">
          <ul class="mobile-links">
            <li v-for="item in navItems" :key="item.to">
              <router-link :to="item.to" class="mobile-link" active-class="active" @click="closeMenu">
                {{ lang === 'en' ? item.en : item.fr }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="mobile-bottom">
          <div class="lang-toggle mobile-lang">
            <button @click="changeLang('fr')" :class="{ on: lang === 'fr' }">FR</button>
            <span class="sep" aria-hidden="true">|</span>
            <button @click="changeLang('en')" :class="{ on: lang === 'en' }">EN</button>
          </div>
          <a :href="`mailto:${contactEmail}`" class="btn btn-forest" style="justify-content:center;"
            @click.prevent="openContactComposer">
            {{ lang === 'en' ? 'Contact me' : 'Me contacter' }}
          </a>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'SiteHeader',
  inject: ['getLang', 'setLang', 'openEmailComposer'],

  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      contactEmail: CONTACT_EMAIL,
      navItems: [
        { to: '/',        fr: 'Accueil',   en: 'Home' },
        { to: '/profil',  fr: 'À propos',  en: 'About' },
        { to: '/projets', fr: 'Projets',   en: 'Work' },
        { to: '/services',fr: 'Services',  en: 'Services' },
      ],
    };
  },

  computed: {
    lang() { return this.getLang(); },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  watch: {
    menuOpen(isOpen) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    },
  },

  methods: {
    handleScroll() { this.isScrolled = window.scrollY > 10; },
    closeMenu() { this.menuOpen = false; },
    openContactComposer() {
      this.closeMenu();
      this.openEmailComposer({ source: 'Header', intent: 'project', service: 'general' });
    },
    changeLang(l) {
      this.setLang(l);
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  background: rgba(248, 247, 244, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.25s ease;
}

.navbar.scrolled {
  box-shadow: 0 2px 12px rgba(17, 24, 39, 0.06);
}

.nav-inner {
  width: 100%;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--ink);
  text-decoration: none;
}
.logo-dot { color: var(--forest); }

.nav-links-wrap { display: flex; }

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav-link {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
  padding: 6px 0;
  position: relative;
}
.nav-link:hover { color: var(--ink); }
.nav-link.active { color: var(--ink); font-weight: 600; }
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0; right: 0;
  height: 2px;
  background: var(--forest);
  border-radius: 2px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--muted);
}
.lang-toggle button {
  background: none;
  border: none;
  padding: 3px;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
  transition: color 0.2s;
}
.lang-toggle button:hover { color: var(--ink); }
.lang-toggle button.on { color: var(--ink); }
.sep { opacity: 0.3; }

.avail {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--muted);
  padding: 5px 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 100px;
}
.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green, #16a34a);
  animation: pulse-green 2s infinite;
}
@keyframes pulse-green {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

.nav-cta {
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: var(--forest);
  padding: 7px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.nav-cta:hover {
  background: var(--forest-md);
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(27, 67, 50, 0.2);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.burger span {
  display: block;
  height: 2px;
  width: 20px;
  background: var(--ink);
  border-radius: 2px;
  transition: all 0.22s var(--ease);
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Transitions (opacity only — no transform to avoid stacking context issues) */
.mobile-nav-enter-active, .mobile-nav-leave-active {
  transition: opacity 0.22s ease;
}
.mobile-nav-enter-from, .mobile-nav-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .nav-links-wrap, .nav-right { display: none; }
  .burger { display: flex; }
}
</style>

<!-- Mobile panel is teleported to <body> so these styles must be global (not scoped) -->
<style>
.mobile-panel {
  position: fixed;
  top: var(--nav-h);
  left: 0; right: 0; bottom: 0;
  background: var(--bg);
  padding: 16px var(--px) env(safe-area-inset-bottom, 24px);
  display: flex;
  flex-direction: column;
  z-index: 1001;
  border-top: 1px solid var(--border);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  margin-bottom: 20px;
}
.mobile-link {
  display: block;
  padding: 14px 16px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--muted);
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.2s;
}
.mobile-link:hover, .mobile-link.active {
  background: var(--forest-lt);
  color: var(--forest);
}
.mobile-bottom {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-bottom: 8px;
}
.mobile-lang {
  justify-content: center;
  font-size: 0.85rem;
  padding: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

@media (max-width: 480px) {
  .mobile-link { padding: 13px 14px; font-size: 1rem; }
}
</style>
