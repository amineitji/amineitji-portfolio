<template>
  <div class="profile-container">
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>

    <div class="section-intro animated-entry">
      <div class="blur-effect purple" style="top: 15%; left: 10%;"></div>
      
      <div class="grid">
        <div class="info-card timeline-card neon-border">
          <div class="card-header-line"></div>
          <h3 class="card-title"><span class="title-icon">💼</span> Parcours Professionnel</h3>
          <div class="timeline">
            
            <div class="timeline-item current">
              <div class="timeline-marker active"></div>
              <div class="timeline-date">Depuis Juin 2023</div>
              <div class="timeline-content">
                <h4>FREELANCE FULL-STACK & IA</h4>
                <p class="company">Auto-entrepreneur</p>
                <ul class="timeline-details">
                  <li>Développement de sites web et applications sur mesure (Vue.js / Django)</li>
                  <li>Création de scripts d'automatisation et d'analyse de données (Python)</li>
                  <li>Accompagnement technique de clients et déploiement cloud</li>
                </ul>
                <div class="availability-badge">
                  <span class="badge-text">Disponible pour missions</span>
                </div>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Janvier 2025 - Mars 2025</div>
              <div class="timeline-content">
                <h4>Stage - Digitalisation & Web</h4>
                <p class="company">ALSTOM - Villeurbanne</p>
                <ul class="timeline-details">
                  <li>Digitalisation des processus d'inspection (KIZEO)</li>
                  <li>Développement d'outils internes et reporting</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Mai 2023 - Juin 2023</div>
              <div class="timeline-content">
                <h4>Stage - Développeur Fullstack</h4>
                <p class="company">ANEQQIS - Paris</p>
                <ul class="timeline-details">
                  <li>Création complète d'un SaaS (Django/Vue.js)</li>
                  <li>Intégration Stripe et génération de PDF</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="info-card timeline-card neon-border">
          <div class="card-header-line"></div>
          <h3 class="card-title"><span class="title-icon">🎓</span> Parcours Académique</h3>
          <div class="timeline">
            <div class="timeline-item current">
              <div class="timeline-marker active"></div>
              <div class="timeline-date">2024 - 2026</div>
              <div class="timeline-content">
                <h4>MASTER 2 INTELLIGENCE ARTIFICIELLE</h4>
                <p class="company">Université Claude Bernard Lyon 1</p>
                <ul class="timeline-details">
                  <li>Spécialisation Machine Learning & Deep Learning</li>
                  <li>Computer Vision, NLP et Data Science</li>
                  <li>Projets de recherche appliquée</li>
                </ul>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">2020 - 2023</div>
              <div class="timeline-content">
                <h4>Licence Informatique</h4>
                <p class="company">Université Claude Bernard Lyon 1</p>
                <ul class="timeline-details">
                  <li>Bases solides en algorithmique et développement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-objectives animated-entry" style="animation-delay: 0.4s;">
      <div class="info-card objectives-card neon-border">
        <div class="card-header-line"></div>
        <h3 class="card-title"><span class="title-icon">🎯</span> Mon Offre de Service</h3>
        
        <div class="objectives-grid">
          <div class="objective-item primary">
            <div class="objective-icon">💻</div>
            <div class="objective-content">
              <h4>Développement Web</h4>
              <p>Sites vitrines modernes, plateformes E-commerce, applications SaaS. Je transforme vos idées en produits digitaux performants.</p>
            </div>
          </div>
          
          <div class="objective-item">
            <div class="objective-icon">🤖</div>
            <div class="objective-content">
              <h4>Solutions IA</h4>
              <p>Intégration d'intelligence artificielle, analyse d'images (Computer Vision) ou automatisation de tâches complexes.</p>
            </div>
          </div>
        </div>
        
        <div class="cta-container">
          <a href="mailto:amineitji@gmail.com?subject=Proposition de mission" class="contact-btn primary">
            <span class="btn-icon">📧</span>
            <span class="btn-text">Me contacter pour un projet</span>
          </a>
          <a href="/CV.pdf" download="CV_Amine_ITJI.pdf" class="contact-btn cv-btn">
            <span class="btn-icon">📄</span>
            <span class="btn-text">Télécharger CV</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile'
};
</script>

<style scoped>
/* Variables harmonisées avec HomePage */
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
.profile-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
}

/* Particles Background - identique à HomePage */
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

/* Cards - style harmonisé avec HomePage */
.info-card {
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
  margin-bottom: 32px;
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

.card-title {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.title-icon {
  font-size: 1.8rem;
  background: var(--gradient-primary);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 32px;
  margin-top: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-blue), var(--accent-cyan), var(--success-green));
  opacity: 0.6;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
  padding-bottom: 24px;
}

.timeline-item:not(:last-child) {
  border-bottom: 1px dashed rgba(209, 213, 219, 0.2);
}

.timeline-item.current {
  background: rgba(37, 99, 235, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-left: -20px;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.timeline-marker {
  position: absolute;
  left: -32px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--text-muted);
  border: 3px solid var(--card-bg);
  margin-top: 6px;
  transition: var(--transition);
}

.timeline-marker.active {
  background: var(--primary-blue);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
}

.timeline-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-cyan);
  margin-bottom: 8px;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.timeline-content h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--text-primary);
  font-weight: 600;
}

.company {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-style: italic;
}

.timeline-details {
  padding-left: 0;
  list-style: none;
  margin-top: 12px;
}

.timeline-details li {
  margin-bottom: 6px;
  position: relative;
  padding-left: 20px;
  line-height: 1.6;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.timeline-details li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-cyan);
  font-weight: bold;
}

.availability-badge,
.academic-status {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.badge-text,
.status-value {
  background: var(--gradient-primary);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Expertise Grid */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.expertise-category {
  background: rgba(3, 7, 18, 0.5);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border-color);
}

.category-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-name {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.skill-level {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(16, 185, 129, 0.1);
  color: var(--success-green);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

/* Tech Stack */
.tech-stack-section {
  border-top: 1px solid var(--border-color);
  padding-top: 24px;
}

.stack-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

/* Objectifs */
.objectives-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 32px;
}

.objective-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(3, 7, 18, 0.3);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.objective-item:hover {
  border-color: var(--primary-blue);
  background: rgba(37, 99, 235, 0.05);
}

.objective-item.primary {
  border-color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.05);
}

.objective-icon {
  font-size: 2rem;
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 12px;
}

.objective-content h4 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-weight: 600;
}

.objective-content p {
  color: var(--text-secondary);
  margin-bottom: 12px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.preferred-domains {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.domain-tag {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

/* Boutons CTA */
.cta-container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
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

.contact-btn.primary {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

.contact-btn.primary:hover {
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
}

.contact-btn.cv-btn {
  color: var(--accent-cyan);
  border-color: rgba(6, 182, 212, 0.3);
}

.contact-btn.cv-btn:hover {
  background: rgba(6, 182, 212, 0.1);
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.1);
}

/* Réalisations */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.achievement-item {
  background: rgba(3, 7, 18, 0.3);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  transition: var(--transition);
}

.achievement-item:hover {
  border-color: var(--success-green);
  background: rgba(16, 185, 129, 0.05);
  transform: translateY(-2px);
}

.achievement-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.achievement-icon {
  font-size: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 8px;
  border-radius: 8px;
}

.achievement-header h4 {
  font-size: 1rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: 600;
}

.achievement-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

/* Blur effects - identiques à HomePage */
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
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .profile-container {
    padding: 16px;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .timeline {
    padding-left: 24px;
  }
  
  .timeline-marker {
    left: -24px;
  }
  
  .objective-item {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-container {
    flex-direction: column;
  }
  
  .contact-btn {
    justify-content: center;
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
}
</style>