import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import UserProfile from '@/views/UserProfile.vue';
import Projets from '@/views/Projets.vue';
import MesServices from '@/views/MesServices.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'Accueil - Amine ITJI',
      description: 'Développeur IA & Web - Master 2 Intelligence Artificielle'
    }
  },
  {
    path: '/profil',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      title: 'À propos - Amine ITJI',
      description: 'Parcours académique et professionnel - Recherche stage fin d\'études IA'
    }
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
    meta: {
      title: 'Projets - Amine ITJI',
      description: 'Portfolio de projets IA, Machine Learning et développement web'
    }
  },
  {
    path: '/services',
    name: 'MesServices',
    component: MesServices,
    meta: {
      title: 'Mes Services - Amine ITJI',
      description: 'Services de développement web, IA et automatisation'
    }
  },
  // Redirections pour les anciennes URLs
  {
    path: '/projets-universitaires',
    redirect: '/projets'
  },
  {
    path: '/projets-personnels',
    redirect: '/projets'
  },
  {
    path: '/commandez',
    redirect: '/services'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Meta tags pour SEO
router.beforeEach((to, from, next) => {
  // Mise à jour du titre de la page
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  
  // Mise à jour de la meta description
  if (to.meta.description) {
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', to.meta.description);
  }
  
  next();
});

export default router;