import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import UserProfile from '@/views/UserProfile.vue';
import ProjetsUniversitaires from '@/views/ProjetsUniversitaires.vue';
import ProjetsPersonnels from '@/views/ProjetsPersonnels.vue';
import OrderSite from '@/views/OrderSite.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/profil',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/projets-universitaires',
    name: 'ProjetsUniversitaires',
    component: ProjetsUniversitaires,
  },
  {
    path: '/projets-personnels',
    name: 'ProjetsPersonnels',
    component: ProjetsPersonnels,
  },
  {
    path: '/commandez',
    name: 'OrderSite',
    component: OrderSite,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
