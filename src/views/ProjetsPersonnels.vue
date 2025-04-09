<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12" v-for="(article, index) in allArticles" :key="index">
        <div class="card mb-4 text-white bg-dark" @click="openArticle(index)">
          <img v-if="article.imageSrc" :src="article.imageSrc" class="card-img-top" alt="Image principale">
          <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for article content -->
    <div v-if="expandedIndex !== null" class="modal fade show d-block" tabindex="-1" role="dialog" @click.self="closeArticle">
      <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header justify-content-center position-relative">
            <h5 class="modal-title text-center">{{ allArticles[expandedIndex].title }}</h5>
            <button type="button" class="close custom-close-button" aria-label="Close" @click="closeArticle">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div v-for="(paragraph, idx) in allArticles[expandedIndex].text" :key="idx" class="text-center">
              <p v-if="typeof paragraph === 'string'">{{ paragraph }}</p>
              <img v-else-if="!paragraph.type || paragraph.type === 'image'" :src="paragraph.src" :alt="paragraph.alt" class="img-fluid mb-3">
              <iframe v-else-if="paragraph.type === 'video'" :src="paragraph.src" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjetsUniversitaires',
  data() {
    return {
      expandedIndex: null,
      allArticles: [

      {
          title: "Comment j’utilise l’IA pour analyser un match de foot à partir d’une simple vidéo",
          imageSrc: "football_analysis.gif",
          text: [
              "YOLO est un modèle de détection d'objets qui analyse chaque image de la vidéo et localise en temps réel les objets, comme des humains, un ballon ou même des voitures.",
              " ",
              "J'ai donc utilisé ce modèle pour le personnaliser dans le monde du football !",
              " ",
              "Une fois que YOLO détecte les joueurs, il faut les attribuer à une équipe. J'utilise donc le KMeans, cet algorithme de clustering permet de regrouper les joueurs en fonction des couleurs dominantes de leurs maillots.",
              " ",
              "On peut aussi détecter les lignes du terrain en utilisant HoughLines pour détecter les segments blancs du terrain. La transformation de Hough est une technique mathématique qui permet de détecter des formes géométriques, comme des lignes droites, dans une image.",
              " ",
              "C’est ici que ça devient vraiment intéressant ! En utilisant l’homographie, on peut projeter toutes les coordonnées détectées sur un plan 2D. Ce qui permet de suivre l’évolution du match et de localiser chaque événement sur un schéma, comme on peut le voir sur Whoscored.",
              " ",
              "Ce projet démontre qu’avec l’IA, et certains outils mathématiques, on peut aller bien au-delà de ce qu’on imagine dans l’analyse sportive. Suivre les performances des joueurs, analyser les tactiques des équipes, ou même recréer un match en 2D pour une analyse détaillée.",
              " ",
              { "src": "match_projection.png", "alt": "Exemple de projection 2D d'un match" },
              " ",
              "2025",
          ]
      },

      {
          title: "Comprendre et prédire la réussite d'un penalty avec l'IA",
          imageSrc: "NeymarPen.gif",
          text: [
              "Ce projet explore l'utilisation du Machine Learning pour prédire l'issue d’un penalty dans les cinq grands championnats européens (Ligue 1, Premier League, Bundesliga, Serie A, La Liga) sur la saison 2019/2020.",
              " ",
              "Les facteurs influençant la réussite d’un penalty incluent la minute du match, la position du tireur, le lieu du match, le dernier but marqué, et si le penalty est décisif ou non.",
              " ",
              "Un modèle de Random Forest Classifier a été utilisé pour prédire si un penalty serait marqué ou non. Ce modèle a atteint une précision de 77,78% sur un jeu de test, en apprenant des tendances et relations dans les données.",
              { "src": "RandomForestClassifier.png", "alt": "Random Forest Classifier" },
              "Le projet ouvre la voie à une analyse plus approfondie, incluant des données de position des tirs, le contexte du match, et l’état psychologique des joueurs.",
              " ",
              "De plus, la théorie des jeux de Nash pourrait être utilisée pour affiner les stratégies des tireurs et des gardiens pendant une séance de tirs au but.",
              " ",
              { "src": "penalty_var.png", "alt": "Exemple de visualisation de données de penalty" },
              " ",
              "2025",
          ]
      },
      {
          title: "Webscraping et Visualisation de Performances de Joueurs de Football",
          imageSrc: "whoscored.png",
          text: [
            "Ce projet permet d'extraire et de visualiser les performances de joueurs de football à partir des données de match récupérées depuis WhoScored. Il analyse les données spécifiques à chaque joueur, telles que les passes, les tirs, les dribbles, les interceptions, et génère des visualisations graphiques comme des cartes de chaleur et des diagrammes pour illustrer les actions sur le terrain. Le projet télécharge également automatiquement la photo du joueur à partir de Transfermarkt pour accompagner les visualisations.",
            " ",
            "Parmi les principales fonctionnalités, le projet offre l'extraction des statistiques et événements d'un joueur depuis les fichiers HTML des matchs de WhoScored, la génération de graphiques représentant les passes, l'activité offensive, l'activité défensive et les zones de jeu du joueur, ainsi que l'adaptation des graphiques selon le poste du joueur (attaquant, milieu, défenseur). Il inclut également le téléchargement automatique de la photo du joueur pour personnaliser les visuels.",
            " ",
            "Le projet est disponible sur mon GitHub, où vous pouvez consulter le code et les instructions pour l'utiliser.",
            { "src": "whoscored.png", "alt": "Exemple de visualisation" },
            "2024",
          ]
        },


      {
        "title": "Machine Learning - Prédiction du Succès des Films au Box-Office Local, Étranger et Mondial",
        "imageSrc": "ml_movies.png",
        "text": [
          "Ce projet se concentre sur la prédiction des revenus des films au box-office, en tenant compte des revenus domestiques, étrangers et mondiaux. Pour accomplir cela, des modèles de régression d'arbres de décision ont été employés. L'ensemble de données utilisé, movies.csv, contient des informations variées sur les films, telles que le studio principal, le score Rotten Tomatoes, le genre, et le budget.",
          "Dans une première étape, un soin particulier a été apporté au choix et au pré-traitement des données. Les colonnes catégorielles telles que LeadStudio, Story et Genre ont été encodées en valeurs numériques, permettant ainsi leur utilisation dans les modèles de machine learning. Les valeurs manquantes pour les colonnes cibles ont été supprimées afin d'éviter les erreurs lors de l'entraînement. Les données ont ensuite été divisées en un ensemble d'entraînement (80%) et un ensemble de test (20%) à l'aide de la fonction train_test_split, assurant une évaluation objective des modèles.",
          "L'entraînement des modèles de régression d'arbres de décision a été réalisé en utilisant la technique de k-folds (5 plis) pour optimiser les hyperparamètres (max_depth, min_samples_split, min_samples_leaf) à travers GridSearchCV. Cette méthode a permis de tester plusieurs combinaisons de paramètres, assurant la robustesse des résultats. Les performances des modèles ont ensuite été évaluées à l'aide des métriques Mean Squared Error (MSE) et R^2 Score. Les résultats ont montré une excellente performance pour les prédictions mondiales avec un R^2 Score de 0.9261, tandis que les prédictions pour les revenus domestiques ont également montré de bonnes performances avec un R^2 Score de 0.8654. Cependant, les prédictions des revenus étrangers ont été plus complexes avec un R^2 Score de 0.7709.",
          { "src": "metrics_analysis.png", "alt": "Analyse des métriques" },
          "Les choix de paramètres ont été justifiés par les résultats de GridSearchCV, en se concentrant sur la minimisation de l'erreur quadratique moyenne et l'évitement du surajustement tout en capturant la complexité des données. Le choix des hyperparamètres max_depth, min_samples_split, et min_samples_leaf a été crucial pour permettre au modèle de bien généraliser sur de nouvelles données tout en capturant les nuances des données d'entraînement.",
          { "src": "WorldGross_real_vs_pred.png", "alt": "Graphique des valeurs réelles vs prédites pour WorldGross" },
          "En conclusion, les modèles de régression d'arbres de décision se sont révélés efficaces pour prédire les revenus des films, particulièrement pour les prédictions mondiales. Le projet, disponible en open-source sur GitHub, ouvre la voie à des améliorations futures pour mieux capter les dynamiques du box-office mondial.",
          "2024"
        ]
      },


        {
          title: "Développement d'une Application Web avec Django et VueJs",
          imageSrc: "diagERP.png",
          text: [
            "Pendant mon stage chez Aneqqis (entreprise dont je suis co-fondateur), j'ai developpé entièrement une application web en utilisant Django pour le backend et Vite.js pour le frontend, incluant également le déploiement final. J'ai mis en place un système d'authentification robuste avec double authentification par email, intégré Stripe pour la gestion sécurisée des paiements, et développé un module automatisé de génération de documents immobiliers. ",
            {
              type: "video",
              src: "https://www.youtube.com/embed/PiKLRnlXitk",
              alt: "Vidéo de presentation"
            },
            "2023",
          ]
        },


      ]
    };
  },
  methods: {
    openArticle(index) {
      this.expandedIndex = index;
    },
    closeArticle() {
      this.expandedIndex = null;
    } 
  }
};
</script>

<style scoped>
/* Styles spécifiques pour la page Projets Universitaires */
.card {
  cursor: pointer;
  transition: transform 0.3s ease, border 0.3s ease;
  border: 2px solid transparent;
}
.card:hover {
  transform: scale(1.05);
  border-color: #42b883;
}
.modal {
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-content {
  background-color: #343a40;
}

/* Custom close button */
.custom-close-button {
  border-radius: 10%;
  background-color: #ff5c5c;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-close-button:hover {
  background-color: #ff1c1c;
}

/* Center content */
.modal-header,
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Larger modal */
.modal-dialog.modal-xl {
  max-width: 90%;
}

/* Responsive and larger image size with rounded corners and gray border */
.modal-body img {
  width: 100%;
  max-width: 700px; /* Set a larger max-width for bigger images */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure the image fits within the given dimensions */
  border-radius: 15px; /* Rounded corners */
  border: 3px solid #343a40; /* Gray border */
  margin-bottom: 20px; /* Add some space below the image */
}

.modal-body iframe {
  width: 100%;
  max-width: 700px;
  border-radius: 15px;
  border: 3px solid #343a40;
  margin-bottom: 20px;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .modal-body img,
  .modal-body iframe {
    max-width: 90%; /* Make the image and video take up more space on smaller screens */
    border-radius: 10px; /* Slightly reduce corner rounding for smaller screens */
    border: 2px solid #343a40; /* Slightly thinner border on smaller screens */
  }
}
</style>
