<template>
  <div class="container mt-4">
    <div class="col-md-12">
      <div class="card mb-4 bg-dark text-white">
        <div class="card-header bg-dark text-center">
          BIENVENUE SUR MON SITE
        </div>
        <div class="card-body text-center">
          <p class="card-text">👋 Bonjour, je m'appelle Amine ITJI</p>
          <p class="card-text">
            Je suis un étudiant en Master 1 Informatique passionné par les nouvelles technologies et toujours à la recherche de nouvelles expériences pour mettre mes compétences en pratique. Avec une solide maîtrise des langages C++, Java, Python, et JavaScript, je suis constamment à l'affût des opportunités qui me permettront d'approfondir mes connaissances et de relever de nouveaux défis 🚀.
          </p>
          <p class="card-text">
            En dehors de mes études, j'ai beaucoup de temps libre que je consacre entièrement à mes projets personnels. Que ce soit en développant des applications, en explorant de nouvelles technologies ou en collaborant sur des projets open source, je suis toujours en train de perfectionner mes compétences 💻. Je suis à l'aise avec des outils comme Maven, Django, et Vue.js, et je suis particulièrement habile avec un terminal Linux 🐧.
          </p>
          <p class="card-text">
            Ma méthodologie de travail est guidée par les principes Agile et je suis familier avec les environnements de collaboration comme GitHub. Mon sens de l'adaptation, mon écoute active et ma passion pour le développement informatique sont autant d'atouts qui me permettent de m'épanouir dans ce domaine en constante évolution 🌱.
          </p>
          <div class="d-flex flex-wrap justify-content-around my-3">
            <a href="https://github.com/yourusername" target="_blank" class="btn btn-outline-light mb-2">
              <i class="bi bi-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="btn btn-outline-primary mb-2">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:your-email@gmail.com" class="btn btn-outline-danger mb-2">
              <i class="bi bi-envelope-fill"></i> Gmail
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" class="btn btn-outline-success mb-2">
              <i class="bi bi-whatsapp"></i> WhatsApp
            </a>
          </div>
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnhiYmFrNTN4bzk4bXdwaXhxdjVpMHY1bWtiMWJ1dmRieXA0b2IzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif" alt="Funny IT Gif" class="img-fluid rounded mt-3 mx-auto d-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
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

.img-fluid {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
