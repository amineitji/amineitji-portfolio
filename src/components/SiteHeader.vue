<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <span class="logo-text">AI</span>
    </div>
    
    <!-- Hamburger Menu pour Mobile -->
    <button class="navbar-toggler" type="button" @click="toggleNavbar">
      <div class="menu-icon" :class="{ 'is-active': isCollapsed }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    
    <!-- Menu de navigation -->
    <div :class="['navbar-menu', { 'is-open': isCollapsed }]">
      <ul class="nav-links">
        <li class="nav-item" v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.link"
            class="nav-link"
            :class="{ 'active': isActive(item.link) }"
            @click="closeMenu"
          >
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
      
      // Empêcher le défilement du body quand le menu est ouvert
      if (this.isCollapsed) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    isActive(link) {
      return this.$route.path === link;
    },
    closeMenu() {
      if (this.isCollapsed) {
        this.isCollapsed = false;
        document.body.style.overflow = '';
      }
    }
  },
  // S'assurer que le overflow est réinitialisé lors de la navigation
  watch: {
    $route() {
      this.isCollapsed = false;
      document.body.style.overflow = '';
    }
  },
  // S'assurer que tout est nettoyé lors de la destruction du composant
  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #0f0f1a;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #42b883, #35495e);
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.5);
}

.logo-text {
  color: white;
  font-weight: 700;
  font-size: 16px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 5px;
}

.nav-link {
  position: relative;
  display: block;
  padding: 8px 16px;
  color: #f0f0f0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #42b883;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #42b883;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

.nav-link.active {
  color: #42b883;
  font-weight: 600;
}

/* Hamburger Menu */
.navbar-toggler {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-icon {
  width: 30px;
  height: 24px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
}

.menu-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #42b883;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.menu-icon span:nth-child(1) {
  top: 0px;
}

.menu-icon span:nth-child(2) {
  top: 10px;
}

.menu-icon span:nth-child(3) {
  top: 20px;
}

.menu-icon.is-active span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.menu-icon.is-active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.menu-icon.is-active span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

/* Responsive Design */
@media (max-width: 992px) {
  .navbar-toggler {
    display: block;
    z-index: 1001;
  }
  
  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: #0f0f1a;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .navbar-menu.is-open {
    right: 0;
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .nav-item {
    margin: 15px 0;
    width: 80%;
    text-align: center;
  }
  
  .nav-link {
    padding: 15px;
    font-size: 1.2rem;
    width: 100%;
  }
}
</style>