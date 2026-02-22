<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="brand">Amine<span class="brand-dot">.</span></span>
        <p class="brand-sub">{{ t.sub }}</p>
      </div>

      <nav class="footer-nav" aria-label="Menu de pied de page">
        <router-link to="/">{{ t.home }}</router-link>
        <router-link to="/profil">{{ t.about }}</router-link>
        <router-link to="/projets">{{ t.projects }}</router-link>
        <router-link to="/services">{{ t.services }}</router-link>
      </nav>

      <div class="footer-social">
        <a :href="`mailto:${contactEmail}`" aria-label="Email" class="social-link">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
        <a href="https://github.com/amineitji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="social-link">
          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Amine Itji. {{ t.rights }}.</p>
    </div>
  </footer>
</template>

<script>
const CONTACT_EMAIL = 'amineitji@gmail.com';

export default {
  name: 'SiteFooter',
  inject: ['getLang'],
  
  data() {
    return {
      contactEmail: CONTACT_EMAIL
    };
  },

  computed: {
    lang() { return this.getLang(); },
    currentYear() {
      // Met à jour l'année automatiquement
      return new Date().getFullYear();
    },
    t() {
      const data = {
        fr: {
          sub: 'AI Project Manager @ Michelin · Freelance Full-Stack & IA',
          home: 'Accueil',
          about: 'À propos',
          projects: 'Projets',
          services: 'Services',
          rights: 'Tous droits réservés'
        },
        en: {
          sub: 'AI Project Manager @ Michelin · Freelance Full-Stack & AI',
          home: 'Home',
          about: 'About',
          projects: 'Work',
          services: 'Services',
          rights: 'All rights reserved'
        }
      };
      return data[this.lang];
    }
  }
};
</script>

<style scoped>
.footer {
  background: var(--white);
  border-top: 1px solid var(--gray-200);
  padding: 64px 0 24px;
  margin-top: 40px;
}

.footer-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--px);
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  gap: 40px;
  align-items: center;
  margin-bottom: 48px;
}

.footer-brand {
  grid-column: 1;
}

.brand {
  font-size: 1.15rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--gray-900);
}

.brand-dot { color: var(--blue); }

.brand-sub {
  font-size: 0.8rem;
  color: var(--gray-500);
  margin-top: 6px;
  line-height: 1.5;
  max-width: 300px;
}

.footer-nav {
  grid-column: 2;
  display: flex;
  gap: 24px;
}

.footer-nav a {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray-500);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: var(--gray-900);
}

.footer-social {
  grid-column: 3;
  display: flex;
  gap: 12px;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--gray-100);
  border-color: var(--gray-300);
  color: var(--gray-900);
  transform: translateY(-2px);
}

.footer-bottom {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 24px var(--px) 0;
  border-top: 1px solid var(--gray-100);
  text-align: center;
}

.footer-bottom p {
  font-size: 0.75rem;
  color: var(--gray-400);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 48px 0 24px;
  }
  
  .footer-inner {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;
    gap: 32px;
  }
  
  .footer-brand {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-nav {
    grid-column: 1;
    grid-row: 2;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .footer-social {
    grid-column: 1;
    grid-row: 3;
    justify-content: center;
  }
}
</style>