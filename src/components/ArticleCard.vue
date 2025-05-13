<template>
  <div class="article-card-container">
    <!-- Carte d'article avec hover animations -->
    <div class="article-card" @click="openModal">
      <!-- Effet de bordure néon -->
      <div class="card-neon-border"></div>
      
      <!-- Image avec overlay gradient -->
      <div class="card-image-container">
        <img :src="imageSrc" class="card-image" alt="card image" />
        <div class="image-overlay">
          <div class="overlay-content">
            <h3 class="card-title">{{ title }}</h3>
            <div class="expand-button">
              <span class="expand-icon">
                <span class="arrow-line"></span>
                <span class="arrow-line"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Badge avec animation flottante -->
      <div class="card-badge">
        <span class="badge-text">{{ tag }}</span>
      </div>
    </div>

    <!-- Modal avec design modernisé -->
    <div class="modal-backdrop" v-if="isModalOpen" @click.self="closeModal"></div>
    <div class="article-modal" v-if="isModalOpen" ref="articleModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- Modal Header -->
          <div class="modal-header">
            <h2 class="modal-title">{{ title }}</h2>
            <button type="button" class="close-button" @click="closeModal">
              <span class="close-icon"></span>
            </button>
          </div>
          
          <!-- Modal Body -->
          <div class="modal-body">
            <div v-for="(item, index) in content" :key="index" class="content-item">
              <p v-if="typeof item === 'string'" class="text-content">{{ item }}</p>
              <div v-else-if="typeof item === 'object'" class="image-container">
                <img :src="item.src" :alt="item.alt" class="modal-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = '';
    }
  },
  beforeUnmount() {
    // S'assurer que le overflow est réinitialisé si le composant est démonté
    document.body.style.overflow = '';
  }
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
  --transition-speed: 0.3s;
}

/* Container */
.article-card-container {
  position: relative;
}

/* Article Card */
.article-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: var(--card-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  height: 100%;
}

.article-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* Neon Border Effect */
.card-neon-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  pointer-events: none;
  z-index: 1;
}

.article-card:hover .card-neon-border::before {
  opacity: 1;
}

.card-neon-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  border: 2px solid transparent;
  background: linear-gradient(45deg, var(--neon-green), var(--neon-blue), var(--neon-purple)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Image Container */
.card-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .card-image {
  transform: scale(1.1);
}

/* Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(10, 11, 19, 0.9), rgba(10, 11, 19, 0.2));
  opacity: 0.85;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}

.article-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

/* Card Title */
.card-title {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  max-width: 80%;
  transition: transform 0.3s ease;
}

.article-card:hover .card-title {
  transform: translateY(-5px);
}

/* Expand Button */
.expand-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(66, 184, 131, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.article-card:hover .expand-button {
  background: rgba(66, 184, 131, 0.4);
  transform: rotate(90deg);
}

.expand-icon {
  position: relative;
  width: 10px;
  height: 10px;
}

.arrow-line {
  position: absolute;
  background: var(--neon-green);
  height: 2px;
  width: 10px;
  top: 4px;
  border-radius: 1px;
}

.arrow-line:first-child {
  transform: rotate(45deg);
  right: -2px;
}

.arrow-line:last-child {
  transform: rotate(-45deg);
  right: -2px;
  top: 8px;
}

/* Badge */
.card-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  transition: all 0.3s ease;
}

.article-card:hover .card-badge {
  transform: translateY(-3px);
}

.badge-text {
  display: inline-block;
  padding: 5px 12px;
  background: linear-gradient(135deg, var(--neon-green), var(--neon-blue));
  border-radius: 20px;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.3);
  transition: all 0.3s ease;
}

.article-card:hover .badge-text {
  box-shadow: 0 0 15px rgba(66, 184, 131, 0.5);
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 11, 19, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.article-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
}

.modal-wrapper {
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  animation: modalFadeIn 0.3s ease forwards;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-container {
  background: rgba(18, 20, 31, 0.95);
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
}

.modal-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--neon-green), var(--neon-blue));
}

/* Modal Header */
.modal-header {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.modal-title {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
}

.close-button {
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.close-icon {
  position: relative;
  width: 20px;
  height: 20px;
}

.close-icon::before,
.close-icon::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  top: 10px;
  border-radius: 1px;
  transition: background 0.3s ease;
}

.close-icon::before {
  transform: rotate(45deg);
}

.close-icon::after {
  transform: rotate(-45deg);
}

.close-button:hover .close-icon::before,
.close-button:hover .close-icon::after {
  background: var(--neon-green);
}

/* Modal Body */
.modal-body {
  padding: 25px;
  overflow-y: auto;
  max-height: calc(80vh - 75px);
}

.content-item {
  margin-bottom: 20px;
}

.text-content {
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0 0 20px;
  font-size: 1rem;
}

.image-container {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .modal-wrapper {
    max-width: 100%;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
}
</style>