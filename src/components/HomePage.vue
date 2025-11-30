<template>
  <div class="home-container">
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>
    
    <div class="hero-section animated-entry">
      <div class="blur-effect purple" style="top: 15%; left: 10%;"></div>
      <div class="blur-effect green" style="bottom: 25%; right: 15%;"></div>
      <div class="blur-effect cyan" style="top: 60%; left: 60%;"></div>
      
      <div class="profile-card neon-border">
        <div class="card-header-line"></div>
        
        <div class="profile-img-container">
          <div class="profile-img-border"></div>
          <img
            src="pp.jpeg"
            alt="Amine ITJI"
            class="profile-img"
          />
        </div>
        
        <h1 class="greeting">
          <span class="wave-emoji">👋</span> Bonjour, je suis <span class="highlight-name">Amine ITJI</span>
        </h1>
        
        <h2 class="title-text">Développeur Freelance Full-Stack & Expert IA</h2>
        
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <a href="mailto:amineitji@gmail.com">amineitji@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>Lyon / Remote</span>
          </div>
        </div>
        
        <div class="status-badge">
          <span class="status-icon">🚀</span>
          <span class="status-text">Ouvert aux projets : Sites Vitrines & Web Apps</span>
        </div>
        
        <div class="about-text">
          <p class="paragraph">
            Développeur et étudiant en <span class="text-highlight">Master 2 Intelligence Artificielle</span>.
            Je conçois des solutions web modernes et performantes pour les entreprises et entrepreneurs.
            Expertise en <span class="text-highlight">Django/Vue.js</span> et Data Science.
          </p>
          
          <p class="paragraph">
            Besoin d'un site vitrine, d'un e-commerce ou d'une application métier intégrant de l'IA ?
            Je vous accompagne de la conception au déploiement.
          </p>
        </div>
        
        <div class="contact-buttons">
           <a href="mailto:amineitji@gmail.com?subject=Demande de devis" class="contact-btn email-btn">
            <span class="btn-icon">📩</span>
            <span class="btn-text">Demander un devis</span>
            <span class="btn-effect"></span>
          </a>
          
          <a href="https://fr.linkedin.com/in/amine-itji-5a8696268" target="_blank" class="contact-btn linkedin-btn">
            <span class="btn-icon">💼</span>
            <span class="btn-text">LinkedIn</span>
            <span class="btn-effect"></span>
          </a>
          
          <a href="https://github.com/amineitji" target="_blank" class="contact-btn github-btn">
            <span class="btn-icon">🔗</span>
            <span class="btn-text">GitHub</span>
            <span class="btn-effect"></span>
          </a>
        </div>
      </div>
    </div>

    <div class="experience-section animated-entry" style="animation-delay: 0.3s;">
      <div class="section-grid">
        <div class="info-card education-card">
          <div class="card-icon">🎓</div>
          <h3 class="card-title">Formation</h3>
          
          <div class="timeline-compact">
            <div class="timeline-item current">
              <div class="timeline-marker active"></div>
              <div class="timeline-content">
                <h4>Master 2 Intelligence Artificielle</h4>
                <p class="institution">Université Claude Bernard Lyon 1</p>
                <p class="period">En cours (2025-2026)</p>
                <div class="status-current">Machine Learning • Deep Learning</div>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Licence en Informatique</h4>
                <p class="institution">Université Claude Bernard Lyon 1</p>
                <p class="period">Sept. 2020 – Juin 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div class="info-card experience-card">
          <div class="card-icon">💼</div>
          <h3 class="card-title">Activité</h3>
          
          <div class="timeline-compact">
            <div class="timeline-item current">
              <div class="timeline-marker active"></div>
              <div class="timeline-content">
                <h4>Freelance Full-Stack & IA</h4>
                <p class="institution">Auto-entrepreneur</p>
                <p class="period">Depuis Juin 2023</p>
                <div class="tech-highlights">Sites Web • SaaS • Scripts IA</div>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4>Stage - Digitalisation KIZEO</h4>
                <p class="institution">ALSTOM</p>
                <p class="period">Jan. 2025 – Mars 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-section animated-entry" style="animation-delay: 0.5s;">
      <div class="skills-container">
        <h3 class="section-title">Compétences Techniques</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4 class="category-label">Web Full-Stack</h4>
            <div class="tech-tags">
              <span class="tech-tag primary">Vue.js 3</span>
              <span class="tech-tag primary">Django</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">HTML/CSS</span>
              <span class="tech-tag">SQL</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4 class="category-label">Data & IA</h4>
            <div class="tech-tags">
              <span class="tech-tag ai">Python</span>
              <span class="tech-tag ai">Scikit-learn</span>
              <span class="tech-tag ai">OpenCV</span>
              <span class="tech-tag ai">Pandas</span>
              <span class="tech-tag">YOLO</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4 class="category-label">DevOps & Cloud</h4>
            <div class="tech-tags">
              <span class="tech-tag">AWS</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">Git</span>
              <span class="tech-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="projects-section animated-entry" style="animation-delay: 0.7s;">
      <div class="projects-container">
        <h3 class="section-title">Réalisations Récentes</h3>
        
        <div class="projects-grid">
          <div class="project-card featured">
            <div class="project-icon">🏢</div>
            <h4 class="project-title">ANEQQIS E-commerce</h4>
            <p class="project-description">
              Plateforme SaaS complète pour rapports ERP. Architecture Django/Vue.js avec 
              paiements Stripe et génération automatique de documents PDF.
            </p>
            <div class="project-tech">
              <span class="project-tag">SaaS</span>
              <span class="project-tag">Vue.js</span>
              <span class="project-tag">Stripe</span>
            </div>
            <div class="project-status">Projet Client</div>
          </div>
          
          <div class="project-card">
            <div class="project-icon">⚽</div>
            <h4 class="project-title">Football Analytics AI</h4>
            <p class="project-description">
              Système de Computer Vision utilisant YOLO pour le tracking de joueurs
              et la génération de statistiques de match en temps réel.
            </p>
            <div class="project-tech">
              <span class="project-tag ai">YOLO v8</span>
              <span class="project-tag ai">OpenCV</span>
              <span class="project-tag">Python</span>
            </div>
            <div class="project-status">R&D</div>
          </div>
          
          <div class="project-card">
            <div class="project-icon">🌐</div>
            <h4 class="project-title">Sites Vitrines Premium</h4>
            <p class="project-description">
              Collection de templates performants et animés pour artisans et PME.
              Optimisés SEO et 100% responsive.
            </p>
            <div class="project-tech">
              <span class="project-tag">Vite</span>
              <span class="project-tag">Animations</span>
              <span class="project-tag">SEO</span>
            </div>
            <div class="project-status">Freelance</div>
          </div>
        </div>
        
        <div class="projects-cta">
          <router-link to="/projets" class="projects-link">
            <span class="link-text">Voir tous mes projets</span>
            <span class="link-arrow">→</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="cta-section animated-entry" style="animation-delay: 0.9s;">
      <div class="cta-card">
        <h3 class="cta-title">Vous avez un projet en tête ?</h3>
        <p class="cta-description">
          Discutons de vos besoins. Que ce soit pour un site vitrine, une web app ou un module IA,
          je vous propose une solution adaptée et un devis gratuit.
        </p>
        <div class="cta-buttons">
          <a href="mailto:amineitji@gmail.com?subject=Demande de devis" 
             class="cta-primary">
            <span class="btn-icon">🚀</span>
            <span class="btn-text">Lancer mon projet</span>
          </a>
          <router-link to="/services" class="cta-secondary">
            <span class="btn-text">Voir mes tarifs</span>
            <span class="btn-arrow">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
/* Variables */
:root {
  --primary-blue: #2563eb;
  --accent-cyan: #06b6d4;
  --success-green: #10b981;
  --warning-amber: #f59e0b;
  --dark-bg: #030712;
  --card-bg: #111827;
  --border-color: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --linkedin-color: #0077b5;
  --github-color: #f5f5f5;
  --email-color: #ea4335;
  --gradient-primary: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Styles */
.home-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
}

/* Particles Background */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="none"/><circle cx="10%" cy="20%" r="1.5" fill="%2342b883" opacity="0.7"/><circle cx="15%" cy="25%" r="0.8" fill="%2342b883" opacity="0.8"/><circle cx="20%" cy="15%" r="1.2" fill="%2300d8ff" opacity="0.7"/><circle cx="25%" cy="10%" r="0.5" fill="%2342b883" opacity="0.8"/></svg>');
  animation: moveParticles 150s linear infinite;
}

@keyframes moveParticles {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(3, 7, 18, 0.5) 0%, rgba(3, 7, 18, 0.95) 100%);
  z-index: 1;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-entry {
  animation: fadeInUp 0.8s ease forwards;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto 80px;
  position: relative;
  z-index: 1;
}

/* Profile Card */
.profile-card {
  width: 100%;
  background: rgba(17, 24, 39, 0.8);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  text-align: center;
}

.neon-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--primary-blue), var(--accent-cyan), var(--success-green), var(--primary-blue));
  background-size: 400% 400%;
  z-index: -1;
  border-radius: 26px;
  animation: glowingBorder 8s ease infinite;
  opacity: 0.8;
}

@keyframes glowingBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.card-header-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--gradient-primary);
  opacity: 0.8;
}

/* Profile Image */
.profile-img-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 4px solid transparent;
  background: linear-gradient(var(--card-bg), var(--card-bg)) padding-box,
              var(--gradient-primary) border-box;
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
}

.profile-img-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: var(--gradient-primary);
  z-index: 0;
  opacity: 0.5;
  filter: blur(15px);
  animation: rotateBorder 10s linear infinite;
}

@keyframes rotateBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Typography */
.greeting {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.wave-emoji {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.highlight-name {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.title-text {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 25px;
  font-weight: 300;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}

.contact-item a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
}

.contact-item a:hover {
  color: var(--accent-cyan);
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.1);
  color: var(--success-green);
  padding: 10px 20px;
  border-radius: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  font-size: 0.9rem;
  font-weight: 500;
}

/* About Text */
.about-text {
  margin-bottom: 35px;
  text-align: left;
}

.paragraph {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1rem;
}

.text-highlight {
  color: var(--accent-cyan);
  font-weight: 600;
}

/* Contact Buttons */
.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.contact-btn {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid;
  background: rgba(17, 24, 39, 0.7);
  z-index: 1;
}

.contact-btn:hover {
  transform: translateY(-3px);
}

.github-btn {
  color: var(--github-color);
  border-color: rgba(245, 245, 245, 0.3);
}

.github-btn:hover {
  background: rgba(245, 245, 245, 0.1);
  box-shadow: 0 5px 15px rgba(245, 245, 245, 0.1);
}

.linkedin-btn {
  color: var(--linkedin-color);
  border-color: rgba(0, 119, 181, 0.3);
}

.linkedin-btn:hover {
  background: rgba(0, 119, 181, 0.1);
  box-shadow: 0 5px 15px rgba(0, 119, 181, 0.1);
}

.email-btn {
  color: var(--email-color);
  border-color: rgba(234, 67, 53, 0.3);
}

.email-btn:hover {
  background: rgba(234, 67, 53, 0.1);
  box-shadow: 0 5px 15px rgba(234, 67, 53, 0.1);
}

.cv-btn {
  color: var(--accent-cyan);
  border-color: rgba(6, 182, 212, 0.3);
}

.cv-btn:hover {
  background: rgba(6, 182, 212, 0.1);
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.1);
}

/* Experience Section */
.experience-section {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
}

.info-card {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: var(--transition);
}

.info-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.card-title {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  font-weight: 600;
}

/* Timeline Compact */
.timeline-compact {
  position: relative;
  padding-left: 24px;
}

.timeline-compact::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-blue), var(--accent-cyan));
  opacity: 0.6;
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;
  padding-bottom: 16px;
}

.timeline-item:not(:last-child) {
  border-bottom: 1px dashed rgba(209, 213, 219, 0.1);
}

.timeline-marker {
  position: absolute;
  left: -24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--text-muted);
  border: 2px solid var(--card-bg);
  margin-top: 4px;
}

.timeline-marker.active {
  background: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.timeline-content h4 {
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 4px;
  font-weight: 600;
}

.institution {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.period {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.status-current,
.tech-highlights {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-blue);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  display: inline-block;
}

/* Skills Section */
.skills-section {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
}

.skills-container {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.skill-category {
  text-align: center;
}

.category-label {
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tech-tag {
  background: rgba(55, 65, 81, 0.5);
  color: var(--text-secondary);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.tech-tag.primary {
  background: rgba(37, 99, 235, 0.2);
  color: var(--primary-blue);
  border-color: rgba(37, 99, 235, 0.3);
}

.tech-tag.ai {
  background: rgba(16, 185, 129, 0.2);
  color: var(--success-green);
  border-color: rgba(16, 185, 129, 0.3);
}

.tech-tag:hover {
  transform: translateY(-2px);
}

/* Projects Section */
.projects-section {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
}

.projects-container {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.project-card {
  background: rgba(3, 7, 18, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  transition: var(--transition);
}

.project-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
}

.project-card.featured {
  border-color: var(--success-green);
}

.project-card.featured:hover {
  border-color: var(--success-green);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
}

.project-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  display: block;
}

.project-title {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-weight: 600;
}

.project-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.project-tag {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
}

.project-tag.ai {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success-green);
}

.project-status {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-style: italic;
}

.projects-cta {
  text-align: center;
  margin-top: 32px;
}

.projects-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-cyan);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.projects-link:hover {
  color: var(--primary-blue);
  transform: translateX(5px);
}

/* CTA Section */
.cta-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-card {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
}

.cta-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 600;
}

.cta-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.cta-primary,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.cta-primary {
  background: var(--gradient-primary);
  color: white;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
}

.cta-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.cta-secondary:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  transform: translateY(-2px);
}

/* Blur effects */
.blur-effect {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: -1;
  opacity: 0.2;
}

.blur-effect.green {
  background: var(--success-green);
  animation: floatAnimation 8s ease-in-out infinite;
}

.blur-effect.purple {
  background: var(--primary-blue);
  animation: floatAnimation 10s ease-in-out infinite reverse;
}

.blur-effect.cyan {
  background: var(--accent-cyan);
  animation: floatAnimation 12s ease-in-out infinite;
}

@keyframes floatAnimation {
  0% { transform: translate(0, 0); }
  50% { transform: translate(30px, 20px); }
  100% { transform: translate(0, 0); }
}

/* Responsive */
@media (max-width: 768px) {
  .profile-card {
    padding: 30px 20px;
  }
  
  .greeting {
    font-size: 1.5rem;
  }
  
  .title-text {
    font-size: 1.1rem;
  }
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-btn {
    width: 100%;
    justify-content: center;
  }
  
  .profile-img-container {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
  
  .section-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 10px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 20px 10px;
  }
  
  .section-grid {
    gap: 20px;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .skills-container,
  .projects-container {
    padding: 20px;
  }
}
</style>