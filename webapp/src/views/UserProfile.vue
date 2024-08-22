<template>
  <div class="container mt-4">
    <!-- Row for Professional and Educational Background -->
    <div class="row">
      <div class="col-md-6">
        <div class="card bg-dark text-white mb-4">
          <div class="card-header bg-dark text-center">
            PARCOURS PROFESSIONNEL
          </div>
          <div class="card-body">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-date">Mai 2023 - Juin 2023</div>
                <div class="timeline-content">
                  <h5>STAGE - Développeur Fullstack Django/VueJs</h5>
                  <p>Société 'ANEQGIS' - Paris</p>
                  <ul>
                    <li>Création et réalisation autonome du front et du back-end d'un site de génération et commercialisation de rapport technique dans le marché de l'immobilier.</li>
                    <li>Présentation régulière du travail réalisé aux responsables.</li>
                    <li>Travail en méthodologie Agile via Azure DevOps.</li>
                    <li>Travail collaboratif avec les différents responsables.</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">Déc. 2023 - Janv. 2024</div>
                <div class="timeline-content">
                  <h5>Agent d’accueil</h5>
                  <p>Association d'hébergement d’urgence '2 choses lune' - Lyon</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">Juin 2021 - Aout 2021</div>
                <div class="timeline-content">
                  <h5>Préparateur de commandes</h5>
                  <p>Société de logistique 'XPO logistics' - Lyon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card bg-dark text-white mb-4">
          <div class="card-header bg-dark text-center">
            PARCOURS SCOLAIRE
          </div>
          <div class="card-body">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-date">Sept. 2023 - Juin 2026</div>
                <div class="timeline-content">
                  <h5>MASTER INFORMATIQUE</h5>
                  <p>Université Claude Bernard Lyon 1</p>
                  <ul>
                    <li>Contribution au projet open source CDlib, librairie de détection de communautés dans des réseaux complexes.</li>
                    <li>Projet : Création d'un chatbot (Eliza) en utilisant la méthodologie Agile et Maven.</li>
                    <li>Projet : Développement web Back-end et Front. Création d'un site web sécurisé et optimisé.</li>
                    <li>Projet d’analyse d’image OpenCV.</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">Sept. 2020 - Juin 2023</div>
                <div class="timeline-content">
                  <h5>LICENCE INFORMATIQUE</h5>
                  <p>Université Claude Bernard Lyon 1</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">Mai 2019</div>
                <div class="timeline-content">
                  <h5>BACCALAUREAT GENERALE SCIENTIFIQUE</h5>
                  <p>Lycée la Pléiade - Isère</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row for Skills and Objectives -->
    <div class="row">
      <div class="col-md-12">
        <div class="card bg-dark text-white mb-4">
          <div class="card-header bg-dark text-center">
            COMPÉTENCES ET OBJECTIFS
          </div>
          <div class="card-body">
            <p>
              Je possède une solide maîtrise des langages de programmation tels que C++, Java, Python, et JavaScript. Mon expertise s'étend également aux outils de développement modernes, y compris Maven, Django, et Vue.js. Grâce à une expérience approfondie dans l'utilisation d'un terminal Linux, je suis à l'aise pour naviguer dans les environnements de développement complexes. Par ailleurs, je suis familier avec la méthodologie Agile, ce qui me permet de m'adapter rapidement aux exigences du projet tout en collaborant efficacement au sein d'équipes pluridisciplinaires via des plateformes comme GitHub. Actuellement en freelance, je suis à la recherche d'un CDD ou d'un stage pour l'année 2024/2025 afin de continuer à développer mes compétences en parallèle de mes études. Mon programme universitaire allégé cette année (seulement deux modules à valider, représentant deux jours de cours par mois) me permet d'être pleinement disponible pour relever de nouveaux défis professionnels. Je suis particulièrement intéressé par les opportunités qui me permettront d'appliquer mes connaissances en développement fullstack et de travailler sur des projets innovants.
            </p>
            <div class="text-center mt-3">
              <a href="path_to_your_pdf.pdf" class="btn btn-outline-light" download>
                <i class="bi bi-download"></i> Télécharger mon CV en PDF
              </a>
            </div>
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
.card {
  background-color: #0f0f1a;
  color: #e0e0e0;
  border: 1px solid #3d3d3d;
  border-radius: 8px;
}

.card-header {
  color: #42b883;
  background-color: #1a1a2e;
  border-bottom: 1px solid #3d3d3d;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
}

.card-body {
  padding: 20px;
}

.timeline {
  position: relative;
  padding-left: 40px;
  margin-top: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #42b883; /* Ligne verte de la frise */
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-date {
  font-weight: bold;
  margin-bottom: 5px;
}

.timeline-content h5 {
  margin-bottom: 5px;
  color: #42b883; /* Vert pour les titres des étapes */
}

.btn-outline-light {
  color: #e0e0e0;
  border-color: #e0e0e0;
}

.btn-outline-light:hover {
  background-color: #e0e0e0;
  color: #0f0f1a;
}

.text-center {
  text-align: center;
}
</style>
