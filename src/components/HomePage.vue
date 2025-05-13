<template>
  <div class="home-container">
    <!-- Effet de particules et d'illumination -->
    <div class="particles-container">
      <div class="particles"></div>
      <div class="gradient-overlay"></div>
    </div>
    
    <!-- Section principale avec animation d'entrée -->
    <div class="hero-section animated-entry">
      <!-- Effets de lumière -->
      <div class="blur-effect purple" style="top: 15%; left: 10%;"></div>
      <div class="blur-effect green" style="bottom: 25%; right: 15%;"></div>
      <div class="blur-effect cyan" style="top: 60%; left: 60%;"></div>
      
      <div class="profile-card neon-border">
        <div class="card-header-line"></div>
        
        <!-- Photo de profil avec animation -->
        <div class="profile-img-container">
          <div class="profile-img-border"></div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQE3PrNtqhlw7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721847794814?e=2147483647&v=beta&t=-EYtas69BGrXW4KCc708xDpqTbBRHuMtL3f6Oknw4CI"
            alt="Amine ITJI"
            class="profile-img"
          />
        </div>
        
        <h1 class="greeting">
          <span class="wave-emoji">👋</span> Bonjour, je m'appelle <span class="highlight-name">Amine ITJI</span>
        </h1>
        
        <h2 class="title-text">Développeur IA & Web</h2>
        
        <div class="tech-pills">
          <div class="tech-pill">Python</div>
          <div class="tech-pill">Vue.js</div>
          <div class="tech-pill">Machine Learning</div>
          <div class="tech-pill">Django</div>
          <div class="tech-pill">Data Science</div>
        </div>
        
        <div class="about-text">
          <p class="paragraph">
            Je suis un étudiant en <span class="text-highlight">Master 1 Informatique</span> avec une passion marquée pour l'Intelligence Artificielle <span class="emoji">🤖</span> et le développement web <span class="emoji">🌐</span>. Toujours à l'affût des dernières avancées technologiques, je m'efforce de repousser les limites de mes compétences à travers divers projets personnels et académiques <span class="emoji">🚀</span>.
          </p>
          
          <p class="paragraph">
            En tant que développeur polyvalent, j'ai des aptitudes en machine learning, analyse d'images <span class="emoji">🖼️</span>, et data science <span class="emoji">📊</span>, tout en étant à l'aise avec des outils de développement web comme Django et Vue.js <span class="emoji">💻</span>.
          </p>
          
          <p class="paragraph">
            Ma capacité à m'adapter rapidement et mon enthousiasme pour les défis font de moi un acteur clé dans tout projet, que ce soit dans le domaine de l'IA, du développement logiciel, ou de l'innovation technologique <span class="emoji">🌟</span>.
          </p>
        </div>
        
        <!-- Boutons de contact avec animations -->
        <div class="contact-buttons">
          <a href="https://github.com/amineitji" target="_blank" class="contact-btn github-btn">
            <span class="btn-icon"><i class="bi bi-github"></i></span>
            <span class="btn-text">GitHub</span>
            <span class="btn-effect"></span>
          </a>
          
          <a href="https://fr.linkedin.com/in/amine-itji-5a8696268" target="_blank" class="contact-btn linkedin-btn">
            <span class="btn-icon"><i class="bi bi-linkedin"></i></span>
            <span class="btn-text">LinkedIn</span>
            <span class="btn-effect"></span>
          </a>
          
          <a href="mailto:amineitji@gmail.com" class="contact-btn email-btn">
            <span class="btn-icon"><i class="bi bi-envelope-fill"></i></span>
            <span class="btn-text">amineitji@gmail.com</span>
            <span class="btn-effect"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
/* Variables */
:root {
  --neon-green: #42b883;
  --neon-blue: #00d8ff;
  --neon-purple: #bd34fe;
  --dark-bg: #0a0b13;
  --card-bg: #12141f;
  --text-primary: #f0f0f0;
  --text-secondary: #b4b4b8;
  --border-color: #2a2d36;
  --linkedin-color: #0077b5;
  --github-color: #f5f5f5;
  --email-color: #ea4335;
}

/* Base Styles */
.home-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
}

/* Particles Background */
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
  background-image: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="none"/><circle cx="10%" cy="20%" r="1.5" fill="%2342b883" opacity="0.7"/><circle cx="15%" cy="25%" r="0.8" fill="%2342b883" opacity="0.8"/><circle cx="20%" cy="15%" r="1.2" fill="%2300d8ff" opacity="0.7"/><circle cx="25%" cy="10%" r="0.5" fill="%2342b883" opacity="0.8"/><circle cx="30%" cy="30%" r="1" fill="%2300d8ff" opacity="0.7"/><circle cx="35%" cy="25%" r="0.8" fill="%2342b883" opacity="0.8"/><circle cx="40%" cy="20%" r="1.5" fill="%2300d8ff" opacity="0.7"/><circle cx="45%" cy="15%" r="0.6" fill="%2342b883" opacity="0.8"/><circle cx="50%" cy="40%" r="1.2" fill="%2300d8ff" opacity="0.7"/><circle cx="55%" cy="35%" r="0.6" fill="%2342b883" opacity="0.8"/><circle cx="60%" cy="30%" r="1" fill="%2300d8ff" opacity="0.7"/><circle cx="65%" cy="25%" r="0.8" fill="%2342b883" opacity="0.8"/><circle cx="70%" cy="20%" r="1.2" fill="%2300d8ff" opacity="0.7"/><circle cx="75%" cy="15%" r="0.5" fill="%2342b883" opacity="0.8"/><circle cx="80%" cy="10%" r="1.5" fill="%2300d8ff" opacity="0.7"/><circle cx="85%" cy="40%" r="0.7" fill="%2342b883" opacity="0.8"/><circle cx="90%" cy="35%" r="1" fill="%2300d8ff" opacity="0.7"/><circle cx="95%" cy="30%" r="0.6" fill="%2342b883" opacity="0.8"/></svg>');
  animation: moveParticles 150s linear infinite;
}

@keyframes moveParticles {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(10, 11, 19, 0.5) 0%, rgba(10, 11, 19, 0.95) 100%);
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

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Profile Card */
.profile-card {
  width: 100%;
  background: rgba(18, 20, 31, 0.8);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  text-align: center;
}

.neon-border {
  position: relative;
}

.neon-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--neon-green), var(--neon-blue), var(--neon-purple), var(--neon-green));
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
  background: linear-gradient(90deg, var(--neon-green), var(--neon-blue));
  opacity: 0.8;
}

/* Profile Image */
.profile-img-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 4px solid transparent;
  background: linear-gradient(var(--card-bg), var(--card-bg)) padding-box,
              linear-gradient(to right, var(--neon-green), var(--neon-blue)) border-box;
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(66, 184, 131, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(66, 184, 131, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 184, 131, 0); }
}

.profile-img-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--neon-green), var(--neon-blue));
  z-index: 0;
  opacity: 0.5;
  filter: blur(15px);
  animation: rotateBorder 10s linear infinite;
}

@keyframes rotateBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Typography */
.greeting {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.wave-emoji {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.highlight-name {
  background: linear-gradient(90deg, var(--neon-green), var(--neon-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  animation: colorShift 5s ease infinite;
}

@keyframes colorShift {
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
  100% { filter: hue-rotate(0deg); }
}

.title-text {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;
}

/* Tech Pills */
.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 30px;
}

.tech-pill {
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(66, 184, 131, 0.1);
  color: var(--neon-green);
  border: 1px solid rgba(66, 184, 131, 0.3);
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.1);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.tech-pill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 184, 131, 0.3), transparent);
  transition: all 0.7s;
}

.tech-pill:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(66, 184, 131, 0.3);
  background: rgba(66, 184, 131, 0.2);
}

.tech-pill:hover::before {
  left: 100%;
}

/* About Text */
.about-text {
  margin-bottom: 35px;
  text-align: left;
}

.paragraph {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.05rem;
  transition: all 0.3s;
}

.paragraph:hover {
  color: var(--text-primary);
}

.text-highlight {
  color: var(--neon-green);
  font-weight: 600;
}

.emoji {
  display: inline-block;
  transition: all 0.3s;
}

.paragraph:hover .emoji {
  transform: scale(1.3) rotate(10deg);
}

/* Contact Buttons */
.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
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
  transition: all 0.3s ease;
  border: 1px solid;
  background: rgba(18, 20, 31, 0.7);
  z-index: 1;
}

.btn-icon {
  margin-right: 10px;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.contact-btn:hover .btn-icon {
  transform: scale(1.2);
}

.github-btn {
  color: var(--github-color);
  border-color: rgba(245, 245, 245, 0.3);
}

.github-btn:hover {
  background: rgba(245, 245, 245, 0.1);
  border-color: rgba(245, 245, 245, 0.5);
  box-shadow: 0 5px 15px rgba(245, 245, 245, 0.1);
  transform: translateY(-5px);
}

.linkedin-btn {
  color: var(--linkedin-color);
  border-color: rgba(0, 119, 181, 0.3);
}

.linkedin-btn:hover {
  background: rgba(0, 119, 181, 0.1);
  border-color: rgba(0, 119, 181, 0.5);
  box-shadow: 0 5px 15px rgba(0, 119, 181, 0.1);
  transform: translateY(-5px);
}

.email-btn {
  color: var(--email-color);
  border-color: rgba(234, 67, 53, 0.3);
}

.email-btn:hover {
  background: rgba(234, 67, 53, 0.1);
  border-color: rgba(234, 67, 53, 0.5);
  box-shadow: 0 5px 15px rgba(234, 67, 53, 0.1);
  transform: translateY(-5px);
}

.btn-effect {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: width 0.6s, height 0.6s, opacity 0.6s;
}

.contact-btn:active .btn-effect {
  width: 500px;
  height: 500px;
  opacity: 1;
  transition: width 0.6s, height 0.6s, opacity 0.4s;
}

/* Blur effects */
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
  background: var(--neon-green);
  animation: floatAnimation 8s ease-in-out infinite;
}

.blur-effect.purple {
  background: var(--neon-purple);
  animation: floatAnimation 10s ease-in-out infinite reverse;
}

.blur-effect.cyan {
  background: var(--neon-blue);
  animation: floatAnimation 12s ease-in-out infinite;
}

@keyframes floatAnimation {
  0% { transform: translate(0, 0); }
  50% { transform: translate(30px, 20px); }
  100% { transform: translate(0, 0); }
}

/* Responsive */
@media (max-width: 768px) {
  .profile-card {
    padding: 30px 20px;
  }
  
  .greeting {
    font-size: 1.5rem;
  }
  
  .title-text {
    font-size: 1.1rem;
  }
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-btn {
    width: 100%;
    justify-content: center;
  }
  
  .profile-img-container {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
}
</style>