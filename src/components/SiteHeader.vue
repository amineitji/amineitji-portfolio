<template>
  <nav class="navbar">
    <!-- Logo scientifique -->
    <div class="logo">
      <div class="logo-container">
        <span class="logo-text">AI</span>
        <div class="logo-accent"></div>
      </div>
    </div>
    
    <!-- Hamburger Menu pour Mobile -->
    <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-label="Toggle navigation">
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
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-text">{{ item.name }}</span>
            <div class="nav-indicator"></div>
          </router-link>
        </li>
      </ul>
      
      <!-- Contact rapide dans le menu mobile -->
      <div class="mobile-contact" v-if="isCollapsed">
        <a href="mailto:amineitji@gmail.com" class="mobile-contact-btn">
          <span class="contact-icon">📧</span>
          <span class="contact-text">Contact</span>
        </a>
      </div>
    </div>
    
    <!-- Indicateur de disponibilité -->
    <div class="availability-indicator">
      <div class="status-dot"></div>
      <span class="status-text">Disponible pour stage</span>
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
        { name: 'Accueil', link: '/', icon: '🏠' },
        { name: 'À propos', link: '/profil', icon: '👨‍💻' },
        { name: 'Projets', link: '/projets', icon: '🔬' },
        { name: 'Services', link: '/services', icon: '⚡' },
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
      if (link === '/') {
        return this.$route.path === '/';
      }
      return this.$route.path.startsWith(link);
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
/* Variables scientifiques */
:root {
  --primary-blue: #2563eb;
  --accent-cyan: #06b6d4;
  --success-green: #10b981;
  --dark-bg: #030712;
  --nav-bg: rgba(3, 7, 18, 0.95);
  --border-color: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Navbar principale */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Logo scientifique */
.logo {
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  position: relative;
  transition: var(--transition);
  cursor: pointer;
}

.logo-container:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.logo-text {
  color: white;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Monaco', 'Menlo', monospace;
  z-index: 2;
  position: relative;
}

.logo-accent {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background: var(--success-green);
  border-radius: 50%;
  border: 2px solid var(--nav-bg);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
}

.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: var(--transition);
  border-radius: 8px;
  overflow: hidden;
}

.nav-icon {
  font-size: 1.1rem;
  transition: var(--transition);
}

.nav-text {
  position: relative;
  z-index: 2;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-blue), var(--accent-cyan));
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 1px;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(37, 99, 235, 0.1);
}

.nav-link:hover .nav-icon {
  transform: scale(1.1);
}

.nav-link:hover .nav-indicator,
.nav-link.active .nav-indicator {
  width: 60%;
}

.nav-link.active {
  color: var(--primary-blue);
  background: rgba(37, 99, 235, 0.15);
}

.nav-link.active .nav-icon {
  color: var(--accent-cyan);
}

/* Indicateur de disponibilité */
.availability-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--success-green);
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--success-green);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-text {
  white-space: nowrap;
}

/* Hamburger Menu */
.navbar-toggler {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: var(--transition);
}

.navbar-toggler:hover {
  background: rgba(37, 99, 235, 0.1);
}

.menu-icon {
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
}

.menu-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--text-primary);
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.2s ease-in-out;
}

.menu-icon span:nth-child(1) {
  top: 0px;
}

.menu-icon span:nth-child(2) {
  top: 8px;
}

.menu-icon span:nth-child(3) {
  top: 16px;
}

.menu-icon.is-active span:nth-child(1) {
  top: 8px;
  transform: rotate(135deg);
  background: var(--primary-blue);
}

.menu-icon.is-active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.menu-icon.is-active span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
  background: var(--primary-blue);
}

/* Contact mobile */
.mobile-contact {
  padding: 20px;
  border-top: 1px solid var(--border-color);
  margin-top: 20px;
}

.mobile-contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
}

.mobile-contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.contact-icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .availability-indicator {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 12px 20px;
  }
  
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
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .navbar-menu.is-open {
    right: 0;
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0;
  }
  
  .nav-item {
    width: 100%;
    margin: 8px 0;
  }
  
  .nav-link {
    width: 100%;
    justify-content: center;
    padding: 16px 24px;
    font-size: 1.1rem;
    border-radius: 12px;
    background: rgba(17, 24, 39, 0.5);
    border: 1px solid var(--border-color);
  }
  
  .nav-link:hover,
  .nav-link.active {
    background: rgba(37, 99, 235, 0.2);
    border-color: var(--primary-blue);
  }
  
  .nav-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 10px 16px;
  }
  
  .logo-container {
    width: 40px;
    height: 40px;
  }
  
  .logo-text {
    font-size: 16px;
  }
  
  .nav-link {
    padding: 14px 20px;
    font-size: 1rem;
  }
}

/* Animations d'apparition */
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.navbar-menu.is-open .nav-item {
  animation: slideInFromRight 0.3s ease forwards;
}

.navbar-menu.is-open .nav-item:nth-child(1) {
  animation-delay: 0.1s;
}

.navbar-menu.is-open .nav-item:nth-child(2) {
  animation-delay: 0.2s;
}

.navbar-menu.is-open .nav-item:nth-child(3) {
  animation-delay: 0.3s;
}

.navbar-menu.is-open .nav-item:nth-child(4) {
  animation-delay: 0.4s;
}

.navbar-menu.is-open .mobile-contact {
  animation: slideInFromRight 0.3s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

@keyframes slideInFromRight {
  to {
    opacity: 1;
  }
}
</style>