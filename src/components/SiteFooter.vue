<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Logo -->
      <div class="footer-logo">
        <div class="logo-symbol">AI</div>
        <div class="glow-effect"></div>
      </div>
      
      <!-- Copyright avec animation -->
      <div class="copyright">
        <span class="copyright-text">Amine ITJI</span>
        <span class="copyright-symbol">&copy;</span>
        <span class="copyright-year">{{ currentYear }}</span>
      </div>
      
      <!-- Ligne décorative -->
      <div class="footer-line"></div>
      
      <!-- Réseaux sociaux -->
      <div class="social-links">
        <a href="https://github.com/amineitji" target="_blank" class="social-link github">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://fr.linkedin.com/in/amine-itji-5a8696268" target="_blank" class="social-link linkedin">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="mailto:amineitji@gmail.com" class="social-link email">
          <i class="bi bi-envelope-fill"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
/* Variables */
:root {
  --neon-green: #42b883;
  --neon-blue: #00d8ff;
  --dark-bg: #0a0a12;
  --border-color: #1a1a1f;
  --text-color: #f0f0f0;
}

/* Base Footer Styles */
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(10, 10, 18, 0.9);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--border-color);
  z-index: 900;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

/* Footer Logo */
.footer-logo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-symbol {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--neon-green), var(--neon-blue));
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.3);
  transition: all 0.3s ease;
}

.footer-logo:hover .logo-symbol {
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(66, 184, 131, 0.5);
}

.glow-effect {
  position: absolute;
  width: 35px;
  height: 10px;
  background: radial-gradient(ellipse at center, rgba(66, 184, 131, 0.4) 0%, rgba(66, 184, 131, 0) 70%);
  border-radius: 50%;
  bottom: -10px;
  filter: blur(3px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer-logo:hover .glow-effect {
  opacity: 1;
}

/* Copyright Styles */
.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: var(--text-color);
  font-size: 14px;
}

.copyright-symbol {
  color: var(--neon-green);
  margin: 0 3px;
}

.copyright-year {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.copyright-year::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
  transition: transform 0.3s ease;
  transform: scaleX(0);
}

.copyright:hover .copyright-year::after {
  transform: scaleX(1);
}

/* Footer Line */
.footer-line {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(66, 184, 131, 0.1), 
    rgba(66, 184, 131, 0.3), 
    rgba(66, 184, 131, 0.5), 
    rgba(66, 184, 131, 0.3), 
    rgba(66, 184, 131, 0.1), 
    transparent
  );
}

/* Social Links */
.social-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--text-color);
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link.github:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.social-link.linkedin:hover {
  background-color: rgba(0, 119, 181, 0.2);
  color: #0077b5;
  box-shadow: 0 0 8px rgba(0, 119, 181, 0.3);
}

.social-link.email:hover {
  background-color: rgba(234, 67, 53, 0.2);
  color: #ea4335;
  box-shadow: 0 0 8px rgba(234, 67, 53, 0.3);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .footer-content {
    padding: 0 15px;
  }
  
  .social-links {
    gap: 10px;
  }
  
  .copyright {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    display: none;
  }
  
  .footer-content {
    justify-content: space-between;
  }
}
</style>