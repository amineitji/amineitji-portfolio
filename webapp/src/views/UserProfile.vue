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
                    <li>TODO : faire un resumé</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">Sept. 2020 - Juin 2023</div>
                <div class="timeline-content">
                  <h5>LICENCE INFORMATIQUE</h5>
                  <p>Université Claude Bernard Lyon 1</p>
                  <ul>
                    <li>TODO : faire un resumé</li>
                  </ul>
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
              💻 <strong>Compétences techniques :</strong> En tant que passionné par l'intelligence artificielle, je possède des aptitudes en machine learning, détection et analyse d'images, data science, et visualisation de données. J'ai également des compétences avancées en algorithmique, développement logiciel, et je reste constamment à l'affût des innovations technologiques.
            </p>
            <p>
              🌐 <strong>Développement web :</strong> Bien que mon intérêt principal soit l'IA, je suis également compétent en développement web fullstack, avec une expérience significative dans des projets utilisant des technologies comme Django et Vue.js. 
            </p>
            <p>
              🚀 <strong>Co-fondateur et développeur :</strong> En tant que co-fondateur de l'entreprise Aneqqis, je suis le développeur fullstack principal du projet DiagERP, une plateforme pour la génération et la commercialisation de rapports techniques dans le marché de l'immobilier.
            </p>
            <p>
              🔍 <strong>Objectifs professionnels :</strong> Actuellement en freelance, je suis à la recherche d'un CDD ou d'un stage pour l'année 2024/2025, en vue de poursuivre un Master 2 spécialisé en Intelligence Artificielle. Je suis ouvert à des opportunités dans l'IA, le développement web, ou tout autre domaine lié à mes compétences. Mon programme universitaire allégé cette année (seulement deux modules à valider, représentant deux jours de cours par mois) me permet d'être pleinement disponible pour relever de nouveaux défis professionnels. 
            </p>
            <p>
              🌟 <strong>Intérêts :</strong> Je suis particulièrement intéressé par les projets qui me permettront d'explorer davantage l'IA et ses applications, ou encore d'autres projets liant mes compétences en développement fullstack.
            </p>
            <div class="text-center mt-3">
              <a href="path_to_your_pdf.pdf" class="btn btn-outline-light btn-green" download>
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

.btn-green {
  color: #fff;
  background-color: #42b883;
  border-color: #3d3d3d;
}

.btn-green:hover {
  color: #42b883;
  background-color: #3d3d3d;
  border-color: #42b883;
}

.text-center {
  text-align: center;
}
</style>
