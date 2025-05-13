<template>
  <div class="profile-container">
    <!-- Section Principale avec Animation d'entrée -->
    <div class="section-intro animated-entry">
      <div class="blur-effect" style="top: 10%; left: 15%;"></div>
      <div class="blur-effect" style="bottom: 20%; right: 10%;"></div>
      
      <!-- Parcours Professionnel et Scolaire -->
      <div class="grid">
        <!-- Parcours Professionnel -->
        <div class="card timeline-card">
          <h3 class="card-title">Parcours Professionnel</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Janvier 2025 - Mars 2025</div>
              <div class="timeline-content">
                <h4>STAGE - Digitalisation des inspections (KIZEO)</h4>
                <p class="company">ALSTOM - Villeurbanne</p>
                <ul class="timeline-details">
                  <li>Mise en place de differents formulaires d'inspections sur KIZEO.</li>
                  <li>Présentation régulière du travail réalisé aux responsables.</li>
                  <li>Travail en méthodologie Agile via Teams.</li>
                  <li>Travail collaboratif avec les différents responsables.</li>
                </ul>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Novembre 2024 - Décembre 2024</div>
              <div class="timeline-content">
                <h4>Monteur PC</h4>
                <p class="company">LDLC - Lyon</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Juillet 2024 - Aout 2024</div>
              <div class="timeline-content">
                <h4>Préparateur/Convoyeur</h4>
                <p class="company">Société de location 'DLM Location' - Lyon</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Mai 2023 - Juin 2023</div>
              <div class="timeline-content">
                <h4>STAGE - Développeur Fullstack Django/VueJs</h4>
                <p class="company">Société 'ANEQGIS' - Paris</p>
                <ul class="timeline-details">
                  <li>Création et réalisation autonome du front et du back-end d'un site de génération et commercialisation de rapport technique dans le marché de l'immobilier.</li>
                  <li>Présentation régulière du travail réalisé aux responsables.</li>
                  <li>Travail en méthodologie Agile via Azure DevOps.</li>
                  <li>Travail collaboratif avec les différents responsables.</li>
                </ul>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Déc. 2023 - Janv. 2024</div>
              <div class="timeline-content">
                <h4>Agent d'accueil</h4>
                <p class="company">Association d'hébergement d'urgence '2 choses lune' - Lyon</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Juin 2021 - Aout 2021</div>
              <div class="timeline-content">
                <h4>Préparateur de commandes</h4>
                <p class="company">Société de logistique 'XPO logistics' - Lyon</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Parcours Scolaire -->
        <div class="card timeline-card">
          <h3 class="card-title">Parcours Scolaire</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Sept. 2023 - Juin 2026</div>
              <div class="timeline-content">
                <h4>MASTER INFORMATIQUE</h4>
                <p class="company">Université Claude Bernard Lyon 1</p>
                <ul class="timeline-details">
                  <li>Gestion de projet et approfondissement des compétences en développement web et réseaux.</li>
                  <li>Analyse de données, machine learning et simulation d'écosystèmes multi-agents.</li>
                  <li>Participation à des projets collaboratifs avec gestion via GitLab, organisation Agile et DevOps.</li>
                </ul>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Sept. 2020 - Juin 2023</div>
              <div class="timeline-content">
                <h4>LICENCE INFORMATIQUE</h4>
                <p class="company">Université Claude Bernard Lyon 1</p>
                <ul class="timeline-details">
                  <li>Formation en développement logiciel avec C++ et Java, ainsi qu'en développement web.</li>
                  <li>Études de la gestion de projet et des réseaux informatiques.</li>
                  <li>Participation à des projets pratiques, renforçant les compétences en collaboration et en gestion du temps.</li>
                </ul>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-date">Mai 2019</div>
              <div class="timeline-content">
                <h4>BACCALAUREAT GENERALE SCIENTIFIQUE</h4>
                <p class="company">Lycée la Pléiade - Isère</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div style="color: transparent;">-</div>

    <!-- Compétences et Objectifs -->
    <div class="section-skills animated-entry" style="animation-delay: 0.2s;">
      <div class="card glass-card">
        <h3 class="card-title">Compétences et Objectifs</h3>
        
        <div class="skills-content">
          <div class="skill-item">
            <div class="skill-icon">💻</div>
            <div class="skill-text">
              <h4>Compétences techniques</h4>
              <p>En tant que passionné par l'intelligence artificielle, je possède des aptitudes en machine learning, détection et analyse d'images, data science, et visualisation de données. J'ai également des compétences avancées en algorithmique, développement logiciel, et je reste constamment à l'affût des innovations technologiques.</p>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-icon">🌐</div>
            <div class="skill-text">
              <h4>Développement web</h4>
              <p>Bien que mon intérêt principal soit l'IA, je suis également compétent en développement web fullstack, avec une expérience significative dans des projets utilisant des technologies comme Django et Vue.js.</p>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-icon">🚀</div>
            <div class="skill-text">
              <h4>Co-fondateur et développeur</h4>
              <p>En tant que co-fondateur de l'entreprise Aneqqis, je suis le développeur fullstack principal du projet DiagERP, une plateforme pour la génération et la commercialisation de rapports techniques dans le marché de l'immobilier.</p>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-icon">🔍</div>
            <div class="skill-text">
              <h4>Objectifs professionnels</h4>
              <p>Actuellement en freelance, je suis à la recherche d'un CDD ou d'un stage pour l'année 2024/2025, en vue de poursuivre un Master 2 spécialisé en Intelligence Artificielle. Je suis ouvert à des opportunités dans l'IA, le développement web, ou tout autre domaine lié à mes compétences. Mon programme universitaire allégé cette année (seulement deux modules à valider, représentant deux jours de cours par mois) me permet d'être pleinement disponible pour relever de nouveaux défis professionnels.</p>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-icon">🌟</div>
            <div class="skill-text">
              <h4>Intérêts</h4>
              <p>Je suis particulièrement intéressé par les projets qui me permettront d'explorer davantage l'IA et ses applications, ou encore d'autres projets liant mes compétences en développement fullstack.</p>
            </div>
          </div>
        </div>
        
        <div class="tech-stack">
          <span class="badge">Python</span>
          <span class="badge">Vue.js</span>
          <span class="badge">Django</span>
          <span class="badge">Machine Learning</span>
          <span class="badge">C++</span>
          <span class="badge">Java</span>
          <span class="badge">Data Science</span>
          <span class="badge">JavaScript</span>
        </div>
        
        <div class="cta-container">
          <button class="download-btn">
            <i class="fas fa-download"></i> Télécharger mon CV en PDF
          </button>
        </div>
      </div>
    </div>

    <!-- Loisirs et Intérêts -->
    <div class="section-hobbies animated-entry" style="animation-delay: 0.4s;">
      <div class="card">
        <h3 class="card-title">Loisirs et Intérêts</h3>
        
        <div class="hobby-content">
          <div class="hobby-icon">⚽</div>
          <div class="hobby-text">
            <h4>Organisation d'événements</h4>
            <p>En 2021, j'ai organisé un tournoi de football associatif à la faculté, nommé <strong>Tournoi SIXTE</strong>. Cet événement a rassemblé plusieurs équipes étudiantes pour une journée de compétition amicale. L'organisation incluait la gestion des équipes, la coordination des matchs, et la communication avec les participants. Cet événement a été un succès et a permis de renforcer les liens entre les étudiants.</p>
            <a href="https://as.univ-lyon1.fr/tournoi-de-sixte-noel-2021/" target="_blank" class="underline">Voir plus de détails</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
};
</script>

<style scoped>
.profile-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-entry {
  animation: fadeInUp 0.7s ease forwards;
}

/* Cards */
.card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
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

.card-title {
  font-size: 1.6rem;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  color: white
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), transparent);
}

/* Timeline */
.timeline-card {
  height: 100%;
}

.timeline {
  position: relative;
  padding-left: 28px;
  margin-top: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), rgba(66, 184, 131, 0.2));
}

.timeline-item {
  position: relative;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px dashed rgba(66, 184, 131, 0.2);
}

.timeline-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.2);
  margin-top: 5px;
}

.timeline-date {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 8px;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(0, 216, 255, 0.1);
}

.timeline-content h4 {
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: var(--text-primary);
}

.company {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-style: italic;
}

.timeline-details {
  padding-left: 16px;
  margin-top: 12px;
  border-left: 2px solid rgba(66, 184, 131, 0.2);
}

.timeline-details li {
  margin-bottom: 8px;
  position: relative;
  padding-left: 12px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.timeline-details li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
}

/* Skills Section */
.skills-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px dashed rgba(66, 184, 131, 0.2);
}

.skill-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.skill-icon {
  font-size: 1.8rem;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(66, 184, 131, 0.1);
  border-radius: 12px;
}

.skill-text h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.skill-text p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px dashed rgba(66, 184, 131, 0.2);
}

.cta-container {
  margin-top: 24px;
  text-align: center;
}

.download-btn {
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

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(66, 184, 131, 0.3);
}

.download-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: var(--transition-speed);
}

.download-btn:hover::before {
  left: 100%;
  transition: 0.7s;
}

/* Hobby Section */
.hobby-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.hobby-icon {
  font-size: 2rem;
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(66, 184, 131, 0.1);
  border-radius: 12px;
}

.hobby-text h4 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.hobby-text p {
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

/* Glass Card */
.glass-card {
  background: rgba(26, 27, 37, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

/* Responsive */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .hobby-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .hobby-icon {
    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .skill-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .skill-icon {
    margin-bottom: 12px;
  }
  
  .timeline {
    padding-left: 24px;
  }
  
  .timeline-marker {
    left: -24px;
  }
}
</style>