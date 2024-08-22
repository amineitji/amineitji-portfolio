<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12" v-for="(article, index) in allArticles" :key="index">
        <div class="card mb-4 text-white bg-dark" @click="openArticle(index)">
          <img :src="article.imageSrc" class="card-img-top" alt="Image">
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
            <img v-if="allArticles[expandedIndex].text[1]" :src="allArticles[expandedIndex].text[1].src" :alt="allArticles[expandedIndex].text[1].alt" class="img-fluid mb-3">
            <p v-for="(paragraph, idx) in allArticles[expandedIndex].text" :key="idx" class="text-center">
              <span v-if="typeof paragraph === 'string'">{{ paragraph }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjetsPersonnels',
  data() {
    return {
      expandedIndex: null,
      allArticles: [
        {
          title: "Projet en équipe de 6 personnes - Développement d'une Application Web de Calcul d'Empreinte Carbone",
          imageSrc: "web_dev_co2.png",
          text: [
            "Dans le cadre de l'unité d'enseignement Projet transversal (M1if10) du Master 1 Informatique de l'Université Claude Bernard Lyon 1, nous avons collaboré à la création d'une application web de calcul d'empreinte carbone.",
            { src: "https://via.placeholder.com/400", alt: "Image du projet CO2" },
            "Mon rôle de développeur backend a inclus l'établissement d'un système d'authentification sécurisé, le développement d'une API fonctionnelle, ainsi que l'implémentation de tests et de documentation.",
            "Ce projet a été une opportunité unique pour appliquer nos connaissances académiques dans un contexte professionnel simulé, en mettant l'accent sur la qualité et la sécurité du développement logiciel."
          ]
        },
        {
          title: "Refactoring d'un Chatbot inspiré de ChatGPT : MVC, GRASP, et Tests Automatisés",
          imageSrc: "eliza_gpt.png",
          text: [
            "Le projet consiste à améliorer un chatbot inspiré de ChatGPT en raffinant sa structure de code initiale, en étendant ses fonctionnalités en utilisant les principes MVC et GRASP.",
            { src: "https://via.placeholder.com/400", alt: "Image du Chatbot" },
            "En mettant en place des tests automatisés avec JUnit et Maven, et en promouvant le développement piloté par les tests avec GitLab-CI.",
            "Il offre une expérience complète du cycle de vie du développement logiciel, avec un accent sur les compétences professionnelles en ingénierie logicielle."
          ]
        },
        {
          title: "Contribution à la librairie python de recherche CDlib",
          imageSrc: "cdlib.png",
          text: [
            "Ce projet vise à enrichir la librairie Python CDlib, spécialisée dans l'analyse des communautés dans les réseaux complexes.",
            { src: "https://via.placeholder.com/400", alt: "Image CDlib" },
            "Les contributions incluent le développement de nouvelles visualisations de communautés, l'extension de fonctionnalités existantes et l'amélioration de la documentation.",
            "L'objectif est de consolider CDlib en tant qu'outil pour l'analyse et la visualisation de réseaux dans l'écosystème Python."
          ]
        },
        {
          title: "Projet en binome - Simulation d’un écosystème",
          imageSrc: "https://via.placeholder.com/300",
          text: [
            "Simulation NetLogo des interactions entre les abeilles, les fleurs, les prédateurs et les ruches dans un environnement dynamique.",
            { src: "https://via.placeholder.com/400", alt: "Image de l'écosystème" },
            "Chaque agent est caractérisé par des attributs spécifiques qui influent sur son comportement et sa contribution à l'écosystème simulé.",
            "L'analyse des comportements individuels des agents permet de mieux comprendre les mécanismes de collecte de pollen, la survie des abeilles et la gestion des ressources au sein des colonies."
          ]
        },
        {
          title: "Titre 5",
          imageSrc: "https://via.placeholder.com/300",
          text: [
            "Ceci est le contenu du cinquième article.",
            { src: "https://via.placeholder.com/400", alt: "Image du cinquième projet" }
          ]
        }
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
/* Styles spécifiques pour la page Projets Personnels */
.card {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
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
</style>
