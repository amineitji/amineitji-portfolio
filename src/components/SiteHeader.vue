<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <router-link to="/" class="logo" @click="closeMenu">
        Amine<span class="logo-dot">.</span>
      </router-link>

      <nav class="nav-links-wrap" aria-label="Menu principal">
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.to">
            <router-link 
              :to="item.to" 
              class="nav-link" 
              active-class="active" 
              @click="closeMenu"
            >
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
          <span class="avail-text">{{ lang === 'en' ? 'Available' : 'Disponible' }}</span>
        </div>
        
        <a :href="`mailto:${contactEmail}`" class="nav-cta" @click.prevent="openContactComposer(lang === 'en' ? 'Header' : 'Header')">
          Contact
        </a>
      </div>

      <button 
        class="burger" 
        :class="{ open: menuOpen }" 
        @click="menuOpen = !menuOpen" 
        :aria-expanded="menuOpen"
        aria-label="Ouvrir le menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="mobile-nav">
      <div v-if="menuOpen" class="mobile-panel">
        <nav aria-label="Menu mobile">
          <ul class="mobile-links">
            <li v-for="item in navItems" :key="item.to">
              <router-link 
                :to="item.to" 
                class="mobile-link" 
                active-class="active" 
                @click="closeMenu"
              >
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
          <a
            :href="`mailto:${contactEmail}`"
            class="btn btn-dark"
            style="justify-content:center;"
            @click.prevent="openContactComposer(lang === 'en' ? 'Mobile menu' : 'Menu mobile')"
          >
            {{ lang === 'en' ? 'Contact me' : 'Me contacter' }}
          </a>
        </div>
      </div>
    </transition>
  </header>
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
        { to: '/', fr: 'Accueil', en: 'Home' },
        { to: '/profil', fr: 'À propos', en: 'About' },
        { to: '/projets', fr: 'Projets', en: 'Work' },
        { to: '/services', fr: 'Services', en: 'Services' },
      ],
    };
  },

  computed: {
    lang() { 
      return this.getLang(); 
    }
  },

  mounted() {
    // Le { passive: true } est crucial pour les perfs de scroll sur Lighthouse
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll(); // Initial check
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  watch: {
    // Empêche le scroll du body quand le menu mobile est ouvert
    menuOpen(isOpen) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 15;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    openContactComposer(source) {
      this.closeMenu();
      this.openEmailComposer({
        source,
        intent: 'project',
        service: 'general',
      });
    },
    changeLang(l) {
      this.setLang(l);
      this.closeMenu();
    }
  },
};
</script>

<style scoped>
/* ── Navbar Container ── */
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  /* Fond solide en fallback (backdrop-filter non supporté sur certains Android) */
  background: #F0EAD9;
  background: rgba(240, 234, 217, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  /* Bordure toujours visible — distingue la navbar du fond crème */
  border-bottom: 1px solid var(--border, #D8D0BE);
  transition: box-shadow 0.3s var(--ease);
  height: var(--nav-h);
  display: flex;
  align-items: center;
  /* Largeur pleine garantie en position sticky */
  width: 100%;
}

.navbar.scrolled {
  background: #F0EAD9;
  background: rgba(240, 234, 217, 0.99);
  box-shadow: 0 4px 20px rgba(17,17,24,0.07);
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

/* ── Logo ── */
.logo {
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--gray-900);
  text-decoration: none;
}
.logo-dot {
  color: var(--blue);
}

/* ── Desktop Links ── */
.nav-links-wrap {
  display: flex;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--gray-500);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  padding: 8px 0;
}

.nav-link:hover {
  color: var(--gray-900);
}

.nav-link.active {
  color: var(--gray-900);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gray-900);
  border-radius: 2px;
}

/* ── Right side ── */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--gray-400);
}

.lang-toggle button {
  background: none;
  border: none;
  padding: 4px;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
  transition: color 0.2s;
}

.lang-toggle button:hover {
  color: var(--gray-700);
}

.lang-toggle button.on {
  color: var(--gray-900);
}

.sep {
  opacity: 0.3;
}

.avail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-600);
  padding: 6px 14px;
  background: var(--gray-100);
  border-radius: 100px;
}

.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4BAF6E;
  box-shadow: 0 0 0 2px rgba(75,175,110,0.2);
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.nav-cta {
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: var(--gray-900);
  padding: 8px 18px;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-cta:hover {
  background: var(--gray-800);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
}

/* ── Mobile Burger ── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  /* Zone tactile min 44x44px recommandée pour mobile */
  width: 44px;
  height: 44px;
  padding: 14px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 501;
  /* Aligne les barres au centre de la zone tactile */
  align-items: center;
  box-sizing: border-box;
}

.burger span {
  display: block;
  height: 2px;
  width: 20px;
  background: var(--ink, #111118);
  border-radius: 2px;
  transition: all 0.25s var(--ease);
}

.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Panel ── */
.mobile-panel {
  position: fixed;
  top: var(--nav-h);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg, #F0EAD9);
  padding: 20px var(--px) 32px;
  display: flex;
  flex-direction: column;
  z-index: 400;
  border-top: 1px solid var(--gray-100);
  overflow-y: auto;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 32px 0;
  padding: 0;
  flex: 1;
}

.mobile-link {
  display: block;
  padding: 16px 20px;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gray-500);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s;
  background: var(--gray-50);
}

.mobile-link:hover, .mobile-link.active {
  background: var(--gray-100);
  color: var(--gray-900);
}

.mobile-bottom {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
}

.mobile-lang {
  justify-content: center;
  font-size: 0.9rem;
  padding: 16px;
  background: var(--gray-50);
  border-radius: 12px;
}

/* ── Transition Mobile Nav ── */
.mobile-nav-enter-active, .mobile-nav-leave-active {
  transition: transform 0.3s var(--ease), opacity 0.3s ease;
}
.mobile-nav-enter-from, .mobile-nav-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .nav-links-wrap, .nav-right {
    display: none;
  }
  .burger {
    display: flex;
  }
}
</style>
