<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="['collapse', 'navbar-collapse', { show: isCollapsed }]">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="item in navItems" :key="item.name">
          <router-link 
            :to="item.link" 
            class="nav-link" 
            :class="{ active: isActive(item.link) }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      isCollapsed: false,
      navItems: [
        { name: 'Accueil', link: '/' },
        { name: 'À propos de moi', link: '/profil' },
        { name: 'Projets Universitaires', link: '/projets-universitaires' },
        { name: 'Projets Personnels', link: '/projets-personnels' },
        { name: 'Commandez un site vitrine', link: '/commandez' },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed;
    },
    isActive(link) {
      return this.$route.path === link;
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 10px 20px;
}

.nav-link {
  color: white;
  font-weight: normal;
  transition: color 0.3s ease, font-weight 0.3s ease;
  padding: 8px 15px;
  border-radius: 5px;
}

.nav-link:hover {
  color: #42b883; /* Green color on hover */
  font-weight: bold;
}

.nav-item {
  margin-left: 10px;
}

.navbar-toggler {
  border: none;
}

.nav-link.active {
  color: #42b883; /* Green color for active link */
  font-weight: bold;
  border-bottom: 2px solid #42b883; /* Bottom border for active link */
}

/* Add subtle animation to the navbar collapse */
.collapse.navbar-collapse {
  transition: height 0.3s ease;
}

/* Enhance the appearance of the active menu item */
.nav-link.active::after {
  content: '';
  display: block;
  width: 100%;
  background-color: #42b883;
  position: relative;
  top: 5px;
  border-radius: 3px;
  transition: width 0.3s ease;
}

/* Change border to a growing effect on hover */
.nav-link:hover::after {
  width: 100%;
  background-color: #42b883;
}
</style>
