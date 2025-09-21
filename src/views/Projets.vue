<template>
  <div class="projects-container">
    <!-- Effet de particules et d'illumination -->
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>

    <!-- Filtres et contrôles simplifiés -->
    <div class="controls-panel animated-entry">
      <div class="blur-effect purple" style="top: 15%; left: 10%;"></div>
      
      <div class="filters-section">
        <div class="filter-group">
          <select v-model="selectedCategory" class="filter-select">
            <option value="">Toutes les catégories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        
        <div class="filter-group">
          <select v-model="sortBy" class="filter-select">
            <option value="date">Date (récent d'abord)</option>
            <option value="date-asc">Date (ancien d'abord)</option>
            <option value="title">Titre (A-Z)</option>
            <option value="category">Catégorie</option>
          </select>
        </div>
        
        <button @click="resetFilters" class="reset-btn">
          <span class="btn-icon">⟲</span>
          Réinitialiser
        </button>
      </div>
    </div>

    <!-- Timeline des projets -->
    <div class="projects-timeline animated-entry" style="animation-delay: 0.2s;">
      <div class="blur-effect green" style="bottom: 25%; right: 15%;"></div>
      <div class="blur-effect cyan" style="top: 60%; left: 60%;"></div>
      
      <div class="timeline-line"></div>
      
      <div 
        v-for="(project, index) in filteredProjects" 
        :key="index"
        class="project-card neon-border"
        :class="{ 'expanded': expandedProject === index }"
        @click="toggleProject(index)"
      >
        <div class="card-header-line"></div>
        
        <!-- Marker temporel -->
        <div class="timeline-marker">
          <div class="marker-dot"></div>
          <div class="marker-date">{{ project.year }}</div>
        </div>
        
        <!-- Contenu principal -->
        <div class="card-content">
          <!-- Header compact -->
          <div class="card-header">
            <div class="header-left">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-meta">
                <span class="category-badge">{{ project.category }}</span>
                <span class="date-badge">{{ project.year }}</span>
              </div>
            </div>
            
            <div class="header-right">
              <div class="tech-stack-preview">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="tech-chip"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="tech-more">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              
              <button class="expand-btn" :class="{ 'expanded': expandedProject === index }">
                <span class="expand-icon">▼</span>
              </button>
            </div>
          </div>
          
          <!-- Image de prévisualisation -->
          <div class="preview-image" v-if="project.imageSrc">
            <img :src="project.imageSrc" :alt="project.title" />
            <div class="image-overlay"></div>
          </div>
          
          <!-- Contenu détaillé (collapsible) -->
          <div class="detailed-content" v-show="expandedProject === index">
            <div class="content-body">
              <div v-for="(paragraph, idx) in project.content" :key="idx" class="content-section">
                <p v-if="typeof paragraph === 'string'" class="text-content">{{ paragraph }}</p>
                <div v-else-if="paragraph.type === 'image'" class="image-container">
                  <img :src="paragraph.src" :alt="paragraph.alt" class="content-image" />
                  <p v-if="paragraph.caption" class="image-caption">{{ paragraph.caption }}</p>
                </div>
                <div v-else-if="paragraph.type === 'video'" class="video-container">
                  <iframe 
                    :src="paragraph.src" 
                    width="100%" 
                    height="400" 
                    frameborder="0" 
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            <!-- Technologies complètes -->
            <div class="tech-stack-full">
              <h4 class="tech-title">Technologies utilisées</h4>
              <div class="tech-grid">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="project-actions" v-if="project.links">
              <a 
                v-for="link in project.links" 
                :key="link.type"
                :href="link.url" 
                target="_blank"
                class="action-btn"
                :class="link.type"
              >
                <span class="btn-icon">{{ getLinkIcon(link.type) }}</span>
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Message si aucun résultat -->
    <div v-if="filteredProjects.length === 0" class="no-results">
      <div class="no-results-icon">🔬</div>
      <h3>Aucun projet trouvé</h3>
      <p>Essayez de modifier vos critères de recherche ou de filtrage.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjetsPage',
  data() {
    return {
      expandedProject: null,
      selectedCategory: '',
      sortBy: 'date',
      
      projects: [
        {
          title: "Analyse de Match de Football par IA",
          category: "Intelligence Artificielle",
          year: "2025",
          imageSrc: "football_analysis.gif",
          technologies: ["Python", "YOLO", "OpenCV", "KMeans", "Computer Vision"],
          content: [
            "YOLO est un modèle de détection d'objets qui analyse chaque image de la vidéo et localise en temps réel les objets, comme des humains, un ballon ou même des voitures.",
            "J'ai donc utilisé ce modèle pour le personnaliser dans le monde du football !",
            "Une fois que YOLO détecte les joueurs, il faut les attribuer à une équipe. J'utilise donc le KMeans, cet algorithme de clustering permet de regrouper les joueurs en fonction des couleurs dominantes de leurs maillots.",
            "On peut aussi détecter les lignes du terrain en utilisant HoughLines pour détecter les segments blancs du terrain. La transformation de Hough est une technique mathématique qui permet de détecter des formes géométriques, comme des lignes droites, dans une image.",
            "C'est ici que ça devient vraiment intéressant ! En utilisant l'homographie, on peut projeter toutes les coordonnées détectées sur un plan 2D. Ce qui permet de suivre l'évolution du match et de localiser chaque événement sur un schéma, comme on peut le voir sur Whoscored.",
            { "type": "image", "src": "match_projection.png", "alt": "Exemple de projection 2D d'un match" },
            "Ce projet démontre qu'avec l'IA, et certains outils mathématiques, on peut aller bien au-delà de ce qu'on imagine dans l'analyse sportive."
          ],
          links: [
            { type: 'github', url: '#', label: 'Code source' },
            { type: 'demo', url: '#', label: 'Démonstration' }
          ]
        },
        {
          title: "Prédiction de Réussite des Penalties",
          category: "Machine Learning",
          year: "2025",
          imageSrc: "NeymarPen.gif",
          technologies: ["Python", "Random Forest", "Scikit-learn", "Pandas", "Data Analysis"],
          content: [
            "Ce projet explore l'utilisation du Machine Learning pour prédire l'issue d'un penalty dans les cinq grands championnats européens (Ligue 1, Premier League, Bundesliga, Serie A, La Liga) sur la saison 2019/2020.",
            "Les facteurs influençant la réussite d'un penalty incluent la minute du match, la position du tireur, le lieu du match, le dernier but marqué, et si le penalty est décisif ou non.",
            "Un modèle de Random Forest Classifier a été utilisé pour prédire si un penalty serait marqué ou non. Ce modèle a atteint une précision de 77,78% sur un jeu de test.",
            { "type": "image", "src": "RandomForestClassifier.png", "alt": "Random Forest Classifier" },
            { "type": "image", "src": "penalty_var.png", "alt": "Visualisation des données de penalty" }
          ],
          links: [
            { type: 'github', url: '#', label: 'Repository' },
            { type: 'paper', url: '#', label: 'Article technique' }
          ]
        },
        {
          title: "Application Web de Calcul d'Empreinte Carbone",
          category: "Développement Web",
          year: "2024",
          imageSrc: "web_dev_co2.png",
          technologies: ["Django", "PostgreSQL", "REST API", "Python", "Environmental Tech"],
          content: [
            "Application web dédiée au calcul de l'empreinte carbone développée dans le cadre du Master 1 Informatique de l'Université Claude Bernard Lyon 1.",
            "Notre application vise à proposer une solution accessible et personnalisée pour le suivi des émissions de gaz à effet de serre (GES).",
            "En tant que développeur backend, j'ai joué un rôle clé dans la réalisation de ce projet avec un système d'authentification robuste et une API fonctionnelle utilisant Django REST Framework.",
            { "type": "image", "src": "Accueil_co2.png", "alt": "Page d'accueil" },
            { "type": "image", "src": "web_dev_co2.png", "alt": "Dashboard" }
          ],
          links: [
            { type: 'github', url: '#', label: 'Code source' },
            { type: 'demo', url: '#', label: 'Application live' }
          ]
        },
        {
          title: "Contribution à CDlib",
          category: "Recherche & Open Source",
          year: "2024",
          imageSrc: "cdlib.png",
          technologies: ["Python", "NetworkX", "Data Visualization", "Graph Theory", "Open Source"],
          content: [
            "Ce projet vise à enrichir la librairie Python CDlib, spécialisée dans l'analyse des communautés dans les réseaux complexes.",
            "Sous la supervision de Rémy Cazabet, j'ai développé de nouvelles fonctionnalités pour améliorer la visualisation des communautés.",
            { "type": "image", "src": "cdlib_new.png", "alt": "Présentation de CDlib" },
            { "type": "image", "src": "Figure_2_ouverture.png", "alt": "Visualisation des communautés" }
          ],
          links: [
            { type: 'github', url: '#', label: 'Pull Request' },
            { type: 'docs', url: '#', label: 'Documentation' }
          ]
        },
        {
          title: "Webscraping et Visualisation Football",
          category: "Data Science",
          year: "2024",
          imageSrc: "whoscored.png",
          technologies: ["Python", "Web Scraping", "Data Visualization", "BeautifulSoup", "Matplotlib"],
          content: [
            "Ce projet permet d'extraire et de visualiser les performances de joueurs de football à partir des données de match récupérées depuis WhoScored.",
            "Il analyse les données spécifiques à chaque joueur, telles que les passes, les tirs, les dribbles, les interceptions, et génère des visualisations graphiques comme des cartes de chaleur.",
            { "type": "image", "src": "whoscored.png", "alt": "Exemple de visualisation" }
          ],
          links: [
            { type: 'github', url: '#', label: 'Repository' }
          ]
        },
        {
          title: "Prédiction Box-Office avec Machine Learning",
          category: "Machine Learning",
          year: "2024",
          imageSrc: "ml_movies.png",
          technologies: ["Python", "Decision Trees", "GridSearchCV", "Data Analysis", "Scikit-learn"],
          content: [
            "Ce projet se concentre sur la prédiction des revenus des films au box-office, en tenant compte des revenus domestiques, étrangers et mondiaux.",
            "Des modèles de régression d'arbres de décision ont été employés avec optimisation par GridSearchCV.",
            { "type": "image", "src": "metrics_analysis.png", "alt": "Analyse des métriques" },
            { "type": "image", "src": "WorldGross_real_vs_pred.png", "alt": "Prédictions vs réalité" }
          ],
          links: [
            { type: 'github', url: '#', label: 'Code & Analysis' }
          ]
        },
        {
          title: "Application ERP Immobilier",
          category: "Développement Web",
          year: "2023",
          imageSrc: "diagERP.png",
          technologies: ["Django", "Vue.js", "Stripe", "Authentication", "Fullstack"],
          content: [
            "Développement complet d'une application web en utilisant Django pour le backend et Vue.js pour le frontend, incluant également le déploiement final.",
            "Système d'authentification robuste avec double authentification par email, intégration Stripe pour la gestion sécurisée des paiements.",
            { "type": "video", "src": "https://www.youtube.com/embed/PiKLRnlXitk", "alt": "Vidéo de présentation" }
          ],
          links: [
            { type: 'demo', url: '#', label: 'Application' },
            { type: 'case-study', url: '#', label: 'Étude de cas' }
          ]
        }
      ]
    };
  },
  
  computed: {
    categories() {
      return [...new Set(this.projects.map(p => p.category))].sort();
    },
    
    filteredProjects() {
      let filtered = this.projects;
      
      // Filtrage par catégorie
      if (this.selectedCategory) {
        filtered = filtered.filter(p => p.category === this.selectedCategory);
      }
      
      // Tri
      switch (this.sortBy) {
        case 'date':
          return filtered.sort((a, b) => b.year.localeCompare(a.year));
        case 'date-asc':
          return filtered.sort((a, b) => a.year.localeCompare(b.year));
        case 'title':
          return filtered.sort((a, b) => a.title.localeCompare(b.title));
        case 'category':
          return filtered.sort((a, b) => a.category.localeCompare(b.category));
        default:
          return filtered;
      }
    }
  },
  
  methods: {
    toggleProject(index) {
      this.expandedProject = this.expandedProject === index ? null : index;
    },
    
    resetFilters() {
      this.selectedCategory = '';
      this.sortBy = 'date';
      this.expandedProject = null;
    },
    
    getLinkIcon(type) {
      const icons = {
        'github': '🔗',
        'demo': '🚀',
        'paper': '📄',
        'docs': '📚',
        'case-study': '📊'
      };
      return icons[type] || '🔗';
    }
  }
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
  --gradient-primary: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Styles */
.projects-container {
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

/* Panneau de contrôles simplifié */
.controls-panel {
  max-width: 900px;
  margin: 0 auto 40px;
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 24px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.filters-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.filter-group {
  flex: 1;
  min-width: 160px;
  max-width: 200px;
}

.filter-select {
  width: 100%;
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: var(--transition);
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.reset-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.reset-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  transform: translateY(-2px);
}

/* Timeline */
.projects-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-blue), var(--accent-cyan));
  opacity: 0.3;
}

.project-card {
  position: relative;
  margin-bottom: 40px;
  cursor: pointer;
  transition: var(--transition);
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 2;
}

.marker-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gradient-primary);
  box-shadow: 0 0 0 4px var(--dark-bg), 0 0 0 6px var(--primary-blue);
}

.marker-date {
  background: var(--gradient-primary);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.card-content {
  margin-left: 80px;
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  overflow: hidden;
  transition: var(--transition);
  backdrop-filter: blur(10px);
  position: relative;
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

.project-card:hover .card-content {
  border-color: var(--primary-blue);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.project-card.expanded .card-content {
  border-color: var(--accent-cyan);
}

/* Header de carte */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
}

.header-left {
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.project-meta {
  display: flex;
  gap: 12px;
  align-items: center;
}

.category-badge {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-blue);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.date-badge {
  background: rgba(156, 163, 175, 0.1);
  color: var(--text-muted);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: monospace;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.tech-stack-preview {
  display: flex;
  gap: 6px;
  align-items: center;
}

.tech-chip {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.tech-more {
  color: var(--text-muted);
  font-size: 0.7rem;
  font-weight: 500;
}

.expand-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.expand-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.expand-icon {
  transition: transform 0.3s ease;
  font-size: 0.75rem;
}

.expand-btn.expanded .expand-icon {
  transform: rotate(180deg);
}

/* Image de prévisualisation */
.preview-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .preview-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(3, 7, 18, 0.6), transparent);
}

/* Contenu détaillé */
.detailed-content {
  border-top: 1px solid var(--border-color);
}

.content-body {
  padding: 24px;
}

.content-section {
  margin-bottom: 20px;
}

.text-content {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 16px 0;
  font-size: 0.95rem;
}

.image-container {
  margin: 24px 0;
  text-align: center;
}

.content-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.image-caption {
  margin-top: 8px;
  font-size: 0.875rem;
  color: var(--text-muted);
  font-style: italic;
}

.video-container {
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

/* Technologies complètes */
.tech-stack-full {
  padding: 24px;
  border-top: 1px solid var(--border-color);
  background: rgba(3, 7, 18, 0.3);
}

.tech-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent-cyan);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(6, 182, 212, 0.2);
  transition: var(--transition);
}

.tech-badge:hover {
  background: rgba(6, 182, 212, 0.2);
  transform: translateY(-1px);
}

/* Actions */
.project-actions {
  padding: 20px 24px;
  border-top: 1px solid var(--border-color);
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid;
}

.action-btn.github {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border-color: var(--border-color);
}

.action-btn.github:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--text-primary);
}

.action-btn.demo {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success-green);
  border-color: rgba(16, 185, 129, 0.2);
}

.action-btn.demo:hover {
  background: rgba(16, 185, 129, 0.2);
}

.action-btn.paper,
.action-btn.docs,
.action-btn.case-study {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary-blue);
  border-color: rgba(37, 99, 235, 0.2);
}

.action-btn.paper:hover,
.action-btn.docs:hover,
.action-btn.case-study:hover {
  background: rgba(37, 99, 235, 0.2);
}

/* Aucun résultat */
.no-results {
  text-align: center;
  padding: 80px 20px;
  color: var(--text-muted);
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.no-results h3 {
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.no-results p {
  color: var(--text-muted);
  max-width: 400px;
  margin: 0 auto;
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
@media (max-width: 768px) {
  .projects-container {
    padding: 16px;
  }
  
  .filters-section {
    flex-direction: column;
    gap: 12px;
  }
  
  .filter-group {
    min-width: unset;
    max-width: unset;
  }
  
  .timeline-line {
    left: 20px;
  }
  
  .timeline-marker {
    left: -10px;
  }
  
  .marker-date {
    display: none;
  }
  
  .card-content {
    margin-left: 50px;
  }
  
  .card-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .header-right {
    width: 100%;
    justify-content: space-between;
  }
  
  .tech-stack-preview {
    flex-wrap: wrap;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .action-btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .timeline-line {
    left: 16px;
  }
  
  .timeline-marker {
    left: -14px;
  }
  
  .card-content {
    margin-left: 40px;
  }
  
  .controls-panel {
    padding: 16px;
  }
}
</style>