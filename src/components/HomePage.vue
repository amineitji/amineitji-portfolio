<template>
  <div class="container mt-4">
    <div class="col-md-12">
      <div class="card mb-4 bg-dark text-white">
        <div class="card-header bg-dark text-center">
          BIENVENUE SUR MON SITE
        </div>
        <div class="card-body text-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQE3PrNtqhlw7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721847794814?e=2147483647&v=beta&t=-EYtas69BGrXW4KCc708xDpqTbBRHuMtL3f6Oknw4CI" 
            alt="Profile Picture" 
            class="profile-img rounded-circle mb-3">
          <p class="card-text">👋 Bonjour, je m'appelle Amine ITJI</p>
          <p class="card-text">
            Je suis un étudiant en Master 1 Informatique avec une passion marquée pour l'Intelligence Artificielle 🤖 et le développement web 🌐.
            Toujours à l'affût des dernières avancées technologiques, je m'efforce de repousser les limites de mes compétences à travers divers projets personnels et académiques 🚀.
          </p>
          <p class="card-text">
            En tant que développeur polyvalent, j'ai des aptitudes en machine learning, analyse d'images 🖼️, et data science 📊, tout en étant à l'aise avec des outils de développement web comme Django et Vue.js 💻.
          </p>
          <p class="card-text">
            Ma capacité à m'adapter rapidement et mon enthousiasme pour les défis font de moi un acteur clé dans tout projet, que ce soit dans le domaine de l'IA, du développement logiciel, ou de l'innovation technologique 🌟.
          </p>
          <div class="d-flex flex-wrap justify-content-around my-3">
            <a href="https://github.com/amineitji" target="_blank" class="btn btn-outline-light mb-2">
              <i class="bi bi-github"></i> GitHub
            </a>
            <a href="https://fr.linkedin.com/in/amine-itji-5a8696268" target="_blank" class="btn btn-outline-primary mb-2">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:amineitji@gmail.com" class="btn btn-outline-danger mb-2">
              <i class="bi bi-envelope-fill"></i> amineitji@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      gifs: []
    };
  }
};
</script>

<style scoped>
.card {
  background-color: #1a1a2e;
  color: #e0e0e0;
  border: 1px solid #3d3d3d;
}

.card-header {
  color: #42b883;
  background-color: #1a1a2e;
  border-bottom: 1px solid #3d3d3d;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
}

.card-text {
  margin-bottom: 1rem;
}

.btn-outline-light {
  border-color: #e0e0e0;
  color: #e0e0e0;
}

.btn-outline-light:hover {
  background-color: #e0e0e0;
  color: #1a1a2e;
}

.d-flex.flex-wrap {
  gap: 10px;
}

.profile-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid #42b883;
}
</style>
