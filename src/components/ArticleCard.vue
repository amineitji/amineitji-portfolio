<template>
  <div class="article-card-container">
    
    <div class="article-card" @click="openModal" tabindex="0" @keyup.enter="openModal" role="button">
      <div class="card-image-container">
        <img :src="imageSrc" class="card-image" :alt="title" loading="lazy" />
        <div class="image-overlay"></div>
        <div class="card-badge" v-if="tag">
          <span class="badge-text">{{ tag }}</span>
        </div>
      </div>
      
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <div class="card-action">
          <span class="read-more">{{ readLabel || (lang === 'en' ? 'Read more' : 'Lire la suite') }}</span>
          <svg class="arrow-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div 
        v-if="isModalOpen" 
        class="modal-backdrop" 
        @click.self="closeModal"
      >
        <div 
          class="article-modal"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`modal-title-${_uid}`"
        >
          <div class="modal-wrapper">
            <div class="modal-container">
              
              <button type="button" class="close-button" @click="closeModal" aria-label="Fermer l'article">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              <div class="modal-header-image">
                <img :src="imageSrc" :alt="title" loading="lazy" />
                <div class="modal-badge" v-if="tag">{{ tag }}</div>
              </div>

              <div class="modal-body">
                <h2 :id="`modal-title-${_uid}`" class="modal-title">{{ title }}</h2>
                
                <div class="modal-text-content">
                  <div v-if="contentHtml" v-html="contentHtml" class="html-content"></div>
                  <p v-else class="text-content">{{ content }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Transition>
    
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  inject: ['getLang'],
  
  props: {
    title: { type: String, required: true },
    imageSrc: { type: String, required: true },
    tag: { type: String, default: '' },
    readLabel: { type: String, default: '' },
    content: { type: String, default: '' },
    contentHtml: { type: String, default: '' }
  },

  data() {
    return {
      isModalOpen: false
    };
  },

  computed: {
    lang() {
      return this.getLang ? this.getLang() : 'fr';
    }
  },

  watch: {
    // Empêcher le scroll du body quand la modale est ouverte
    isModalOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  },

  beforeUnmount() {
    // Sécurité : réactiver le scroll si le composant est détruit pendant que la modale est ouverte
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* ── Container principal ── */
.article-card-container {
  width: 100%;
}

/* ── Carte ── */
.article-card {
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.3s, transform 0.3s var(--ease);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.article-card:hover, .article-card:focus-visible {
  border-color: var(--gray-300);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

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
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 50%);
}

.card-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  padding: 4px 10px;
  border-radius: 100px;
  box-shadow: var(--shadow-sm);
}

.badge-text {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 16px;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.card-action {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--blue);
  transition: color 0.2s;
}

.read-more {
  font-size: 0.85rem;
  font-weight: 600;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.article-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* ── Modale ── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.article-modal {
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-wrapper {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  position: relative;
}

.modal-container {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--gray-300) transparent;
}

.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border: none;
  color: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.close-button:hover {
  background: var(--white);
  color: var(--gray-900);
  transform: scale(1.05);
}

.close-button svg {
  width: 20px;
  height: 20px;
}

.modal-header-image {
  position: relative;
  width: 100%;
  height: 280px;
}

.modal-header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-badge {
  position: absolute;
  bottom: -14px;
  left: 32px;
  background: var(--blue);
  color: var(--white);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: var(--shadow-md);
  border: 2px solid var(--white);
}

.modal-body {
  padding: 40px 32px 32px;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--gray-900);
  margin-bottom: 24px;
  line-height: 1.3;
  letter-spacing: -0.03em;
}

.text-content, .html-content {
  color: var(--gray-600);
  line-height: 1.8;
  font-size: 1rem;
}

/* Styles profonds pour le contenu HTML injecté */
:deep(.html-content p) {
  margin-bottom: 16px;
}
:deep(.html-content h3) {
  color: var(--gray-900);
  margin: 24px 0 12px;
  font-size: 1.3rem;
}
:deep(.html-content ul) {
  margin-bottom: 16px;
  padding-left: 20px;
}
:deep(.html-content li) {
  margin-bottom: 8px;
}

/* ── Transitions ── */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-active .modal-wrapper {
  animation: slideUp 0.4s var(--ease) forwards;
}
.fade-leave-active .modal-wrapper {
  animation: slideDown 0.3s ease forwards;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes slideDown {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(20px) scale(0.98); }
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .modal-backdrop {
    padding: 12px;
  }
  .modal-header-image {
    height: 200px;
  }
  .modal-badge {
    left: 20px;
  }
  .modal-body {
    padding: 32px 20px 24px;
  }
  .modal-title {
    font-size: 1.5rem;
  }
}
</style>