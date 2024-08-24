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
          title: "Rapport Général du Projet : Application Web de Calcul d'Empreinte Carbone",
          imageSrc: "web_dev_co2.png",
          text: [
            "Dans le cadre de l'unité d'enseignement Projet transversal (M1if10) du Master 1 Informatique de l'Université Claude Bernard Lyon 1, nous avons travaillé en collaboration pour développer une application web dédiée au calcul de l'empreinte carbone. Ce projet a été une opportunité unique pour appliquer nos connaissances académiques dans un contexte professionnel simulé, en mettant l'accent sur la qualité et la sécurité du développement logiciel.",
            "Notre application vise à proposer une solution accessible et personnalisée pour le suivi des émissions de gaz à effet de serre (GES). Contrairement aux outils existants, souvent trop généraux et fastidieux à utiliser, notre application permet à l'utilisateur de suivre précisément l'empreinte carbone d'événements spécifiques, tels que des trajets, des habitudes alimentaires, ou l'utilisation du multimédia. L'utilisateur peut choisir la fréquence de ces événements et comparer ses émissions à celles d'autres utilisateurs.",
            "En tant que développeur backend, j'ai joué un rôle clé dans la réalisation de ce projet. Mon travail s'est concentré sur les aspects suivants :",
            "J'ai développé un système d'authentification robuste permettant aux utilisateurs de créer et de gérer leurs comptes en toute sécurité. Ce système repose sur les fonctionnalités avancées de Django, garantissant ainsi une gestion efficace des sessions et des permissions.",
            "J'ai conçu et implémenté une API fonctionnelle qui permet aux différents modules de l'application de communiquer efficacement. Cette API repose sur Django REST Framework, offrant une interface flexible et performante pour gérer les requêtes des utilisateurs et l'enregistrement des données.",
            "J'ai également supervisé la mise en place et la gestion de la base de données, utilisant PostgreSQL pour assurer la robustesse et la scalabilité des données stockées. La structure de la base de données a été soigneusement conçue pour optimiser les performances et la facilité d'accès aux informations.",
            "Pour garantir la qualité et la fiabilité du code, j'ai développé une suite de tests unitaires et fonctionnels, couvrant l'ensemble des fonctionnalités critiques du backend. De plus, j'ai rédigé une documentation détaillée, facilitant la compréhension et la maintenance du code par les autres membres de l'équipe.",
            { "src": "Accueil_co2.png", "alt": "Page d'accueil" },
            "L'utilisateur peut créer un compte ou se connecter pour accéder aux fonctionnalités de l'application.",
            { "src": "signup_co2.png", "alt": "Page de création de compte" },
            "Une fois connecté, l'utilisateur accède à un tableau de bord offrant divers liens pour effectuer son bilan CO2 et visualiser ses émissions globales.",
            { "src": "web_dev_co2.png", "alt": "Page Dashboard" },
            "L'utilisateur peut ajouter un traqueur spécifique, par exemple, pour un trajet, et calculer l'émission en CO2 en fonction du mode de transport choisi.",
            { "src": "trip_tracker_co2.png", "alt": "Page ajout de traqueur pour le transport" },
            "Ce projet de développement d'une application web de calcul d'empreinte carbone a été une expérience enrichissante, nous permettant d'appliquer nos compétences techniques dans un contexte concret et collaboratif. Mon travail sur le backend, en utilisant Django et PostgreSQL, a permis de mettre en place une infrastructure solide, sécurisée et évolutive, répondant aux besoins de l'application. Grâce à cette application, nous espérons faciliter la prise de conscience des utilisateurs sur leur impact environnemental, en leur offrant un outil simple et personnalisé pour suivre leurs émissions de GES.",
            "Ce rapport présente un aperçu général de notre travail, mais l'application est encore en développement, et nous continuons à améliorer et à enrichir ses fonctionnalités pour répondre aux attentes des utilisateurs.",
            "2024",
          ]
        },
        {
          "title": "Contribution à la librairie python de recherche CDlib",
          "imageSrc": "cdlib.png",
          "text": [
            "Ce projet vise à enrichir la librairie Python CDlib, spécialisée dans l'analyse des communautés dans les réseaux complexes.",
            { "src": "cdlib_new.png", "alt": "Présentation de CDlib" },
            "Sous la supervision de Rémy Cazabet, j'ai développé de nouvelles fonctionnalités pour améliorer la visualisation des communautés, telles que plot_network_clusters et plot_community_graph.",
            "Les nouvelles fonctionnalités incluent des paramètres comme show_edge_widths, show_edge_weights, et show_node_sizes, offrant des options de visualisation plus approfondies.",
            { "src": "Figure_2_ouverture.png", "alt": "Visualisation des communautés" },
            "En plus des améliorations apportées, une nouvelle fonction, plot_network_highlighted_clusters, a été créée pour mettre en évidence les clusters avec des représentations visuelles plus intuitives.",
            "Enfin, la documentation des nouvelles fonctionnalités a été mise à jour pour faciliter leur utilisation par la communauté.",
            { "src": "Figure_3_ouverture.png", "alt": "Documentation CDlib" },
            "L'objectif est de consolider CDlib en tant qu'outil incontournable pour l'analyse et la visualisation des réseaux dans l'écosystème Python."
          ]
        },
        {
          title: "Refactoring d'un Chatbot inspiré de ChatGPT : MVC, GRASP, et Tests Automatisés",
          imageSrc: "eliza_gpt.png",
          text: [
            "Le projet consiste à améliorer un chatbot inspiré de ChatGPT en raffinant sa structure de code initiale, en étendant ses fonctionnalités en utilisant les principes MVC et GRASP.",
            "En mettant en place des tests automatisés avec JUnit et Maven, et en promouvant le développement piloté par les tests avec GitLab-CI.",
            "Il offre une expérience complète du cycle de vie du développement logiciel, avec un accent sur les compétences professionnelles en ingénierie logicielle."
          ]
        },
        {
          title: "Projet en binome - Simulation d’un écosystème",
          imageSrc: "netlogo.png",
          text: [
            "Simulation NetLogo des interactions entre les abeilles, les fleurs, les prédateurs et les ruches dans un environnement dynamique.",
            {
              type: "video",
              src: "https://www.youtube.com/embed/kZcpo4sGe6g",
              alt: "Vidéo de l'écosystème"
            },
            "Chaque agent est caractérisé par des attributs spécifiques qui influent sur son comportement et sa contribution à l'écosystème simulé.",
            "L'analyse des comportements individuels des agents permet de mieux comprendre les mécanismes de collecte de pollen, la survie des abeilles et la gestion des ressources au sein des colonies."
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
