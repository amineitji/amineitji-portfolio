<template>
  <div id="app" class="app-container">
    <SiteHeader />
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style>
:root {
  --primary: #42b883;
  --primary-dark: #38a076;
  --accent: #00d8ff;
  --bg-dark: #0f1118;
  --bg-card: #1a1b25;
  --text-primary: #f0f0f0;
  --text-secondary: #b4b4b8;
  --border-color: #2a2d36;
  --transition-speed: 0.3s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  background: var(--bg-dark);
  color: var(--text-primary);
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(66, 184, 131, 0.08) 0%, transparent 25%),
    radial-gradient(circle at 85% 30%, rgba(0, 216, 255, 0.08) 0%, transparent 25%);
  position: relative;
}

/* Effet de scrollbar moderne */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

::-webkit-scrollbar-thumb {
  background: #2a2d36;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 5%;
  padding-bottom: 80px;
  min-height: calc(100vh - 140px);
  position: relative;
}

/* Animations de page */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s, transform 0.35s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Elements stylisés */
.card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  opacity: 0;
  transition: opacity var(--transition-speed);
}

.card:hover::before {
  opacity: 1;
}

/* Typographie */
h1, h2, h3, h4, h5 {
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--text-primary) 60%, var(--primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* Liens et boutons */
a {
  color: var(--primary);
  text-decoration: none;
  transition: color var(--transition-speed);
  position: relative;
}

a:hover {
  color: var(--accent);
}

a.underline::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-speed);
}

a.underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

button {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-speed);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(66, 184, 131, 0.2);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(66, 184, 131, 0.3);
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: var(--transition-speed);
}

button:hover::before {
  left: 100%;
  transition: 0.7s;
}

button.outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

button.outline:hover {
  background: rgba(66, 184, 131, 0.1);
}

/* Formulaires */
input, textarea, select {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 12px 16px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition-speed);
  width: 100%;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
}

input::placeholder, textarea::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

/* Grille responsive */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
}

/* Badges et tags */
.badge {
  display: inline-flex;
  align-items: center;
  background: rgba(66, 184, 131, 0.1);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 8px;
  transition: all var(--transition-speed);
}

.badge:hover {
  background: rgba(66, 184, 131, 0.2);
  transform: translateY(-2px);
}

/* Animation de fond subtile */
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-bg {
  background: linear-gradient(-45deg, #121420, #161a2b, #1a1e3a, #1d2634);
  background-size: 400% 400%;
  animation: gradientMove 15s ease infinite;
}

/* Media queries pour responsivité */
@media (max-width: 768px) {
  .main-content {
    padding: 20px 4%;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Composants utiles */
.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  margin: 24px 0;
}

.glass-card {
  background: rgba(26, 27, 37, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.blur-effect {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--primary);
  opacity: 0.1;
  filter: blur(80px);
  z-index: -1;
}
</style>